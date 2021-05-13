import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Affix } from "antd";
import NavbarContainer from "./components/navbar/NavbarContainer";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Login from "./components/account/Login";
import Register from "./components/account/Register";
import StudyMain from "./components/study/StudyMain";
import MyInfoMain from "./components/account/myInfo/MyInfoMain";
import WritingMain from "./components/Write/Write";
import BookStoreMain from "./components/bookStore/components/ReactRidi";
import MentoringMain from "./components/mentoring/MentoringMain";
import ChooseIndex from "./components/chooseIndex/ChooseIndex";
import StudyFlip from "./components/flipMode/StudyFlip";
import FinishStudy from "./components/studyResult/FinishStudy";
import BookEditing from "./components/Write/BookEditing/BookEditing";
import BookNaming from "./components/Write/BookEditing/BookNaming";
import DetailBook from "./components/bookStore/DetailBook";
import OrderPage from "./components/bookStore/OrderPage";
import LinkCategory from "./components/bookStore/LinkCategory";
import MyCart from "./components/bookStore/MyCart";
import MyPage from "./components/bookStore/MyPage";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      books_in_cart: [],
    };
  }
  updatedLoginState = (value) => {
    this.setState({
      isLoggedIn: value,
    });
  };

  onAddBookInCart = (book_id) => {
    let new_books_in_cart = [...this.state.books_in_cart, book_id];
    axios.post("/api/bookstore/update-book-cart", { cart: new_books_in_cart }).then((res) => {
      this.setState({
        books_in_cart: new_books_in_cart,
      });
    });
  };

  onAddBookInCartFromServer = (cart) => {
    this.setState({
      books_in_cart: cart,
    });
  };

  onDeleteBookInCart = (book_id) => {
    let new_books_in_cart = this.state.books_in_cart.filter((_book_id) => _book_id != book_id);
    axios.post("/api/bookstore/update-book-cart", { cart: new_books_in_cart }).then((res) => {
      this.setState({
        books_in_cart: new_books_in_cart,
      });
      console.log(res);
    });
  };

  render() {
    return (
      <div className="App">
        <Affix offsetTop={0}>
          <NavbarContainer isLoggedIn={this.state.isLoggedIn} />
        </Affix>
        <div style={main_container}>
          <Switch>
            <Route exact path="/" render={() => <Home updatedLoginState={this.updatedLoginState} isLoggedIn={this.state.isLoggedIn} />} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/study" component={StudyMain} />
            <Route exact path="/myinfo" component={MyInfoMain} />
            <Route exact path="/write" render={() => <WritingMain updatedLoginState={this.updatedLoginState} />} />
            <Route exact path="/store">
              <BookStoreMain books_in_cart={this.state.books_in_cart} onAddBookInCartFromServer={this.onAddBookInCartFromServer} />
            </Route>
            <Route exact path="/order">
              <OrderPage books_in_cart={this.state.books_in_cart} />
            </Route>
            <Route exact path="/mypage">
              <MyPage books_in_cart={this.state.books_in_cart} />
            </Route>
            <Route exact path="/detail-book">
              <DetailBook onAddBookInCart={this.onAddBookInCart} onDeleteBookInCart={this.onDeleteBookInCart} books_in_cart={this.state.books_in_cart} />
            </Route>
            <Route exact path="/mycart">
              <MyCart books_in_cart={this.state.books_in_cart} onDeleteBookInCart={this.onDeleteBookInCart} />
            </Route>
            <Route exact path="/link-category" component={LinkCategory} />
            <Route exact path="/mentoring" component={MentoringMain} />
            <Route exact path="/start-study" component={StudyFlip} />
            <Route exact path="/study-result" component={FinishStudy} />
            <Route exact path="/session-setting" render={() => <ChooseIndex updatedLoginState={this.updatedLoginState} />} />
            <Route exact path="/editing" render={() => <BookEditing updatedLoginState={this.updatedLoginState} />} />
            <Route exact path="/naming" component={BookNaming} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

const main_container = {
  fontSize: "12px",
  fontWeight: "400",
  fontFamily: `"Noto Sans KR", sans-serif`,
};

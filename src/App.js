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
      book_id_in_cart: null,
      selected_nav_menu: "home",
      checked_book_id_list: [],
      checked_books_list: [],
    };
  }

  onChangeSelectedNavMenu = (menu) => {
    this.setState({
      selected_nav_menu: menu,
    });
  };

  updatedLoginState = (value) => {
    this.setState({
      isLoggedIn: value,
    });
  };

  onAddBookInCart = (book_id) => {
    let new_book_id_in_cart = [...this.state.book_id_in_cart, book_id];
    axios.post("/api/bookstore/update-book-cart", { cart: new_book_id_in_cart }).then((res) => {
      this.setState({
        book_id_in_cart: new_book_id_in_cart,
      });
    });
    localStorage.setItem("cart", JSON.stringify(new_book_id_in_cart));
  };

  onUpdateBookIdListInCartInState = (book_id_list) => {
    this.setState({
      book_id_in_cart: book_id_list,
    });
  };

  onUpdateBooKIdListInCartInServer = (book_id_list) => {
    axios.post("/api/bookstore/update-book-cart", { cart: book_id_list }).then((res) => {
      this.onUpdateBookIdListInCartInState(book_id_list);
    });
  };

  onDeleteBookInCart = (book_id) => {
    let new_book_id_in_cart = this.state.book_id_in_cart.filter((_book_id) => _book_id != book_id);
    axios.post("/api/bookstore/update-book-cart", { cart: new_book_id_in_cart }).then((res) => {
      this.setState({
        book_id_in_cart: new_book_id_in_cart,
      });
      console.log(res);
      localStorage.setItem("cart", JSON.stringify(new_book_id_in_cart));
    });
  };

  onCheckedListForPurchase = (book_id_list, books_list) => {
    localStorage.setItem("book_id_list", JSON.stringify(book_id_list));
    localStorage.setItem("books_list", JSON.stringify(books_list));
  };

  render() {
    console.log(this.state.book_id_in_cart);

    return (
      <div className="App">
        <Affix offsetTop={0}>
          <NavbarContainer isLoggedIn={this.state.isLoggedIn} />
        </Affix>
        <div style={main_container}>
          <Switch>
            <Route exact path="/" render={() => <Home updatedLoginState={this.updatedLoginState} isLoggedIn={this.state.isLoggedIn} />} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login">
              <Login onUpdateBookIdListInCartInState={this.onUpdateBookIdListInCartInState} />
            </Route>
            <Route exact path="/study" component={StudyMain} />
            <Route exact path="/myinfo" component={MyInfoMain} />
            <Route exact path="/write" render={() => <WritingMain updatedLoginState={this.updatedLoginState} />} />
            <Route exact path="/store">
              <BookStoreMain
                book_id_in_cart={this.state.book_id_in_cart}
                onUpdateBookIdListInCartInState={this.onUpdateBookIdListInCartInState}
                onChangeSelectedNavMenu={this.onChangeSelectedNavMenu}
                selected_nav_menu={this.state.selected_nav_menu}
              />
            </Route>
            <Route exact path="/order">
              <OrderPage
                book_id_in_cart={this.state.book_id_in_cart}
                onChangeSelectedNavMenu={this.onChangeSelectedNavMenu}
                selected_nav_menu={this.state.selected_nav_menu}
                onUpdateBooKIdListInCartInServer={this.onUpdateBooKIdListInCartInServer}
              />
            </Route>
            <Route path="/mypage">
              <MyPage book_id_in_cart={this.state.book_id_in_cart} onChangeSelectedNavMenu={this.onChangeSelectedNavMenu} selected_nav_menu={this.state.selected_nav_menu} />
            </Route>
            <Route exact path="/detail-book">
              <DetailBook
                onAddBookInCart={this.onAddBookInCart}
                onUpdateBookIdListInCartInState={this.onUpdateBookIdListInCartInState}
                onDeleteBookInCart={this.onDeleteBookInCart}
                book_id_in_cart={this.state.book_id_in_cart}
                onChangeSelectedNavMenu={this.onChangeSelectedNavMenu}
                selected_nav_menu={this.state.selected_nav_menu}
              />
            </Route>
            <Route exact path="/mycart">
              <MyCart
                book_id_in_cart={this.state.book_id_in_cart}
                onUpdateBookIdListInCartInState={this.onUpdateBookIdListInCartInState}
                onUpdateBooKIdListInCartInServer={this.onUpdateBooKIdListInCartInServer}
                onDeleteBookInCart={this.onDeleteBookInCart}
                onChangeSelectedNavMenu={this.onChangeSelectedNavMenu}
                selected_nav_menu={this.state.selected_nav_menu}
                onCheckedListForPurchase={this.onCheckedListForPurchase}
              />
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

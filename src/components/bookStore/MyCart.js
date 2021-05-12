import { Button, Checkbox } from "antd";
import axios from "axios";
import React, { Component, PureComponent } from "react";
import { GlobalStyle } from "./components/GlobalStyle";
import RidiGnbArea from "./components/RidiGnbArea";

class MyCartBookList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        {this.props.books_in_cart.map((book) => (
          <li key={book._id} style={{ display: "flex", padding: "15px 0 15px 0" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Checkbox
                checked={this.props.checked_books_list.includes(book._id)}
                style={{ margin: "10px" }}
                onChange={(e) => {
                  console.log(e.target.checked);
                  if (e.target.checked) {
                    //부모컴포 이벤트 메서드에 책 아이디 추가
                    this.props.onAddCheckedBooksList(book._id);
                    console.log(book._id, "등록");
                  } else {
                    console.log(book._id, "해제");
                    this.props.onDeleteCheckedBooksList(book._id);
                    //부모컴포 이벤트 메서드에 책 아이디 삭제
                  }
                }}
              />
            </div>
            <div>
              <img
                className="ThumbnailImage"
                src={book.book_info.bookcover.url_small}
                alt=""
                sizes="80px"
                style={{
                  width: "80px",
                  maxHeight: "114px",
                }}
              />
            </div>
            <div style={{ width: "400px", marginLeft: "15px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div style={{ fontSize: "22px", lineHeight: "22px", fontWeight: "bold" }}>{book.book_info.title}</div>
              <div style={{ fontSize: "15px", color: "darkgray" }}>{book.book_info.author}</div>
              <div style={{ marginBottom: "3px" }}>
                <Button
                  onClick={() => {
                    this.props.onDeleteBookFromCart(book._id);
                  }}
                >
                  삭제
                </Button>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-around", width: "200px" }}>
              <div style={{ fontSize: "18px", color: "royalblue", fontWeight: "bold" }}>{book.book_info.promotion.gap == "undefined" ? "-" : book.book_info.promotion.gap}</div>
              <div style={{ fontSize: "18px", color: "royalblue", fontWeight: "bold" }}>{Number(book.book_info.price).toLocaleString()} 원</div>
            </div>
          </li>
        ))}
      </React.Fragment>
    );
  }
}
class MyCart extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      books_in_cart: [],
      checked_books_list: [],
      checked_books_list2: [],
      original_books_list: [],
    };
  }

  onDeleteBookFromCart = (_id) => {
    // 서버에 카트에서 삭제 요청 메세지 보내야함
    // 그리고 서버에서 받아온다.

    let newCartList = [...this.state.books_in_cart];
    newCartList = newCartList.filter((book) => book._id != _id);
    this.setState({
      books_in_cart: newCartList,
    });
  };

  onAddCheckedBooksList = (id) => {
    let new_checked_books_list = [...this.state.checked_books_list, id];

    this.setState({
      checked_books_list: new_checked_books_list,
      checked_books_list2: [...this.state.checked_books_list2, this.state.books_in_cart.find((book) => book._id == id)],
    });
  };

  onDeleteCheckedBooksList = (id) => {
    let new_checked_books_list = [...this.state.checked_books_list];
    new_checked_books_list = new_checked_books_list.filter((_id) => _id != id);

    this.setState({
      checked_books_list: new_checked_books_list,
      checked_books_list2: this.state.checked_books_list2.filter((book) => book._id != id),
    });
  };

  onToggleAllCheckbox = () => {
    if (this.state.original_books_list.length !== this.state.checked_books_list.length) {
      let checked_books_list = [];
      this.state.books_in_cart.map((book) => checked_books_list.push(book._id));
      this.setState({
        checked_books_list: checked_books_list,
        checked_books_list2: this.state.books_in_cart,
      });
    } else {
      this.setState({
        checked_books_list: [],
        checked_books_list2: [],
      });
    }
  };

  componentDidMount() {
    axios.get("/api/bookstore/get-sellbooklist").then((res) => {
      let checked_books_list = [];
      res.data.sellbooklist.map((book) => checked_books_list.push(book._id));

      this.setState({ books_in_cart: res.data.sellbooklist, checked_books_list: checked_books_list, original_books_list: checked_books_list, checked_books_list2: res.data.sellbooklist });
    });
  }

  render() {
    if (this.state.books_in_cart == []) {
      return <div>"로딩중"</div>;
    } else {
      let total = 0;
      for (let index in this.state.checked_books_list2) {
        total += Number(this.state.checked_books_list2[index].book_info.price);
      }
      return (
        <React.Fragment>
          <GlobalStyle />
          <RidiGnbArea books_in_cart={this.props.books_in_cart} />
          <div
            style={{
              position: "relative",
              maxWidth: "1000px",
              margin: "0 auto",
            }}
          >
            <div style={{ width: "952px", maxWidth: "1000px", marginTop: "25px", fontSize: "24px", fontWeight: "bold" }}>
              카트
              <div style={{ display: "flex" }}>
                <div style={{ width: "680px", padding: "15px", border: "1px solid #d1d5d9" }}>
                  <div style={{ fontSize: "20px", fontWeight: "bold", paddingBottom: "8px", borderBottom: "1px solid #d1d5d9" }}>
                    <Checkbox checked={this.state.original_books_list.length == this.state.checked_books_list.length} onChange={this.onToggleAllCheckbox} style={{ margin: "10px" }} />
                    {this.state.original_books_list.length == this.state.checked_books_list.length ? "전체 해제" : "전체 선택"}
                    {this.state.checked_books_list.length > 0 ? (
                      <Button
                        onClick={() => {
                          let new_books_in_cart = [...this.state.books_in_cart];
                          for (let i in this.state.checked_books_list) {
                            new_books_in_cart = new_books_in_cart.filter((book) => book._id !== this.state.checked_books_list[i]);
                          }

                          this.setState({
                            books_in_cart: new_books_in_cart,
                            checked_books_list2: new_books_in_cart,
                          });
                        }}
                        style={{ marginLeft: "30px" }}
                      >
                        선택된 책 카트에서 삭제
                      </Button>
                    ) : null}
                  </div>
                  <ul>
                    <MyCartBookList
                      onAddCheckedBooksList={this.onAddCheckedBooksList}
                      onDeleteCheckedBooksList={this.onDeleteCheckedBooksList}
                      books_in_cart={this.state.books_in_cart}
                      onDeleteBookFromCart={this.onDeleteBookFromCart}
                      checked_books_list={this.state.checked_books_list}
                    />
                  </ul>
                </div>
                <div style={{ width: "272px", height: "600px", marginLeft: "20px", border: "1px solid #d1d5d9" }}>
                  <div>금액 :{total}</div>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default MyCart;

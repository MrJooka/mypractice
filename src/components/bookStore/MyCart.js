import { Button, Checkbox } from "antd";
import { CheckCircleTwoTone } from "@ant-design/icons";
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
                checked={this.props.checked_book_id_list.includes(book._id)}
                style={{ margin: "10px" }}
                onChange={(e) => {
                  console.log(e.target.checked);
                  if (e.target.checked) {
                    //부모컴포 이벤트 메서드에 책 아이디 추가
                    this.props.onAddBookFromCheckedList(book._id);
                    console.log(book._id, "등록");
                  } else {
                    console.log(book._id, "해제");
                    this.props.onDeleteBookFromCheckedList(book._id);
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
              <div style={{ fontSize: "18px", color: "royalblue", fontWeight: "bold" }}>{isNaN(book.book_info.promotion.gap) ? "-" : book.book_info.promotion.gap}</div>
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
      checked_book_id_list: [],
      checked_books_list: [],
    };
  }
  onDeleteBookFromCart = (id) => {
    // 서버에 카트에서 삭제 요청 메세지 보내야함
    // 그리고 서버에서 받아온다.

    let new_books_in_cart = [...this.state.books_in_cart];
    new_books_in_cart = new_books_in_cart.filter((book) => book._id != id);

    this.setState({
      books_in_cart: new_books_in_cart,
    });

    this.props.onDeleteBookInCart(id);
    this.onDeleteBookFromCheckedList(id);
  };

  onAddBookFromCheckedList = (id) => {
    let new_checked_book_id_list = [...this.state.checked_book_id_list, id];
    let new_checked_books_list = [...this.state.checked_books_list, this.state.books_in_cart.find((book) => book._id == id)];

    this.setState({
      checked_book_id_list: new_checked_book_id_list,
      checked_books_list: new_checked_books_list,
    });
  };

  onDeleteBookFromCheckedList = (id) => {
    let new_checked_book_id_list = this.state.checked_book_id_list.filter((_id) => _id != id);
    let new_checked_books_list = this.state.checked_books_list.filter((book) => book._id != id);
    this.setState({
      checked_book_id_list: new_checked_book_id_list,
      checked_books_list: new_checked_books_list,
    });
  };

  onToggleAllCheckbox = () => {
    if (this.props.book_id_in_cart.length !== this.state.checked_book_id_list.length) {
      let new_checked_book_id_list = [];
      this.state.books_in_cart.map((book) => new_checked_book_id_list.push(book._id));
      this.setState({
        checked_book_id_list: new_checked_book_id_list,
        checked_books_list: this.state.books_in_cart,
      });
    } else {
      this.setState({
        checked_book_id_list: [],
        checked_books_list: [],
      });
    }
  };

  onDeleteCheckedBooksFromCart = () => {
    let new_books_in_cart = [...this.state.books_in_cart];
    let new_book_id_in_cart = [...this.props.book_id_in_cart];
    for (let i in this.state.checked_book_id_list) {
      new_books_in_cart = new_books_in_cart.filter((book) => book._id !== this.state.checked_book_id_list[i]);
      new_book_id_in_cart = new_book_id_in_cart.filter((book_id) => book_id !== this.state.checked_book_id_list[i]);
    }

    this.props.onUpdateBooKIdListInCartInServer(new_book_id_in_cart);
    localStorage.setItem("cart", JSON.stringify(new_book_id_in_cart));

    this.setState({
      books_in_cart: new_books_in_cart,
      checked_books_list: [],
      checked_book_id_list: [],
    });
  };

  componentDidMount() {
    axios.post("/api/bookstore/get-book-cart").then((res) => {
      let book_id_in_cart = [];
      res.data.user.cart.map((book) => book_id_in_cart.push(book._id));
      this.setState({ books_in_cart: res.data.user.cart, checked_book_id_list: book_id_in_cart, checked_books_list: res.data.user.cart });
      this.props.onUpdateBookIdListInCartInState(book_id_in_cart);
      localStorage.setItem("cart", JSON.stringify(book_id_in_cart));
    });
  }

  render() {
    let total = 0;
    for (let index in this.state.checked_books_list) {
      total += Number(this.state.checked_books_list[index].book_info.price);
    }
    let total_gap = 0;
    for (let index in this.state.checked_books_list) {
      if (!isNaN(this.state.checked_books_list[index].book_info.promotion.gap)) {
        total_gap += Number(this.state.checked_books_list[index].book_info.promotion.gap);
      }
    }

    let cartItems = JSON.parse(localStorage.getItem("cart"));
    let props_alter = this.props.book_id_in_cart || cartItems || [];

    return (
      <React.Fragment>
        <GlobalStyle />
        <RidiGnbArea book_id_in_cart={props_alter} onChangeSelectedNavMenu={this.props.onChangeSelectedNavMenu} selected_nav_menu={this.props.selected_nav_menu} />
        <div
          style={{
            position: "relative",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          <div style={{ width: "952px", maxWidth: "1000px", marginTop: "25px", fontSize: "24px", fontWeight: "bold" }}>
            <div style={{ display: "flex" }}>
              <div style={{ width: "680px" }}>
                <div style={{ paddingBottom: "20px" }}>카트</div>
                <div style={{ border: "1px solid #d1d5d9", padding: "15px" }}>
                  <div style={{ fontSize: "20px", fontWeight: "bold", paddingBottom: "8px", borderBottom: "1px solid #d1d5d9" }}>
                    <Checkbox
                      indeterminate={props_alter.length > this.state.checked_book_id_list.length && this.state.checked_book_id_list.length !== 0}
                      checked={props_alter.length == this.state.checked_book_id_list.length && props_alter.length != 0}
                      onChange={this.onToggleAllCheckbox}
                      style={{ margin: "10px" }}
                    />
                    {props_alter.length == this.state.checked_book_id_list.length ? "전체 해제" : "전체 선택"}
                    {this.state.checked_book_id_list.length > 0 ? (
                      <Button onClick={this.onDeleteCheckedBooksFromCart} style={{ marginLeft: "30px" }}>
                        선택된 책 카트에서 삭제
                      </Button>
                    ) : null}
                  </div>
                  <ul>
                    <MyCartBookList
                      onAddBookFromCheckedList={this.onAddBookFromCheckedList}
                      onDeleteBookFromCheckedList={this.onDeleteBookFromCheckedList}
                      books_in_cart={this.state.books_in_cart}
                      onDeleteBookFromCart={this.onDeleteBookFromCart}
                      checked_book_id_list={this.state.checked_book_id_list}
                    />
                  </ul>
                </div>
              </div>
              <div style={{ width: "272px", height: "100%", marginLeft: "20px" }}>
                <div style={{ paddingBottom: "20px" }}>금액</div>
                <div>
                  <div style={{ border: "1px solid #87b4e9" }}>
                    <p style={{ padding: "20px 20px 0 20px", color: "#5382b9", fontSize: "12px", fontWeight: "700", display: "flex", alignItems: "center" }}>
                      <CheckCircleTwoTone twoToneColor="#87b4e9" style={{ fontSize: "15px" }} />
                      <span style={{ fontSize: "15px", marginLeft: "5px" }}>{this.state.checked_book_id_list.length}권을 선택하셨습니다.</span>
                    </p>
                    <ul style={{ marginBottom: "20px" }}>
                      <li style={{ padding: "15px 20px 0 20px", display: "flex", justifyContent: "space-between" }}>
                        <span style={{ verticalAlign: "middle", color: "#738096", fontSize: "17px" }}>총 상품 금액</span>
                        <span style={{ verticalAlign: "middle", fontWeight: "700", fontSize: "17px" }}>{Number(total).toLocaleString()} 원</span>
                      </li>
                      <li style={{ padding: "15px 20px 0 20px", display: "flex", justifyContent: "space-between" }}>
                        <span style={{ verticalAlign: "middle", color: "#738096", fontSize: "17px" }}>할인 금액</span>
                        <span style={{ verticalAlign: "middle", fontWeight: "700", fontSize: "17px" }}>{Number(total_gap).toLocaleString()} 원</span>
                      </li>
                    </ul>
                    <p style={{ padding: "20px", background: "#ebf6ff", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <span style={{ verticalAlign: "middle", color: "#738096", fontSize: "17px" }}>합계</span>
                      <span style={{ verticalAlign: "middle", fontWeight: "700", fontSize: "22px", color: "#1f8ce6" }}>{Number(total - total_gap).toLocaleString()} 원</span>
                    </p>
                  </div>
                  <div>
                    <Button
                      onClick={() => {
                        window.location.href = "/order";
                        this.props.onCheckedListForPurchase(this.state.checked_book_id_list, this.state.checked_books_list);
                      }}
                      type="primary"
                      size="large"
                      block
                      style={{ marginTop: "10px" }}
                    >
                      선택 구매하기
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MyCart;

import { Button, Checkbox } from "antd";
import { CheckCircleTwoTone } from "@ant-design/icons";
import axios from "axios";
import React, { PureComponent } from "react";

class MyCartBookList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        {this.props.checked_books_list.map((book) => (
          <li key={book._id} style={{ display: "flex", padding: "15px 0 15px 0" }}>
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
            <div style={{ width: "400px", marginLeft: "15px", display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
              <div style={{ fontSize: "22px", lineHeight: "22px", fontWeight: "bold" }}>{book.book_info.title}</div>
              <div style={{ fontSize: "15px", color: "darkgray" }}>{book.book_info.author}</div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", width: "200px" }}>
              <div style={{ fontSize: "18px", color: "royalblue", fontWeight: "bold" }}>{isNaN(book.book_info.promotion.gap) ? "-" : book.book_info.promotion.gap}</div>
              <div style={{ fontSize: "18px", color: "royalblue", fontWeight: "bold" }}>{Number(book.book_info.price).toLocaleString()} 원</div>
            </div>
          </li>
        ))}
      </React.Fragment>
    );
  }
}
class OrderPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      checked_books_list: [],
    };
  }

  componentDidMount() {
    this.setState({
      checked_books_list: JSON.parse(localStorage.getItem("books_list")),
    });
  }

  onPurchageItems = (
    product,
    total_price
    // cart
  ) => {
    axios
      .post("api/bookstore/create-payment", {
        product,
        total_price,
        // cart
      })
      .then((res) => {
        console.log(res);
      });
  };

  render() {
    console.log(this.state.checked_books_list);
    let total = 0;
    for (let index in this.state.checked_books_list) {
      total += Number(this.state.checked_books_list[index].book_info.price);
      console.log(this.state.checked_books_list[index].book_info.price);
    }
    let total_gap = 0;
    for (let index in this.state.checked_books_list) {
      if (!isNaN(this.state.checked_books_list[index].book_info.promotion.gap)) {
        total_gap += Number(this.state.checked_books_list[index].book_info.promotion.gap);
      }
    }

    let cartItems = JSON.parse(localStorage.getItem("cart"));
    let props_alter = this.props.book_id_in_cart || cartItems || [];

    let product = [];
    let books_list = this.state.checked_books_list || [];

    books_list.map((book) => {
      product.push({
        type: "sellbook",
        product_id: book._id,
        title: book.book_info.title,
        author: book.book_info.author,
        price: book.book_info.price - (isNaN(book.book_info.promotion.gap) ? 0 : book.book_info.promotion.gap),
        count: 1,
      });
    });

    console.log(product, "프로덕트");

    return (
      <React.Fragment>
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
                <div style={{ paddingBottom: "20px" }}>주문하기</div>
                <div style={{ border: "1px solid #d1d5d9", padding: "0 15px" }}>
                  <div style={{ fontSize: "20px", fontWeight: "bold" }}></div>
                  <ul>
                    <MyCartBookList checked_books_list={this.state.checked_books_list} />
                  </ul>
                </div>
              </div>
              <div style={{ width: "272px", height: "100%", marginLeft: "20px" }}>
                <div style={{ paddingBottom: "20px" }}>금액</div>
                <div>
                  <div style={{ border: "1px solid #87b4e9" }}>
                    <p style={{ padding: "20px 20px 0 20px", color: "#5382b9", fontSize: "12px", fontWeight: "700", display: "flex", alignItems: "center" }}>
                      <CheckCircleTwoTone twoToneColor="#87b4e9" style={{ fontSize: "15px" }} />
                      <span style={{ fontSize: "15px", marginLeft: "5px" }}>{this.state.checked_books_list.length}권을 선택하셨습니다.</span>
                    </p>
                    <ul style={{ marginBottom: "20px" }}>
                      <li style={{ padding: "15px 20px 0 20px", display: "flex", justifyContent: "space-between" }}>
                        <span style={{ verticalAlign: "middle", color: "#738096", fontSize: "17px" }}>총 주문금액</span>
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
                        //카트에서 구매할 책들 삭제
                        let new_book_id_in_cart = [...props_alter];
                        let checkedlist = JSON.parse(localStorage.getItem("book_id_list"));
                        for (let i in checkedlist) {
                          new_book_id_in_cart = new_book_id_in_cart.filter((book_id) => book_id !== checkedlist[i]);
                        }
                        // onPurchageItems 서버 코드 수정되면 아래 코드는 삭제해야함
                        this.props.onUpdateBooKIdListInCartInServer(new_book_id_in_cart);

                        //새로고침해도 구매하기 진행했을 때에는 리스트 안뜨게 로컬스토리지에서 데이터 초기화
                        localStorage.setItem("book_id_list", JSON.stringify([]));
                        localStorage.setItem("books_list", JSON.stringify([]));
                        localStorage.setItem("cart", JSON.stringify(new_book_id_in_cart));
                        //구매버튼 누르면 보여지는 책들 리셋
                        this.setState({
                          checked_books_list: [],
                        });

                        //todo
                        this.onPurchageItems(
                          product,
                          total
                          // new_book_id_in_cart
                        );
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

export default OrderPage;

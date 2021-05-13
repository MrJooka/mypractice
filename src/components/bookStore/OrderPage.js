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
      books_in_cart: [],
    };
  }

  componentDidMount() {
    axios.get("/api/bookstore/get-sellbooklist").then((res) => {
      this.setState({ books_in_cart: res.data.sellbooklist });
    });
  }

  render() {
    if (this.state.books_in_cart == []) {
      return <div>"로딩중"</div>;
    } else {
      let total = 0;
      for (let index in this.state.books_in_cart) {
        total += Number(this.state.books_in_cart[index].book_info.price);
        console.log(this.state.books_in_cart[index].book_info.price);
      }
      let total_gap = 0;
      for (let index in this.state.books_in_cart) {
        if (!isNaN(this.state.books_in_cart[index].book_info.promotion.gap)) {
          total_gap += Number(this.state.books_in_cart[index].book_info.promotion.gap);
        }
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
              <div style={{ display: "flex" }}>
                <div style={{ width: "680px" }}>
                  <div style={{ paddingBottom: "20px" }}>주문하기</div>
                  <div style={{ border: "1px solid #d1d5d9", padding: "0 15px" }}>
                    <div style={{ fontSize: "20px", fontWeight: "bold" }}></div>
                    <ul>
                      <MyCartBookList books_in_cart={this.state.books_in_cart} />
                    </ul>
                  </div>
                </div>
                <div style={{ width: "272px", height: "100%", marginLeft: "20px" }}>
                  <div style={{ paddingBottom: "20px" }}>금액</div>
                  <div>
                    <div style={{ border: "1px solid #87b4e9" }}>
                      <p style={{ padding: "20px 20px 0 20px", color: "#5382b9", fontSize: "12px", fontWeight: "700", display: "flex", alignItems: "center" }}>
                        <CheckCircleTwoTone twoToneColor="#87b4e9" style={{ fontSize: "15px" }} />
                        <span style={{ fontSize: "15px", marginLeft: "5px" }}>{this.state.books_in_cart.length}권을 선택하셨습니다.</span>
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
                          window.location.href = "/order";
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
}

export default OrderPage;

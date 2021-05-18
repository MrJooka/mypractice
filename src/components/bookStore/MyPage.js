import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import { GlobalStyle } from "./components/GlobalStyle";
import RidiGnbArea from "./components/RidiGnbArea";
import { HomeFilled, BookFilled } from "@ant-design/icons";
import OrderHistory from "./OrderHistory";
import OrderHistory1 from "./OrderHistory1";
import OrderHistory2 from "./OrderHistory2";

class MyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <RidiGnbArea book_id_in_cart={this.props.book_id_in_cart} onChangeSelectedNavMenu={this.props.onChangeSelectedNavMenu} selected_nav_menu={this.props.selected_nav_menu} />
        <div style={{ display: "flex", margin: "0 auto", position: "relative", clear: "both", marginTop: "33px", width: "953px", padding: "0 24px" }}>
          <div style={{ display: "flex", flexDirection: "column", width: "235px", flexShrink: "0" }}>
            <h3 style={{ fontSize: "24px", fontWeight: "700", color: "#212529" }}>마이콕북</h3>
            <nav style={{ marginTop: "9px", width: "130px" }}>
              <div style={{ padding: "17px 0 19px 0", borderBottom: "2px solid #f2f2f2" }}>
                <Link to="/" style={{ fontSize: "15px", fontWeight: "700" }}>
                  <HomeFilled style={{ paddingRight: "7px", fontSize: "16px" }} />
                  <span>마이콕북</span>
                </Link>
              </div>
              <div style={{ padding: "17px 0 19px 0", borderBottom: "2px solid #f2f2f2" }}>
                <h4>
                  <BookFilled style={{ paddingRight: "7px", fontSize: "16px", color: "#738096" }} />
                  <span style={{ fontSize: "15px", color: "#40474d", fontWeight: "700" }}>책</span>
                </h4>
                <ul style={{ borderTop: "none", padding: "1px 0 0 22px" }}>
                  <li>
                    <Link to="/" style={{ padding: "14px 0 0 0", fontWeight: "700", display: "block", fontSize: "15px", transition: "color .2s", color: "#808991" }}>
                      책 메뉴1
                    </Link>
                    <Link to="/" style={{ padding: "14px 0 0 0", fontWeight: "700", display: "block", fontSize: "15px", transition: "color .2s", color: "#808991" }}>
                      책 메뉴2
                    </Link>
                    <Link to="/" style={{ padding: "14px 0 0 0", fontWeight: "700", display: "block", fontSize: "15px", transition: "color .2s", color: "#808991" }}>
                      책 메뉴3
                    </Link>
                    <Link to="/" style={{ padding: "14px 0 0 0", fontWeight: "700", display: "block", fontSize: "15px", transition: "color .2s", color: "#808991" }}>
                      신간 알림 설정
                    </Link>
                    <Link to="/" style={{ padding: "14px 0 0 0", fontWeight: "700", display: "block", fontSize: "15px", transition: "color .2s", color: "#808991" }}>
                      이벤트 알림 설정
                    </Link>
                  </li>
                </ul>
              </div>
              <div style={{ padding: "17px 0 19px 0", borderBottom: "2px solid #f2f2f2" }}>
                <h4>
                  <BookFilled style={{ paddingRight: "7px", fontSize: "16px", color: "#738096" }} />
                  <span style={{ fontSize: "15px", color: "#40474d", fontWeight: "700" }}>구매/혜택</span>
                </h4>
                <ul style={{ borderTop: "none", padding: "1px 0 0 22px" }}>
                  <li>
                    <Link to="/mypage/orderhistory" style={{ padding: "14px 0 0 0", fontWeight: "700", display: "block", fontSize: "15px", transition: "color .2s", color: "#808991" }}>
                      결제 내역
                    </Link>
                    <Link to="/mypage/orderhistory1" style={{ padding: "14px 0 0 0", fontWeight: "700", display: "block", fontSize: "15px", transition: "color .2s", color: "#808991" }}>
                      하위메뉴2
                    </Link>
                    <Link to="/mypage/orderhistory2" style={{ padding: "14px 0 0 0", fontWeight: "700", display: "block", fontSize: "15px", transition: "color .2s", color: "#808991" }}>
                      하위메뉴3
                    </Link>
                    <Link to="/" style={{ padding: "14px 0 0 0", fontWeight: "700", display: "block", fontSize: "15px", transition: "color .2s", color: "#808991" }}>
                      하위메뉴4
                    </Link>
                  </li>
                </ul>
              </div>
              <div style={{ padding: "17px 0 19px 0", borderBottom: "2px solid #f2f2f2" }}>
                <h4>
                  <BookFilled style={{ paddingRight: "7px", fontSize: "16px", color: "#738096" }} />
                  <span style={{ fontSize: "15px", color: "#40474d", fontWeight: "700" }}>개인</span>
                </h4>
                <ul style={{ borderTop: "none", padding: "1px 0 0 22px" }}>
                  <li>
                    <Link to="/" style={{ padding: "14px 0 0 0", fontWeight: "700", display: "block", fontSize: "15px", transition: "color .2s", color: "#808991" }}>
                      1:1문의
                    </Link>
                    <Link to="/" style={{ padding: "14px 0 0 0", fontWeight: "700", display: "block", fontSize: "15px", transition: "color .2s", color: "#808991" }}>
                      하위메뉴2
                    </Link>
                    <Link to="/" style={{ padding: "14px 0 0 0", fontWeight: "700", display: "block", fontSize: "15px", transition: "color .2s", color: "#808991" }}>
                      하위메뉴3
                    </Link>
                    <Link to="/" style={{ padding: "14px 0 0 0", fontWeight: "700", display: "block", fontSize: "15px", transition: "color .2s", color: "#808991" }}>
                      하위메뉴4
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>

          <section style={{ paddingBottom: "90px", width: "769px" }}>
            <Route path="/mypage/orderhistory">
              <OrderHistory />
            </Route>
            <Route path="/mypage/orderhistory1">
              <OrderHistory1 />
            </Route>
            <Route path="/mypage/orderhistory2">
              <OrderHistory2 />
            </Route>
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default MyPage;

import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import { HomeFilled, BookFilled } from "@ant-design/icons";
import OrderHistory from "./OrderHistory";
import OrderHistory2 from "./OrderHistory2";
import PurchaseOrderDetail from "./PurchaseOrderDetail";

class MyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div style={{ display: "flex", margin: "0 auto", position: "relative", clear: "both", marginTop: "33px", width: "953px", padding: "0 24px" }}>
          <div style={{ display: "flex", flexDirection: "column", width: "235px", flexShrink: "0" }}>
            <h3 style={{ fontSize: "24px", fontWeight: "700", color: "#212529" }}>마이콕북</h3>
            <nav style={{ marginTop: "9px", width: "130px" }}>
              <div style={{ padding: "17px 0 19px 0", borderBottom: "2px solid #f2f2f2" }}>
                <Link to="/mypage" style={{ fontSize: "15px", fontWeight: "700" }}>
                  <HomeFilled style={{ paddingRight: "7px", fontSize: "16px" }} />
                  <span>마이콕북</span>
                </Link>
              </div>
              <div style={{ padding: "17px 0 19px 0", borderBottom: "2px solid #f2f2f2" }}>
                <h4>
                  <BookFilled style={{ paddingRight: "7px", fontSize: "16px", color: "#738096" }} />
                  <span style={{ fontSize: "15px", color: "#40474d", fontWeight: "700" }}>내가 가진 아이템</span>
                </h4>
                <ul style={{ borderTop: "none", padding: "1px 0 0 22px" }}>
                  <li>
                    <Link to="/" style={{ padding: "14px 0 0 0", fontWeight: "700", display: "block", fontSize: "15px", transition: "color .2s", color: "#808991" }}>
                      내 서재
                    </Link>
                    <Link to="/" style={{ padding: "14px 0 0 0", fontWeight: "700", display: "block", fontSize: "15px", transition: "color .2s", color: "#808991" }}>
                      선물 받은 아이템
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
                    <Link to="/mypage/orderhistory" exact style={{ padding: "14px 0 0 0", fontWeight: "700", display: "block", fontSize: "15px", transition: "color .2s", color: "#808991" }}>
                      결제 내역
                    </Link>
                    <Link to="/mypage/purchase_order_detail" style={{ padding: "14px 0 0 0", fontWeight: "700", display: "block", fontSize: "15px", transition: "color .2s", color: "#808991" }}>
                      결제 상세 내역
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
            <Route path="/mypage" exact>
              <OrderHistory2 />
            </Route>
            <Route path="/mypage/orderhistory">
              <OrderHistory />
            </Route>
            <Route path="/mypage/purchase_order_detail">
              <PurchaseOrderDetail />
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

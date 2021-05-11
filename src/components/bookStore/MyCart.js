import { Button } from "antd";
import Checkbox from "antd/lib/checkbox/Checkbox";
import React, { Component } from "react";
import FavoriteCategory from "./components/FavoriteCategory";
import { GlobalStyle } from "./components/GlobalStyle";
import RidiGnbArea from "./components/RidiGnbArea";

class MyCart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
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
          <div style={{ width: "952px", maxWidth: "1000px", marginTop: "25px" }}>
            카트
            <div style={{ display: "flex" }}>
              <div style={{ width: "752px", padding: "15px", border: "1px grid black" }}>
                <div style={{ fontSize: "20px", fontWeight: "bold", paddingBottom: "8px", borderBottom: "1px grid black" }}>
                  <Checkbox style={{ margin: "10px" }} /> 전체선택
                </div>
                <ul>
                  <li style={{ display: "flex", padding: "8px 0 15px 0" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Checkbox style={{ margin: "10px" }} />
                    </div>
                    <div>
                      <img
                        className="ThumbnailImage"
                        src="https://img.ridicdn.net/cover/656000114/large#1"
                        alt=""
                        sizes="80px"
                        style={{
                          width: "80px",
                          maxHeight: "114px",
                        }}
                      />
                    </div>
                    <div style={{ width: "400px", marginLeft: "15px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                      <div style={{ fontSize: "22px", lineHeight: "22px", fontWeight: "bold" }}>제목: 타이탄의 도구들(제목)</div>
                      <div style={{ fontSize: "15px", color: "darkgray" }}>저자: 주까</div>
                      <div style={{ marginBottom: "3px" }}>
                        <Button>위시리스트로 이동</Button>
                        <Button style={{ marginLeft: "8px" }}>삭제</Button>
                      </div>
                    </div>
                    <div style={{ width: "200px" }}>
                      <div>할인</div>
                      <div>13,000원</div>
                    </div>
                  </li>
                  <li style={{ display: "flex", padding: "15px 0" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Checkbox style={{ margin: "10px" }} />
                    </div>
                    <div>
                      <img
                        className="ThumbnailImage"
                        src="https://img.ridicdn.net/cover/656000114/large#1"
                        alt=""
                        sizes="80px"
                        style={{
                          width: "80px",
                          maxHeight: "114px",
                        }}
                      />
                    </div>
                    <div style={{ width: "400px", marginLeft: "15px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                      <div style={{ fontSize: "22px", lineHeight: "22px", fontWeight: "bold" }}>제목: 타이탄의 도구들(제목)</div>
                      <div style={{ fontSize: "15px", color: "darkgray" }}>저자: 주까</div>
                      <div style={{ marginBottom: "3px" }}>
                        <Button>위시리스트로 이동</Button>
                        <Button style={{ marginLeft: "8px" }}>삭제</Button>
                      </div>
                    </div>
                    <div style={{ width: "200px" }}>
                      <div>할인</div>
                      <div>13,000원</div>
                    </div>
                  </li>
                  <li style={{ display: "flex", padding: "15px 0" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Checkbox style={{ margin: "10px" }} />
                    </div>
                    <div>
                      <img
                        className="ThumbnailImage"
                        src="https://img.ridicdn.net/cover/656000114/large#1"
                        alt=""
                        sizes="80px"
                        style={{
                          width: "80px",
                          maxHeight: "114px",
                        }}
                      />
                    </div>
                    <div style={{ width: "400px", marginLeft: "15px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                      <div style={{ fontSize: "22px", lineHeight: "22px", fontWeight: "bold" }}>제목: 타이탄의 도구들(제목)</div>
                      <div style={{ fontSize: "15px", color: "darkgray" }}>저자: 주까</div>
                      <div style={{ marginBottom: "3px" }}>
                        <Button>위시리스트로 이동</Button>
                        <Button style={{ marginLeft: "8px" }}>삭제</Button>
                      </div>
                    </div>
                    <div style={{ width: "200px" }}>
                      <div>할인</div>
                      <div>13,000원</div>
                    </div>
                  </li>
                  <li style={{ display: "flex", padding: "15px 0" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Checkbox style={{ margin: "10px" }} />
                    </div>
                    <div>
                      <img
                        className="ThumbnailImage"
                        src="https://img.ridicdn.net/cover/656000114/large#1"
                        alt=""
                        sizes="80px"
                        style={{
                          width: "80px",
                          maxHeight: "114px",
                        }}
                      />
                    </div>
                    <div style={{ width: "400px", marginLeft: "15px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                      <div style={{ fontSize: "22px", lineHeight: "22px", fontWeight: "bold" }}>제목: 타이탄의 도구들(제목)</div>
                      <div style={{ fontSize: "15px", color: "darkgray" }}>저자: 주까</div>
                      <div style={{ marginBottom: "3px" }}>
                        <Button>위시리스트로 이동</Button>
                        <Button style={{ marginLeft: "8px" }}>삭제</Button>
                      </div>
                    </div>
                    <div style={{ width: "200px" }}>
                      <div>할인</div>
                      <div>13,000원</div>
                    </div>
                  </li>
                </ul>
              </div>
              <div style={{ width: "200px" }}>d</div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MyCart;

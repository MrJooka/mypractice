import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import logo from "./logo.png";

import { HomeOutlined, ReadOutlined, FormOutlined, ShopOutlined, ShoppingCartOutlined, ApiOutlined, BellOutlined } from "@ant-design/icons";

class NavbarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  logout = async () => {
    await axios.get("api/user/logout").then((res) => {
      console.log("logout", res.data);
    });
    window.location.href = "/";
  };
  render() {
    let cartItems = JSON.parse(localStorage.getItem("cart")) == "undefined" ? [] : JSON.parse(localStorage.getItem("cart"));
    let props_alter = this.props.book_id_in_cart || cartItems || [];

    return (
      <header id="nav_bar" className="" style={header_style}>
        <div style={navbar_container}>
          <h1 style={logo_container}>
            <NavLink to="/" exact>
              <img src={logo} width="90px" alt="logo" />
            </NavLink>
          </h1>
          <h2 style={navbar_total}>
            <ul style={navbar_account_menus}>
              <li style={{ ...navbar_account_menues_margin, fontWeight: "bold" }}>
                <NavLink to="/admin" exact>
                  관리자 메뉴 |
                </NavLink>
              </li>
              {this.props.isLoggedIn === true ? (
                <li style={{ ...navbar_account_menues_margin, cursor: "pointer" }} onClick={this.logout}>
                  로그아웃
                </li>
              ) : (
                <>
                  <li style={navbar_account_menues_margin}>
                    <NavLink to="/login" exact>
                      로그인
                    </NavLink>
                  </li>
                  <li style={navbar_account_menues_margin}>
                    <NavLink to="/register" exact>
                      회원가입
                    </NavLink>
                  </li>
                </>
              )}

              <li style={{ ...navbar_account_menues_margin, position: "relative" }}>
                <NavLink to="/basket" exact>
                  <BellOutlined />
                  <span
                    style={{
                      position: "absolute",
                      width: "12px",
                      height: "12px",
                      borderRadius: "6px",
                      background: "red",
                      fontSize: "8px",
                      lineHeight: "12px",
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "white",
                      left: "5px",
                      top: "-5px",
                    }}
                  >
                    13
                  </span>
                  <span style={{ marginLeft: "8px" }}>알림</span>
                </NavLink>
              </li>
              <li style={{ ...navbar_account_menues_margin, position: "relative" }}>
                <NavLink to="/mycart" exact>
                  <ShoppingCartOutlined />
                  {props_alter.length == 0 ? null : (
                    <span
                      style={{
                        position: "absolute",
                        width: "12px",
                        height: "12px",
                        borderRadius: "6px",
                        background: "red",
                        fontSize: "8px",
                        lineHeight: "12px",
                        textAlign: "center",
                        fontWeight: "bold",
                        color: "white",
                        left: "5px",
                        top: "-5px",
                      }}
                    >
                      {props_alter.length}
                    </span>
                  )}
                  <span style={{ marginLeft: "8px" }}>카트</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/mypage" exact>
                  마이콕북
                </NavLink>
              </li>
            </ul>
            <ul style={navbar_main_menus}>
              <li>
                <NavLink to="/" exact>
                  <HomeOutlined /> 메인
                </NavLink>
              </li>
              <li>
                <NavLink to="/study" exact>
                  <ReadOutlined /> 학습
                </NavLink>
              </li>
              <li>
                <NavLink to="/write" exact>
                  <FormOutlined /> 만들기
                </NavLink>
              </li>
              <li>
                <NavLink to="/mentoring" exact>
                  <ApiOutlined /> 멘토링
                </NavLink>
              </li>
              <li>
                <NavLink to="/store" exact>
                  <ShopOutlined /> 서점
                </NavLink>
              </li>
            </ul>
          </h2>
        </div>
      </header>
    );
  }
}

export default NavbarContainer;

const header_style = {
  background: "white",
  borderBottom: "1px solid #efefef",
  fontWeight: "400",
  fontSize: "11px",
  fontFamily: `"Noto Sans KR", sans-serif`,
};
const navbar_container = {
  display: "flex",
  justifyContent: "space-between",
  width: "1440px",
  margin: "auto",
  alignItems: "center",
};
const navbar_total = {
  height: "56px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "flex-end",
};
const navbar_account_menus = {
  display: "flex",
  justifyContent: "start",
};
const navbar_main_menus = {
  display: "flex",
  justifyContent: "space-between",
  fontSize: "12px",
  fontWeight: "400",
  width: "360px",
};
const logo_container = {
  width: "50%",
};
const navbar_account_menues_margin = {
  marginRight: "10px",
};

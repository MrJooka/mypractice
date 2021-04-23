/** @jsxImportSource @emotion/react */
import React, { Component } from "react";
import axios from "axios";
import RidiGnbArea from "./components/RidiGnbArea";
import { GlobalStyle } from "./components/GlobalStyle";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Rate } from "antd";
import { Link } from "react-router-dom";
import FavoriteCategory from "./components/FavoriteCategory";
import StarRating from "./StarRating";

class DetailBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goToPurchageOrder: false,
      title: "",
      category: [],
      hashtag: [],
      author: "",
      publisher: "",
      thumbnail: null,
      intro_book: "",
      intro_author: "",
      indexes: "",
      price: 0,
      promotion_name: "",
      promotion_gap: "",
      promotion_price: 0,
      promotion_period_from: 0,
      promotion_period_to: 0,
      book_id: "",
      book_comment: [],
    };
  }
  componentDidMount() {
    axios.post("api/bookstore/get-book-info", { sellbook_id: sessionStorage.getItem("book_id") }).then((res) => {
      console.log(res.data.book_comment, "디테일북에서 서버에서 받은 코멘트 정보");
      this.setState({
        title: res.data.sellbook.book_info.title,
        category: res.data.sellbook.book_info.category,
        hashtag: res.data.sellbook.book_info.hashtag,
        author: res.data.sellbook.book_info.author,
        publisher: res.data.sellbook.book_info.publisher,
        bookcover_medium: res.data.sellbook.book_info.bookcover.url_large,
        intro_book: res.data.sellbook.book_info.intro_book,
        intro_author: res.data.sellbook.book_info.intro_author,
        indexes: res.data.sellbook.book_info.indexes,
        price: res.data.sellbook.book_info.price,
        book_id: res.data.sellbook._id,
        book_comment: res.data.book_comment,
      });
    });
  }
  render() {
    console.log("DetailBook render() 메서드 실행됨");
    return (
      <React.Fragment>
        <GlobalStyle /> <RidiGnbArea /> <FavoriteCategory />
        <div className="BookDetailPage" style={bookDetailPage}>
          <div className="BookDetailArea" style={bookDetailArea}>
            <div className="BookDetailWrapper" style={bookDetailWrapper}>
              <div className="MainInfoArea" style={{ paddingBottom: "40px" }}>
                <div className="MainInfoWrapper" style={mainInfoWrapper}>
                  <div className="BookcoverWrapper" style={bookcoverWrapper}>
                    <div className="BookcoverBox" style={bookcoverBox}>
                      <div className="BookcoverDiv" style={bookcoverDiv}>
                        <img className="BookcoverImage" width="200" height="320" src={this.state.bookcover_medium} alt="Thumbnail"></img>
                        <button className="PreviewButton" style={previewButton}>
                          미리보기
                        </button>
                      </div>
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", flex: "500", width: "510.06px" }}>
                    <ul>
                      카테고리 :
                      {this.state.category.map((item, i) => (
                        <CategoryItems key={i} className="CategoryItem">
                          {item}
                        </CategoryItems>
                      ))}
                    </ul>
                    <ul>
                      해쉬태그 :
                      {this.state.hashtag.map((item, i) => (
                        <CategoryItems key={i} className="CategoryItem">
                          {item}
                        </CategoryItems>
                      ))}
                    </ul>
                    <div style={{ marginTop: "12px", fontSize: "30px", lineHeight: "1.3em", color: "#333", fontWeight: "700", wordBreak: "keep-all", wordWrap: "break-word" }}>
                      <h3>{this.state.title}</h3>
                    </div>
                    <div className="MainInfoData" style={{ margin: "13px 0 0 0" }}>
                      <Rate disabled defaultValue={4} /> <span>4점</span> <span>(74명)</span>
                    </div>
                    {/* 저자 관련 페이지 작성해야함 */}
                    <div style={mainInfoData}>
                      <div style={{ paddingBottom: "5px" }}>
                        <Link to="" style={{ fontSize: "13px", color: "#666", lineHeight: "1em", fontWeight: "700", cursor: "pointer" }}>
                          {this.state.author}
                        </Link>
                        저
                      </div>
                      <div>
                        <Link to="" style={{ fontSize: "13px", color: "#666", lineHeight: "1em", fontWeight: "700", cursor: "pointer" }}>
                          {this.state.publisher}
                        </Link>
                        출판
                      </div>
                    </div>
                    <div style={{ margin: "0 0 15px 0" }}>
                      <table style={{ width: "100%", borderCollapse: "collapse", borderTop: "1px solid #e6e8eb", borderBottom: "1px solid #e6e8eb", borderSpacing: "0" }}>
                        <tbody>
                          <tr>
                            <th rowSpan="2" style={{ fontWeight: "bold", textAlign: "center", margin: "0", lineHeight: "1em", letterSpacing: "-0.03em", minHeight: "36px", padding: "9px 0", verticalAlign: "middle", fontSize: "13px", boxSizing: "border-box", color: "#40474d", borderRight: "1px solid #e6e8eb", background: "#f7fafc", width: "27.5%" }}>
                              금액
                            </th>
                            <td style={{ width: "27.5%", padding: "10px", whiteSpace: "nowrap", color: "#808991", verticalAlign: "middle", fontSize: "13px", boxSizing: "border-box", minHeight: "36px", lineHeight: "1em", letterSpacing: "-0.03em" }}> 전자책 정가 </td>
                            <td style={{ width: "27.5%", textAlign: "right", fontWeight: "700", padding: "10px", whiteSpace: "nowrap", color: "#808991", minHeight: "36px", verticalAlign: "middle", fontSize: "13px", boxSizing: "border-box", lineHeight: "1em", letterSpacing: "-0.03em" }}> {this.state.price}원 </td>
                            <td style={{ width: "20%", paddingLeft: "0", whiteSpace: "nowrap", color: "#808991", minHeight: "36px", padding: "9px 0", verticalAlign: "middle", fontSize: "13px", boxSizing: "border-box", lineHeight: "1em", letterSpacing: "-0.03em" }}> 10% 할인 </td>
                          </tr>
                          <tr style={{ verticalAlign: "inherit", borderColor: "inherit" }}>
                            <td style={{ width: "25%", padding: "10px", whiteSpace: "nowrap", color: "#1f8ce6", verticalAlign: "middle", fontSize: "13px", boxSizing: "border-box", minHeight: "36px", lineHeight: "1em", letterSpacing: "-0.03em" }}> 판매가 </td>
                            <td style={{ width: "27.5%", textAlign: "right", fontWeight: "700", padding: "10px", whiteSpace: "nowrap", color: "#1f8ce6", minHeight: "36px", verticalAlign: "middle", fontSize: "13px", boxSizing: "border-box", lineHeight: "1em", letterSpacing: "-0.03em" }}> {this.state.price}원 </td>
                            <td style={{ color: "#eb5847", fontWeight: "700", width: "20%", paddingLeft: "0", whiteSpace: "nowrap", minHeight: "36px", padding: "9px 0", verticalAlign: "middle", fontSize: "13px", boxSizing: "border-box", lineHeight: "1em", letterSpacing: "-0.03em" }}> 10% 할인 </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div>
                      <ul style={{ float: "right", display: "inline-table", whiteSpace: "nowrap", listStyle: "none", margin: "0", padding: "0", overflow: "hidden" }}>
                        <li style={buttonStyle1}>
                          <button style={{ height: "48px", width: "48px", border: "1px solid #d1d5d9", boxShadow: "0 1px 1px 0 rgb(209 213 217 / 30%)", borderRadius: "4px", display: "inline-block" }}>
                            <img src="image/favorite_black_24dp.svg" alt="" style={{ width: "25px" }} />
                          </button>
                        </li>
                        <li style={buttonStyle1}>
                          <button style={{ height: "48px", width: "48px", border: "1px solid #d1d5d9", boxShadow: "0 1px 1px 0 rgb(209 213 217 / 30%)", borderRadius: "4px", display: "inline-block" }}>
                            <img src="image/shopping_cart_black_24dp.svg" alt="" style={{ width: "25px" }} />
                          </button>
                        </li>
                        <li style={buttonStyle1}>
                          <button style={{ height: "48px", width: "48px", border: "1px solid #d1d5d9", boxShadow: "0 1px 1px 0 rgb(209 213 217 / 30%)", borderRadius: "4px", display: "inline-block" }}>
                            <img src="image/card_giftcard_black_24dp.svg" alt="" style={{ width: "25px" }} />
                          </button>
                        </li>
                        <li style={buttonStyle1_last}>
                          <Link to="/order" style={{ borderRadius: "4px", fontWeight: "700", textAlign: "center", color: "#fff", background: "#1f8ce6", float: "left", height: "48px", lineHeight: "46px", minWidth: "112px", fontSize: "15px" }}>
                            구매하기
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="MetaInfoWrapper" style={{ display: "grid", msGridColumns: "260px auto", gridTemplateColumns: "260px auto", marginTop: "40px", padding: "20px 26px 13px", border: "solid 4px #f2f4f5" }}>
                  <ul style={{}}>
                    <li style={bookMetaInfoLiTag}>
                      <span style={bookMetaInfoSpanTag}> 출간정보 </span>
                      <ul style={{ display: "table-cell" }}>
                        <li style={bookMetaInfo}> 2021.04.07. 전자책 출간 </li> <li style={bookMetaInfo}> 2021.03.10. 종이책 출간 </li>
                      </ul>
                    </li>
                    <li style={bookMetaInfoLiTag}>
                      <span style={bookMetaInfoSpanTag}> 파일정보 </span>
                      <ul style={{ display: "table-cell" }}>
                        <li style={bookMetaInfo}> 2021.04.07. 전자책 출간 </li>
                      </ul>
                    </li>
                    <li style={bookMetaInfoLiTag}>
                      <span style={bookMetaInfoSpanTag}> ISBN </span>
                      <ul style={{ display: "table-cell" }}>
                        <li style={bookMetaInfo}> 2021.04.07. 전자책 출간 </li>
                      </ul>
                    </li>
                  </ul>
                  <ul style={{}}>
                    <li style={bookMetaInfoLiTag}>
                      <span style={bookMetaInfoSpanTag}> 출간정보 </span>
                      <ul style={{ display: "table-cell" }}>
                        <li style={bookMetaInfo}> 2021.04.07. 전자책 출간 </li> <li style={bookMetaInfo}> 2021.03.10. 종이책 출간 </li>
                      </ul>
                    </li>
                    <li style={bookMetaInfoLiTag}>
                      <span style={bookMetaInfoSpanTag}> 파일정보 </span>
                      <ul style={{ display: "table-cell" }}>
                        <li style={bookMetaInfo}> 2021.04.07. 전자책 출간 </li>
                      </ul>
                    </li>
                    <li style={bookMetaInfoLiTag}>
                      <span style={bookMetaInfoSpanTag}> ISBN </span>
                      <ul style={{ display: "table-cell" }}>
                        <li style={bookMetaInfo}> 2021.04.07. 전자책 출간 </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="IntroBookArea" style={{ paddingBottom: "70px" }}>
                <div className="IntroBookTitle" style={{ marginBottom: "15px", padding: "10px 0 8px 0", borderBottom: "2px solid #7d8e9e", fontSize: "20px", color: "#59667a", fontWeight: "700", letterSpacing: "-0.03em" }}>
                  책소개
                </div>
                <div className="IntroBookContent">
                  <p className="IntroBookParagraph" style={{ lineHeight: "1.8em", fontSize: "13px", color: "#333", wordBreak: "keep-all", wordWrap: "break-word", textAlign: "justify" }}>
                    {this.state.intro_book.split("\n").map((line) => {
                      return (
                        <span>
                          {line} <br />
                        </span>
                      );
                    })}
                  </p>
                </div>
                <button className="ExpandView" style={{ display: "block", float: "right", background: "0 0", fontSize: "13px", color: "#4076b5", border: "none" }}>
                  펼쳐보기
                  <span style={{ marginLeft: "5px" }}>
                    <img src="image/arrow_circle_down_black_24dp.svg" alt="" style={{ width: "16px", top: "3px" }} />
                  </span>
                </button>
              </div>
              <div className="BookDetailBox IntroAuthorArea" style={bookDetailBox}>
                <div className="BookDetailTitle IntroAuhorTitle" style={bookDetailTitle}>
                  저자 소개
                </div>
                <div className="BookDetailContent IntroAuthorContent">
                  <p className="BookDetailParagraph IntroAuthorParagraph" style={{ lineHeight: "1.8em", fontSize: "13px", color: "#333", wordBreak: "keep-all", wordWrap: "break-word", textAlign: "justify" }}>
                    {this.state.intro_author.split("\n").map((line) => {
                      return (
                        <span>
                          {line} <br />
                        </span>
                      );
                    })}
                  </p>
                </div>
                <button className="ExpandView" style={{ display: "block", float: "right", background: "0 0", fontSize: "13px", color: "#4076b5", border: "none" }}>
                  펼쳐보기
                  <span style={{ marginLeft: "5px" }}>
                    <img src="image/arrow_circle_down_black_24dp.svg" alt="" style={{ width: "16px", top: "3px" }} />
                  </span>
                </button>
              </div>
              <div className="BookDetailBox BookTOC-Area" style={bookDetailBox}>
                <div className="BookDetailTitle BookTOC-Title" style={bookDetailTitle}>
                  목차
                </div>
                <div className="BookDetailContent BookTOC-Content">
                  <p className="BookDetailParagraph BookTOC-Paragraph" style={{ lineHeight: "1.8em", fontSize: "13px", color: "#333", wordBreak: "keep-all", wordWrap: "break-word", textAlign: "justify" }}>
                    {this.state.indexes.split("\n").map((line) => {
                      return (
                        <span>
                          {line} <br />
                        </span>
                      );
                    })}
                  </p>
                </div>
                <button className="ExpandView" style={{ display: "block", float: "right", background: "0 0", fontSize: "13px", color: "#4076b5", border: "none" }}>
                  펼쳐보기
                  <span style={{ marginLeft: "5px" }}>
                    <img src="image/arrow_circle_down_black_24dp.svg" alt="" style={{ width: "16px", top: "3px" }} />
                  </span>
                </button>
              </div>
              <StarRating book_comment={this.state.book_comment} updateStateBookComment={(value) => this.setState({ book_comment: value })} />
            </div>
          </div>
          {/* 광고 AsideRight */}
          <div className="AsideRightAd" style={{ borderLeft: "1px solid #e6e8eb", flex: "215" }}>
            광고
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DetailBook;

const bookDetailPage = { display: "flex", width: "1015px", margin: "0 auto" };

const bookDetailArea = { flex: "802.5" };

const bookDetailWrapper = { marginLeft: "26px", paddingRight: "35px" };

const mainInfoWrapper = { display: "flex", paddingTop: "30px" };

const bookcoverWrapper = { flex: "220" };

const bookcoverBox = { display: "flex", justifyContent: "start" };

const bookcoverDiv = { display: "flex", flexDirection: "column", alignItems: "center" };

const previewButton = {
  margin: "0",
  padding: "0",
  WebkitTapHighlightColor: "transparent",
  boxSizing: "border-box",
  borderRadius: "4px",
  fontWeight: "700",
  display: "inline-block",
  textAlign: "center",
  cursor: "pointer",
  lineHeight: "1em",
  verticalAlign: "baseline",
  transition: "background 0.2s, color 0.2s",
  background: "#fff",
  border: "1px solid #1f8ce6",
  boxShadow: "0 1px 1px 0 rgb(31 140 230 / 30%)",
  fontSize: "13px",
  marginTop: "9px",
  width: "130px",
  padding: "12px 0",
  color: "#1f8ce6",
};

const mainInfoData = { margin: "20px 0" };

const CategoryItems = styled.li`
  display: "inline";
  margin-right: "10px";
  font-size: "12px";
  color: #333;
  &::after {
    content: "";
  }
  &::before {
    content: " ";
  }
  &:last-child:after {
    content: "";
  }
`;

const bookDetailBox = { paddingBottom: "70px" };

const bookDetailTitle = { marginBottom: "15px", padding: "10px 0 8px 0", borderBottom: "2px solid #7d8e9e", fontSize: "20px", color: "#59667a", fontWeight: "700", letterSpacing: "-0.03em" };

const bookMetaInfo = { display: "block", position: "relative", width: "100%", lineHeight: "16px", paddingBottom: "2px" };

const bookMetaInfoLiTag = { display: "table", paddingBottom: "7px", fontSize: "12px", color: "#666" };
const bookMetaInfoSpanTag = { display: "table-cell", paddingRight: "9px", fontSize: "inherit", lineHeight: "16px", fontWeight: "700", color: "#525a61" };

const buttonStyle1 = {
  display: "table-cell",
  verticalAlign: "middle",
  margin: "0px",
  // padding: "0px 2px 0px 3px",
  paddingLeft: "3px",
  paddingRight: "2px",
};

const buttonStyle1_last = Object.assign({}, buttonStyle1);
buttonStyle1_last["paddingRight"] = "0px";

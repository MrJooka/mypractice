/** @jsxImportSource @emotion/react */
import React, { Component, PureComponent } from "react";
import axios from "axios";
import RidiGnbArea from "./components/RidiGnbArea";
import { GlobalStyle } from "./components/GlobalStyle";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { AutoComplete, Rate } from "antd";
import { Link } from "react-router-dom";
import FavoriteCategory from "./components/FavoriteCategory";
import StarRating from "./StarRating";
import CommentStackOverFlow from "./CommentStackOverFlow";
import { ShoppingFilled, ShoppingOutlined } from "@ant-design/icons";

class DetailBook extends PureComponent {
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
      rating: [],

      visibility_bookcover: false,

      foldable_intro_book: false,
      foldable_intro_author: false,
      foldable_indexes: false,

      intro_author_height: 0,
      intro_book_height: 0,
      indexes_height: 0,
    };
  }

  componentDidMount() {
    axios.post("api/bookstore/get-book-info", { sellbook_id: sessionStorage.getItem("book_id") }).then((res) => {
      console.log(res.data, "디테일북에서 서버에서 data");
      this.setState({
        title: res.data.sellbook.book_info.title,
        category: res.data.sellbook.book_info.category,
        hashtag: res.data.sellbook.book_info.hashtag,
        author: res.data.sellbook.book_info.author,
        publisher: res.data.sellbook.book_info.publisher,
        bookcover_medium: res.data.sellbook.book_info.bookcover.url_large,
        bookcover_large: res.data.sellbook.book_info.bookcover.url_large,
        intro_book: res.data.sellbook.book_info.intro_book,
        intro_author: res.data.sellbook.book_info.intro_author,
        indexes: res.data.sellbook.book_info.indexes,
        price: res.data.sellbook.book_info.price,
        book_id: res.data.sellbook._id,
        book_comment: res.data.book_comment,
        rating: res.data.rating,
      });
    });

    let intro_author_height = 0;
    let intro_book_height = 0;
    let indexes_height = 0;

    this.간격 = setTimeout(() => {
      intro_author_height = this.intro_author_height.clientHeight;
      this.setState(() => ({ intro_author_height }));

      intro_book_height = this.intro_book_height.clientHeight;
      this.setState(() => ({ intro_book_height }));

      indexes_height = this.indexes_height.clientHeight;
      this.setState(() => ({ indexes_height }));
    }, 550);
  }

  onChangeCartStatus = () => {
    let sellbook_id = this.state.book_id;
    if (!this.props.books_in_cart.find((book_id) => book_id == this.state.book_id)) {
      //담겼다고 알려주기

      //서버에 책 정보 보내기
      axios.post("/api/bookstore/update-book-cart", { sellbook_id }).then((res) => {
        //카트에 책 담기
        // this.props.부모컴포props실행()
        console.log(res);
        alert(`제목 : ${this.state.title}\n책이 카트에 추가되었습니다.`);
        this.props.onAddBookInCart(this.state.book_id);
      });
      //서버에 보내고 나서 GNB 카트아이콘에 숫자 변경
    } else {
      this.props.onDeleteBookInCart(this.state.book_id);
    }
  };

  render() {
    console.log("DetailBook render() 메서드 실행됨");

    let _rating = this.state.rating;
    if (_rating == []) {
      console.log("아직 데이터 없음");
      return <div></div>;
    } else {
      console.log("데이터 드렁옴");
      let 총별갯수 = 0;
      let 리뷰갯수 = 0;

      for (let i = 0; i < _rating.length; i++) {
        총별갯수 = 총별갯수 + _rating[i]._id * _rating[i].count;
        리뷰갯수 = 리뷰갯수 + _rating[i].count;
      }
      let 평균평점 = Math.round((총별갯수 / 리뷰갯수) * 100) / 100;

      return (
        <React.Fragment>
          <GlobalStyle /> <RidiGnbArea books_in_cart={this.props.books_in_cart} /> <FavoriteCategory />
          <div className="BookDetailPage" style={bookDetailPage}>
            <div className="BookDetailArea" style={bookDetailArea}>
              <div className="BookDetailWrapper" style={bookDetailWrapper}>
                <div className="MainInfoArea" style={{ paddingBottom: "40px" }}>
                  <div className="MainInfoWrapper" style={mainInfoWrapper}>
                    <div className="BookcoverWrapper" style={bookcoverWrapper}>
                      <div className="BookcoverBox" style={bookcoverBox}>
                        <div className="BookcoverDiv" style={bookcoverDiv}>
                          <img
                            className="BookcoverImage"
                            style={{ cursor: "zoom-in" }}
                            width="200"
                            height="320"
                            src={this.state.bookcover_medium}
                            alt="Thumbnail"
                            onClick={() => {
                              this.setState({
                                visibility_bookcover: !this.state.visibility_bookcover,
                              });
                            }}
                          ></img>
                          <button className="PreviewButton" style={previewButton}>
                            미리보기
                          </button>
                          <div
                            style={{
                              display: this.state.visibility_bookcover ? "block" : "none",
                              top: 0,
                              left: 0,
                              position: "fixed",
                              backdropFilter: "blur(2px)",
                              width: "100%",
                              margin: "0 auto",
                              height: "100vh",
                              backgroundColor: "rgb(0 0 0 / 70%)",
                              zIndex: 9999,
                              cursor: "zoom-out",
                            }}
                            onClick={() => {
                              this.setState({
                                visibility_bookcover: !this.state.visibility_bookcover,
                              });
                            }}
                          >
                            <div style={{ textAlign: "center", position: "absolute", width: "100vw", height: "100vh", padding: "0 8px" }}>
                              <div style={{ position: "relative", display: "inline-block", verticalAlign: " middle", margin: "0 auto", textAlign: "left" }}>
                                <figure style={{ display: "block" }}>
                                  <img
                                    src={this.state.bookcover_large}
                                    alt=""
                                    style={{ width: AutoComplete, maxWidth: "100%", height: "auto", display: "block", lineHeight: "0", padding: "40px 0 40px", maxHeight: "937px", margin: "0 auto" }}
                                  />
                                </figure>
                              </div>
                            </div>
                          </div>
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
                        <Rate disabled value={평균평점} /> <span>{평균평점}점</span> <span>({리뷰갯수})</span>
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
                              <th
                                rowSpan="2"
                                style={{
                                  fontWeight: "bold",
                                  textAlign: "center",
                                  margin: "0",
                                  lineHeight: "1em",
                                  letterSpacing: "-0.03em",
                                  minHeight: "36px",
                                  padding: "9px 0",
                                  verticalAlign: "middle",
                                  fontSize: "13px",
                                  boxSizing: "border-box",
                                  color: "#40474d",
                                  borderRight: "1px solid #e6e8eb",
                                  background: "#f7fafc",
                                  width: "27.5%",
                                }}
                              >
                                금액
                              </th>
                              <td
                                style={{
                                  width: "27.5%",
                                  padding: "10px",
                                  whiteSpace: "nowrap",
                                  color: "#808991",
                                  verticalAlign: "middle",
                                  fontSize: "13px",
                                  boxSizing: "border-box",
                                  minHeight: "36px",
                                  lineHeight: "1em",
                                  letterSpacing: "-0.03em",
                                }}
                              >
                                전자책 정가{" "}
                              </td>
                              <td
                                style={{
                                  width: "27.5%",
                                  textAlign: "right",
                                  fontWeight: "700",
                                  padding: "10px",
                                  whiteSpace: "nowrap",
                                  color: "#808991",
                                  minHeight: "36px",
                                  verticalAlign: "middle",
                                  fontSize: "13px",
                                  boxSizing: "border-box",
                                  lineHeight: "1em",
                                  letterSpacing: "-0.03em",
                                }}
                              >
                                {this.state.price}원{" "}
                              </td>
                              <td
                                style={{
                                  width: "20%",
                                  paddingLeft: "0",
                                  whiteSpace: "nowrap",
                                  color: "#808991",
                                  minHeight: "36px",
                                  padding: "9px 0",
                                  verticalAlign: "middle",
                                  fontSize: "13px",
                                  boxSizing: "border-box",
                                  lineHeight: "1em",
                                  letterSpacing: "-0.03em",
                                }}
                              >
                                10% 할인{" "}
                              </td>
                            </tr>
                            <tr style={{ verticalAlign: "inherit", borderColor: "inherit" }}>
                              <td
                                style={{
                                  width: "25%",
                                  padding: "10px",
                                  whiteSpace: "nowrap",
                                  color: "#1f8ce6",
                                  verticalAlign: "middle",
                                  fontSize: "13px",
                                  boxSizing: "border-box",
                                  minHeight: "36px",
                                  lineHeight: "1em",
                                  letterSpacing: "-0.03em",
                                }}
                              >
                                판매가{" "}
                              </td>
                              <td
                                style={{
                                  width: "27.5%",
                                  textAlign: "right",
                                  fontWeight: "700",
                                  padding: "10px",
                                  whiteSpace: "nowrap",
                                  color: "#1f8ce6",
                                  minHeight: "36px",
                                  verticalAlign: "middle",
                                  fontSize: "13px",
                                  boxSizing: "border-box",
                                  lineHeight: "1em",
                                  letterSpacing: "-0.03em",
                                }}
                              >
                                {this.state.price}원{" "}
                              </td>
                              <td
                                style={{
                                  color: "#eb5847",
                                  fontWeight: "700",
                                  width: "20%",
                                  paddingLeft: "0",
                                  whiteSpace: "nowrap",
                                  minHeight: "36px",
                                  padding: "9px 0",
                                  verticalAlign: "middle",
                                  fontSize: "13px",
                                  boxSizing: "border-box",
                                  lineHeight: "1em",
                                  letterSpacing: "-0.03em",
                                }}
                              >
                                10% 할인{" "}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <ul style={{ float: "right", display: "inline-table", whiteSpace: "nowrap", listStyle: "none", margin: "0", padding: "0", overflow: "hidden" }}>
                          <li style={buttonStyle1}>
                            <button
                              style={{ height: "48px", width: "48px", border: "1px solid #d1d5d9", boxShadow: "0 1px 1px 0 rgb(209 213 217 / 30%)", borderRadius: "4px", display: "inline-block" }}
                            >
                              <img src="image/favorite_black_24dp.svg" alt="" style={{ width: "25px" }} />
                            </button>
                          </li>
                          <li style={buttonStyle1}>
                            <button
                              style={{ height: "48px", width: "48px", border: "1px solid #d1d5d9", boxShadow: "0 1px 1px 0 rgb(209 213 217 / 30%)", borderRadius: "4px", display: "inline-block" }}
                              onClick={this.onChangeCartStatus}
                            >
                              {this.props.books_in_cart.find((book_id) => book_id == this.state.book_id) ? (
                                <ShoppingFilled style={{ fontSize: "25px", color: "tomato" }} />
                              ) : (
                                <ShoppingOutlined style={{ fontSize: "25px" }} />
                              )}
                            </button>
                          </li>
                          <li style={buttonStyle1}>
                            <button
                              style={{ height: "48px", width: "48px", border: "1px solid #d1d5d9", boxShadow: "0 1px 1px 0 rgb(209 213 217 / 30%)", borderRadius: "4px", display: "inline-block" }}
                            >
                              <img src="image/card_giftcard_black_24dp.svg" alt="" style={{ width: "25px" }} />
                            </button>
                          </li>
                          <li style={buttonStyle1_last}>
                            <Link
                              to="/order"
                              style={{
                                borderRadius: "4px",
                                fontWeight: "700",
                                textAlign: "center",
                                color: "#fff",
                                background: "#1f8ce6",
                                float: "left",
                                height: "48px",
                                lineHeight: "46px",
                                minWidth: "112px",
                                fontSize: "15px",
                              }}
                            >
                              구매하기
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div
                    className="MetaInfoWrapper"
                    style={{ display: "grid", msGridColumns: "260px auto", gridTemplateColumns: "260px auto", marginTop: "40px", padding: "20px 26px 13px", border: "solid 4px #f2f4f5" }}
                  >
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
                  <div
                    className="IntroBookTitle"
                    style={{ marginBottom: "15px", padding: "10px 0 8px 0", borderBottom: "2px solid #7d8e9e", fontSize: "20px", color: "#59667a", fontWeight: "700", letterSpacing: "-0.03em" }}
                  >
                    책소개
                  </div>
                  <div className="IntroBookContent" style={{ maxHeight: this.state.foldable_intro_book ? "100%" : "180px", overflow: "hidden" }}>
                    <p
                      className="IntroBookParagraph"
                      ref={(intro_book_height) => {
                        this.intro_book_height = intro_book_height;
                      }}
                      style={{ lineHeight: "1.8em", fontSize: "13px", color: "#333", wordBreak: "keep-all", wordWrap: "break-word", textAlign: "justify" }}
                    >
                      {this.state.intro_book.split("\n").map((line, i) => {
                        return (
                          <span key={i}>
                            {line} <br />
                          </span>
                        );
                      })}
                    </p>
                  </div>
                  <button
                    className="ExpandView"
                    style={{ display: "block", float: "right", background: "0 0", fontSize: "13px", color: "#4076b5", border: "none" }}
                    onClick={() => {
                      this.setState({
                        foldable_intro_book: !this.state.foldable_intro_book,
                      });
                    }}
                  >
                    {this.state.intro_book_height < 200 ? "" : this.state.foldable_intro_book ? "접기" : "펼쳐보기"}
                  </button>
                </div>
                <div className="BookDetailBox IntroAuthorArea" style={bookDetailBox}>
                  <div className="BookDetailTitle IntroAuhorTitle" style={bookDetailTitle}>
                    저자 소개
                  </div>
                  <div className="BookDetailContent IntroAuthorContent" style={{ maxHeight: this.state.foldable_intro_author ? "100%" : "180px", overflow: "hidden" }}>
                    <p
                      className="BookDetailParagraph IntroAuthorParagraph"
                      ref={(intro_author_height) => {
                        this.intro_author_height = intro_author_height;
                      }}
                      style={{ lineHeight: "1.8em", fontSize: "13px", color: "#333", wordBreak: "keep-all", wordWrap: "break-word", textAlign: "justify" }}
                    >
                      {this.state.intro_author.split("\n").map((line, i) => {
                        return (
                          <span key={i}>
                            {line} <br />
                          </span>
                        );
                      })}
                    </p>
                  </div>
                  <button
                    className="ExpandView"
                    style={{ display: "block", float: "right", background: "0 0", fontSize: "13px", color: "#4076b5", border: "none" }}
                    onClick={() => {
                      this.setState({
                        foldable_intro_author: !this.state.foldable_intro_author,
                      });
                    }}
                  >
                    {this.state.intro_author_height < 200 ? "" : this.state.foldable_intro_author ? "접기" : "펼쳐보기"}
                  </button>
                </div>
                <div className="BookDetailBox BookTOC-Area" style={bookDetailBox}>
                  <div className="BookDetailTitle BookTOC-Title" style={bookDetailTitle}>
                    목차
                  </div>
                  <div className="BookDetailContent BookTOC-Content" style={{ maxHeight: this.state.foldable_indexes ? "100%" : "180px", overflow: "hidden" }}>
                    <p
                      className="BookDetailParagraph BookTOC-Paragraph"
                      ref={(indexes_height) => {
                        this.indexes_height = indexes_height;
                      }}
                      style={{ lineHeight: "1.8em", fontSize: "13px", color: "#333", wordBreak: "keep-all", wordWrap: "break-word", textAlign: "justify" }}
                    >
                      {this.state.indexes.split("\n").map((line, i) => {
                        return (
                          <span key={i}>
                            {line} <br />
                          </span>
                        );
                      })}
                    </p>
                  </div>
                  <button
                    className="ExpandView"
                    style={{ display: "block", float: "right", background: "0 0", fontSize: "13px", color: "#4076b5", border: "none" }}
                    onClick={() => {
                      this.setState({
                        foldable_indexes: !this.state.foldable_indexes,
                      });
                    }}
                  >
                    {this.state.indexes_height < 200 ? "" : this.state.foldable_indexes ? "접기" : "펼쳐보기"}
                  </button>
                </div>
                <StarRating book_comment={this.state.book_comment} rating={this.state.rating} updateStateBookComment={(value) => this.setState({ book_comment: value })} />
                <CommentStackOverFlow />
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

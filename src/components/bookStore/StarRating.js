/* eslint-disable eqeqeq */
/** @jsxImportSource @emotion/react */
import { css, Global } from "@emotion/react";
import React, { Component, PureComponent } from "react";
import { Rate } from "antd";
import axios from "axios";
import WriteComment from "./WriteComment";

class StarRating extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      content: "",
    };
  }

  handleChange = (value) => {
    console.log(value);
    this.setState({ rating: value });
  };

  showComment = () => this.setState({ showComment: !this.state.showComment });

  sendCommentToServer = (event) => {
    event.preventDefault();
    const nowTime = new Date();

    const user_id = "Jooka";
    const sellbook_id = sessionStorage.getItem("book_id");
    const root_id = null;
    const parent_id = null;
    const level = 1;
    const isDeleted = "no";
    const time_created = nowTime;
    const rating = this.state.rating;
    const content = this.state.content;

    axios.post("api/bookstore/create-book-comment", { user_id, sellbook_id, root_id, parent_id, level, isDeleted, time_created, rating, content }).then((res) => {
      this.props.updateStateBookComment(res.data.book_comment);
      console.log("서버에  커맨트 업데이트 후 서버에서받은커맨트", res);
    });
  };

  changeReveiw = (e) => {
    e.preventDefault();
    this.setState({
      content: String(e.target.value),
    });
  };

  render() {
    let _rating = this.props.rating;
    if (_rating === []) {
      return <div></div>;
    } else {
      let total_star_counter = 0;
      let total_review_counter = 0;
      let fiveStarCount = 0;
      let fourStarCount = 0;
      let threeStarCount = 0;
      let twoStarCount = 0;
      let oneStarCount = 0;
      for (let i = 0; i < _rating.length; i++) {
        total_star_counter = total_star_counter + _rating[i]._id * _rating[i].count;
        total_review_counter = total_review_counter + _rating[i].count;
        if (_rating[i]._id == 5) {
          fiveStarCount = _rating[i].count;
        } else if (_rating[i]._id == 4) {
          fourStarCount = _rating[i].count;
        } else if (_rating[i]._id == 3) {
          threeStarCount = _rating[i].count;
        } else if (_rating[i]._id == 2) {
          twoStarCount = _rating[i].count;
        } else {
          oneStarCount = _rating[i].count;
        }
      }
      let average_rating = Math.round((total_star_counter / total_review_counter) * 100) / 100;

      return (
        <div className="BookDetailBox BookReviewArea" css={bookDetailBox}>
          <div className="BookDetailTitle BookReviewTitle" css={bookDetailTitle}>
            리뷰
          </div>
          <div style={{ display: "flex", paddingBottom: "30px" }}>
            <Global
              styles={css`
                .bigStar svg {
                  width: 40px;
                  height: 40px;
                }

                .smallStar svg {
                  width: 10px;
                  height: 10px;
                }

                .smallStar > li:not(:last-child) {
                  margin-right: 2px;
                }

                /* .ReviewListWrapper:first-child {
                border-top: 0;
              } */
              `}
            />
            <div style={{ display: "flex", flexDirection: "column", flex: "0.2", alignItems: "center" }}>
              <div>구매자 별점</div>
              <div>{average_rating}</div>
              <div>
                <Rate className="smallStar" disabled value={average_rating} />
              </div>
              <ul>
                <li> 별5개 : {fiveStarCount} 개</li>
                <li> 별4개 : {fourStarCount} 개</li>
                <li> 별3개 : {threeStarCount} 개</li>
                <li> 별2개 : {twoStarCount} 개</li>
                <li> 별1개 : {oneStarCount} 개</li>
              </ul>
              <hr width="80%" />
              <div>{total_review_counter}명이 평가함</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", flex: "0.8", alignItems: "center" }}>
              <div>
                <Rate className="bigStar" onChange={this.handleChange} />
              </div>
              <div>
                <form>
                  <label>
                    <textarea rows="4" cols="50" type="textarea" style={{ display: "bolock" }} value={this.state.content} onChange={this.changeReveiw.bind(this)} />
                    {/* 글자 10자이상되면 버튼 파랑색으로 변경됨 */}
                    <button
                      style={{
                        float: "right",
                        color: "#fff",
                        background: "#1f8ce6",
                        border: "1px solid #0077d9",
                        boxShadow: "0 1px 1px 0 rgba(31, 140, 230, 0.3)",
                        fontSize: "12px",
                        padding: "8px 18px",
                        opacity: "0.5",
                      }}
                      onClick={this.sendCommentToServer}
                    >
                      리뷰 남기기
                    </button>
                  </label>
                </form>
              </div>
            </div>
          </div>

          <ReviewList2 book_comment={this.props.book_comment} updateStateBookComment={(value) => this.props.updateStateBookComment(value)} />
        </div>
      );
    }
  }
}

export default StarRating;

class ReviewList2 extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      child_commmet_show_id: "",
      child_comment_visible: false,
    };
  }

  sendCommentToServer = (event) => {
    event.preventDefault();
    const nowTime = new Date();

    const user_id = "Jooka";
    const sellbook_id = sessionStorage.getItem("book_id");
    const root_id = event.target.dataset.root_id;
    const parent_id = event.target.dataset.id;
    const level = 1 + Number(event.target.dataset.level);
    const isDeleted = "no";
    const time_created = nowTime;
    const rating = null;
    const content = this.state.content;

    axios.post("api/bookstore/create-book-comment", { user_id, sellbook_id, root_id, parent_id, level, isDeleted, time_created, rating, content }).then((res) => {
      this.props.updateStateBookComment(res.data.book_comment);
    });
  };

  changeReply = (e) => {
    e.preventDefault();
    this.setState({
      content: String(e.target.value),
    });
  };

  render() {
    let comments = this.props.book_comment;
    const level1 = comments.map((comment) => {
      if (comment.children.length > 0) {
        // 임시 칠드런을 만들어 놓고
        let tmp_children = comment.children.slice();

        // 해당 children의 최대 level 구하기
        let levels = tmp_children.map((comment) => comment.level);
        let max_level = Math.max(...levels);

        // 일단 2레벨부터 깔아놓자.
        comment.children = tmp_children.filter((child) => child.level == 2);

        // 3레벨 이상이 있는 경우, 레벨 하나씩 뿌려준다.
        if (max_level >= 3) {
          for (var _level = 3; _level <= max_level; _level++) {
            for (var index = tmp_children.length - 1; index >= 0; index--) {
              let position = comment.children.findIndex((original) => tmp_children[index].parent_id == original._id && tmp_children[index].level == _level);
              if (position >= 0) {
                comment.children.splice(position + 1, 0, tmp_children[index]);
              }
            }
          }
        }
      }

      const levelArray = comment.children;

      let comments = levelArray.map((child) => {
        return (
          <div key={child._id} style={{ background: "#f8fbfe", borderTop: "1px solid #e8edf3" }}>
            <div style={{ marginLeft: `${(child.level - 2) * 10}px`, padding: "6px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>{child.content}</div>
                <button>댓글 달기버튼</button>
              </div>
              <div>
                <span style={{ display: "inline-block", fontSize: "11px", color: "#7d8e9e", fontWeight: "700", width: "40px" }}>{child.user_id.substring(0, 3) + "***"}</span>
                <span style={{ fontSize: "11px", color: "#7d8e9e", fontWeight: "400", marginLeft: "15px" }}>{KoreadateWithTime(child.time_created)}</span>
              </div>
              {/* 댓글달기 버튼 누르면 텍스트 입력창 표시 => 컴포넌트로 표시해야함 */}
              <div>
                <label>
                  <textarea type="textarea" rows={1} cols={40} onChange={this.changeReply} placeholder="이곳에 댓글을 남겨주세요."></textarea>
                  {/* data- 형식으로 attribute(속성)을 저장하면 event발생시 해당 target에서 dataset.속성이름으로 속성값을 불러 올 수 있다. */}
                  <button data-id={child._id} data-book_id={child.book_id} data-root_id={child.root_id} data-level={child.level} data-isdeleted={child.isDeleted} onClick={this.sendCommentToServer}>
                    댓글올리기
                  </button>
                </label>
              </div>
            </div>
          </div>
        );
      });

      function Koreadate(time) {
        let date = new Date(time);
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();

        return year + "." + month + "." + day;
      }

      function KoreadateWithTime(time) {
        let date = new Date(time);
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let hour = date.getHours();
        let min = date.getMinutes();

        return year + "." + month + "." + day + " " + hour + ":" + min;
      }

      return (
        <React.Fragment>
          <li key={comment._id}>
            <div className="ReviewListWrapper" style={{ paddingTop: "14px", display: "flex", width: "100%", borderBottom: "1px solid #d1d5d9" }}>
              <div style={{ display: "flex", flexDirection: "column", flex: "0.15", alignItems: "flex-start" }}>
                <Rate style={{ display: "block" }} className="smallStar" disabled defaultValue={comment.rating} />
                <div>{comment.user_id.substring(0, 3) + "***"}</div>
                <div>{Koreadate(comment.time_created)}</div>
              </div>
              <div
                css={css`
                  flex: 0.85;
                `}
              >
                <div style={{ padding: "5px 8px 6px 8px" }}>
                  {comment.content.split("\n").map((line, i) => {
                    return (
                      <span key={i}>
                        {line}
                        <br />
                      </span>
                    );
                  })}
                </div>

                <div style={{ display: "flex", flexDirection: "column", alignItems: "end" }}>
                  <button
                    style={{ display: "block" }}
                    onClick={(e) => {
                      e.preventDefault();
                      this.setState((state) => {
                        return {
                          child_comment_visible: !state.child_comment_visible,
                        };
                      });
                      this.setState((state) => {
                        return {
                          child_commmet_show_id: state.child_comment_visible ? comment._id : "",
                        };
                      });
                    }}
                  >
                    댓글보기
                  </button>
                </div>
                {/* {comment._id === this.state.child_commmet_show_id && <div style={{ display: "block", borderTop: "1px solid #c4d1de" }}>{comments}</div>} */}
                {/* <div style={{ display: comment._id === this.state.child_commmet_show_id ? "block" : "none", borderTop: "1px solid #c4d1de" }}>{comments}</div> */}
                <WriteComment
                  id={comment._id}
                  book_id={comment.book_id}
                  level={comment.level}
                  isDeleted={comment.isDeleted}
                  updateStateBookComment={(value) => {
                    this.props.updateStateBookComment(value);
                    this.setState((state) => {
                      return {
                        child_comment_visible: true,
                      };
                    });
                    this.setState((state) => {
                      return {
                        child_commmet_show_id: state.child_comment_visible ? comment._id : "",
                      };
                    });
                  }}
                />
              </div>
            </div>
            {comment._id === this.state.child_commmet_show_id && <div style={{ display: "block", borderTop: "1px solid #c4d1de" }}>{comments}</div>}
          </li>
        </React.Fragment>
      );
    });
    return (
      <>
        <div className="ReviewListTitle BookReviewTitle" css={reviewListTitle}>
          리뷰 내용
        </div>

        <ul className="ReviewListArea">{level1}</ul>
      </>
    );
  }
}

const bookDetailBox = css`
  padding-bottom: 70px;
`;

const bookDetailTitle = css`
  margin-bottom: 15px;
  padding: 10px 0 8px 0;
  border-bottom: 2px solid #7d8e9e;
  font-size: 20px;
  color: #59667a;
  font-weight: 700;
  letter-spacing: -0.03em;
`;

const reviewListTitle = css`
  margin-bottom: 15px;
  padding: 10px 0;
  border-bottom: 2px solid #d1d5d9;
  font-size: 15px;
  color: #40474d;
  font-weight: 700;
  letter-spacing: -0.03em;
`;

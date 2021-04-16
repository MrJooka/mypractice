/** @jsxImportSource @emotion/react */
import { css, Global } from "@emotion/react";
import React, { Component } from "react";
import { Rate } from "antd";

const desc = ["terrible", "bad", "normal", "good", "wonderful"];

class StarRating extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 3 };
  }
  handleChange = (value) => {
    this.setState({ value });
  };

  render() {
    let comment = [
      {
        _id: "123",
        user_id: "jukka",
        book_id: "abcdefghijklmn",
        root_id: null,
        parent_id: null,
        level: 1,
        isDeleted: "no",
        time_created: "Wed Apr 14 2021 14:37:58 GMT+0900 (대한민국 표준시)",
        rating: 1,
        content: "재밌네요",
        chileren: [
          {
            _id: "124",
            user_id: "aaa",
            book_id: "abcdefghijklmn",
            root_id: "123",
            parent_id: "123",
            level: 2,
            isDeleted: "no",
            time_created: "Wed Apr 14 2021 14:38:58 GMT+0900 (대한민국 표준시)",
            rating: null,
            content: "그짓말",
          },
          {
            _id: "125",
            user_id: "jukka",
            book_id: "abcdefghijklmn",
            root_id: "123",
            parent_id: "123",
            level: 2,
            isDeleted: "no",
            time_created: "Wed Apr 14 2021 14:39:58 GMT+0900 (대한민국 표준시)",
            rating: null,
            content: "동감입니다.",
          },
          {
            _id: "128",
            user_id: "jukka",
            book_id: "abcdefghijklmn",
            root_id: "123",
            parent_id: "124",
            level: 3,
            isDeleted: "no",
            time_created: "Wed Apr 14 2021 14:40:58 GMT+0900 (대한민국 표준시)",
            rating: null,
            content: "그짓말 아닌데",
          },
          {
            _id: "130",
            user_id: "sangil",
            book_id: "abcdefghijklmn",
            root_id: "123",
            parent_id: "123",
            level: 2,
            isDeleted: "no",
            time_created: "Wed Apr 14 2021 14:41:58 GMT+0900 (대한민국 표준시)",
            rating: null,
            content: "참신합니다요",
          },
          {
            _id: "134",
            user_id: "eon",
            book_id: "abcdefghijklmn",
            root_id: "123",
            parent_id: "128",
            level: 4,
            isDeleted: "no",
            time_created: "Wed Apr 14 2021 14:42:58 GMT+0900 (대한민국 표준시)",
            rating: null,
            content: "주작 냄새가...",
          },
          {
            _id: "135",
            user_id: "eon",
            book_id: "abcdefghijklmn",
            root_id: "123",
            parent_id: "125",
            level: 3,
            isDeleted: "no",
            time_created: "Wed Apr 14 2021 14:43:58 GMT+0900 (대한민국 표준시)",
            rating: null,
            content: "취향이 독특하시네요",
          },
        ],
      },
      { comment2: {} },
      { comment3: {} },
    ];
    const { value } = this.state;
    return (
      <div
        className="BookDetailBox BookReviewArea"
        css={css`
          padding-bottom: 70px;
        `}
      >
        <div
          className="BookDetailTitle BookReviewTitle"
          css={css`
            margin-bottom: 15px;
            padding: 10px 0 8px 0;
            border-bottom: 2px solid #7d8e9e;
            font-size: 20px;
            color: #59667a;
            font-weight: 700;
            letter-spacing: -0.03em;
          `}
        >
          리뷰
        </div>
        <div
          css={css`
            display: flex;
            padding-bottom: 30px;
          `}
        >
          <Global
            styles={css`
              .bigStar svg {
                width: 40px;
                height: 40px;
              }

              .smallStar svg {
                width: 10px;
                height: 10px;
                fill: red;
              }

              .smallStar > li:not(:last-child) {
                margin-right: 2px;
              }

              .ReviewListWrapper:first-child {
                border-top: 0;
              }
            `}
          />
          <div
            css={css`
              display: flex;
              flex-direction: column;
              flex: 0.2;
              align-items: center;
            `}
          >
            <div>구매자 별점</div>
            <div>점수</div>
            <div>
              <Rate className="smallStar" disabled defaultValue={2} />
            </div>
            <ul>
              <li>별5개 : 50명</li>
              <li>별4개 : 40명</li>
              <li>별3개 : 30명</li>
              <li>별2개 : 20명</li>
              <li>별1개 : 10명</li>
            </ul>
            <hr width="80%" />
            <div>176명이 평가함</div>
          </div>
          <div
            css={css`
              flex: 0.8;
              display: flex;
              flex-direction: column;
              align-items: center;
            `}
          >
            <div>
              <Rate className="bigStar" tooltips={desc} onChange={this.handleChange} value={value} />
              {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ""}
            </div>
            <div>
              <form action="">
                <label htmlFor="">
                  <textarea
                    rows="4"
                    cols="50"
                    type="textarea"
                    css={css`
                      display: block;
                    `}
                  />
                  {/* 글자 10자이상되면 버튼 파랑색으로 변경됨 */}
                  <button
                    css={css`
                      float: right;
                      color: #fff;
                      background: #1f8ce6;
                      border: 1px solid #0077d9;
                      box-shadow: 0 1px 1px 0 rgba(31, 140, 230, 0.3);
                      font-size: 12px;
                      padding: 8px 18px;
                      opacity: 0.5;
                    `}
                  >
                    리뷰 남기기
                  </button>
                </label>
              </form>
            </div>
          </div>
        </div>
        <div
          className="ReviewListTitle BookReviewTitle"
          css={css`
            margin-bottom: 15px;
            padding: 10px 0;
            border-bottom: 2px solid #d1d5d9;
            font-size: 15px;
            color: #40474d;
            font-weight: 700;
            letter-spacing: -0.03em;
          `}
        >
          리뷰 내용
        </div>
        <ul className="ReviewListArea">
          <li
            className="ReviewListWrapper"
            css={css`
              padding-top: 14px;
              display: flex;
              width: 100%;
              border-top: 1px solid #d1d5d9;
              border-bottom: 0;
            `}
          >
            <div
              css={css`
                display: flex;
                flex-direction: column;
                flex: 0.2;
                align-items: flex-start;
              `}
            >
              <Rate style={{ display: "block" }} className="smallStar" disabled defaultValue={2} />
              <div>{comment[0].chileren[3].content}</div>
            </div>
            <div
              css={css`
                flex: 0.8;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
              `}
            >
              <div>{comment[0].content}</div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default StarRating;

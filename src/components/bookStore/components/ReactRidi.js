/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";
import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import RidiGnbArea from "./RidiGnbArea";
import { GlobalStyle } from "./GlobalStyle";

class ListGoodForHomeStudy extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        {this.props.serverlist.map((item) => (
          <li className="BookWrapper" key={item._id} css={bookWrapper}>
            <Link
              to="/detail_book"
              className="StyledAnchor"
              css={css`
                display: inline-block;
              `}
            >
              <div className="StyledThumbnailWrapper" css={styledThumbnailWrapper}>
                <div className="ThumbnailWrapper" css={thumbnailWrapper}>
                  <img className="StyledThumbnailImage" src={item.book_info.bookcover.url_small} sizes="(max-wideth: 999px) 100px, 140px" alt={item.book_info.title} css={styledThumbnailImage} />
                  <div className="DiscountWrapper" css={discountWrapper}>
                    <div className="DiscountSticker" css={discountSticker}>
                      <span className="DiscountNumber" css={discountNumber}>
                        10
                      </span>
                      <span className="DiscountPercentage" css={discountPercentage}>
                        %
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <div className="BookInfoContainer" css={bookInfoContainer}>
              <Link to="/">
                <div className="BookTitleBelowThumbanil" css={bookTitleBelowThumbanil}>
                  {item.book_info.title}
                </div>
              </Link>
              <span className="BookAuthorBelowThumbnail" css={bookAuthorBelowThumbnail}>
                <Link to="/">{item.book_info.author}</Link>
              </span>
              <span>
                <div role="img" className="RatingWrapper" css={ratingWrapper}>
                  <div className="StarContainer" css={starContainer}>
                    <img src="image/grade_black_24dp.svg" alt="" css={starImage} />
                    <img src="image/grade_black_24dp.svg" alt="" css={starImage} />
                    <img src="image/grade_black_24dp.svg" alt="" css={starImage} />
                    <img src="image/grade_black_24dp.svg" alt="" css={starImage} />
                    <img src="image/grade_black_24dp.svg" alt="" css={starImage} />
                  </div>
                  <span css={ratingNumber}>9</span>
                </div>
              </span>
            </div>
          </li>
        ))}
      </React.Fragment>
    );
  }
}

class ListGoodForStudy extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        {this.props.serverlist.map((item) => (
          <li className="BookWrapper" key={item._id} css={bookWrapper}>
            <Link
              to="/"
              className="StyledAnchor"
              css={css`
                display: inline-block;
              `}
            >
              <div className="StyledThumbnailWrapper" css={styledThumbnailWrapper}>
                <div className="ThumbnailWrapper" css={thumbnailWrapper}>
                  <img className="StyledThumbnailImage" src={item.book_info.bookcover.url_small} sizes="(max-wideth: 999px) 100px, 140px" alt={item.book_info.title} css={styledThumbnailImage} />
                  <div className="DiscountWrapper" css={discountWrapper}>
                    <div className="DiscountSticker" css={discountSticker}>
                      <span className="DiscountNumber" css={discountNumber}>
                        10
                      </span>
                      <span className="DiscountPercentage" css={discountPercentage}>
                        %
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <div className="BookInfoContainer" css={bookInfoContainer}>
              <Link to="/">
                <div className="BookTitleBelowThumbanil" css={bookTitleBelowThumbanil}>
                  {item.book_info.title}
                </div>
              </Link>
              <span className="BookAuthorBelowThumbnail" css={bookAuthorBelowThumbnail}>
                <Link to="/">{item.book_info.author}</Link>
              </span>
            </div>
          </li>
        ))}
      </React.Fragment>
    );
  }
}

class ListBestSellerBook extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        {this.props.serverlist.map((item, i) => (
          <li
            type="big"
            className="RangkingBookItem"
            css={css`
              -ms-grid-column: 1;
              -ms-grid-row: 1;
              display: flex;
              align-items: center;
              box-sizing: content-box;
            `}
          >
            <Link
              type="big"
              to="/"
              className="ThumbnailAnchor-big"
              css={css`
                flex: none;
                margin-right: 18px;
              `}
            >
              <div className="ThumbnailWrapper" css={thumbnailWrapper}>
                <img
                  className="ThumbnailImage"
                  src={item.book_info.bookcover.url_small}
                  alt={item.book_info.title}
                  sizes="80px"
                  css={css`
                    width: 80px;
                    max-height: 114px;
                  `}
                />
                <div className="DiscountWrapper" css={discountWrapper}>
                  <div className="DiscountSticker" css={discountSticker}>
                    <span className="DiscountNumber" css={discountNumber}>
                      10
                    </span>
                    <span className="DiscountPercentage" css={discountPercentage}>
                      %
                    </span>
                  </div>
                </div>
              </div>
            </Link>
            <div
              className="BookMetaBox"
              css={css`
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                border-bottom: 1px #e6e8eb solid;
              `}
            >
              <h3
                className="RankPosition"
                css={css`
                  height: 22px;
                  margin-right: 21px;
                  font-size: 18px;
                  font-weight: bold;
                  text-align: center;
                  color: #000000;
                `}
              >
                {i + 1}
              </h3>
              <div
                className="Container"
                css={css`
                  width: 100%;
                  display: flex;
                  flex-direction: column;
                `}
              >
                <Link to="/">
                  <div
                    className="BookTitle-BookMetaBase"
                    css={css`
                      font-size: 14px;
                      font-weight: 700;
                      line-height: 1.33em;
                      color: #000000;
                      max-height: 2.7em;
                      margin-bottom: 4.5px;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      display: block;
                      word-wrap: break-word;
                      white-space: normal;
                      word-break: keep-all;
                    `}
                  >
                    {item.book_info.title}
                  </div>
                </Link>
                <span
                  className="AuthorWrapper"
                  css={css`
                    height: 19px;
                    font-size: 14px;
                    line-height: 1.36;
                    color: #636c73;
                    margin-bottom: 2px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: block;
                    word-wrap: break-word;
                    white-space: normal;
                    word-break: keep-all;
                  `}
                >
                  <Link to="/">{item.book_info.publisher}</Link>
                </span>
                <span>
                  <div role="img" className="RatingWrapper" css={ratingWrapper}>
                    <div className="StarContainer" css={starContainer}>
                      <img src="image/grade_black_24dp.svg" alt="" css={starImage} />
                      <img src="image/grade_black_24dp.svg" alt="" css={starImage} />
                      <img src="image/grade_black_24dp.svg" alt="" css={starImage} />
                      <img src="image/grade_black_24dp.svg" alt="" css={starImage} />
                      <img src="image/grade_black_24dp.svg" alt="" css={starImage} />
                    </div>
                    <span css={ratingNumber}>9</span>
                  </div>
                </span>
              </div>
            </div>
          </li>
        ))}
      </React.Fragment>
    );
  }
}

class ListCogBookRecommendBook extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        {this.props.serverlist.map((item) => (
          <li className="BookWrapper" key={item._id} css={bookWrapper}>
            <Link
              to="/"
              className="StyledAnchor"
              css={css`
                display: inline-block;
              `}
            >
              <div className="StyledThumbnailWrapper" css={styledThumbnailWrapper}>
                <div className="ThumbnailWrapper" css={thumbnailWrapper}>
                  <img className="StyledThumbnailImage" src={item.book_info.bookcover.url_small} sizes="(max-wideth: 999px) 100px, 140px" alt={item.book_info.title} css={styledThumbnailImage} />
                  <div className="DiscountWrapper" css={discountWrapper}>
                    <div className="DiscountSticker" css={discountSticker}>
                      <span className="DiscountNumber" css={discountNumber}>
                        10
                      </span>
                      <span className="DiscountPercentage" css={discountPercentage}>
                        %
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <p className="RecommendationText" css={recommendationText}>
              {item.book_info.title}
            </p>
          </li>
        ))}
      </React.Fragment>
    );
  }
}

class ListPopularBook extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        {this.props.serverlist.map((item, i) => (
          <li
            type="small"
            className="RangkingBookItem"
            key={item._id}
            css={css`
              -ms-grid-column: 1;
              -ms-grid-row: 1;
              display: flex;
              align-items: center;
              box-sizing: content-box;
            `}
          >
            <Link
              type="small"
              to="/"
              className="ThumbnailAnchor-small"
              css={css`
                flex: none;
                margin-right: 24px;
              `}
            >
              <div className="ThumbnailWrapper" css={thumbnailWrapper}>
                <img
                  className="ThumbnailImage"
                  src={item.book_info.bookcover.url_small}
                  alt={item.book_info.title}
                  sizes="50px"
                  css={css`
                    width: 50px;
                    max-height: 71px;
                  `}
                />
              </div>
            </Link>
            <div
              className="BookMetaBox"
              css={css`
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                border-bottom: 1px #e6e8eb solid;
              `}
            >
              <h3
                className="RankPosition"
                css={css`
                  height: 22px;
                  margin-right: 21px;
                  font-size: 18px;
                  font-weight: bold;
                  text-align: center;
                  color: #000000;
                `}
              >
                {i + 1}
              </h3>
              <div
                className="Container"
                css={css`
                  width: 100%;
                  display: flex;
                  flex-direction: column;
                `}
              >
                <Link to="/">
                  <div
                    className="BookTitle-BookMetaBase"
                    css={css`
                      font-size: 14px;
                      font-weight: 700;
                      line-height: 1.33em;
                      color: #000000;
                      max-height: 2.7em;
                      margin-bottom: 4.5px;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      display: block;
                      word-wrap: break-word;
                      white-space: normal;
                      word-break: keep-all;
                    `}
                  >
                    {item.book_info.title}
                  </div>
                </Link>
                <span
                  className="AuthorWrapper"
                  css={css`
                    height: 19px;
                    font-size: 14px;
                    line-height: 1.36;
                    color: #636c73;
                    margin-bottom: 2px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: block;
                    word-wrap: break-word;
                    white-space: normal;
                    word-break: keep-all;
                  `}
                >
                  <Link to="/">{item.book_info.publisher}</Link>
                </span>
              </div>
            </div>
          </li>
        ))}
      </React.Fragment>
    );
  }
}

class ListRecommendedBookContent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  move = (e) => {
    console.log("clicked");
    console.log(this.props.book_id);
    sessionStorage.setItem("book_id", this.props.book_id);
  };

  render() {
    return (
      <React.Fragment>
        <li className="BookWrapper" css={bookWrapper}>
          <Link
            to="/detail-book"
            className="StyledAnchor"
            onClick={this.move}
            css={css`
              display: inline-block;
            `}
          >
            <div className="StyledThumbnailWrapper" css={styledThumbnailWrapper}>
              <div className="ThumbnailWrapper" css={thumbnailWrapper}>
                <img className="StyledThumbnailImage" src={this.props.url_small} sizes="(max-wideth: 999px) 100px, 140px" alt={this.props.title} css={styledThumbnailImage} />
                <div className="DiscountWrapper" css={discountWrapper}>
                  <div className="DiscountSticker" css={discountSticker}>
                    <span className="DiscountNumber" css={discountNumber}>
                      10
                    </span>
                    <span className="DiscountPercentage" css={discountPercentage}>
                      %
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <div className="BookInfoContainer" css={bookInfoContainer}>
            <Link to="/">
              <div className="BookTitleBelowThumbanil" css={bookTitleBelowThumbanil} style={{ color: "white" }}>
                {this.props.title}
              </div>
            </Link>
            <span className="BookAuthorBelowThumbnail" css={bookAuthorBelowThumbnail} style={{ color: "white" }}>
              <Link to="/">{this.props.author}</Link>
            </span>
          </div>
        </li>
      </React.Fragment>
    );
  }
}

class ListRecommendedBook extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        {this.props.serverlist.map((item) => (
          <ListRecommendedBookContent key={item._id} book_id={item._id} title={item.book_info.title} author={item.book_info.author} url_small={item.book_info.bookcover.url_small} />
        ))}
      </React.Fragment>
    );
  }
}

class ReactRidi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sell_book_list: [],
      search: "",
    };
  }

  componentDidMount() {
    axios.get("/api/bookstore/get-sellbooklist").then((res) => {
      console.log(res.data);
      this.setState({ sell_book_list: res.data.sellbooklist });
    });
  }

  searchIndex = (e) => {
    let value = e.target.value;

    this.setState({ search: value });
  };

  searchNow = () => {
    const abc = this.state.sell_book_list;
    const bbb = abc.filter((it) => it.book_info.category.includes(this.state.search));
    console.log(bbb);
  };

  render() {
    let nowHours = new Date().getHours();
    let nowMinutes = new Date().getMinutes();

    return (
      <>
        <GlobalStyle />
        <RidiGnbArea />
        <div
          css={css`
            margin-top: 20px;
          `}
        ></div>
        <main
          className="Contents"
          css={css`
            margin: 0 auto;
          `}
        >
          <div
            className="CarouselWrapper"
            css={css`
              max-width: 2129.8px;
              width: 100%;
              margin: 0 auto;
              position: relative;
              overflow: hidden;
            `}
          >
            <div
              className="CarouselView-carouselHeight"
              css={css`
                width: 100%;
                height: 286.6666666666667px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
              `}
            >
              <ul
                className="CarouselList"
                css={css`
                  flex: none;
                  display: flex;
                  align-items: center;
                `}
              >
                <li
                  className="CarouselItemContainer"
                  css={css`
                    flex: none;
                    position: relative;
                    width: 414.95px;
                    height: 276.6333333333333px;
                    overflow: hidden;
                    border-radius: 6px;
                    line-height: 0;
                    margin: 0 5px;
                  `}
                >
                  <Link
                    to="/"
                    tabindex="-1"
                    className="BannerImageLink"
                    css={css`
                      width: 100%;
                      height: 100%;
                      display: inline-block;
                      outline: none;
                    `}
                  >
                    <img
                      alt="노블엔진_만능감정사 Q의 사건수첩 세트(--04-10)"
                      src="image/RidiEvent1.jpg"
                      className="BannerImage"
                      css={css`
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        object-position: 0 0;
                      `}
                    />
                  </Link>
                </li>
                <li
                  className="CarouselItemContainer-Center"
                  css={css`
                    flex: none;
                    position: relative;
                    width: 430px;
                    height: 286.6666666666667px;
                    overflow: hidden;
                    border-radius: 6px;
                    line-height: 0;
                    margin: 0 5px;
                  `}
                >
                  <Link
                    to="/"
                    tabindex="0"
                    className="BannerImageLink"
                    css={css`
                      width: 100%;
                      height: 100%;
                      display: inline-block;
                      outline: none;
                    `}
                  >
                    <img
                      alt="문학동네_엘릭시르 대여전 (--04-15)"
                      src="image/RidiEvent2.jpg"
                      className="BannerImage"
                      css={css`
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        object-position: 0 0;
                      `}
                    />
                  </Link>
                </li>
                <li
                  className="CarouselItemContainer"
                  css={css`
                    flex: none;
                    position: relative;
                    width: 414.95px;
                    height: 276.6333333333333px;
                    overflow: hidden;
                    border-radius: 6px;
                    line-height: 0;
                    margin: 0 5px;
                  `}
                >
                  <Link
                    to="/"
                    tabindex="-1"
                    className="BannerImageLink"
                    css={css`
                      width: 100%;
                      height: 100%;
                      display: inline-block;
                      outline: none;
                    `}
                  >
                    <img
                      alt="궁리_래리 고닉 (--04-13)"
                      src="image/RidiEvent3.jpg"
                      className="BannerImage"
                      css={css`
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        object-position: 0 0;
                      `}
                    />
                  </Link>
                </li>
              </ul>
            </div>
            <div
              className="CarouselControllerWrapper"
              css={css`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                pointer-events: none;
              `}
            >
              <div
                className="CarouselController"
                css={css`
                  width: 430px;
                  height: 286.6666666666667px;
                  position: relative;
                `}
              >
                <div
                  className="SlideBadge"
                  css={css`
                    position: absolute;
                    right: 10px;
                    bottom: 10px;
                    width: 54px;
                    height: 24px;
                    background-color: rgba(0, 0, 0, 0.4);
                    border: 1px solid rgba(255, 255, 255, 0.25);
                    border-radius: 12px;
                    font-size: 12px;
                    line-height: 22px;
                    text-align: center;
                    color: white;
                  `}
                >
                  <strong>17</strong> / 20
                </div>
              </div>
            </div>
            <div
              className="CarouselControllerWrapper"
              css={css`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                pointer-events: none;
              `}
            >
              <div
                className="ArrowWrapper"
                css={css`
                  opacity: 0.7;
                  margin: 0px 20px;
                  pointer-events: auto;
                `}
              >
                <button
                  type="button"
                  className="Arrow-clearOutline-defaultOpacity-Arrow-arrowStyle"
                  css={css`
                    background: white;
                    width: 40px;
                    height: 40px;
                    border-radius: 40px;
                    box-shadow: rgb(0 0 0 / 33%) 0px 0.8px 3px;
                    opacity: 0.5;
                    transition: opacity 0.1s ease 0s;
                    cursor: pointer;
                  `}
                >
                  <svg
                    width="11"
                    height="14"
                    className="leftRotate-mergedStyle"
                    css={css`
                      transform-origin: center center;
                      transform: rotateX(180deg) translate(-2%, 0px) rotate(180deg);
                      top: 1.5px;
                      fill: rgb(128, 137, 145);
                    `}
                  >
                    <path d="M1.78 13.013L7.68 7 1.78.987 2.75 0l6.875 7-6.875 7z"></path>
                  </svg>
                  <span
                    className="a11y"
                    aria-label="이전 배너 보기"
                    css={css`
                      position: absolute;
                      width: 1px;
                      height: 1px;
                      margin: -1px;
                      padding: 0px;
                      overflow: hidden;
                      border: 0px;
                      clip: rect(0px, 0px, 0px, 0px);
                    `}
                  >
                    이전 배너 보기
                  </span>
                </button>
              </div>
              <div
                className="CarouselController"
                css={css`
                  position: relative;
                  width: 430px;
                  height: 286.6666666666667px;
                `}
              ></div>
              <div
                className="ArrowWrapper"
                css={css`
                  opacity: 0.7;
                  margin: 0px 20px;
                  pointer-events: auto;
                `}
              >
                <button
                  type="button"
                  className="Arrow-clearOutline-defaultOpacity-Arrow-arrowStyle"
                  css={css`
                    background: white;
                    width: 40px;
                    height: 40px;
                    border-radius: 40px;
                    box-shadow: rgb(0 0 0 / 33%) 0px 0.8px 3px;
                    opacity: 0.5;
                    transition: opacity 0.1s ease 0s;
                    cursor: pointer;
                  `}
                >
                  <svg
                    width="11"
                    height="14"
                    className="RightmergedStyle"
                    css={css`
                      top: 1.5px;
                      fill: rgb(128, 137, 145);
                    `}
                  >
                    <path d="M1.78 13.013L7.68 7 1.78.987 2.75 0l6.875 7-6.875 7z"></path>
                  </svg>
                  <span
                    className="a11y"
                    aria-label="다음 배너 보기"
                    css={css`
                      position: absolute;
                      width: 1px;
                      height: 1px;
                      margin: -1px;
                      padding: 0px;
                      overflow: hidden;
                      border: 0px;
                      clip: rect(0px, 0px, 0px, 0px);
                    `}
                  >
                    다음 배너 보기
                  </span>
                </button>
              </div>
            </div>
          </div>
          <section
            className="QuickMenu"
            css={css`
              position: relative;
              max-width: 1000px;
              margin: 0 auto;
            `}
          >
            <h2
              className="HiddenText"
              css={css`
                position: absolute;
                width: 1px;
                height: 1px;
                margin: -1px;
                padding: 0px;
                overflow: hidden;
                border: 0px;
                clip: rect(0px, 0px, 0px, 0px);
              `}
            >
              퀵메뉴
            </h2>
            <ul
              className="QuickMenuWrapper"
              css={css`
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                padding: 24px 13px;
                max-width: 1000px;
                margin: 0 auto;
                overflow: auto;
              `}
            >
              <li
                className="MenuItem"
                css={css`
                  padding-left: 10px;
                  margin-right: 9px;
                  flex: none;
                  display: inline-block;
                `}
              >
                <Link
                  className="MenuItemAnchor"
                  to="/"
                  css={css`
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    position: relative;
                    width: 100%;
                    flex: none;
                  `}
                >
                  <svg
                    className="QuickMenuShape"
                    css={css`
                      flex: none;
                      height: 44px;
                      width: 44px;
                    `}
                  >
                    <rect
                      rx="8"
                      ry="8"
                      width="44"
                      height="44"
                      css={css`
                        fill: rgb(223, 19, 19);
                        stroke: black;
                        stroke-width: 1;
                      `}
                    />
                  </svg>
                  <img
                    src="image/new2.svg"
                    className="QuickMenuImage"
                    css={css`
                      top: 0;
                      position: absolute;
                      width: 44px;
                      height: 44px;
                    `}
                  />
                  <span
                    css={css`
                      font-size: 13px;
                      line-height: 1.23;
                      color: #525a61;
                      min-width: 76px;
                      text-align: center;
                      word-break: keep-all;
                      margin-top: 8px;
                    `}
                  >
                    신간
                  </span>
                </Link>
              </li>
              <li
                className="MenuItem"
                css={css`
                  margin-right: 9px;
                  flex: none;
                  display: inline-block;
                `}
              >
                <Link
                  className="MenuItemAnchor"
                  to="/"
                  css={css`
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    position: relative;
                    width: 100%;
                    flex: none;
                  `}
                >
                  <svg
                    className="QuickMenuShape"
                    css={css`
                      flex: none;
                      height: 44px;
                      width: 44px;
                    `}
                  >
                    <rect
                      rx="8"
                      ry="8"
                      width="44"
                      height="44"
                      css={css`
                        fill: red;
                        stroke: black;
                        stroke-width: 1;
                        opacity: 0.5;
                      `}
                    />
                  </svg>
                  <img
                    src="category_black_24dp.svg"
                    className="QuickMenuImage"
                    css={css`
                      top: 0;
                      position: absolute;
                      width: 44px;
                      height: 44px;
                    `}
                  />
                  <span
                    css={css`
                      font-size: 13px;
                      line-height: 1.23;
                      color: #525a61;
                      min-width: 76px;
                      text-align: center;
                      word-break: keep-all;
                      margin-top: 8px;
                    `}
                  >
                    이벤트
                  </span>
                </Link>
              </li>
              <li
                className="MenuItem"
                css={css`
                  margin-right: 9px;
                  flex: none;
                  display: inline-block;
                `}
              >
                <Link
                  className="MenuItemAnchor"
                  to="/"
                  css={css`
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    position: relative;
                    width: 100%;
                    flex: none;
                  `}
                >
                  <svg
                    className="QuickMenuShape"
                    css={css`
                      flex: none;
                      height: 44px;
                      width: 44px;
                    `}
                  >
                    <rect
                      rx="8"
                      ry="8"
                      width="44"
                      height="44"
                      css={css`
                        fill: red;
                        stroke: black;
                        stroke-width: 1;
                        opacity: 0.5;
                      `}
                    />
                  </svg>
                  <img
                    src="category_black_24dp.svg"
                    className="QuickMenuImage"
                    css={css`
                      top: 0;
                      position: absolute;
                      width: 44px;
                      height: 44px;
                    `}
                  />
                  <span
                    css={css`
                      font-size: 13px;
                      line-height: 1.23;
                      color: #525a61;
                      min-width: 76px;
                      text-align: center;
                      word-break: keep-all;
                      margin-top: 8px;
                    `}
                  >
                    베스트셀러
                  </span>
                </Link>
              </li>
              <li
                className="MenuItem"
                css={css`
                  margin-right: 9px;
                  flex: none;
                  display: inline-block;
                `}
              >
                <Link
                  className="MenuItemAnchor"
                  to="/"
                  css={css`
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    position: relative;
                    width: 100%;
                    flex: none;
                  `}
                >
                  <svg
                    className="QuickMenuShape"
                    css={css`
                      flex: none;
                      height: 44px;
                      width: 44px;
                    `}
                  >
                    <rect
                      rx="8"
                      ry="8"
                      width="44"
                      height="44"
                      css={css`
                        fill: red;
                        stroke: black;
                        stroke-width: 1;
                        opacity: 0.5;
                      `}
                    />
                  </svg>
                  <img
                    src="category_black_24dp.svg"
                    className="QuickMenuImage"
                    css={css`
                      top: 0;
                      position: absolute;
                      width: 44px;
                      height: 44px;
                    `}
                  />
                  <span
                    css={css`
                      font-size: 13px;
                      line-height: 1.23;
                      color: #525a61;
                      min-width: 76px;
                      text-align: center;
                      word-break: keep-all;
                      margin-top: 8px;
                    `}
                  >
                    대여관
                  </span>
                </Link>
              </li>
              <li
                className="MenuItem"
                css={css`
                  margin-right: 9px;
                  flex: none;
                  display: inline-block;
                `}
              >
                <Link
                  className="MenuItemAnchor"
                  to="/"
                  css={css`
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    position: relative;
                    width: 100%;
                    flex: none;
                  `}
                >
                  <svg
                    className="QuickMenuShape"
                    css={css`
                      flex: none;
                      height: 44px;
                      width: 44px;
                    `}
                  >
                    <rect
                      rx="8"
                      ry="8"
                      width="44"
                      height="44"
                      css={css`
                        fill: red;
                        stroke: black;
                        stroke-width: 1;
                        opacity: 0.5;
                      `}
                    />
                  </svg>
                  <img
                    src="category_black_24dp.svg"
                    className="QuickMenuImage"
                    css={css`
                      top: 0;
                      position: absolute;
                      width: 44px;
                      height: 44px;
                    `}
                  />
                  <span
                    css={css`
                      font-size: 13px;
                      line-height: 1.23;
                      color: #525a61;
                      min-width: 76px;
                      text-align: center;
                      word-break: keep-all;
                      margin-top: 8px;
                    `}
                  >
                    인기세트
                  </span>
                </Link>
              </li>
              <li
                className="MenuItem"
                css={css`
                  margin-right: 9px;
                  flex: none;
                  display: inline-block;
                `}
              >
                <Link
                  className="MenuItemAnchor"
                  to="/"
                  css={css`
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    position: relative;
                    width: 100%;
                    flex: none;
                  `}
                >
                  <svg
                    className="QuickMenuShape"
                    css={css`
                      flex: none;
                      height: 44px;
                      width: 44px;
                    `}
                  >
                    <rect
                      rx="8"
                      ry="8"
                      width="44"
                      height="44"
                      css={css`
                        fill: red;
                        stroke: black;
                        stroke-width: 1;
                        opacity: 0.5;
                      `}
                    />
                  </svg>
                  <img
                    src="category_black_24dp.svg"
                    className="QuickMenuImage"
                    css={css`
                      top: 0;
                      position: absolute;
                      width: 44px;
                      height: 44px;
                    `}
                  />
                  <span
                    css={css`
                      font-size: 13px;
                      line-height: 1.23;
                      color: #525a61;
                      min-width: 76px;
                      text-align: center;
                      word-break: keep-all;
                      margin-top: 8px;
                    `}
                  >
                    신간 캘린더
                  </span>
                </Link>
              </li>
              <li
                className="MenuItem"
                css={css`
                  margin-right: 9px;
                  flex: none;
                  display: inline-block;
                `}
              >
                <Link
                  className="MenuItemAnchor"
                  to="/"
                  css={css`
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    position: relative;
                    width: 100%;
                    flex: none;
                  `}
                >
                  <svg
                    className="QuickMenuShape"
                    css={css`
                      flex: none;
                      height: 44px;
                      width: 44px;
                    `}
                  >
                    <rect
                      rx="8"
                      ry="8"
                      width="44"
                      height="44"
                      css={css`
                        fill: red;
                        stroke: black;
                        stroke-width: 1;
                        opacity: 0.5;
                      `}
                    />
                  </svg>
                  <img
                    src="category_black_24dp.svg"
                    className="QuickMenuImage"
                    css={css`
                      top: 0;
                      position: absolute;
                      width: 44px;
                      height: 44px;
                    `}
                  />
                  <span
                    css={css`
                      font-size: 13px;
                      line-height: 1.23;
                      color: #525a61;
                      min-width: 76px;
                      text-align: center;
                      word-break: keep-all;
                      margin-top: 8px;
                    `}
                  >
                    혜택
                  </span>
                </Link>
              </li>
              <li
                className="MenuItem"
                css={css`
                  margin-right: 9px;
                  flex: none;
                  display: inline-block;
                `}
              >
                <Link
                  className="MenuItemAnchor"
                  to="/"
                  css={css`
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    position: relative;
                    width: 100%;
                    flex: none;
                  `}
                >
                  <svg
                    className="QuickMenuShape"
                    css={css`
                      flex: none;
                      height: 44px;
                      width: 44px;
                    `}
                  >
                    <rect
                      rx="8"
                      ry="8"
                      width="44"
                      height="44"
                      css={css`
                        fill: red;
                        stroke: black;
                        stroke-width: 1;
                        opacity: 0.5;
                      `}
                    />
                  </svg>
                  <img
                    src="category_black_24dp.svg"
                    className="QuickMenuImage"
                    css={css`
                      top: 0;
                      position: absolute;
                      width: 44px;
                      height: 44px;
                    `}
                  />
                  <span
                    css={css`
                      font-size: 13px;
                      line-height: 1.23;
                      color: #525a61;
                      min-width: 76px;
                      text-align: center;
                      word-break: keep-all;
                      margin-top: 8px;
                    `}
                  >
                    위클리 쿠폰
                  </span>
                </Link>
              </li>
              <li
                className="MenuItem"
                css={css`
                  margin-right: 9px;
                  flex: none;
                  display: inline-block;
                `}
              >
                <Link
                  className="MenuItemAnchor"
                  to="/"
                  css={css`
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    position: relative;
                    width: 100%;
                    flex: none;
                  `}
                >
                  <svg
                    className="QuickMenuShape"
                    css={css`
                      flex: none;
                      height: 44px;
                      width: 44px;
                    `}
                  >
                    <rect
                      rx="8"
                      ry="8"
                      width="44"
                      height="44"
                      css={css`
                        fill: red;
                        stroke: black;
                        stroke-width: 1;
                        opacity: 0.5;
                      `}
                    />
                  </svg>
                  <img
                    src="category_black_24dp.svg"
                    className="QuickMenuImage"
                    css={css`
                      top: 0;
                      position: absolute;
                      width: 44px;
                      height: 44px;
                    `}
                  />
                  <span
                    css={css`
                      font-size: 13px;
                      line-height: 1.23;
                      color: #525a61;
                      min-width: 76px;
                      text-align: center;
                      word-break: keep-all;
                      margin-top: 8px;
                    `}
                  >
                    콕북 스터디
                  </span>
                </Link>
              </li>
            </ul>
          </section>
          <section
            className="RecommenderBookWrapper"
            css={css`
              padding-top: 36px;
              padding-bottom: 36px;
              background: #afbdd4;
            `}
          >
            <h2
              className="sectionTitle"
              css={css`
                max-width: 1000px;
                margin: 0 auto;
                padding-left: 25px;
                padding-right: 8px;
                font-size: 19px;
                font-weight: normal;
                color: white;
              `}
            >
              집 앞 서점에 방금 나온 신간!
            </h2>
            <div
              className="CarouselWrapper"
              css={css`
                width: 1005px;
                margin: 20px auto 0px;
                position: relative;
              `}
            >
              <div
                className="BookCarouselWrapper"
                css={css`
                  width: 964px;
                  margin: -8px auto 0px;
                  overflow: hidden;
                `}
              >
                <ul
                  className="BookCarouselList"
                  css={css`
                    display: flex;
                    flex-wrap: nowrap;
                    padding-top: 8px;
                    padding-left: 7px;
                  `}
                >
                  <ListRecommendedBook serverlist={this.state.sell_book_list} />
                </ul>
              </div>
            </div>
          </section>
          <section
            className="SectionWrapper"
            css={css`
              max-width: 1000px;
              margin: 0 auto;
              padding: 24px 0;
              position: relative;
            `}
          >
            <h2
              className="SectionTitle"
              css={css`
                max-width: 990px;
                margin: 0 auto 16px;
                padding: 6px 20px 0;
                display: flex;
                flex-direction: column;
                font-size: 19px;
                font-weight: normal;
                line-height: 26px;
                color: #000000;
                word-break: keep-all;
              `}
            >
              <div
                className="TimerWrapper"
                css={css`
                  width: 96px;
                  height: 30px;
                  padding: 9px;
                  padding-right: 13px;
                  margin-bottom: 16px;
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  background-image: linear-gradient(255deg, #0077d9 4%, #72d2e0);
                  border-radius: 14px;
                  font-size: 13px;
                  font-weight: bold;
                  color: white;
                `}
              >
                <img
                  src="image/watch_later_white_24dp.svg"
                  height="12"
                  width="12"
                  alt="시계아이콘"
                  css={css`
                    flex: none;
                  `}
                />
                <span
                  css={css`
                    flex: none;
                  `}
                >
                  {nowHours}시 {nowMinutes}분
                </span>
              </div>
              "사람들이 지금 많이 읽고 있는 책"
            </h2>
            <div
              className="BooklistControllerContainer"
              css={css`
                position: relative;
              `}
            >
              <div
                className="SlidingContainer-scrollBarHidden"
                css={css`
                  display: flex;
                  flex-wrap: nowrap;
                  overflow-x: auto;
                  overflow-y: hidden;
                `}
              >
                <div
                  className="Content-BookListWrapper"
                  css={css`
                    flex: 1 0 auto;
                  `}
                >
                  <ul
                    type="small"
                    className="BookList-grid"
                    css={css`
                      display: grid;
                      grid: repeat(3, 94px) / auto-flow 308px;
                      grid-column-gap: 13px;
                      padding: 0 24px;
                    `}
                  >
                    <ListPopularBook serverlist={this.state.sell_book_list} />
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section
            className="RecommenderBookWrapper-noBG"
            css={css`
              padding-top: 24px;
              padding-bottom: 24px;
            `}
          >
            <h2
              className="sectionTitle"
              css={css`
                max-width: 1000px;
                margin: 0 auto;
                padding-left: 25px;
                padding-right: 8px;
                font-size: 19px;
                font-weight: normal;
              `}
            >
              오늘, 콕북의 발견
            </h2>
            <div
              className="CarouselWrapper"
              css={css`
                width: 1005px;
                margin: 20px auto 0px;
                position: relative;
              `}
            >
              <div
                className="BookCarouselWrapper"
                css={css`
                  width: 964px;
                  margin: -8px auto 0px;
                  overflow: hidden;
                `}
              >
                <ul
                  className="BookCarouselList"
                  css={css`
                    display: flex;
                    flex-wrap: nowrap;
                    padding-top: 8px;
                    padding-left: 7px;
                  `}
                >
                  <ListCogBookRecommendBook serverlist={this.state.sell_book_list} />
                </ul>
              </div>
            </div>
          </section>
          <section
            className="SectionWrapper"
            css={css`
              max-width: 1000px;
              margin: 0 auto;
              padding: 24px 0;
              position: relative;
            `}
          >
            <h2
              className="SectionTitle"
              css={css`
                max-width: 990px;
                margin: 0 auto 16px;
                padding: 6px 20px 0;
                display: flex;
                flex-direction: column;
                font-size: 19px;
                font-weight: normal;
                line-height: 26px;
                color: #000000;
                word-break: keep-all;
              `}
            >
              <Link
                to="/"
                className="LingWrapper"
                css={css`
                  display: flex;
                  align-items: center;
                  color: black;
                `}
              >
                베스트셀러
                <img
                  src="image/arrow_forward_ios_black_24dp.svg"
                  alt="화살표"
                  css={css`
                    flex: none;
                    width: 11px;
                    height: 14px;
                    margin-left: 8px;
                  `}
                />
              </Link>
            </h2>
            <div
              className="BooklistControllerContainer"
              css={css`
                position: relative;
              `}
            >
              <div
                className="SlidingContainer-scrollBarHidden"
                css={css`
                  display: flex;
                  flex-wrap: nowrap;
                  overflow-x: auto;
                  overflow-y: hidden;
                `}
              >
                <div
                  className="Content-BookListWrapper"
                  css={css`
                    flex: 1 0 auto;
                  `}
                >
                  <ul
                    type="big"
                    className="BookList-grid"
                    css={css`
                      display: grid;
                      grid: repeat(3, 138px) / auto-flow 308px;
                      grid-column-gap: 13px;
                      padding: 0 24px;
                    `}
                  >
                    <ListBestSellerBook serverlist={this.state.sell_book_list} />
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section
            className="RecommenderBookWrapper-noBG-withAuthor"
            css={css`
              padding-top: 24px;
              padding-bottom: 24px;
            `}
          >
            <h2
              className="sectionTitle"
              css={css`
                max-width: 1000px;
                margin: 0 auto;
                padding-left: 25px;
                padding-right: 8px;
                font-size: 19px;
                font-weight: normal;
              `}
            >
              봄 바람이 살랑살랑, 공부하기 좋은 시간
            </h2>
            <div
              className="CarouselWrapper"
              css={css`
                width: 1005px;
                margin: 20px auto 0px;
                position: relative;
              `}
            >
              <div
                className="BookCarouselWrapper"
                css={css`
                  width: 964px;
                  margin: -8px auto 0px;
                  overflow: hidden;
                `}
              >
                <ul
                  className="BookCarouselList"
                  css={css`
                    display: flex;
                    flex-wrap: nowrap;
                    padding-top: 8px;
                    padding-left: 7px;
                  `}
                >
                  <ListGoodForStudy serverlist={this.state.sell_book_list} />
                </ul>
              </div>
            </div>
          </section>
          <section
            className="RecommenderBookWrapper-noBG-withAuthor"
            css={css`
              padding-top: 24px;
              padding-bottom: 24px;
            `}
          >
            <h2
              className="sectionTitle"
              css={css`
                max-width: 1000px;
                margin: 0 auto;
                padding-left: 25px;
                padding-right: 8px;
                font-size: 19px;
                font-weight: normal;
              `}
            >
              집 콕! 북 스터디하기 좋은 계절
            </h2>
            <div
              className="CarouselWrapper"
              css={css`
                width: 1005px;
                margin: 20px auto 0px;
                position: relative;
              `}
            >
              <div
                className="BookCarouselWrapper"
                css={css`
                  width: 964px;
                  margin: -8px auto 0px;
                  overflow: hidden;
                `}
              >
                <ul
                  className="BookCarouselList"
                  css={css`
                    display: flex;
                    flex-wrap: nowrap;
                    padding-top: 8px;
                    padding-left: 7px;
                  `}
                >
                  <ListGoodForHomeStudy serverlist={this.state.sell_book_list} />
                </ul>
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default ReactRidi;

const bookWrapper = css`
  display: flex;
  flex-direction: column;
  box-sizing: content-box;
  min-width: 140px;
  width: 140px;
  height: 100%;
`;

const styledThumbnailWrapper = css`
  width: 140px;
  height: 216px;
  display: flex;
  align-items: flex-end;
  flex-shrink: 0;
`;

const thumbnailWrapper = css`
  position: relative;
  line-height: 0;
  max-height: inherit;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), linear-gradient(90deg, rgba(0, 0, 0, 0.15) 0, rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 0) 95%, rgba(0, 0, 0, 0.15) 100%);
`;

const discountWrapper = css`
  position: absolute;
  display: block;
  top: -7px;
  left: -7px;
`;

const styledThumbnailImage = css`
  width: 140px;
  max-height: calc(140px * 1.618 - 10px);
`;

const discountSticker = css`
  width: 34px;
  height: 34px;
  border-radius: 34px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  background: #59667a;
  position: relative;
  color: white;
`;

const discountNumber = css`
  font-size: 16px;
  mix-blend-mode: normal;
  font-weight: bold;
  line-height: 14px;
  opacity: 0.99;
`;

const discountPercentage = css`
  font-weight: bold;
  margin-left: 1px;
  font-size: 14px;
  position: relative;
  line-height: 9px;
`;

const bookInfoContainer = css`
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;

const bookTitleBelowThumbanil = css`
  font-weight: 700;
  line-height: 1.33em;
  max-height: 2.7em;
  margin-bottom: 4.5px;
  font-size: 14px;
  color: black;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  word-wrap: break-word;
  white-space: normal;
  word-break: keep-all;
`;

const bookAuthorBelowThumbnail = css`
  height: 19px;
  font-size: 14px;
  line-height: 1.36;
  color: #636c73;
  margin-bottom: 2px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  word-wrap: break-word;
  white-space: normal;
  word-break: keep-all;
`;

const ratingWrapper = css`
  display: inline-flex;
  align-items: center;
  font-size: 11px;
  color: #999999;
  line-height: 1.09;
`;

const starContainer = css`
  position: relative;
  margin-right: 2px;
  line-height: 0;
`;

const starImage = css`
  width: 10px;
  height: 10px;
`;

const ratingNumber = css`
  height: 10px;
  font-size: 11px;
  line-height: 1.09;
  color: #61ac00;
`;

const recommendationText = css`
  padding-left: 0;
  position: relative;
  margin-top: 10px;
  line-height: 18px;
  text-align: start;
  font-weight: bold;
  font-size: 13px;
  width: 140px;
`;

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import LogoImage from "./logo_white.png";

function Ridi() {
  return (
    <>
      <div
        className="GNBWrapper"
        css={css`
          border-bottom: 1px solid #e6e8eb;
        `}
      >
        <header
          css={css`
            background: #1f8ce6;
            max-width: 100%;
          `}
        >
          <div
            className="gnbContainer"
            css={css`
              max-width: 1000px;
              margin: 0 auto;
              display: flex;
              flex-direction: column;
            `}
          >
            <div
              className="navigation"
              css={css`
                padding: 16px 16px 24px 20px;
              `}
            >
              <div
                className="LogoSearchArea"
                css={css`
                  display: flex;
                  flex-direction: row;
                `}
              >
                <ul
                  className="LogoWrapper"
                  css={css`
                    min-height: 30px;
                    display: flex;
                    flex: none;
                    margin-bottom: 0;
                    margin-right: 20px;
                  `}
                >
                  <li
                    className="LogoItem"
                    css={css`
                      display: flex;
                      align-items: center;
                      line-height: 0;
                    `}
                  >
                    <a className="LogoItemLink" href="/">
                      <img
                        css={css`
                          width: 119px;
                          height: 36px;
                        `}
                        src={LogoImage}
                        alt="CogBook"
                      />{" "}
                    </a>
                  </li>
                </ul>
                <form
                  className="SearchWrapper"
                  css={css`
                    max-width: 340px;
                    flex: 1;
                  `}
                >
                  <label
                    className="SearchBoxWrapper"
                    css={css`
                      display: flex;
                      align-items: center;
                      border-radius: 3px;
                      background-color: white;
                    `}
                  >
                    <img
                      src={require("./round_search_black_18dp.png")}
                      alt="검색"
                      css={css`
                        width: 24px;
                        height: 24px;
                        margin: 0 4px 0 6px;
                        opacity: 0.7;
                        flex: none;
                      `}
                    />
                    <input
                      className="SearchBox"
                      type="search"
                      placeholder="제목, 저자, 출판사 검색"
                      css={css`
                        flex: 1;
                        height: 36px;
                        background: none;
                        appearance: none;
                        box-shadow: none;
                        border: none;
                        font-size: 16px;
                        outline: none;
                      `}
                    />
                  </label>
                </form>
                <ul
                  className="ButtonWrapper"
                  css={css`
                    flex: 1;
                    margin-left: auto;
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                  `}
                >
                  <li>
                    <button
                      css={css`
                        height: 30px;
                        color: white;
                        background: #1f8ce6;
                        padding: 0 16px;
                        border: 1px solid #99d1ff;
                      `}
                    >
                      회원가입
                    </button>
                  </li>
                  <li>
                    <button
                      css={css`
                        height: 30px;
                        color: #1f8ce6;
                        background: white;
                        padding: 0 16px;
                        border: 1px solid #99d1ff;
                      `}
                    >
                      로그인
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <ul
              className="SubMainGNB"
              css={css`
                display: flex;
                padding: 0 20px;
              `}
            >
              <li
                className="SubMainGNB-Item-Wrapper"
                css={css`
                  margin-right: 50px;
                  display: flex;
                  flex-direction: column;
                  height: 37px;
                  padding-bottom: 0px;
                `}
              >
                <a
                  href="/"
                  className="StyledAnchor"
                  css={css`
                    height: 100%;
                    margin: 0 auto;
                    display: flex;
                    justify-content: center;
                    position: relative;
                    padding: 0 5px 2px 4px;
                  `}
                >
                  <img
                    src={require("./home_white_24dp (1).svg")}
                    alt="홈"
                    css={css`
                      margin-right: 10px;
                      width: 22px;
                      height: 22px;
                    `}
                  />
                  <span
                    className="labelStyle"
                    css={css`
                      height: 16px;
                      margin-left: 5px;
                      text-align: center;
                      font-size: 16px;
                      color: white;
                      font-weight: bold;
                    `}
                  >
                    홈
                  </span>
                </a>
                <div
                  className="SubMainGNB_Selected"
                  css={css`
                    display: block;
                    background: rgb(153, 209, 255);
                    height: 5px;
                    width: 100%;
                    top: 1px;
                  `}
                ></div>
              </li>
              <li
                className="SubMainGNB-Item-Wrapper"
                css={css`
                  margin-right: 50px;
                  display: flex;
                  flex-direction: column;
                  height: 37px;
                  padding-bottom: 4px;
                `}
              >
                <a
                  href="/"
                  className="StyledAnchor"
                  css={css`
                    height: 100%;
                    margin: 0 auto;
                    display: flex;
                    justify-content: center;
                    position: relative;
                    padding: 0 5px 2px 4px;
                  `}
                >
                  <img
                    src={require("./notifications_white_24dp.svg")}
                    alt="홈"
                    css={css`
                      margin-right: 10px;
                      width: 22px;
                      height: 22px;
                    `}
                  />
                  <span
                    className="labelStyle"
                    css={css`
                      height: 16px;
                      margin-left: 5px;
                      text-align: center;
                      font-size: 16px;
                      color: white;
                      font-weight: bold;
                    `}
                  >
                    알림
                  </span>
                </a>
                <div
                  className="SubMainGNB_Selected"
                  css={css`
                    display: block;
                    background: transparent;
                    height: 5px;
                    width: 100%;
                    top: 1px;
                  `}
                ></div>
              </li>
              <li
                className="SubMainGNB-Item-Wrapper"
                css={css`
                  margin-right: 50px;
                  display: flex;
                  flex-direction: column;
                  height: 37px;
                  padding-bottom: 4px;
                `}
              >
                <a
                  href="/"
                  className="StyledAnchor"
                  css={css`
                    height: 100%;
                    margin: 0 auto;
                    display: flex;
                    justify-content: center;
                    position: relative;
                    padding: 0 5px 2px 4px;
                  `}
                >
                  <img
                    src={require("./shopping_cart_white_24dp.svg")}
                    alt="홈"
                    css={css`
                      margin-right: 10px;
                      width: 22px;
                      height: 22px;
                    `}
                  />
                  <span
                    className="labelStyle"
                    css={css`
                      height: 16px;
                      margin-left: 5px;
                      text-align: center;
                      font-size: 16px;
                      color: white;
                      font-weight: bold;
                    `}
                  >
                    카트
                  </span>
                </a>
                <div
                  className="SubMainGNB_Selected"
                  css={css`
                    display: block;
                    background: transparent;
                    height: 5px;
                    width: 100%;
                    top: 1px;
                  `}
                ></div>
              </li>
              <li
                className="SubMainGNB-Item-Wrapper"
                css={css`
                  margin-right: 50px;
                  display: flex;
                  flex-direction: column;
                  height: 37px;
                  padding-bottom: 4px;
                `}
              >
                <a
                  href="/"
                  className="StyledAnchor"
                  css={css`
                    height: 100%;
                    margin: 0 auto;
                    display: flex;
                    justify-content: center;
                    position: relative;
                    padding: 0 5px 2px 4px;
                  `}
                >
                  <img
                    src={require("./person_outline_white_24dp.svg")}
                    alt="홈"
                    css={css`
                      margin-right: 10px;
                      width: 22px;
                      height: 22px;
                    `}
                  />
                  <span
                    className="labelStyle"
                    css={css`
                      height: 16px;
                      margin-left: 5px;
                      text-align: center;
                      font-size: 16px;
                      color: white;
                      font-weight: bold;
                    `}
                  >
                    마이콕북
                  </span>
                </a>
                <div
                  className="SubMainGNB_Selected"
                  css={css`
                    display: block;
                    background: transparent;
                    height: 5px;
                    width: 100%;
                    top: 1px;
                  `}
                ></div>
              </li>
            </ul>
          </div>
        </header>
        <div
          className="Categorytop"
          css={css`
            max-width: 1000px;
            margin: 0 auto;
          `}
        >
          <ul
            className="CategoryTopWrapper"
            css={css`
              display: flex;
              flex-direction: row;
              height: 48px;
              align-items: center;
            `}
          >
            <li
              className="CategoryTopItemWrapper"
              css={css`
                height: 100%;
                color: #404740;
                cursor: pinter;
              `}
            >
              <a
                href="/"
                css={css`
                  display: flex;
                  padding: 0 20px;
                  align-items: center;
                  font-weight: bolder;
                  line-height: 48px;
                  height: 100%;
                  width: 100%;
                `}
              >
                <img
                  src={require("./category_black_24dp.svg")}
                  alt="카테고리"
                  css={css`
                    width: 22px;
                    height: 22px;
                    opacity: 0.7;
                  `}
                />
              </a>
            </li>
            <li
              className="CategoryTopItemWrapper"
              css={css`
                height: 100%;
                margin-right: 10px;
                text-align: center;
                color: #404740;
                cursor: pointer;
              `}
            >
              <a
                href="/"
                css={css`
                  display: inline-block;
                  padding: 0 22px;
                  font-size: 16px;
                  font-weight: bolder;
                  line-height: 48px;
                  height: 100%;
                  width: 100%;
                `}
              >
                <span>일반</span>
              </a>
            </li>
            <li
              className="CategoryTopItemWrapper"
              css={css`
                height: 100%;
                margin-right: 10px;
                text-align: center;
                color: #404740;
                cursor: pinter;
              `}
            >
              <a
                href="/"
                css={css`
                  display: inline-block;
                  padding: 0 22px;
                  font-size: 16px;
                  font-weight: bolder;
                  line-height: 48px;
                  height: 100%;
                  width: 100%;
                `}
              >
                <span>로맨스</span>
              </a>
            </li>
            <li
              className="CategoryTopItemWrapper"
              css={css`
                height: 100%;
                margin-right: 10px;
                text-align: center;
                color: #404740;
                cursor: pinter;
              `}
            >
              <a
                href="/"
                css={css`
                  display: inline-block;
                  padding: 0 22px;
                  font-size: 16px;
                  font-weight: bolder;
                  line-height: 48px;
                  height: 100%;
                  width: 100%;
                `}
              >
                <span>판타지</span>
              </a>
            </li>
            <li
              className="CategoryTopItemWrapper"
              css={css`
                height: 100%;
                margin-right: 10px;
                text-align: center;
                color: #404740;
                cursor: pinter;
              `}
            >
              <a
                href="/"
                css={css`
                  display: inline-block;
                  padding: 0 22px;
                  font-size: 16px;
                  font-weight: bolder;
                  line-height: 48px;
                  height: 100%;
                  width: 100%;
                `}
              >
                <span>만화</span>
              </a>
            </li>
            <li
              className="CategoryTopItemWrapper"
              css={css`
                height: 100%;
                margin-right: 10px;
                text-align: center;
                color: #404740;
                cursor: pinter;
              `}
            >
              <a
                href="/"
                css={css`
                  display: inline-block;
                  padding: 0 22px;
                  font-size: 16px;
                  font-weight: bolder;
                  line-height: 48px;
                  height: 100%;
                  width: 100%;
                `}
              >
                <span>BL</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        css={css`
          margin-bottom: 20px;
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
                <a
                  href="/"
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
                    src={require("./image/한국사기출500제.png")}
                    className="BannerImage"
                    css={css`
                      width: 100%;
                      height: 100%;
                      object-fit: cover;
                      object-position: 0 0;
                    `}
                  />
                </a>
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
                <a
                  href="/"
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
                    src={require("./image/한국사기출500제.png")}
                    className="BannerImage"
                    css={css`
                      width: 100%;
                      height: 100%;
                      object-fit: cover;
                      object-position: 0 0;
                    `}
                  />
                </a>
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
                <a
                  href="/"
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
                    src={require("./image/한국사기출500제.png")}
                    className="BannerImage"
                    css={css`
                      width: 100%;
                      height: 100%;
                      object-fit: cover;
                      object-position: 0 0;
                    `}
                  />
                </a>
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
              <a
                className="MenuItemAnchor"
                href="/"
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
                  src={require("./image/new2.svg")}
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
              </a>
            </li>
            <li
              className="MenuItem"
              css={css`
                margin-right: 9px;
                flex: none;
                display: inline-block;
              `}
            >
              <a
                className="MenuItemAnchor"
                href="/"
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
                  src={require("./category_black_24dp.svg")}
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
              </a>
            </li>
            <li
              className="MenuItem"
              css={css`
                margin-right: 9px;
                flex: none;
                display: inline-block;
              `}
            >
              <a
                className="MenuItemAnchor"
                href="/"
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
                  src={require("./category_black_24dp.svg")}
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
              </a>
            </li>
            <li
              className="MenuItem"
              css={css`
                margin-right: 9px;
                flex: none;
                display: inline-block;
              `}
            >
              <a
                className="MenuItemAnchor"
                href="/"
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
                  src={require("./category_black_24dp.svg")}
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
              </a>
            </li>
            <li
              className="MenuItem"
              css={css`
                margin-right: 9px;
                flex: none;
                display: inline-block;
              `}
            >
              <a
                className="MenuItemAnchor"
                href="/"
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
                  src={require("./category_black_24dp.svg")}
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
              </a>
            </li>
            <li
              className="MenuItem"
              css={css`
                margin-right: 9px;
                flex: none;
                display: inline-block;
              `}
            >
              <a
                className="MenuItemAnchor"
                href="/"
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
                  src={require("./category_black_24dp.svg")}
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
              </a>
            </li>
            <li
              className="MenuItem"
              css={css`
                margin-right: 9px;
                flex: none;
                display: inline-block;
              `}
            >
              <a
                className="MenuItemAnchor"
                href="/"
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
                  src={require("./category_black_24dp.svg")}
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
              </a>
            </li>
            <li
              className="MenuItem"
              css={css`
                margin-right: 9px;
                flex: none;
                display: inline-block;
              `}
            >
              <a
                className="MenuItemAnchor"
                href="/"
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
                  src={require("./category_black_24dp.svg")}
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
              </a>
            </li>
            <li
              className="MenuItem"
              css={css`
                margin-right: 9px;
                flex: none;
                display: inline-block;
              `}
            >
              <a
                className="MenuItemAnchor"
                href="/"
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
                  src={require("./category_black_24dp.svg")}
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
              </a>
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
                <li
                  className="BookWrapper"
                  css={css`
                    display: flex;
                    flex-direction: column;
                    box-sizing: content-box;
                    min-width: 140px;
                    width: 140px;
                    height: 100%;
                  `}
                >
                  <a
                    href="/"
                    className="StyledAnchor"
                    css={css`
                      display: inline-block;
                    `}
                  >
                    <div
                      className="StyledThumbnailWrapper"
                      css={css`
                        width: 140px;
                        height: 216px;
                        display: flex;
                        align-items: flex-end;
                        flex-shrink: 0;
                      `}
                    >
                      <div
                        className="ThumbnailWrapper"
                        css={css`
                          position: relative;
                          line-height: 0;
                          max-height: inherit;
                          background: linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), linear-gradient(90deg, rgba(0, 0, 0, 0.15) 0, rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 0) 95%, rgba(0, 0, 0, 0.15) 100%);
                        `}
                      >
                        <img
                          className="StyledThumbnailImage"
                          src={require("./image/한국사기출500제.png")}
                          sizes="(max-wideth: 999px) 100px, 140px"
                          alt="책이미지"
                          css={css`
                            width: 140px;
                            max-height: calc(140px * 1.618 - 10px);
                          `}
                        />
                        <div
                          className="DiscountWrapper"
                          css={css`
                            position: absolute;
                            display: block;
                            top: -7px;
                            left: -7px;
                          `}
                        >
                          <div
                            className="DiscountSticker"
                            css={css`
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
                            `}
                          >
                            <span
                              className="DiscountNumber"
                              css={css`
                                font-size: 16px;
                                mix-blend-mode: normal;
                                font-weight: bold;
                                line-height: 14px;
                                opacity: 0.99;
                              `}
                            >
                              10
                            </span>
                            <span
                              className="DiscountPercentage"
                              css={css`
                                font-weight: bold;
                                margin-left: 1px;
                                font-size: 14px;
                                position: relative;
                                line-height: 9px;
                              `}
                            >
                              %
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <div
                    className="BookInfoContainer"
                    css={css`
                      width: 100%;
                      margin-top: 10px;
                      display: flex;
                      flex-direction: column;
                    `}
                  >
                    <a href="/">
                      <div
                        className="BookTitleBelowThumbanil"
                        css={css`
                          font-weight: 700;
                          line-height: 1.33em;
                          max-height: 2.7em;
                          margin-bottom: 4.5px;
                          font-size: 14px;
                          color: white;
                          overflow: hidden;
                          text-overflow: ellipsis;
                          display: block;
                          word-wrap: break-word;
                          white-space: normal;
                          word-break: keep-all;
                        `}
                      >
                        일 잘하는 사람은 글을 잘 씁니다
                      </div>
                    </a>
                    <span
                      className="BookAuthorBelowThumbnail"
                      css={css`
                        height: 19px;
                        font-size: 14px;
                        line-height: 1.36;
                        color: #e2e8ed;
                        margin-bottom: 2px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: block;
                        word-wrap: break-word;
                        white-space: normal;
                        word-break: keep-all;
                      `}
                    >
                      <a href="/">김선</a>
                    </span>
                  </div>
                </li>
                <li
                  className="BookWrapper"
                  css={css`
                    display: flex;
                    flex-direction: column;
                    box-sizing: content-box;
                    min-width: 140px;
                    width: 140px;
                    height: 100%;
                  `}
                >
                  <a
                    href="/"
                    className="StyledAnchor"
                    css={css`
                      display: inline-block;
                    `}
                  >
                    <div
                      className="StyledThumbnailWrapper"
                      css={css`
                        width: 140px;
                        height: 216px;
                        display: flex;
                        align-items: flex-end;
                        flex-shrink: 0;
                      `}
                    >
                      <div
                        className="ThumbnailWrapper"
                        css={css`
                          position: relative;
                          line-height: 0;
                          max-height: inherit;
                          background: linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), linear-gradient(90deg, rgba(0, 0, 0, 0.15) 0, rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 0) 95%, rgba(0, 0, 0, 0.15) 100%);
                        `}
                      >
                        <img
                          className="StyledThumbnailImage"
                          src={require("./image/1.png")}
                          sizes="(max-wideth: 999px) 100px, 140px"
                          alt="책이미지"
                          css={css`
                            width: 140px;
                            max-height: calc(140px * 1.618 - 10px);
                          `}
                        />
                        <div
                          className="DiscountWrapper"
                          css={css`
                            position: absolute;
                            display: block;
                            top: -7px;
                            left: -7px;
                          `}
                        >
                          <div
                            className="DiscountSticker"
                            css={css`
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
                            `}
                          >
                            <span
                              className="DiscountNumber"
                              css={css`
                                font-size: 16px;
                                mix-blend-mode: normal;
                                font-weight: bold;
                                line-height: 14px;
                                opacity: 0.99;
                              `}
                            >
                              10
                            </span>
                            <span
                              className="DiscountPercentage"
                              css={css`
                                font-weight: bold;
                                margin-left: 1px;
                                font-size: 14px;
                                position: relative;
                                line-height: 9px;
                              `}
                            >
                              %
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <div
                    className="BookInfoContainer"
                    css={css`
                      width: 100%;
                      margin-top: 10px;
                      display: flex;
                      flex-direction: column;
                    `}
                  >
                    <a href="/">
                      <div
                        className="BookTitleBelowThumbanil"
                        css={css`
                          font-weight: 700;
                          line-height: 1.33em;
                          max-height: 2.7em;
                          margin-bottom: 4.5px;
                          font-size: 14px;
                          color: white;
                          overflow: hidden;
                          text-overflow: ellipsis;
                          display: block;
                          word-wrap: break-word;
                          white-space: normal;
                          word-break: keep-all;
                        `}
                      >
                        우연히, 웨스 앤더스
                      </div>
                    </a>
                    <span
                      className="BookAuthorBelowThumbnail"
                      css={css`
                        height: 19px;
                        font-size: 14px;
                        line-height: 1.36;
                        color: #e2e8ed;
                        margin-bottom: 2px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: block;
                        word-wrap: break-word;
                        white-space: normal;
                        word-break: keep-all;
                      `}
                    >
                      <a href="/">췰리 코발</a>
                    </span>
                  </div>
                </li>
                <li
                  className="BookWrapper"
                  css={css`
                    display: flex;
                    flex-direction: column;
                    box-sizing: content-box;
                    min-width: 140px;
                    width: 140px;
                    height: 100%;
                  `}
                >
                  <a
                    href="/"
                    className="StyledAnchor"
                    css={css`
                      display: inline-block;
                    `}
                  >
                    <div
                      className="StyledThumbnailWrapper"
                      css={css`
                        width: 140px;
                        height: 216px;
                        display: flex;
                        align-items: flex-end;
                        flex-shrink: 0;
                      `}
                    >
                      <div
                        className="ThumbnailWrapper"
                        css={css`
                          position: relative;
                          line-height: 0;
                          max-height: inherit;
                          background: linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), linear-gradient(90deg, rgba(0, 0, 0, 0.15) 0, rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 0) 95%, rgba(0, 0, 0, 0.15) 100%);
                        `}
                      >
                        <img
                          className="StyledThumbnailImage"
                          src={require("./image/2.png")}
                          sizes="(max-wideth: 999px) 100px, 140px"
                          alt="책이미지"
                          css={css`
                            width: 140px;
                            max-height: calc(140px * 1.618 - 10px);
                          `}
                        />
                        <div
                          className="DiscountWrapper"
                          css={css`
                            position: absolute;
                            display: block;
                            top: -7px;
                            left: -7px;
                          `}
                        >
                          <div
                            className="DiscountSticker"
                            css={css`
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
                            `}
                          >
                            <span
                              className="DiscountNumber"
                              css={css`
                                font-size: 16px;
                                mix-blend-mode: normal;
                                font-weight: bold;
                                line-height: 14px;
                                opacity: 0.99;
                              `}
                            >
                              10
                            </span>
                            <span
                              className="DiscountPercentage"
                              css={css`
                                font-weight: bold;
                                margin-left: 1px;
                                font-size: 14px;
                                position: relative;
                                line-height: 9px;
                              `}
                            >
                              %
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <div
                    className="BookInfoContainer"
                    css={css`
                      width: 100%;
                      margin-top: 10px;
                      display: flex;
                      flex-direction: column;
                    `}
                  >
                    <a href="/">
                      <div
                        className="BookTitleBelowThumbanil"
                        css={css`
                          font-weight: 700;
                          line-height: 1.33em;
                          max-height: 2.7em;
                          margin-bottom: 4.5px;
                          font-size: 14px;
                          color: white;
                          overflow: hidden;
                          text-overflow: ellipsis;
                          display: block;
                          word-wrap: break-word;
                          white-space: normal;
                          word-break: keep-all;
                        `}
                      >
                        일 잘하는 사람은 글을 잘 씁니다
                      </div>
                    </a>
                    <span
                      className="BookAuthorBelowThumbnail"
                      css={css`
                        height: 19px;
                        font-size: 14px;
                        line-height: 1.36;
                        color: #e2e8ed;
                        margin-bottom: 2px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: block;
                        word-wrap: break-word;
                        white-space: normal;
                        word-break: keep-all;
                      `}
                    >
                      <a href="/">김선</a>
                    </span>
                  </div>
                </li>
                <li
                  className="BookWrapper"
                  css={css`
                    display: flex;
                    flex-direction: column;
                    box-sizing: content-box;
                    min-width: 140px;
                    width: 140px;
                    height: 100%;
                  `}
                >
                  <a
                    href="/"
                    className="StyledAnchor"
                    css={css`
                      display: inline-block;
                    `}
                  >
                    <div
                      className="StyledThumbnailWrapper"
                      css={css`
                        width: 140px;
                        height: 216px;
                        display: flex;
                        align-items: flex-end;
                        flex-shrink: 0;
                      `}
                    >
                      <div
                        className="ThumbnailWrapper"
                        css={css`
                          position: relative;
                          line-height: 0;
                          max-height: inherit;
                          background: linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), linear-gradient(90deg, rgba(0, 0, 0, 0.15) 0, rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 0) 95%, rgba(0, 0, 0, 0.15) 100%);
                        `}
                      >
                        <img
                          className="StyledThumbnailImage"
                          src={require("./image/한국사기출500제.png")}
                          sizes="(max-wideth: 999px) 100px, 140px"
                          alt="책이미지"
                          css={css`
                            width: 140px;
                            max-height: calc(140px * 1.618 - 10px);
                          `}
                        />
                        <div
                          className="DiscountWrapper"
                          css={css`
                            position: absolute;
                            display: block;
                            top: -7px;
                            left: -7px;
                          `}
                        >
                          <div
                            className="DiscountSticker"
                            css={css`
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
                            `}
                          >
                            <span
                              className="DiscountNumber"
                              css={css`
                                font-size: 16px;
                                mix-blend-mode: normal;
                                font-weight: bold;
                                line-height: 14px;
                                opacity: 0.99;
                              `}
                            >
                              10
                            </span>
                            <span
                              className="DiscountPercentage"
                              css={css`
                                font-weight: bold;
                                margin-left: 1px;
                                font-size: 14px;
                                position: relative;
                                line-height: 9px;
                              `}
                            >
                              %
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <div
                    className="BookInfoContainer"
                    css={css`
                      width: 100%;
                      margin-top: 10px;
                      display: flex;
                      flex-direction: column;
                    `}
                  >
                    <a href="/">
                      <div
                        className="BookTitleBelowThumbanil"
                        css={css`
                          font-weight: 700;
                          line-height: 1.33em;
                          max-height: 2.7em;
                          margin-bottom: 4.5px;
                          font-size: 14px;
                          color: white;
                          overflow: hidden;
                          text-overflow: ellipsis;
                          display: block;
                          word-wrap: break-word;
                          white-space: normal;
                          word-break: keep-all;
                        `}
                      >
                        우연히, 웨스 앤더스
                      </div>
                    </a>
                    <span
                      className="BookAuthorBelowThumbnail"
                      css={css`
                        height: 19px;
                        font-size: 14px;
                        line-height: 1.36;
                        color: #e2e8ed;
                        margin-bottom: 2px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: block;
                        word-wrap: break-word;
                        white-space: normal;
                        word-break: keep-all;
                      `}
                    >
                      <a href="/">췰리 코발</a>
                    </span>
                  </div>
                </li>
                <li
                  className="BookWrapper"
                  css={css`
                    display: flex;
                    flex-direction: column;
                    box-sizing: content-box;
                    min-width: 140px;
                    width: 140px;
                    height: 100%;
                  `}
                >
                  <a
                    href="/"
                    className="StyledAnchor"
                    css={css`
                      display: inline-block;
                    `}
                  >
                    <div
                      className="StyledThumbnailWrapper"
                      css={css`
                        width: 140px;
                        height: 216px;
                        display: flex;
                        align-items: flex-end;
                        flex-shrink: 0;
                      `}
                    >
                      <div
                        className="ThumbnailWrapper"
                        css={css`
                          position: relative;
                          line-height: 0;
                          max-height: inherit;
                          background: linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), linear-gradient(90deg, rgba(0, 0, 0, 0.15) 0, rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 0) 95%, rgba(0, 0, 0, 0.15) 100%);
                        `}
                      >
                        <img
                          className="StyledThumbnailImage"
                          src={require("./image/4.png")}
                          sizes="(max-wideth: 999px) 100px, 140px"
                          alt="책이미지"
                          css={css`
                            width: 140px;
                            max-height: calc(140px * 1.618 - 10px);
                          `}
                        />
                        <div
                          className="DiscountWrapper"
                          css={css`
                            position: absolute;
                            display: block;
                            top: -7px;
                            left: -7px;
                          `}
                        >
                          <div
                            className="DiscountSticker"
                            css={css`
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
                            `}
                          >
                            <span
                              className="DiscountNumber"
                              css={css`
                                font-size: 16px;
                                mix-blend-mode: normal;
                                font-weight: bold;
                                line-height: 14px;
                                opacity: 0.99;
                              `}
                            >
                              10
                            </span>
                            <span
                              className="DiscountPercentage"
                              css={css`
                                font-weight: bold;
                                margin-left: 1px;
                                font-size: 14px;
                                position: relative;
                                line-height: 9px;
                              `}
                            >
                              %
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <div
                    className="BookInfoContainer"
                    css={css`
                      width: 100%;
                      margin-top: 10px;
                      display: flex;
                      flex-direction: column;
                    `}
                  >
                    <a href="/">
                      <div
                        className="BookTitleBelowThumbanil"
                        css={css`
                          font-weight: 700;
                          line-height: 1.33em;
                          max-height: 2.7em;
                          margin-bottom: 4.5px;
                          font-size: 14px;
                          color: white;
                          overflow: hidden;
                          text-overflow: ellipsis;
                          display: block;
                          word-wrap: break-word;
                          white-space: normal;
                          word-break: keep-all;
                        `}
                      >
                        일 잘하는 사람은 글을 잘 씁니다
                      </div>
                    </a>
                    <span
                      className="BookAuthorBelowThumbnail"
                      css={css`
                        height: 19px;
                        font-size: 14px;
                        line-height: 1.36;
                        color: #e2e8ed;
                        margin-bottom: 2px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: block;
                        word-wrap: break-word;
                        white-space: normal;
                        word-break: keep-all;
                      `}
                    >
                      <a href="/">김선</a>
                    </span>
                  </div>
                </li>
                <li
                  className="BookWrapper"
                  css={css`
                    display: flex;
                    flex-direction: column;
                    box-sizing: content-box;
                    min-width: 140px;
                    width: 140px;
                    height: 100%;
                  `}
                >
                  <a
                    href="/"
                    className="StyledAnchor"
                    css={css`
                      display: inline-block;
                    `}
                  >
                    <div
                      className="StyledThumbnailWrapper"
                      css={css`
                        width: 140px;
                        height: 216px;
                        display: flex;
                        align-items: flex-end;
                        flex-shrink: 0;
                      `}
                    >
                      <div
                        className="ThumbnailWrapper"
                        css={css`
                          position: relative;
                          line-height: 0;
                          max-height: inherit;
                          background: linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), linear-gradient(90deg, rgba(0, 0, 0, 0.15) 0, rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 0) 95%, rgba(0, 0, 0, 0.15) 100%);
                        `}
                      >
                        <img
                          className="StyledThumbnailImage"
                          src={require("./image/한국사기출500제.png")}
                          sizes="(max-wideth: 999px) 100px, 140px"
                          alt="책이미지"
                          css={css`
                            width: 140px;
                            max-height: calc(140px * 1.618 - 10px);
                          `}
                        />
                        <div
                          className="DiscountWrapper"
                          css={css`
                            position: absolute;
                            display: block;
                            top: -7px;
                            left: -7px;
                          `}
                        >
                          <div
                            className="DiscountSticker"
                            css={css`
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
                            `}
                          >
                            <span
                              className="DiscountNumber"
                              css={css`
                                font-size: 16px;
                                mix-blend-mode: normal;
                                font-weight: bold;
                                line-height: 14px;
                                opacity: 0.99;
                              `}
                            >
                              10
                            </span>
                            <span
                              className="DiscountPercentage"
                              css={css`
                                font-weight: bold;
                                margin-left: 1px;
                                font-size: 14px;
                                position: relative;
                                line-height: 9px;
                              `}
                            >
                              %
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <div
                    className="BookInfoContainer"
                    css={css`
                      width: 100%;
                      margin-top: 10px;
                      display: flex;
                      flex-direction: column;
                    `}
                  >
                    <a href="/">
                      <div
                        className="BookTitleBelowThumbanil"
                        css={css`
                          font-weight: 700;
                          line-height: 1.33em;
                          max-height: 2.7em;
                          margin-bottom: 4.5px;
                          font-size: 14px;
                          color: white;
                          overflow: hidden;
                          text-overflow: ellipsis;
                          display: block;
                          word-wrap: break-word;
                          white-space: normal;
                          word-break: keep-all;
                        `}
                      >
                        우연히, 웨스 앤더스
                      </div>
                    </a>
                    <span
                      className="BookAuthorBelowThumbnail"
                      css={css`
                        height: 19px;
                        font-size: 14px;
                        line-height: 1.36;
                        color: #e2e8ed;
                        margin-bottom: 2px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: block;
                        word-wrap: break-word;
                        white-space: normal;
                        word-break: keep-all;
                      `}
                    >
                      <a href="/">췰리 코발</a>
                    </span>
                  </div>
                </li>
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
                src={require("./image/watch_later_white_24dp.svg")}
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
                14시 40분
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
                  <li
                    type="small"
                    className="RangkingBookItem"
                    css={css`
                      -ms-grid-column: 1;
                      -ms-grid-row: 1;
                      display: flex;
                      align-items: center;
                      box-sizing: content-box;
                    `}
                  >
                    <a
                      type="small"
                      href="/"
                      className="ThumbnailAnchor-small"
                      css={css`
                        flex: none;
                        margin-right: 24px;
                      `}
                    >
                      <div
                        className="ThumbnailWrapper"
                        css={css`
                          position: relative;
                          line-height: 0;
                          max-height: inherit;
                          -webkit-tap-highlight-color: rgba(0, 0, 0, 0.15);
                          background: linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), linear-gradient(90deg, rgba(0, 0, 0, 0.15) 0, rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 0) 95%, rgba(0, 0, 0, 0.15) 100%);
                        `}
                      >
                        <img
                          className="ThumbnailImage"
                          src={require("./image/1.png")}
                          alt="책제목"
                          sizes="50px"
                          css={css`
                            width: 50px;
                            max-height: 71px;
                          `}
                        />
                      </div>
                    </a>
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
                        1
                      </h3>
                      <div
                        className="Container"
                        css={css`
                          width: 100%;
                          display: flex;
                          flex-direction: column;
                        `}
                      >
                        <a href="/">
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
                            돈의 심리학
                          </div>
                        </a>
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
                          <a href="/">모건 하우스</a>
                        </span>
                      </div>
                    </div>
                  </li>
                  <li
                    type="small"
                    className="RangkingBookItem"
                    css={css`
                      -ms-grid-column: 1;
                      -ms-grid-row: 2;
                      display: flex;
                      align-items: center;
                      box-sizing: content-box;
                    `}
                  >
                    <a
                      type="small"
                      href="/"
                      className="ThumbnailAnchor-small"
                      css={css`
                        flex: none;
                        margin-right: 24px;
                      `}
                    >
                      <div
                        className="ThumbnailWrapper"
                        css={css`
                          position: relative;
                          line-height: 0;
                          max-height: inherit;
                          -webkit-tap-highlight-color: rgba(0, 0, 0, 0.15);
                          background: linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), linear-gradient(90deg, rgba(0, 0, 0, 0.15) 0, rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 0) 95%, rgba(0, 0, 0, 0.15) 100%);
                        `}
                      >
                        <img
                          className="ThumbnailImage"
                          src={require("./image/1.png")}
                          alt="책제목"
                          sizes="50px"
                          css={css`
                            width: 50px;
                            max-height: 71px;
                          `}
                        />
                      </div>
                    </a>
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
                        1
                      </h3>
                      <div
                        className="Container"
                        css={css`
                          width: 100%;
                          display: flex;
                          flex-direction: column;
                        `}
                      >
                        <a href="/">
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
                            돈의 심리학
                          </div>
                        </a>
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
                          <a href="/">모건 하우스</a>
                        </span>
                      </div>
                    </div>
                  </li>
                  <li
                    type="small"
                    className="RangkingBookItem"
                    css={css`
                      -ms-grid-column: 1;
                      -ms-grid-row: 3;
                      display: flex;
                      align-items: center;
                      box-sizing: content-box;
                    `}
                  >
                    <a
                      type="small"
                      href="/"
                      className="ThumbnailAnchor-small"
                      css={css`
                        flex: none;
                        margin-right: 24px;
                      `}
                    >
                      <div
                        className="ThumbnailWrapper"
                        css={css`
                          position: relative;
                          line-height: 0;
                          max-height: inherit;
                          -webkit-tap-highlight-color: rgba(0, 0, 0, 0.15);
                          background: linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), linear-gradient(90deg, rgba(0, 0, 0, 0.15) 0, rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 0) 95%, rgba(0, 0, 0, 0.15) 100%);
                        `}
                      >
                        <img
                          className="ThumbnailImage"
                          src={require("./image/1.png")}
                          alt="책제목"
                          sizes="50px"
                          css={css`
                            width: 50px;
                            max-height: 71px;
                          `}
                        />
                      </div>
                    </a>
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
                        1
                      </h3>
                      <div
                        className="Container"
                        css={css`
                          width: 100%;
                          display: flex;
                          flex-direction: column;
                        `}
                      >
                        <a href="/">
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
                            돈의 심리학
                          </div>
                        </a>
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
                          <a href="/">모건 하우스</a>
                        </span>
                      </div>
                    </div>
                  </li>
                  <li
                    type="small"
                    className="RangkingBookItem"
                    css={css`
                      -ms-grid-column: 3;
                      -ms-grid-row: 1;
                      display: flex;
                      align-items: center;
                      box-sizing: content-box;
                    `}
                  >
                    <a
                      type="small"
                      href="/"
                      className="ThumbnailAnchor-small"
                      css={css`
                        flex: none;
                        margin-right: 24px;
                      `}
                    >
                      <div
                        className="ThumbnailWrapper"
                        css={css`
                          position: relative;
                          line-height: 0;
                          max-height: inherit;
                          -webkit-tap-highlight-color: rgba(0, 0, 0, 0.15);
                          background: linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), linear-gradient(90deg, rgba(0, 0, 0, 0.15) 0, rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 0) 95%, rgba(0, 0, 0, 0.15) 100%);
                        `}
                      >
                        <img
                          className="ThumbnailImage"
                          src={require("./image/1.png")}
                          alt="책제목"
                          sizes="50px"
                          css={css`
                            width: 50px;
                            max-height: 71px;
                          `}
                        />
                      </div>
                    </a>
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
                        1
                      </h3>
                      <div
                        className="Container"
                        css={css`
                          width: 100%;
                          display: flex;
                          flex-direction: column;
                        `}
                      >
                        <a href="/">
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
                            돈의 심리학
                          </div>
                        </a>
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
                          <a href="/">모건 하우스</a>
                        </span>
                      </div>
                    </div>
                  </li>
                  <li
                    type="small"
                    className="RangkingBookItem"
                    css={css`
                      -ms-grid-column: 3;
                      -ms-grid-row: 2;
                      display: flex;
                      align-items: center;
                      box-sizing: content-box;
                    `}
                  >
                    <a
                      type="small"
                      href="/"
                      className="ThumbnailAnchor-small"
                      css={css`
                        flex: none;
                        margin-right: 24px;
                      `}
                    >
                      <div
                        className="ThumbnailWrapper"
                        css={css`
                          position: relative;
                          line-height: 0;
                          max-height: inherit;
                          -webkit-tap-highlight-color: rgba(0, 0, 0, 0.15);
                          background: linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), linear-gradient(90deg, rgba(0, 0, 0, 0.15) 0, rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 0) 95%, rgba(0, 0, 0, 0.15) 100%);
                        `}
                      >
                        <img
                          className="ThumbnailImage"
                          src={require("./image/1.png")}
                          alt="책제목"
                          sizes="50px"
                          css={css`
                            width: 50px;
                            max-height: 71px;
                          `}
                        />
                      </div>
                    </a>
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
                        1
                      </h3>
                      <div
                        className="Container"
                        css={css`
                          width: 100%;
                          display: flex;
                          flex-direction: column;
                        `}
                      >
                        <a href="/">
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
                            돈의 심리학
                          </div>
                        </a>
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
                          <a href="/">모건 하우스</a>
                        </span>
                      </div>
                    </div>
                  </li>
                  <li
                    type="small"
                    className="RangkingBookItem"
                    css={css`
                      -ms-grid-column: 3;
                      -ms-grid-row: 3;
                      display: flex;
                      align-items: center;
                      box-sizing: content-box;
                    `}
                  >
                    <a
                      type="small"
                      href="/"
                      className="ThumbnailAnchor-small"
                      css={css`
                        flex: none;
                        margin-right: 24px;
                      `}
                    >
                      <div
                        className="ThumbnailWrapper"
                        css={css`
                          position: relative;
                          line-height: 0;
                          max-height: inherit;
                          -webkit-tap-highlight-color: rgba(0, 0, 0, 0.15);
                          background: linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), linear-gradient(90deg, rgba(0, 0, 0, 0.15) 0, rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 0) 95%, rgba(0, 0, 0, 0.15) 100%);
                        `}
                      >
                        <img
                          className="ThumbnailImage"
                          src={require("./image/1.png")}
                          alt="책제목"
                          sizes="50px"
                          css={css`
                            width: 50px;
                            max-height: 71px;
                          `}
                        />
                      </div>
                    </a>
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
                        1
                      </h3>
                      <div
                        className="Container"
                        css={css`
                          width: 100%;
                          display: flex;
                          flex-direction: column;
                        `}
                      >
                        <a href="/">
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
                            돈의 심리학
                          </div>
                        </a>
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
                          <a href="/">모건 하우스</a>
                        </span>
                      </div>
                    </div>
                  </li>
                  <li
                    type="small"
                    className="RangkingBookItem"
                    css={css`
                      -ms-grid-column: 5;
                      -ms-grid-row: 1;
                      display: flex;
                      align-items: center;
                      box-sizing: content-box;
                    `}
                  >
                    <a
                      type="small"
                      href="/"
                      className="ThumbnailAnchor-small"
                      css={css`
                        flex: none;
                        margin-right: 24px;
                      `}
                    >
                      <div
                        className="ThumbnailWrapper"
                        css={css`
                          position: relative;
                          line-height: 0;
                          max-height: inherit;
                          -webkit-tap-highlight-color: rgba(0, 0, 0, 0.15);
                          background: linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), linear-gradient(90deg, rgba(0, 0, 0, 0.15) 0, rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 0) 95%, rgba(0, 0, 0, 0.15) 100%);
                        `}
                      >
                        <img
                          className="ThumbnailImage"
                          src={require("./image/1.png")}
                          alt="책제목"
                          sizes="50px"
                          css={css`
                            width: 50px;
                            max-height: 71px;
                          `}
                        />
                      </div>
                    </a>
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
                        1
                      </h3>
                      <div
                        className="Container"
                        css={css`
                          width: 100%;
                          display: flex;
                          flex-direction: column;
                        `}
                      >
                        <a href="/">
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
                            돈의 심리학
                          </div>
                        </a>
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
                          <a href="/">모건 하우스</a>
                        </span>
                      </div>
                    </div>
                  </li>
                  <li
                    type="small"
                    className="RangkingBookItem"
                    css={css`
                      -ms-grid-column: 5;
                      -ms-grid-row: 2;
                      display: flex;
                      align-items: center;
                      box-sizing: content-box;
                    `}
                  >
                    <a
                      type="small"
                      href="/"
                      className="ThumbnailAnchor-small"
                      css={css`
                        flex: none;
                        margin-right: 24px;
                      `}
                    >
                      <div
                        className="ThumbnailWrapper"
                        css={css`
                          position: relative;
                          line-height: 0;
                          max-height: inherit;
                          -webkit-tap-highlight-color: rgba(0, 0, 0, 0.15);
                          background: linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), linear-gradient(90deg, rgba(0, 0, 0, 0.15) 0, rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 0) 95%, rgba(0, 0, 0, 0.15) 100%);
                        `}
                      >
                        <img
                          className="ThumbnailImage"
                          src={require("./image/1.png")}
                          alt="책제목"
                          sizes="50px"
                          css={css`
                            width: 50px;
                            max-height: 71px;
                          `}
                        />
                      </div>
                    </a>
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
                        1
                      </h3>
                      <div
                        className="Container"
                        css={css`
                          width: 100%;
                          display: flex;
                          flex-direction: column;
                        `}
                      >
                        <a href="/">
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
                            돈의 심리학
                          </div>
                        </a>
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
                          <a href="/">모건 하우스</a>
                        </span>
                      </div>
                    </div>
                  </li>
                  <li
                    type="small"
                    className="RangkingBookItem"
                    css={css`
                      -ms-grid-column: 5;
                      -ms-grid-row: 3;
                      display: flex;
                      align-items: center;
                      box-sizing: content-box;
                    `}
                  >
                    <a
                      type="small"
                      href="/"
                      className="ThumbnailAnchor-small"
                      css={css`
                        flex: none;
                        margin-right: 24px;
                      `}
                    >
                      <div
                        className="ThumbnailWrapper"
                        css={css`
                          position: relative;
                          line-height: 0;
                          max-height: inherit;
                          -webkit-tap-highlight-color: rgba(0, 0, 0, 0.15);
                          background: linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), linear-gradient(90deg, rgba(0, 0, 0, 0.15) 0, rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 0) 95%, rgba(0, 0, 0, 0.15) 100%);
                        `}
                      >
                        <img
                          className="ThumbnailImage"
                          src={require("./image/1.png")}
                          alt="책제목"
                          sizes="50px"
                          css={css`
                            width: 50px;
                            max-height: 71px;
                          `}
                        />
                      </div>
                    </a>
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
                        1
                      </h3>
                      <div
                        className="Container"
                        css={css`
                          width: 100%;
                          display: flex;
                          flex-direction: column;
                        `}
                      >
                        <a href="/">
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
                            돈의 심리학
                          </div>
                        </a>
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
                          <a href="/">모건 하우스</a>
                        </span>
                      </div>
                    </div>
                  </li>
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
                <li
                  className="BookWrapper"
                  css={css`
                    display: flex;
                    flex-direction: column;
                    box-sizing: content-box;
                    min-width: 140px;
                    width: 140px;
                    height: 100%;
                  `}
                >
                  <a
                    href="/"
                    className="StyledAnchor"
                    css={css`
                      display: inline-block;
                    `}
                  >
                    <div
                      className="StyledThumbnailWrapper"
                      css={css`
                        width: 140px;
                        height: 216px;
                        display: flex;
                        align-items: flex-end;
                        flex-shrink: 0;
                      `}
                    >
                      <div
                        className="ThumbnailWrapper"
                        css={css`
                          position: relative;
                          line-height: 0;
                          max-height: inherit;
                          background: linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), linear-gradient(90deg, rgba(0, 0, 0, 0.15) 0, rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 0) 95%, rgba(0, 0, 0, 0.15) 100%);
                        `}
                      >
                        <img
                          className="StyledThumbnailImage"
                          src={require("./image/한국사기출500제.png")}
                          sizes="(max-wideth: 999px) 100px, 140px"
                          alt="책이미지"
                          css={css`
                            width: 140px;
                            max-height: calc(140px * 1.618 - 10px);
                          `}
                        />
                        <div
                          className="DiscountWrapper"
                          css={css`
                            position: absolute;
                            display: block;
                            top: -7px;
                            left: -7px;
                          `}
                        >
                          <div
                            className="DiscountSticker"
                            css={css`
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
                            `}
                          >
                            <span
                              className="DiscountNumber"
                              css={css`
                                font-size: 16px;
                                mix-blend-mode: normal;
                                font-weight: bold;
                                line-height: 14px;
                                opacity: 0.99;
                              `}
                            >
                              10
                            </span>
                            <span
                              className="DiscountPercentage"
                              css={css`
                                font-weight: bold;
                                margin-left: 1px;
                                font-size: 14px;
                                position: relative;
                                line-height: 9px;
                              `}
                            >
                              %
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <p
                    className="RecommendationText"
                    css={css`
                      padding-left: 0;
                      position: relative;
                      margin-top: 10px;
                      line-height: 18px;
                      text-align: center;
                      font-weight: bold;
                      white-space: nowrap;
                      font-size: 13px;
                      width: 140px;
                    `}
                  >
                    거짓말로 시작된 <br />
                    진실게임의 끝은?
                  </p>
                </li>
                <li
                  className="BookWrapper"
                  css={css`
                    display: flex;
                    flex-direction: column;
                    box-sizing: content-box;
                    min-width: 140px;
                    width: 140px;
                    height: 100%;
                  `}
                >
                  <a
                    href="/"
                    className="StyledAnchor"
                    css={css`
                      display: inline-block;
                    `}
                  >
                    <div
                      className="StyledThumbnailWrapper"
                      css={css`
                        width: 140px;
                        height: 216px;
                        display: flex;
                        align-items: flex-end;
                        flex-shrink: 0;
                      `}
                    >
                      <div
                        className="ThumbnailWrapper"
                        css={css`
                          position: relative;
                          line-height: 0;
                          max-height: inherit;
                          background: linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), linear-gradient(90deg, rgba(0, 0, 0, 0.15) 0, rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 0) 95%, rgba(0, 0, 0, 0.15) 100%);
                        `}
                      >
                        <img
                          className="StyledThumbnailImage"
                          src={require("./image/1.png")}
                          sizes="(max-wideth: 999px) 100px, 140px"
                          alt="책이미지"
                          css={css`
                            width: 140px;
                            max-height: calc(140px * 1.618 - 10px);
                          `}
                        />
                        <div
                          className="DiscountWrapper"
                          css={css`
                            position: absolute;
                            display: block;
                            top: -7px;
                            left: -7px;
                          `}
                        >
                          <div
                            className="DiscountSticker"
                            css={css`
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
                            `}
                          >
                            <span
                              className="DiscountNumber"
                              css={css`
                                font-size: 16px;
                                mix-blend-mode: normal;
                                font-weight: bold;
                                line-height: 14px;
                                opacity: 0.99;
                              `}
                            >
                              10
                            </span>
                            <span
                              className="DiscountPercentage"
                              css={css`
                                font-weight: bold;
                                margin-left: 1px;
                                font-size: 14px;
                                position: relative;
                                line-height: 9px;
                              `}
                            >
                              %
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <p
                    className="RecommendationText"
                    css={css`
                      padding-left: 0;
                      position: relative;
                      margin-top: 10px;
                      line-height: 18px;
                      text-align: center;
                      font-weight: bold;
                      white-space: nowrap;
                      font-size: 13px;
                      width: 140px;
                    `}
                  >
                    거짓말로 시작된 <br />
                    진실게임의 끝은?
                  </p>
                </li>
                <li
                  className="BookWrapper"
                  css={css`
                    display: flex;
                    flex-direction: column;
                    box-sizing: content-box;
                    min-width: 140px;
                    width: 140px;
                    height: 100%;
                  `}
                >
                  <a
                    href="/"
                    className="StyledAnchor"
                    css={css`
                      display: inline-block;
                    `}
                  >
                    <div
                      className="StyledThumbnailWrapper"
                      css={css`
                        width: 140px;
                        height: 216px;
                        display: flex;
                        align-items: flex-end;
                        flex-shrink: 0;
                      `}
                    >
                      <div
                        className="ThumbnailWrapper"
                        css={css`
                          position: relative;
                          line-height: 0;
                          max-height: inherit;
                          background: linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), linear-gradient(90deg, rgba(0, 0, 0, 0.15) 0, rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 0) 95%, rgba(0, 0, 0, 0.15) 100%);
                        `}
                      >
                        <img
                          className="StyledThumbnailImage"
                          src={require("./image/2.png")}
                          sizes="(max-wideth: 999px) 100px, 140px"
                          alt="책이미지"
                          css={css`
                            width: 140px;
                            max-height: calc(140px * 1.618 - 10px);
                          `}
                        />
                        <div
                          className="DiscountWrapper"
                          css={css`
                            position: absolute;
                            display: block;
                            top: -7px;
                            left: -7px;
                          `}
                        >
                          <div
                            className="DiscountSticker"
                            css={css`
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
                            `}
                          >
                            <span
                              className="DiscountNumber"
                              css={css`
                                font-size: 16px;
                                mix-blend-mode: normal;
                                font-weight: bold;
                                line-height: 14px;
                                opacity: 0.99;
                              `}
                            >
                              10
                            </span>
                            <span
                              className="DiscountPercentage"
                              css={css`
                                font-weight: bold;
                                margin-left: 1px;
                                font-size: 14px;
                                position: relative;
                                line-height: 9px;
                              `}
                            >
                              %
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <p
                    className="RecommendationText"
                    css={css`
                      padding-left: 0;
                      position: relative;
                      margin-top: 10px;
                      line-height: 18px;
                      text-align: center;
                      font-weight: bold;
                      white-space: nowrap;
                      font-size: 13px;
                      width: 140px;
                    `}
                  >
                    거짓말로 시작된 <br />
                    진실게임의 끝은?
                  </p>
                </li>
                <li
                  className="BookWrapper"
                  css={css`
                    display: flex;
                    flex-direction: column;
                    box-sizing: content-box;
                    min-width: 140px;
                    width: 140px;
                    height: 100%;
                  `}
                >
                  <a
                    href="/"
                    className="StyledAnchor"
                    css={css`
                      display: inline-block;
                    `}
                  >
                    <div
                      className="StyledThumbnailWrapper"
                      css={css`
                        width: 140px;
                        height: 216px;
                        display: flex;
                        align-items: flex-end;
                        flex-shrink: 0;
                      `}
                    >
                      <div
                        className="ThumbnailWrapper"
                        css={css`
                          position: relative;
                          line-height: 0;
                          max-height: inherit;
                          background: linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), linear-gradient(90deg, rgba(0, 0, 0, 0.15) 0, rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 0) 95%, rgba(0, 0, 0, 0.15) 100%);
                        `}
                      >
                        <img
                          className="StyledThumbnailImage"
                          src={require("./image/한국사기출500제.png")}
                          sizes="(max-wideth: 999px) 100px, 140px"
                          alt="책이미지"
                          css={css`
                            width: 140px;
                            max-height: calc(140px * 1.618 - 10px);
                          `}
                        />
                        <div
                          className="DiscountWrapper"
                          css={css`
                            position: absolute;
                            display: block;
                            top: -7px;
                            left: -7px;
                          `}
                        >
                          <div
                            className="DiscountSticker"
                            css={css`
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
                            `}
                          >
                            <span
                              className="DiscountNumber"
                              css={css`
                                font-size: 16px;
                                mix-blend-mode: normal;
                                font-weight: bold;
                                line-height: 14px;
                                opacity: 0.99;
                              `}
                            >
                              10
                            </span>
                            <span
                              className="DiscountPercentage"
                              css={css`
                                font-weight: bold;
                                margin-left: 1px;
                                font-size: 14px;
                                position: relative;
                                line-height: 9px;
                              `}
                            >
                              %
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <p
                    className="RecommendationText"
                    css={css`
                      padding-left: 0;
                      position: relative;
                      margin-top: 10px;
                      line-height: 18px;
                      text-align: center;
                      font-weight: bold;
                      white-space: nowrap;
                      font-size: 13px;
                      width: 140px;
                    `}
                  >
                    거짓말로 시작된 <br />
                    진실게임의 끝은?
                  </p>
                </li>
                <li
                  className="BookWrapper"
                  css={css`
                    display: flex;
                    flex-direction: column;
                    box-sizing: content-box;
                    min-width: 140px;
                    width: 140px;
                    height: 100%;
                  `}
                >
                  <a
                    href="/"
                    className="StyledAnchor"
                    css={css`
                      display: inline-block;
                    `}
                  >
                    <div
                      className="StyledThumbnailWrapper"
                      css={css`
                        width: 140px;
                        height: 216px;
                        display: flex;
                        align-items: flex-end;
                        flex-shrink: 0;
                      `}
                    >
                      <div
                        className="ThumbnailWrapper"
                        css={css`
                          position: relative;
                          line-height: 0;
                          max-height: inherit;
                          background: linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), linear-gradient(90deg, rgba(0, 0, 0, 0.15) 0, rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 0) 95%, rgba(0, 0, 0, 0.15) 100%);
                        `}
                      >
                        <img
                          className="StyledThumbnailImage"
                          src={require("./image/4.png")}
                          sizes="(max-wideth: 999px) 100px, 140px"
                          alt="책이미지"
                          css={css`
                            width: 140px;
                            max-height: calc(140px * 1.618 - 10px);
                          `}
                        />
                        <div
                          className="DiscountWrapper"
                          css={css`
                            position: absolute;
                            display: block;
                            top: -7px;
                            left: -7px;
                          `}
                        >
                          <div
                            className="DiscountSticker"
                            css={css`
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
                            `}
                          >
                            <span
                              className="DiscountNumber"
                              css={css`
                                font-size: 16px;
                                mix-blend-mode: normal;
                                font-weight: bold;
                                line-height: 14px;
                                opacity: 0.99;
                              `}
                            >
                              10
                            </span>
                            <span
                              className="DiscountPercentage"
                              css={css`
                                font-weight: bold;
                                margin-left: 1px;
                                font-size: 14px;
                                position: relative;
                                line-height: 9px;
                              `}
                            >
                              %
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <p
                    className="RecommendationText"
                    css={css`
                      padding-left: 0;
                      position: relative;
                      margin-top: 10px;
                      line-height: 18px;
                      text-align: center;
                      font-weight: bold;
                      white-space: nowrap;
                      font-size: 13px;
                      width: 140px;
                    `}
                  >
                    거짓말로 시작된 <br />
                    진실게임의 끝은?
                  </p>
                </li>
                <li
                  className="BookWrapper"
                  css={css`
                    display: flex;
                    flex-direction: column;
                    box-sizing: content-box;
                    min-width: 140px;
                    width: 140px;
                    height: 100%;
                  `}
                >
                  <a
                    href="/"
                    className="StyledAnchor"
                    css={css`
                      display: inline-block;
                    `}
                  >
                    <div
                      className="StyledThumbnailWrapper"
                      css={css`
                        width: 140px;
                        height: 216px;
                        display: flex;
                        align-items: flex-end;
                        flex-shrink: 0;
                      `}
                    >
                      <div
                        className="ThumbnailWrapper"
                        css={css`
                          position: relative;
                          line-height: 0;
                          max-height: inherit;
                          background: linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), linear-gradient(90deg, rgba(0, 0, 0, 0.15) 0, rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 0) 95%, rgba(0, 0, 0, 0.15) 100%);
                        `}
                      >
                        <img
                          className="StyledThumbnailImage"
                          src={require("./image/한국사기출500제.png")}
                          sizes="(max-wideth: 999px) 100px, 140px"
                          alt="책이미지"
                          css={css`
                            width: 140px;
                            max-height: calc(140px * 1.618 - 10px);
                          `}
                        />
                        <div
                          className="DiscountWrapper"
                          css={css`
                            position: absolute;
                            display: block;
                            top: -7px;
                            left: -7px;
                          `}
                        >
                          <div
                            className="DiscountSticker"
                            css={css`
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
                            `}
                          >
                            <span
                              className="DiscountNumber"
                              css={css`
                                font-size: 16px;
                                mix-blend-mode: normal;
                                font-weight: bold;
                                line-height: 14px;
                                opacity: 0.99;
                              `}
                            >
                              10
                            </span>
                            <span
                              className="DiscountPercentage"
                              css={css`
                                font-weight: bold;
                                margin-left: 1px;
                                font-size: 14px;
                                position: relative;
                                line-height: 9px;
                              `}
                            >
                              %
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <p
                    className="RecommendationText"
                    css={css`
                      padding-left: 0;
                      position: relative;
                      margin-top: 10px;
                      line-height: 18px;
                      text-align: center;
                      font-weight: bold;
                      white-space: nowrap;
                      font-size: 13px;
                      width: 140px;
                    `}
                  >
                    거짓말로 시작된 <br />
                    진실게임의 끝은?
                  </p>
                </li>
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
            <a
              href="/"
              className="LingWrapper"
              css={css`
                display: flex;
                align-items: center;
                color: black;
              `}
            >
              베스트셀러
              <img
                src={require("./image/arrow_forward_ios_black_24dp.svg")}
                alt="화살표"
                css={css`
                  flex: none;
                  width: 11px;
                  height: 14px;
                  margin-left: 8px;
                `}
              />
            </a>
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
                    <a
                      type="big"
                      href="/"
                      className="ThumbnailAnchor-big"
                      css={css`
                        flex: none;
                        margin-right: 18px;
                      `}
                    >
                      <div
                        className="ThumbnailWrapper"
                        css={css`
                          position: relative;
                          line-height: 0;
                          max-height: inherit;
                          -webkit-tap-highlight-color: rgba(0, 0, 0, 0.15);
                          background: linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), linear-gradient(90deg, rgba(0, 0, 0, 0.15) 0, rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 0) 95%, rgba(0, 0, 0, 0.15) 100%);
                        `}
                      >
                        <img
                          className="ThumbnailImage"
                          src={require("./image/1.png")}
                          alt="책제목"
                          sizes="80px"
                          css={css`
                            width: 80px;
                            max-height: 114px;
                          `}
                        />
                        <div
                          className="DiscountWrapper"
                          css={css`
                            position: absolute;
                            display: block;
                            top: -7px;
                            left: -7px;
                          `}
                        >
                          <div
                            className="DiscountSticker"
                            css={css`
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
                            `}
                          >
                            <span
                              className="DiscountNumber"
                              css={css`
                                font-size: 16px;
                                mix-blend-mode: normal;
                                font-weight: bold;
                                line-height: 14px;
                                opacity: 0.99;
                              `}
                            >
                              10
                            </span>
                            <span
                              className="DiscountPercentage"
                              css={css`
                                font-weight: bold;
                                margin-left: 1px;
                                font-size: 14px;
                                position: relative;
                                line-height: 9px;
                              `}
                            >
                              %
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
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
                        1
                      </h3>
                      <div
                        className="Container"
                        css={css`
                          width: 100%;
                          display: flex;
                          flex-direction: column;
                        `}
                      >
                        <a href="/">
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
                            돈의 심리학
                          </div>
                        </a>
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
                          <a href="/">모건 하우스</a>
                        </span>
                        <span>
                          <div
                            role="img"
                            className="RatingWrapper"
                            css={css`
                              display: inline-flex;
                              align-items: center;
                              font-size: 11px;
                              color: #999999;
                              line-height: 1.09;
                            `}
                          >
                            <div
                              className="StarContainer"
                              css={css`
                                position: relative;
                                margin-right: 2px;
                                line-height: 0;
                              `}
                            >
                              <img
                                src={require("./image/grade_black_24dp.svg")}
                                alt=""
                                css={css`
                                  width: 10px;
                                  height: 10px;
                                `}
                              />
                              <img
                                src={require("./image/grade_black_24dp.svg")}
                                alt=""
                                css={css`
                                  width: 10px;
                                  height: 10px;
                                `}
                              />
                              <img
                                src={require("./image/grade_black_24dp.svg")}
                                alt=""
                                css={css`
                                  width: 10px;
                                  height: 10px;
                                `}
                              />
                              <img
                                src={require("./image/grade_black_24dp.svg")}
                                alt=""
                                css={css`
                                  width: 10px;
                                  height: 10px;
                                `}
                              />
                              <img
                                src={require("./image/grade_black_24dp.svg")}
                                alt=""
                                css={css`
                                  width: 10px;
                                  height: 10px;
                                `}
                              />
                            </div>
                            <span
                              css={css`
                                height: 10px;
                                font-size: 11px;
                                line-height: 1.09;
                                color: #999999;
                              `}
                            >
                              9
                            </span>
                          </div>
                        </span>
                      </div>
                    </div>
                  </li>
                  <li
                    type="big"
                    className="RangkingBookItem"
                    css={css`
                      -ms-grid-column: 1;
                      -ms-grid-row: 2;
                      display: flex;
                      align-items: center;
                      box-sizing: content-box;
                    `}
                  >
                    <a
                      type="big"
                      href="/"
                      className="ThumbnailAnchor-big"
                      css={css`
                        flex: none;
                        margin-right: 18px;
                      `}
                    >
                      <div
                        className="ThumbnailWrapper"
                        css={css`
                          position: relative;
                          line-height: 0;
                          max-height: inherit;
                          -webkit-tap-highlight-color: rgba(0, 0, 0, 0.15);
                          background: linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), linear-gradient(90deg, rgba(0, 0, 0, 0.15) 0, rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 0) 95%, rgba(0, 0, 0, 0.15) 100%);
                        `}
                      >
                        <img
                          className="ThumbnailImage"
                          src={require("./image/1.png")}
                          alt="책제목"
                          sizes="80px"
                          css={css`
                            width: 80px;
                            max-height: 114px;
                          `}
                        />
                        <div
                          className="DiscountWrapper"
                          css={css`
                            position: absolute;
                            display: block;
                            top: -7px;
                            left: -7px;
                          `}
                        >
                          <div
                            className="DiscountSticker"
                            css={css`
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
                            `}
                          >
                            <span
                              className="DiscountNumber"
                              css={css`
                                font-size: 16px;
                                mix-blend-mode: normal;
                                font-weight: bold;
                                line-height: 14px;
                                opacity: 0.99;
                              `}
                            >
                              10
                            </span>
                            <span
                              className="DiscountPercentage"
                              css={css`
                                font-weight: bold;
                                margin-left: 1px;
                                font-size: 14px;
                                position: relative;
                                line-height: 9px;
                              `}
                            >
                              %
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
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
                        1
                      </h3>
                      <div
                        className="Container"
                        css={css`
                          width: 100%;
                          display: flex;
                          flex-direction: column;
                        `}
                      >
                        <a href="/">
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
                            돈의 심리학
                          </div>
                        </a>
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
                          <a href="/">모건 하우스</a>
                        </span>
                        <span>
                          <div
                            role="img"
                            className="RatingWrapper"
                            css={css`
                              display: inline-flex;
                              align-items: center;
                              font-size: 11px;
                              color: #999999;
                              line-height: 1.09;
                            `}
                          >
                            <div
                              className="StarContainer"
                              css={css`
                                position: relative;
                                margin-right: 2px;
                                line-height: 0;
                              `}
                            >
                              <img
                                src={require("./image/grade_black_24dp.svg")}
                                alt=""
                                css={css`
                                  width: 10px;
                                  height: 10px;
                                `}
                              />
                              <img
                                src={require("./image/grade_black_24dp.svg")}
                                alt=""
                                css={css`
                                  width: 10px;
                                  height: 10px;
                                `}
                              />
                              <img
                                src={require("./image/grade_black_24dp.svg")}
                                alt=""
                                css={css`
                                  width: 10px;
                                  height: 10px;
                                `}
                              />
                              <img
                                src={require("./image/grade_black_24dp.svg")}
                                alt=""
                                css={css`
                                  width: 10px;
                                  height: 10px;
                                `}
                              />
                              <img
                                src={require("./image/grade_black_24dp.svg")}
                                alt=""
                                css={css`
                                  width: 10px;
                                  height: 10px;
                                `}
                              />
                            </div>
                            <span
                              css={css`
                                height: 10px;
                                font-size: 11px;
                                line-height: 1.09;
                                color: #999999;
                              `}
                            >
                              9
                            </span>
                          </div>
                        </span>
                      </div>
                    </div>
                  </li>
                  <li
                    type="big"
                    className="RangkingBookItem"
                    css={css`
                      -ms-grid-column: 1;
                      -ms-grid-row: 3;
                      display: flex;
                      align-items: center;
                      box-sizing: content-box;
                    `}
                  >
                    <a
                      type="big"
                      href="/"
                      className="ThumbnailAnchor-big"
                      css={css`
                        flex: none;
                        margin-right: 18px;
                      `}
                    >
                      <div
                        className="ThumbnailWrapper"
                        css={css`
                          position: relative;
                          line-height: 0;
                          max-height: inherit;
                          -webkit-tap-highlight-color: rgba(0, 0, 0, 0.15);
                          background: linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), linear-gradient(90deg, rgba(0, 0, 0, 0.15) 0, rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 0) 95%, rgba(0, 0, 0, 0.15) 100%);
                        `}
                      >
                        <img
                          className="ThumbnailImage"
                          src={require("./image/1.png")}
                          alt="책제목"
                          sizes="80px"
                          css={css`
                            width: 80px;
                            max-height: 114px;
                          `}
                        />
                        <div
                          className="DiscountWrapper"
                          css={css`
                            position: absolute;
                            display: block;
                            top: -7px;
                            left: -7px;
                          `}
                        >
                          <div
                            className="DiscountSticker"
                            css={css`
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
                            `}
                          >
                            <span
                              className="DiscountNumber"
                              css={css`
                                font-size: 16px;
                                mix-blend-mode: normal;
                                font-weight: bold;
                                line-height: 14px;
                                opacity: 0.99;
                              `}
                            >
                              10
                            </span>
                            <span
                              className="DiscountPercentage"
                              css={css`
                                font-weight: bold;
                                margin-left: 1px;
                                font-size: 14px;
                                position: relative;
                                line-height: 9px;
                              `}
                            >
                              %
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
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
                        1
                      </h3>
                      <div
                        className="Container"
                        css={css`
                          width: 100%;
                          display: flex;
                          flex-direction: column;
                        `}
                      >
                        <a href="/">
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
                            돈의 심리학
                          </div>
                        </a>
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
                          <a href="/">모건 하우스</a>
                        </span>
                        <span>
                          <div
                            role="img"
                            className="RatingWrapper"
                            css={css`
                              display: inline-flex;
                              align-items: center;
                              font-size: 11px;
                              color: #999999;
                              line-height: 1.09;
                            `}
                          >
                            <div
                              className="StarContainer"
                              css={css`
                                position: relative;
                                margin-right: 2px;
                                line-height: 0;
                              `}
                            >
                              <img
                                src={require("./image/grade_black_24dp.svg")}
                                alt=""
                                css={css`
                                  width: 10px;
                                  height: 10px;
                                `}
                              />
                              <img
                                src={require("./image/grade_black_24dp.svg")}
                                alt=""
                                css={css`
                                  width: 10px;
                                  height: 10px;
                                `}
                              />
                              <img
                                src={require("./image/grade_black_24dp.svg")}
                                alt=""
                                css={css`
                                  width: 10px;
                                  height: 10px;
                                `}
                              />
                              <img
                                src={require("./image/grade_black_24dp.svg")}
                                alt=""
                                css={css`
                                  width: 10px;
                                  height: 10px;
                                `}
                              />
                              <img
                                src={require("./image/grade_black_24dp.svg")}
                                alt=""
                                css={css`
                                  width: 10px;
                                  height: 10px;
                                `}
                              />
                            </div>
                            <span
                              css={css`
                                height: 10px;
                                font-size: 11px;
                                line-height: 1.09;
                                color: #999999;
                              `}
                            >
                              9
                            </span>
                          </div>
                        </span>
                      </div>
                    </div>
                  </li>
                  <li
                    type="big"
                    className="RangkingBookItem"
                    css={css`
                      -ms-grid-column: 3;
                      -ms-grid-row: 1;
                      display: flex;
                      align-items: center;
                      box-sizing: content-box;
                    `}
                  >
                    <a
                      type="big"
                      href="/"
                      className="ThumbnailAnchor-big"
                      css={css`
                        flex: none;
                        margin-right: 18px;
                      `}
                    >
                      <div
                        className="ThumbnailWrapper"
                        css={css`
                          position: relative;
                          line-height: 0;
                          max-height: inherit;
                          -webkit-tap-highlight-color: rgba(0, 0, 0, 0.15);
                          background: linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), linear-gradient(90deg, rgba(0, 0, 0, 0.15) 0, rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 0) 95%, rgba(0, 0, 0, 0.15) 100%);
                        `}
                      >
                        <img
                          className="ThumbnailImage"
                          src={require("./image/1.png")}
                          alt="책제목"
                          sizes="80px"
                          css={css`
                            width: 80px;
                            max-height: 114px;
                          `}
                        />
                        <div
                          className="DiscountWrapper"
                          css={css`
                            position: absolute;
                            display: block;
                            top: -7px;
                            left: -7px;
                          `}
                        >
                          <div
                            className="DiscountSticker"
                            css={css`
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
                            `}
                          >
                            <span
                              className="DiscountNumber"
                              css={css`
                                font-size: 16px;
                                mix-blend-mode: normal;
                                font-weight: bold;
                                line-height: 14px;
                                opacity: 0.99;
                              `}
                            >
                              10
                            </span>
                            <span
                              className="DiscountPercentage"
                              css={css`
                                font-weight: bold;
                                margin-left: 1px;
                                font-size: 14px;
                                position: relative;
                                line-height: 9px;
                              `}
                            >
                              %
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
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
                        1
                      </h3>
                      <div
                        className="Container"
                        css={css`
                          width: 100%;
                          display: flex;
                          flex-direction: column;
                        `}
                      >
                        <a href="/">
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
                            돈의 심리학
                          </div>
                        </a>
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
                          <a href="/">모건 하우스</a>
                        </span>
                        <span>
                          <div
                            role="img"
                            className="RatingWrapper"
                            css={css`
                              display: inline-flex;
                              align-items: center;
                              font-size: 11px;
                              color: #999999;
                              line-height: 1.09;
                            `}
                          >
                            <div
                              className="StarContainer"
                              css={css`
                                position: relative;
                                margin-right: 2px;
                                line-height: 0;
                              `}
                            >
                              <img
                                src={require("./image/grade_black_24dp.svg")}
                                alt=""
                                css={css`
                                  width: 10px;
                                  height: 10px;
                                `}
                              />
                              <img
                                src={require("./image/grade_black_24dp.svg")}
                                alt=""
                                css={css`
                                  width: 10px;
                                  height: 10px;
                                `}
                              />
                              <img
                                src={require("./image/grade_black_24dp.svg")}
                                alt=""
                                css={css`
                                  width: 10px;
                                  height: 10px;
                                `}
                              />
                              <img
                                src={require("./image/grade_black_24dp.svg")}
                                alt=""
                                css={css`
                                  width: 10px;
                                  height: 10px;
                                `}
                              />
                              <img
                                src={require("./image/grade_black_24dp.svg")}
                                alt=""
                                css={css`
                                  width: 10px;
                                  height: 10px;
                                `}
                              />
                            </div>
                            <span
                              css={css`
                                height: 10px;
                                font-size: 11px;
                                line-height: 1.09;
                                color: #999999;
                              `}
                            >
                              9
                            </span>
                          </div>
                        </span>
                      </div>
                    </div>
                  </li>
                  <li
                    type="big"
                    className="RangkingBookItem"
                    css={css`
                      -ms-grid-column: 3;
                      -ms-grid-row: 2;
                      display: flex;
                      align-items: center;
                      box-sizing: content-box;
                    `}
                  >
                    <a
                      type="big"
                      href="/"
                      className="ThumbnailAnchor-big"
                      css={css`
                        flex: none;
                        margin-right: 18px;
                      `}
                    >
                      <div
                        className="ThumbnailWrapper"
                        css={css`
                          position: relative;
                          line-height: 0;
                          max-height: inherit;
                          -webkit-tap-highlight-color: rgba(0, 0, 0, 0.15);
                          background: linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), linear-gradient(90deg, rgba(0, 0, 0, 0.15) 0, rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 0) 95%, rgba(0, 0, 0, 0.15) 100%);
                        `}
                      >
                        <img
                          className="ThumbnailImage"
                          src={require("./image/1.png")}
                          alt="책제목"
                          sizes="80px"
                          css={css`
                            width: 80px;
                            max-height: 114px;
                          `}
                        />
                        <div
                          className="DiscountWrapper"
                          css={css`
                            position: absolute;
                            display: block;
                            top: -7px;
                            left: -7px;
                          `}
                        >
                          <div
                            className="DiscountSticker"
                            css={css`
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
                            `}
                          >
                            <span
                              className="DiscountNumber"
                              css={css`
                                font-size: 16px;
                                mix-blend-mode: normal;
                                font-weight: bold;
                                line-height: 14px;
                                opacity: 0.99;
                              `}
                            >
                              10
                            </span>
                            <span
                              className="DiscountPercentage"
                              css={css`
                                font-weight: bold;
                                margin-left: 1px;
                                font-size: 14px;
                                position: relative;
                                line-height: 9px;
                              `}
                            >
                              %
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
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
                        1
                      </h3>
                      <div
                        className="Container"
                        css={css`
                          width: 100%;
                          display: flex;
                          flex-direction: column;
                        `}
                      >
                        <a href="/">
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
                            돈의 심리학
                          </div>
                        </a>
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
                          <a href="/">모건 하우스</a>
                        </span>
                        <span>
                          <div
                            role="img"
                            className="RatingWrapper"
                            css={css`
                              display: inline-flex;
                              align-items: center;
                              font-size: 11px;
                              color: #999999;
                              line-height: 1.09;
                            `}
                          >
                            <div
                              className="StarContainer"
                              css={css`
                                position: relative;
                                margin-right: 2px;
                                line-height: 0;
                              `}
                            >
                              <img
                                src={require("./image/grade_black_24dp.svg")}
                                alt=""
                                css={css`
                                  width: 10px;
                                  height: 10px;
                                `}
                              />
                              <img
                                src={require("./image/grade_black_24dp.svg")}
                                alt=""
                                css={css`
                                  width: 10px;
                                  height: 10px;
                                `}
                              />
                              <img
                                src={require("./image/grade_black_24dp.svg")}
                                alt=""
                                css={css`
                                  width: 10px;
                                  height: 10px;
                                `}
                              />
                              <img
                                src={require("./image/grade_black_24dp.svg")}
                                alt=""
                                css={css`
                                  width: 10px;
                                  height: 10px;
                                `}
                              />
                              <img
                                src={require("./image/grade_black_24dp.svg")}
                                alt=""
                                css={css`
                                  width: 10px;
                                  height: 10px;
                                `}
                              />
                            </div>
                            <span
                              css={css`
                                height: 10px;
                                font-size: 11px;
                                line-height: 1.09;
                                color: #999999;
                              `}
                            >
                              9
                            </span>
                          </div>
                        </span>
                      </div>
                    </div>
                  </li>
                  <li
                    type="big"
                    className="RangkingBookItem"
                    css={css`
                      -ms-grid-column: 3;
                      -ms-grid-row: 3;
                      display: flex;
                      align-items: center;
                      box-sizing: content-box;
                    `}
                  >
                    <a
                      type="big"
                      href="/"
                      className="ThumbnailAnchor-big"
                      css={css`
                        flex: none;
                        margin-right: 18px;
                      `}
                    >
                      <div
                        className="ThumbnailWrapper"
                        css={css`
                          position: relative;
                          line-height: 0;
                          max-height: inherit;
                          -webkit-tap-highlight-color: rgba(0, 0, 0, 0.15);
                          background: linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), linear-gradient(90deg, rgba(0, 0, 0, 0.15) 0, rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 0) 95%, rgba(0, 0, 0, 0.15) 100%);
                        `}
                      >
                        <img
                          className="ThumbnailImage"
                          src={require("./image/1.png")}
                          alt="책제목"
                          sizes="80px"
                          css={css`
                            width: 80px;
                            max-height: 114px;
                          `}
                        />
                        <div
                          className="DiscountWrapper"
                          css={css`
                            position: absolute;
                            display: block;
                            top: -7px;
                            left: -7px;
                          `}
                        >
                          <div
                            className="DiscountSticker"
                            css={css`
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
                            `}
                          >
                            <span
                              className="DiscountNumber"
                              css={css`
                                font-size: 16px;
                                mix-blend-mode: normal;
                                font-weight: bold;
                                line-height: 14px;
                                opacity: 0.99;
                              `}
                            >
                              10
                            </span>
                            <span
                              className="DiscountPercentage"
                              css={css`
                                font-weight: bold;
                                margin-left: 1px;
                                font-size: 14px;
                                position: relative;
                                line-height: 9px;
                              `}
                            >
                              %
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
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
                        1
                      </h3>
                      <div
                        className="Container"
                        css={css`
                          width: 100%;
                          display: flex;
                          flex-direction: column;
                        `}
                      >
                        <a href="/">
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
                            돈의 심리학
                          </div>
                        </a>
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
                          <a href="/">모건 하우스</a>
                        </span>
                        <span>
                          <div
                            role="img"
                            className="RatingWrapper"
                            css={css`
                              display: inline-flex;
                              align-items: center;
                              font-size: 11px;
                              color: #999999;
                              line-height: 1.09;
                            `}
                          >
                            <div
                              className="StarContainer"
                              css={css`
                                position: relative;
                                margin-right: 2px;
                                line-height: 0;
                              `}
                            >
                              <img
                                src={require("./image/grade_black_24dp.svg")}
                                alt=""
                                css={css`
                                  width: 10px;
                                  height: 10px;
                                `}
                              />
                              <img
                                src={require("./image/grade_black_24dp.svg")}
                                alt=""
                                css={css`
                                  width: 10px;
                                  height: 10px;
                                `}
                              />
                              <img
                                src={require("./image/grade_black_24dp.svg")}
                                alt=""
                                css={css`
                                  width: 10px;
                                  height: 10px;
                                `}
                              />
                              <img
                                src={require("./image/grade_black_24dp.svg")}
                                alt=""
                                css={css`
                                  width: 10px;
                                  height: 10px;
                                `}
                              />
                              <img
                                src={require("./image/grade_black_24dp.svg")}
                                alt=""
                                css={css`
                                  width: 10px;
                                  height: 10px;
                                `}
                              />
                            </div>
                            <span
                              css={css`
                                height: 10px;
                                font-size: 11px;
                                line-height: 1.09;
                                color: #999999;
                              `}
                            >
                              9
                            </span>
                          </div>
                        </span>
                      </div>
                    </div>
                  </li>
                  <li
                    type="big"
                    className="RangkingBookItem"
                    css={css`
                      -ms-grid-column: 5;
                      -ms-grid-row: 1;
                      display: flex;
                      align-items: center;
                      box-sizing: content-box;
                    `}
                  >
                    <a
                      type="big"
                      href="/"
                      className="ThumbnailAnchor-big"
                      css={css`
                        flex: none;
                        margin-right: 18px;
                      `}
                    >
                      <div
                        className="ThumbnailWrapper"
                        css={css`
                          position: relative;
                          line-height: 0;
                          max-height: inherit;
                          -webkit-tap-highlight-color: rgba(0, 0, 0, 0.15);
                          background: linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), linear-gradient(90deg, rgba(0, 0, 0, 0.15) 0, rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 0) 95%, rgba(0, 0, 0, 0.15) 100%);
                        `}
                      >
                        <img
                          className="ThumbnailImage"
                          src={require("./image/1.png")}
                          alt="책제목"
                          sizes="80px"
                          css={css`
                            width: 80px;
                            max-height: 114px;
                          `}
                        />
                        <div
                          className="DiscountWrapper"
                          css={css`
                            position: absolute;
                            display: block;
                            top: -7px;
                            left: -7px;
                          `}
                        >
                          <div
                            className="DiscountSticker"
                            css={css`
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
                            `}
                          >
                            <span
                              className="DiscountNumber"
                              css={css`
                                font-size: 16px;
                                mix-blend-mode: normal;
                                font-weight: bold;
                                line-height: 14px;
                                opacity: 0.99;
                              `}
                            >
                              10
                            </span>
                            <span
                              className="DiscountPercentage"
                              css={css`
                                font-weight: bold;
                                margin-left: 1px;
                                font-size: 14px;
                                position: relative;
                                line-height: 9px;
                              `}
                            >
                              %
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
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
                        1
                      </h3>
                      <div
                        className="Container"
                        css={css`
                          width: 100%;
                          display: flex;
                          flex-direction: column;
                        `}
                      >
                        <a href="/">
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
                            돈의 심리학
                          </div>
                        </a>
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
                          <a href="/">모건 하우스</a>
                        </span>
                        <span>
                          <div
                            role="img"
                            className="RatingWrapper"
                            css={css`
                              display: inline-flex;
                              align-items: center;
                              font-size: 11px;
                              color: #999999;
                              line-height: 1.09;
                            `}
                          >
                            <div
                              className="StarContainer"
                              css={css`
                                position: relative;
                                margin-right: 2px;
                                line-height: 0;
                              `}
                            >
                              <img
                                src={require("./image/grade_black_24dp.svg")}
                                alt=""
                                css={css`
                                  width: 10px;
                                  height: 10px;
                                `}
                              />
                              <img
                                src={require("./image/grade_black_24dp.svg")}
                                alt=""
                                css={css`
                                  width: 10px;
                                  height: 10px;
                                `}
                              />
                              <img
                                src={require("./image/grade_black_24dp.svg")}
                                alt=""
                                css={css`
                                  width: 10px;
                                  height: 10px;
                                `}
                              />
                              <img
                                src={require("./image/grade_black_24dp.svg")}
                                alt=""
                                css={css`
                                  width: 10px;
                                  height: 10px;
                                `}
                              />
                              <img
                                src={require("./image/grade_black_24dp.svg")}
                                alt=""
                                css={css`
                                  width: 10px;
                                  height: 10px;
                                `}
                              />
                            </div>
                            <span
                              css={css`
                                height: 10px;
                                font-size: 11px;
                                line-height: 1.09;
                                color: #999999;
                              `}
                            >
                              9
                            </span>
                          </div>
                        </span>
                      </div>
                    </div>
                  </li>
                  <li
                    type="big"
                    className="RangkingBookItem"
                    css={css`
                      -ms-grid-column: 5;
                      -ms-grid-row: 2;
                      display: flex;
                      align-items: center;
                      box-sizing: content-box;
                    `}
                  >
                    <a
                      type="big"
                      href="/"
                      className="ThumbnailAnchor-big"
                      css={css`
                        flex: none;
                        margin-right: 18px;
                      `}
                    >
                      <div
                        className="ThumbnailWrapper"
                        css={css`
                          position: relative;
                          line-height: 0;
                          max-height: inherit;
                          -webkit-tap-highlight-color: rgba(0, 0, 0, 0.15);
                          background: linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), linear-gradient(90deg, rgba(0, 0, 0, 0.15) 0, rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 0) 95%, rgba(0, 0, 0, 0.15) 100%);
                        `}
                      >
                        <img
                          className="ThumbnailImage"
                          src={require("./image/1.png")}
                          alt="책제목"
                          sizes="80px"
                          css={css`
                            width: 80px;
                            max-height: 114px;
                          `}
                        />
                        <div
                          className="DiscountWrapper"
                          css={css`
                            position: absolute;
                            display: block;
                            top: -7px;
                            left: -7px;
                          `}
                        >
                          <div
                            className="DiscountSticker"
                            css={css`
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
                            `}
                          >
                            <span
                              className="DiscountNumber"
                              css={css`
                                font-size: 16px;
                                mix-blend-mode: normal;
                                font-weight: bold;
                                line-height: 14px;
                                opacity: 0.99;
                              `}
                            >
                              10
                            </span>
                            <span
                              className="DiscountPercentage"
                              css={css`
                                font-weight: bold;
                                margin-left: 1px;
                                font-size: 14px;
                                position: relative;
                                line-height: 9px;
                              `}
                            >
                              %
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
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
                        1
                      </h3>
                      <div
                        className="Container"
                        css={css`
                          width: 100%;
                          display: flex;
                          flex-direction: column;
                        `}
                      >
                        <a href="/">
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
                            돈의 심리학
                          </div>
                        </a>
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
                          <a href="/">모건 하우스</a>
                        </span>
                        <span>
                          <div
                            role="img"
                            className="RatingWrapper"
                            css={css`
                              display: inline-flex;
                              align-items: center;
                              font-size: 11px;
                              color: #999999;
                              line-height: 1.09;
                            `}
                          >
                            <div
                              className="StarContainer"
                              css={css`
                                position: relative;
                                margin-right: 2px;
                                line-height: 0;
                              `}
                            >
                              <img
                                src={require("./image/grade_black_24dp.svg")}
                                alt=""
                                css={css`
                                  width: 10px;
                                  height: 10px;
                                `}
                              />
                              <img
                                src={require("./image/grade_black_24dp.svg")}
                                alt=""
                                css={css`
                                  width: 10px;
                                  height: 10px;
                                `}
                              />
                              <img
                                src={require("./image/grade_black_24dp.svg")}
                                alt=""
                                css={css`
                                  width: 10px;
                                  height: 10px;
                                `}
                              />
                              <img
                                src={require("./image/grade_black_24dp.svg")}
                                alt=""
                                css={css`
                                  width: 10px;
                                  height: 10px;
                                `}
                              />
                              <img
                                src={require("./image/grade_black_24dp.svg")}
                                alt=""
                                css={css`
                                  width: 10px;
                                  height: 10px;
                                `}
                              />
                            </div>
                            <span
                              css={css`
                                height: 10px;
                                font-size: 11px;
                                line-height: 1.09;
                                color: #999999;
                              `}
                            >
                              9
                            </span>
                          </div>
                        </span>
                      </div>
                    </div>
                  </li>
                  <li
                    type="big"
                    className="RangkingBookItem"
                    css={css`
                      -ms-grid-column: 5;
                      -ms-grid-row: 3;
                      display: flex;
                      align-items: center;
                      box-sizing: content-box;
                    `}
                  >
                    <a
                      type="big"
                      href="/"
                      className="ThumbnailAnchor-big"
                      css={css`
                        flex: none;
                        margin-right: 18px;
                      `}
                    >
                      <div
                        className="ThumbnailWrapper"
                        css={css`
                          position: relative;
                          line-height: 0;
                          max-height: inherit;
                          -webkit-tap-highlight-color: rgba(0, 0, 0, 0.15);
                          background: linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), linear-gradient(90deg, rgba(0, 0, 0, 0.15) 0, rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 0) 95%, rgba(0, 0, 0, 0.15) 100%);
                        `}
                      >
                        <img
                          className="ThumbnailImage"
                          src={require("./image/1.png")}
                          alt="책제목"
                          sizes="80px"
                          css={css`
                            width: 80px;
                            max-height: 114px;
                          `}
                        />
                        <div
                          className="DiscountWrapper"
                          css={css`
                            position: absolute;
                            display: block;
                            top: -7px;
                            left: -7px;
                          `}
                        >
                          <div
                            className="DiscountSticker"
                            css={css`
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
                            `}
                          >
                            <span
                              className="DiscountNumber"
                              css={css`
                                font-size: 16px;
                                mix-blend-mode: normal;
                                font-weight: bold;
                                line-height: 14px;
                                opacity: 0.99;
                              `}
                            >
                              10
                            </span>
                            <span
                              className="DiscountPercentage"
                              css={css`
                                font-weight: bold;
                                margin-left: 1px;
                                font-size: 14px;
                                position: relative;
                                line-height: 9px;
                              `}
                            >
                              %
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
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
                        1
                      </h3>
                      <div
                        className="Container"
                        css={css`
                          width: 100%;
                          display: flex;
                          flex-direction: column;
                        `}
                      >
                        <a href="/">
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
                            돈의 심리학
                          </div>
                        </a>
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
                          <a href="/">모건 하우스</a>
                        </span>
                        <span>
                          <div
                            role="img"
                            className="RatingWrapper"
                            css={css`
                              display: inline-flex;
                              align-items: center;
                              font-size: 11px;
                              color: #999999;
                              line-height: 1.09;
                            `}
                          >
                            <div
                              className="StarContainer"
                              css={css`
                                position: relative;
                                margin-right: 2px;
                                line-height: 0;
                              `}
                            >
                              <img
                                src={require("./image/grade_black_24dp.svg")}
                                alt=""
                                css={css`
                                  width: 10px;
                                  height: 10px;
                                `}
                              />
                              <img
                                src={require("./image/grade_black_24dp.svg")}
                                alt=""
                                css={css`
                                  width: 10px;
                                  height: 10px;
                                `}
                              />
                              <img
                                src={require("./image/grade_black_24dp.svg")}
                                alt=""
                                css={css`
                                  width: 10px;
                                  height: 10px;
                                `}
                              />
                              <img
                                src={require("./image/grade_black_24dp.svg")}
                                alt=""
                                css={css`
                                  width: 10px;
                                  height: 10px;
                                `}
                              />
                              <img
                                src={require("./image/grade_black_24dp.svg")}
                                alt=""
                                css={css`
                                  width: 10px;
                                  height: 10px;
                                `}
                              />
                            </div>
                            <span
                              css={css`
                                height: 10px;
                                font-size: 11px;
                                line-height: 1.09;
                                color: #999999;
                              `}
                            >
                              9
                            </span>
                          </div>
                        </span>
                      </div>
                    </div>
                  </li>
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
                <li
                  className="BookWrapper"
                  css={css`
                    display: flex;
                    flex-direction: column;
                    box-sizing: content-box;
                    min-width: 140px;
                    width: 140px;
                    height: 100%;
                  `}
                >
                  <a
                    href="/"
                    className="StyledAnchor"
                    css={css`
                      display: inline-block;
                    `}
                  >
                    <div
                      className="StyledThumbnailWrapper"
                      css={css`
                        width: 140px;
                        height: 216px;
                        display: flex;
                        align-items: flex-end;
                        flex-shrink: 0;
                      `}
                    >
                      <div
                        className="ThumbnailWrapper"
                        css={css`
                          position: relative;
                          line-height: 0;
                          max-height: inherit;
                          background: linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), linear-gradient(90deg, rgba(0, 0, 0, 0.15) 0, rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 0) 95%, rgba(0, 0, 0, 0.15) 100%);
                        `}
                      >
                        <img
                          className="StyledThumbnailImage"
                          src={require("./image/한국사기출500제.png")}
                          sizes="(max-wideth: 999px) 100px, 140px"
                          alt="책이미지"
                          css={css`
                            width: 140px;
                            max-height: calc(140px * 1.618 - 10px);
                          `}
                        />
                        <div
                          className="DiscountWrapper"
                          css={css`
                            position: absolute;
                            display: block;
                            top: -7px;
                            left: -7px;
                          `}
                        >
                          <div
                            className="DiscountSticker"
                            css={css`
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
                            `}
                          >
                            <span
                              className="DiscountNumber"
                              css={css`
                                font-size: 16px;
                                mix-blend-mode: normal;
                                font-weight: bold;
                                line-height: 14px;
                                opacity: 0.99;
                              `}
                            >
                              10
                            </span>
                            <span
                              className="DiscountPercentage"
                              css={css`
                                font-weight: bold;
                                margin-left: 1px;
                                font-size: 14px;
                                position: relative;
                                line-height: 9px;
                              `}
                            >
                              %
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <div
                    className="BookInfoContainer"
                    css={css`
                      width: 100%;
                      margin-top: 10px;
                      display: flex;
                      flex-direction: column;
                    `}
                  >
                    <a href="/">
                      <div
                        className="BookTitleBelowThumbanil"
                        css={css`
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
                        `}
                      >
                        우연히, 웨스 앤더스
                      </div>
                    </a>
                    <span
                      className="BookAuthorBelowThumbnail"
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
                      <a href="/">췰리 코발</a>
                    </span>
                  </div>
                </li>
                <li
                  className="BookWrapper"
                  css={css`
                    display: flex;
                    flex-direction: column;
                    box-sizing: content-box;
                    min-width: 140px;
                    width: 140px;
                    height: 100%;
                  `}
                >
                  <a
                    href="/"
                    className="StyledAnchor"
                    css={css`
                      display: inline-block;
                    `}
                  >
                    <div
                      className="StyledThumbnailWrapper"
                      css={css`
                        width: 140px;
                        height: 216px;
                        display: flex;
                        align-items: flex-end;
                        flex-shrink: 0;
                      `}
                    >
                      <div
                        className="ThumbnailWrapper"
                        css={css`
                          position: relative;
                          line-height: 0;
                          max-height: inherit;
                          background: linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), linear-gradient(90deg, rgba(0, 0, 0, 0.15) 0, rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 0) 95%, rgba(0, 0, 0, 0.15) 100%);
                        `}
                      >
                        <img
                          className="StyledThumbnailImage"
                          src={require("./image/1.png")}
                          sizes="(max-wideth: 999px) 100px, 140px"
                          alt="책이미지"
                          css={css`
                            width: 140px;
                            max-height: calc(140px * 1.618 - 10px);
                          `}
                        />
                        <div
                          className="DiscountWrapper"
                          css={css`
                            position: absolute;
                            display: block;
                            top: -7px;
                            left: -7px;
                          `}
                        >
                          <div
                            className="DiscountSticker"
                            css={css`
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
                            `}
                          >
                            <span
                              className="DiscountNumber"
                              css={css`
                                font-size: 16px;
                                mix-blend-mode: normal;
                                font-weight: bold;
                                line-height: 14px;
                                opacity: 0.99;
                              `}
                            >
                              10
                            </span>
                            <span
                              className="DiscountPercentage"
                              css={css`
                                font-weight: bold;
                                margin-left: 1px;
                                font-size: 14px;
                                position: relative;
                                line-height: 9px;
                              `}
                            >
                              %
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <div
                    className="BookInfoContainer"
                    css={css`
                      width: 100%;
                      margin-top: 10px;
                      display: flex;
                      flex-direction: column;
                    `}
                  >
                    <a href="/">
                      <div
                        className="BookTitleBelowThumbanil"
                        css={css`
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
                        `}
                      >
                        우연히, 웨스 앤더스
                      </div>
                    </a>
                    <span
                      className="BookAuthorBelowThumbnail"
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
                      <a href="/">췰리 코발</a>
                    </span>
                  </div>
                </li>
                <li
                  className="BookWrapper"
                  css={css`
                    display: flex;
                    flex-direction: column;
                    box-sizing: content-box;
                    min-width: 140px;
                    width: 140px;
                    height: 100%;
                  `}
                >
                  <a
                    href="/"
                    className="StyledAnchor"
                    css={css`
                      display: inline-block;
                    `}
                  >
                    <div
                      className="StyledThumbnailWrapper"
                      css={css`
                        width: 140px;
                        height: 216px;
                        display: flex;
                        align-items: flex-end;
                        flex-shrink: 0;
                      `}
                    >
                      <div
                        className="ThumbnailWrapper"
                        css={css`
                          position: relative;
                          line-height: 0;
                          max-height: inherit;
                          background: linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), linear-gradient(90deg, rgba(0, 0, 0, 0.15) 0, rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 0) 95%, rgba(0, 0, 0, 0.15) 100%);
                        `}
                      >
                        <img
                          className="StyledThumbnailImage"
                          src={require("./image/2.png")}
                          sizes="(max-wideth: 999px) 100px, 140px"
                          alt="책이미지"
                          css={css`
                            width: 140px;
                            max-height: calc(140px * 1.618 - 10px);
                          `}
                        />
                        <div
                          className="DiscountWrapper"
                          css={css`
                            position: absolute;
                            display: block;
                            top: -7px;
                            left: -7px;
                          `}
                        >
                          <div
                            className="DiscountSticker"
                            css={css`
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
                            `}
                          >
                            <span
                              className="DiscountNumber"
                              css={css`
                                font-size: 16px;
                                mix-blend-mode: normal;
                                font-weight: bold;
                                line-height: 14px;
                                opacity: 0.99;
                              `}
                            >
                              10
                            </span>
                            <span
                              className="DiscountPercentage"
                              css={css`
                                font-weight: bold;
                                margin-left: 1px;
                                font-size: 14px;
                                position: relative;
                                line-height: 9px;
                              `}
                            >
                              %
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <div
                    className="BookInfoContainer"
                    css={css`
                      width: 100%;
                      margin-top: 10px;
                      display: flex;
                      flex-direction: column;
                    `}
                  >
                    <a href="/">
                      <div
                        className="BookTitleBelowThumbanil"
                        css={css`
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
                        `}
                      >
                        우연히, 웨스 앤더스
                      </div>
                    </a>
                    <span
                      className="BookAuthorBelowThumbnail"
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
                      <a href="/">췰리 코발</a>
                    </span>
                  </div>
                </li>
                <li
                  className="BookWrapper"
                  css={css`
                    display: flex;
                    flex-direction: column;
                    box-sizing: content-box;
                    min-width: 140px;
                    width: 140px;
                    height: 100%;
                  `}
                >
                  <a
                    href="/"
                    className="StyledAnchor"
                    css={css`
                      display: inline-block;
                    `}
                  >
                    <div
                      className="StyledThumbnailWrapper"
                      css={css`
                        width: 140px;
                        height: 216px;
                        display: flex;
                        align-items: flex-end;
                        flex-shrink: 0;
                      `}
                    >
                      <div
                        className="ThumbnailWrapper"
                        css={css`
                          position: relative;
                          line-height: 0;
                          max-height: inherit;
                          background: linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), linear-gradient(90deg, rgba(0, 0, 0, 0.15) 0, rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 0) 95%, rgba(0, 0, 0, 0.15) 100%);
                        `}
                      >
                        <img
                          className="StyledThumbnailImage"
                          src={require("./image/한국사기출500제.png")}
                          sizes="(max-wideth: 999px) 100px, 140px"
                          alt="책이미지"
                          css={css`
                            width: 140px;
                            max-height: calc(140px * 1.618 - 10px);
                          `}
                        />
                        <div
                          className="DiscountWrapper"
                          css={css`
                            position: absolute;
                            display: block;
                            top: -7px;
                            left: -7px;
                          `}
                        >
                          <div
                            className="DiscountSticker"
                            css={css`
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
                            `}
                          >
                            <span
                              className="DiscountNumber"
                              css={css`
                                font-size: 16px;
                                mix-blend-mode: normal;
                                font-weight: bold;
                                line-height: 14px;
                                opacity: 0.99;
                              `}
                            >
                              10
                            </span>
                            <span
                              className="DiscountPercentage"
                              css={css`
                                font-weight: bold;
                                margin-left: 1px;
                                font-size: 14px;
                                position: relative;
                                line-height: 9px;
                              `}
                            >
                              %
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <div
                    className="BookInfoContainer"
                    css={css`
                      width: 100%;
                      margin-top: 10px;
                      display: flex;
                      flex-direction: column;
                    `}
                  >
                    <a href="/">
                      <div
                        className="BookTitleBelowThumbanil"
                        css={css`
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
                        `}
                      >
                        우연히, 웨스 앤더스
                      </div>
                    </a>
                    <span
                      className="BookAuthorBelowThumbnail"
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
                      <a href="/">췰리 코발</a>
                    </span>
                  </div>
                </li>
                <li
                  className="BookWrapper"
                  css={css`
                    display: flex;
                    flex-direction: column;
                    box-sizing: content-box;
                    min-width: 140px;
                    width: 140px;
                    height: 100%;
                  `}
                >
                  <a
                    href="/"
                    className="StyledAnchor"
                    css={css`
                      display: inline-block;
                    `}
                  >
                    <div
                      className="StyledThumbnailWrapper"
                      css={css`
                        width: 140px;
                        height: 216px;
                        display: flex;
                        align-items: flex-end;
                        flex-shrink: 0;
                      `}
                    >
                      <div
                        className="ThumbnailWrapper"
                        css={css`
                          position: relative;
                          line-height: 0;
                          max-height: inherit;
                          background: linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), linear-gradient(90deg, rgba(0, 0, 0, 0.15) 0, rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 0) 95%, rgba(0, 0, 0, 0.15) 100%);
                        `}
                      >
                        <img
                          className="StyledThumbnailImage"
                          src={require("./image/4.png")}
                          sizes="(max-wideth: 999px) 100px, 140px"
                          alt="책이미지"
                          css={css`
                            width: 140px;
                            max-height: calc(140px * 1.618 - 10px);
                          `}
                        />
                        <div
                          className="DiscountWrapper"
                          css={css`
                            position: absolute;
                            display: block;
                            top: -7px;
                            left: -7px;
                          `}
                        >
                          <div
                            className="DiscountSticker"
                            css={css`
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
                            `}
                          >
                            <span
                              className="DiscountNumber"
                              css={css`
                                font-size: 16px;
                                mix-blend-mode: normal;
                                font-weight: bold;
                                line-height: 14px;
                                opacity: 0.99;
                              `}
                            >
                              10
                            </span>
                            <span
                              className="DiscountPercentage"
                              css={css`
                                font-weight: bold;
                                margin-left: 1px;
                                font-size: 14px;
                                position: relative;
                                line-height: 9px;
                              `}
                            >
                              %
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <div
                    className="BookInfoContainer"
                    css={css`
                      width: 100%;
                      margin-top: 10px;
                      display: flex;
                      flex-direction: column;
                    `}
                  >
                    <a href="/">
                      <div
                        className="BookTitleBelowThumbanil"
                        css={css`
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
                        `}
                      >
                        우연히, 웨스 앤더스
                      </div>
                    </a>
                    <span
                      className="BookAuthorBelowThumbnail"
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
                      <a href="/">췰리 코발</a>
                    </span>
                  </div>
                </li>
                <li
                  className="BookWrapper"
                  css={css`
                    display: flex;
                    flex-direction: column;
                    box-sizing: content-box;
                    min-width: 140px;
                    width: 140px;
                    height: 100%;
                  `}
                >
                  <a
                    href="/"
                    className="StyledAnchor"
                    css={css`
                      display: inline-block;
                    `}
                  >
                    <div
                      className="StyledThumbnailWrapper"
                      css={css`
                        width: 140px;
                        height: 216px;
                        display: flex;
                        align-items: flex-end;
                        flex-shrink: 0;
                      `}
                    >
                      <div
                        className="ThumbnailWrapper"
                        css={css`
                          position: relative;
                          line-height: 0;
                          max-height: inherit;
                          background: linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), linear-gradient(90deg, rgba(0, 0, 0, 0.15) 0, rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 0) 95%, rgba(0, 0, 0, 0.15) 100%);
                        `}
                      >
                        <img
                          className="StyledThumbnailImage"
                          src={require("./image/한국사기출500제.png")}
                          sizes="(max-wideth: 999px) 100px, 140px"
                          alt="책이미지"
                          css={css`
                            width: 140px;
                            max-height: calc(140px * 1.618 - 10px);
                          `}
                        />
                        <div
                          className="DiscountWrapper"
                          css={css`
                            position: absolute;
                            display: block;
                            top: -7px;
                            left: -7px;
                          `}
                        >
                          <div
                            className="DiscountSticker"
                            css={css`
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
                            `}
                          >
                            <span
                              className="DiscountNumber"
                              css={css`
                                font-size: 16px;
                                mix-blend-mode: normal;
                                font-weight: bold;
                                line-height: 14px;
                                opacity: 0.99;
                              `}
                            >
                              10
                            </span>
                            <span
                              className="DiscountPercentage"
                              css={css`
                                font-weight: bold;
                                margin-left: 1px;
                                font-size: 14px;
                                position: relative;
                                line-height: 9px;
                              `}
                            >
                              %
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <div
                    className="BookInfoContainer"
                    css={css`
                      width: 100%;
                      margin-top: 10px;
                      display: flex;
                      flex-direction: column;
                    `}
                  >
                    <a href="/">
                      <div
                        className="BookTitleBelowThumbanil"
                        css={css`
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
                        `}
                      >
                        우연히, 웨스 앤더스
                      </div>
                    </a>
                    <span
                      className="BookAuthorBelowThumbnail"
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
                      <a href="/">췰리 코발</a>
                    </span>
                  </div>
                </li>
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
                <li
                  className="BookWrapper"
                  css={css`
                    display: flex;
                    flex-direction: column;
                    box-sizing: content-box;
                    min-width: 140px;
                    width: 140px;
                    height: 100%;
                  `}
                >
                  <a
                    href="/"
                    className="StyledAnchor"
                    css={css`
                      display: inline-block;
                    `}
                  >
                    <div
                      className="StyledThumbnailWrapper"
                      css={css`
                        width: 140px;
                        height: 216px;
                        display: flex;
                        align-items: flex-end;
                        flex-shrink: 0;
                      `}
                    >
                      <div
                        className="ThumbnailWrapper"
                        css={css`
                          position: relative;
                          line-height: 0;
                          max-height: inherit;
                          background: linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), linear-gradient(90deg, rgba(0, 0, 0, 0.15) 0, rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 0) 95%, rgba(0, 0, 0, 0.15) 100%);
                        `}
                      >
                        <img
                          className="StyledThumbnailImage"
                          src={require("./image/한국사기출500제.png")}
                          sizes="(max-wideth: 999px) 100px, 140px"
                          alt="책이미지"
                          css={css`
                            width: 140px;
                            max-height: calc(140px * 1.618 - 10px);
                          `}
                        />
                        <div
                          className="DiscountWrapper"
                          css={css`
                            position: absolute;
                            display: block;
                            top: -7px;
                            left: -7px;
                          `}
                        >
                          <div
                            className="DiscountSticker"
                            css={css`
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
                            `}
                          >
                            <span
                              className="DiscountNumber"
                              css={css`
                                font-size: 16px;
                                mix-blend-mode: normal;
                                font-weight: bold;
                                line-height: 14px;
                                opacity: 0.99;
                              `}
                            >
                              10
                            </span>
                            <span
                              className="DiscountPercentage"
                              css={css`
                                font-weight: bold;
                                margin-left: 1px;
                                font-size: 14px;
                                position: relative;
                                line-height: 9px;
                              `}
                            >
                              %
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <div
                    className="BookInfoContainer"
                    css={css`
                      width: 100%;
                      margin-top: 10px;
                      display: flex;
                      flex-direction: column;
                    `}
                  >
                    <a href="/">
                      <div
                        className="BookTitleBelowThumbanil"
                        css={css`
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
                        `}
                      >
                        우연히, 웨스 앤더스
                      </div>
                    </a>
                    <span
                      className="BookAuthorBelowThumbnail"
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
                      <a href="/">췰리 코발</a>
                    </span>
                    <span>
                      <div
                        role="img"
                        className="RatingWrapper"
                        css={css`
                          display: inline-flex;
                          align-items: center;
                          font-size: 11px;
                          color: #999999;
                          line-height: 1.09;
                        `}
                      >
                        <div
                          className="StarContainer"
                          css={css`
                            position: relative;
                            margin-right: 2px;
                            line-height: 0;
                          `}
                        >
                          <img
                            src={require("./image/grade_black_24dp.svg")}
                            alt=""
                            css={css`
                              width: 10px;
                              height: 10px;
                            `}
                          />
                          <img
                            src={require("./image/grade_black_24dp.svg")}
                            alt=""
                            css={css`
                              width: 10px;
                              height: 10px;
                            `}
                          />
                          <img
                            src={require("./image/grade_black_24dp.svg")}
                            alt=""
                            css={css`
                              width: 10px;
                              height: 10px;
                            `}
                          />
                          <img
                            src={require("./image/grade_black_24dp.svg")}
                            alt=""
                            css={css`
                              width: 10px;
                              height: 10px;
                            `}
                          />
                          <img
                            src={require("./image/grade_black_24dp.svg")}
                            alt=""
                            css={css`
                              width: 10px;
                              height: 10px;
                            `}
                          />
                        </div>
                        <span
                          css={css`
                            height: 10px;
                            font-size: 11px;
                            line-height: 1.09;
                            color: #61ac00;
                          `}
                        >
                          9
                        </span>
                      </div>
                    </span>
                  </div>
                </li>
                <li
                  className="BookWrapper"
                  css={css`
                    display: flex;
                    flex-direction: column;
                    box-sizing: content-box;
                    min-width: 140px;
                    width: 140px;
                    height: 100%;
                  `}
                >
                  <a
                    href="/"
                    className="StyledAnchor"
                    css={css`
                      display: inline-block;
                    `}
                  >
                    <div
                      className="StyledThumbnailWrapper"
                      css={css`
                        width: 140px;
                        height: 216px;
                        display: flex;
                        align-items: flex-end;
                        flex-shrink: 0;
                      `}
                    >
                      <div
                        className="ThumbnailWrapper"
                        css={css`
                          position: relative;
                          line-height: 0;
                          max-height: inherit;
                          background: linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), linear-gradient(90deg, rgba(0, 0, 0, 0.15) 0, rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 0) 95%, rgba(0, 0, 0, 0.15) 100%);
                        `}
                      >
                        <img
                          className="StyledThumbnailImage"
                          src={require("./image/1.png")}
                          sizes="(max-wideth: 999px) 100px, 140px"
                          alt="책이미지"
                          css={css`
                            width: 140px;
                            max-height: calc(140px * 1.618 - 10px);
                          `}
                        />
                        <div
                          className="DiscountWrapper"
                          css={css`
                            position: absolute;
                            display: block;
                            top: -7px;
                            left: -7px;
                          `}
                        >
                          <div
                            className="DiscountSticker"
                            css={css`
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
                            `}
                          >
                            <span
                              className="DiscountNumber"
                              css={css`
                                font-size: 16px;
                                mix-blend-mode: normal;
                                font-weight: bold;
                                line-height: 14px;
                                opacity: 0.99;
                              `}
                            >
                              10
                            </span>
                            <span
                              className="DiscountPercentage"
                              css={css`
                                font-weight: bold;
                                margin-left: 1px;
                                font-size: 14px;
                                position: relative;
                                line-height: 9px;
                              `}
                            >
                              %
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <div
                    className="BookInfoContainer"
                    css={css`
                      width: 100%;
                      margin-top: 10px;
                      display: flex;
                      flex-direction: column;
                    `}
                  >
                    <a href="/">
                      <div
                        className="BookTitleBelowThumbanil"
                        css={css`
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
                        `}
                      >
                        우연히, 웨스 앤더스
                      </div>
                    </a>
                    <span
                      className="BookAuthorBelowThumbnail"
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
                      <a href="/">췰리 코발</a>
                    </span>
                    <span>
                      <div
                        role="img"
                        className="RatingWrapper"
                        css={css`
                          display: inline-flex;
                          align-items: center;
                          font-size: 11px;
                          color: #999999;
                          line-height: 1.09;
                        `}
                      >
                        <div
                          className="StarContainer"
                          css={css`
                            position: relative;
                            margin-right: 2px;
                            line-height: 0;
                          `}
                        >
                          <img
                            src={require("./image/grade_black_24dp.svg")}
                            alt=""
                            css={css`
                              width: 10px;
                              height: 10px;
                            `}
                          />
                          <img
                            src={require("./image/grade_black_24dp.svg")}
                            alt=""
                            css={css`
                              width: 10px;
                              height: 10px;
                            `}
                          />
                          <img
                            src={require("./image/grade_black_24dp.svg")}
                            alt=""
                            css={css`
                              width: 10px;
                              height: 10px;
                            `}
                          />
                          <img
                            src={require("./image/grade_black_24dp.svg")}
                            alt=""
                            css={css`
                              width: 10px;
                              height: 10px;
                            `}
                          />
                          <img
                            src={require("./image/grade_black_24dp.svg")}
                            alt=""
                            css={css`
                              width: 10px;
                              height: 10px;
                            `}
                          />
                        </div>
                        <span
                          css={css`
                            height: 10px;
                            font-size: 11px;
                            line-height: 1.09;
                            color: #61ac00;
                          `}
                        >
                          9
                        </span>
                      </div>
                    </span>
                  </div>
                </li>
                <li
                  className="BookWrapper"
                  css={css`
                    display: flex;
                    flex-direction: column;
                    box-sizing: content-box;
                    min-width: 140px;
                    width: 140px;
                    height: 100%;
                  `}
                >
                  <a
                    href="/"
                    className="StyledAnchor"
                    css={css`
                      display: inline-block;
                    `}
                  >
                    <div
                      className="StyledThumbnailWrapper"
                      css={css`
                        width: 140px;
                        height: 216px;
                        display: flex;
                        align-items: flex-end;
                        flex-shrink: 0;
                      `}
                    >
                      <div
                        className="ThumbnailWrapper"
                        css={css`
                          position: relative;
                          line-height: 0;
                          max-height: inherit;
                          background: linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), linear-gradient(90deg, rgba(0, 0, 0, 0.15) 0, rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 0) 95%, rgba(0, 0, 0, 0.15) 100%);
                        `}
                      >
                        <img
                          className="StyledThumbnailImage"
                          src={require("./image/2.png")}
                          sizes="(max-wideth: 999px) 100px, 140px"
                          alt="책이미지"
                          css={css`
                            width: 140px;
                            max-height: calc(140px * 1.618 - 10px);
                          `}
                        />
                        <div
                          className="DiscountWrapper"
                          css={css`
                            position: absolute;
                            display: block;
                            top: -7px;
                            left: -7px;
                          `}
                        >
                          <div
                            className="DiscountSticker"
                            css={css`
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
                            `}
                          >
                            <span
                              className="DiscountNumber"
                              css={css`
                                font-size: 16px;
                                mix-blend-mode: normal;
                                font-weight: bold;
                                line-height: 14px;
                                opacity: 0.99;
                              `}
                            >
                              10
                            </span>
                            <span
                              className="DiscountPercentage"
                              css={css`
                                font-weight: bold;
                                margin-left: 1px;
                                font-size: 14px;
                                position: relative;
                                line-height: 9px;
                              `}
                            >
                              %
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <div
                    className="BookInfoContainer"
                    css={css`
                      width: 100%;
                      margin-top: 10px;
                      display: flex;
                      flex-direction: column;
                    `}
                  >
                    <a href="/">
                      <div
                        className="BookTitleBelowThumbanil"
                        css={css`
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
                        `}
                      >
                        우연히, 웨스 앤더스
                      </div>
                    </a>
                    <span
                      className="BookAuthorBelowThumbnail"
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
                      <a href="/">췰리 코발</a>
                    </span>
                    <span>
                      <div
                        role="img"
                        className="RatingWrapper"
                        css={css`
                          display: inline-flex;
                          align-items: center;
                          font-size: 11px;
                          color: #999999;
                          line-height: 1.09;
                        `}
                      >
                        <div
                          className="StarContainer"
                          css={css`
                            position: relative;
                            margin-right: 2px;
                            line-height: 0;
                          `}
                        >
                          <img
                            src={require("./image/grade_black_24dp.svg")}
                            alt=""
                            css={css`
                              width: 10px;
                              height: 10px;
                            `}
                          />
                          <img
                            src={require("./image/grade_black_24dp.svg")}
                            alt=""
                            css={css`
                              width: 10px;
                              height: 10px;
                            `}
                          />
                          <img
                            src={require("./image/grade_black_24dp.svg")}
                            alt=""
                            css={css`
                              width: 10px;
                              height: 10px;
                            `}
                          />
                          <img
                            src={require("./image/grade_black_24dp.svg")}
                            alt=""
                            css={css`
                              width: 10px;
                              height: 10px;
                            `}
                          />
                          <img
                            src={require("./image/grade_black_24dp.svg")}
                            alt=""
                            css={css`
                              width: 10px;
                              height: 10px;
                            `}
                          />
                        </div>
                        <span
                          css={css`
                            height: 10px;
                            font-size: 11px;
                            line-height: 1.09;
                            color: #61ac00;
                          `}
                        >
                          9
                        </span>
                      </div>
                    </span>
                  </div>
                </li>
                <li
                  className="BookWrapper"
                  css={css`
                    display: flex;
                    flex-direction: column;
                    box-sizing: content-box;
                    min-width: 140px;
                    width: 140px;
                    height: 100%;
                  `}
                >
                  <a
                    href="/"
                    className="StyledAnchor"
                    css={css`
                      display: inline-block;
                    `}
                  >
                    <div
                      className="StyledThumbnailWrapper"
                      css={css`
                        width: 140px;
                        height: 216px;
                        display: flex;
                        align-items: flex-end;
                        flex-shrink: 0;
                      `}
                    >
                      <div
                        className="ThumbnailWrapper"
                        css={css`
                          position: relative;
                          line-height: 0;
                          max-height: inherit;
                          background: linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), linear-gradient(90deg, rgba(0, 0, 0, 0.15) 0, rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 0) 95%, rgba(0, 0, 0, 0.15) 100%);
                        `}
                      >
                        <img
                          className="StyledThumbnailImage"
                          src={require("./image/한국사기출500제.png")}
                          sizes="(max-wideth: 999px) 100px, 140px"
                          alt="책이미지"
                          css={css`
                            width: 140px;
                            max-height: calc(140px * 1.618 - 10px);
                          `}
                        />
                        <div
                          className="DiscountWrapper"
                          css={css`
                            position: absolute;
                            display: block;
                            top: -7px;
                            left: -7px;
                          `}
                        >
                          <div
                            className="DiscountSticker"
                            css={css`
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
                            `}
                          >
                            <span
                              className="DiscountNumber"
                              css={css`
                                font-size: 16px;
                                mix-blend-mode: normal;
                                font-weight: bold;
                                line-height: 14px;
                                opacity: 0.99;
                              `}
                            >
                              10
                            </span>
                            <span
                              className="DiscountPercentage"
                              css={css`
                                font-weight: bold;
                                margin-left: 1px;
                                font-size: 14px;
                                position: relative;
                                line-height: 9px;
                              `}
                            >
                              %
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <div
                    className="BookInfoContainer"
                    css={css`
                      width: 100%;
                      margin-top: 10px;
                      display: flex;
                      flex-direction: column;
                    `}
                  >
                    <a href="/">
                      <div
                        className="BookTitleBelowThumbanil"
                        css={css`
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
                        `}
                      >
                        우연히, 웨스 앤더스
                      </div>
                    </a>
                    <span
                      className="BookAuthorBelowThumbnail"
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
                      <a href="/">췰리 코발</a>
                    </span>
                    <span>
                      <div
                        role="img"
                        className="RatingWrapper"
                        css={css`
                          display: inline-flex;
                          align-items: center;
                          font-size: 11px;
                          color: #999999;
                          line-height: 1.09;
                        `}
                      >
                        <div
                          className="StarContainer"
                          css={css`
                            position: relative;
                            margin-right: 2px;
                            line-height: 0;
                          `}
                        >
                          <img
                            src={require("./image/grade_black_24dp.svg")}
                            alt=""
                            css={css`
                              width: 10px;
                              height: 10px;
                            `}
                          />
                          <img
                            src={require("./image/grade_black_24dp.svg")}
                            alt=""
                            css={css`
                              width: 10px;
                              height: 10px;
                            `}
                          />
                          <img
                            src={require("./image/grade_black_24dp.svg")}
                            alt=""
                            css={css`
                              width: 10px;
                              height: 10px;
                            `}
                          />
                          <img
                            src={require("./image/grade_black_24dp.svg")}
                            alt=""
                            css={css`
                              width: 10px;
                              height: 10px;
                            `}
                          />
                          <img
                            src={require("./image/grade_black_24dp.svg")}
                            alt=""
                            css={css`
                              width: 10px;
                              height: 10px;
                            `}
                          />
                        </div>
                        <span
                          css={css`
                            height: 10px;
                            font-size: 11px;
                            line-height: 1.09;
                            color: #61ac00;
                          `}
                        >
                          9
                        </span>
                      </div>
                    </span>
                  </div>
                </li>
                <li
                  className="BookWrapper"
                  css={css`
                    display: flex;
                    flex-direction: column;
                    box-sizing: content-box;
                    min-width: 140px;
                    width: 140px;
                    height: 100%;
                  `}
                >
                  <a
                    href="/"
                    className="StyledAnchor"
                    css={css`
                      display: inline-block;
                    `}
                  >
                    <div
                      className="StyledThumbnailWrapper"
                      css={css`
                        width: 140px;
                        height: 216px;
                        display: flex;
                        align-items: flex-end;
                        flex-shrink: 0;
                      `}
                    >
                      <div
                        className="ThumbnailWrapper"
                        css={css`
                          position: relative;
                          line-height: 0;
                          max-height: inherit;
                          background: linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), linear-gradient(90deg, rgba(0, 0, 0, 0.15) 0, rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 0) 95%, rgba(0, 0, 0, 0.15) 100%);
                        `}
                      >
                        <img
                          className="StyledThumbnailImage"
                          src={require("./image/4.png")}
                          sizes="(max-wideth: 999px) 100px, 140px"
                          alt="책이미지"
                          css={css`
                            width: 140px;
                            max-height: calc(140px * 1.618 - 10px);
                          `}
                        />
                        <div
                          className="DiscountWrapper"
                          css={css`
                            position: absolute;
                            display: block;
                            top: -7px;
                            left: -7px;
                          `}
                        >
                          <div
                            className="DiscountSticker"
                            css={css`
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
                            `}
                          >
                            <span
                              className="DiscountNumber"
                              css={css`
                                font-size: 16px;
                                mix-blend-mode: normal;
                                font-weight: bold;
                                line-height: 14px;
                                opacity: 0.99;
                              `}
                            >
                              10
                            </span>
                            <span
                              className="DiscountPercentage"
                              css={css`
                                font-weight: bold;
                                margin-left: 1px;
                                font-size: 14px;
                                position: relative;
                                line-height: 9px;
                              `}
                            >
                              %
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <div
                    className="BookInfoContainer"
                    css={css`
                      width: 100%;
                      margin-top: 10px;
                      display: flex;
                      flex-direction: column;
                    `}
                  >
                    <a href="/">
                      <div
                        className="BookTitleBelowThumbanil"
                        css={css`
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
                        `}
                      >
                        우연히, 웨스 앤더스
                      </div>
                    </a>
                    <span
                      className="BookAuthorBelowThumbnail"
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
                      <a href="/">췰리 코발</a>
                    </span>
                    <span>
                      <div
                        role="img"
                        className="RatingWrapper"
                        css={css`
                          display: inline-flex;
                          align-items: center;
                          font-size: 11px;
                          color: #999999;
                          line-height: 1.09;
                        `}
                      >
                        <div
                          className="StarContainer"
                          css={css`
                            position: relative;
                            margin-right: 2px;
                            line-height: 0;
                          `}
                        >
                          <img
                            src={require("./image/grade_black_24dp.svg")}
                            alt=""
                            css={css`
                              width: 10px;
                              height: 10px;
                            `}
                          />
                          <img
                            src={require("./image/grade_black_24dp.svg")}
                            alt=""
                            css={css`
                              width: 10px;
                              height: 10px;
                            `}
                          />
                          <img
                            src={require("./image/grade_black_24dp.svg")}
                            alt=""
                            css={css`
                              width: 10px;
                              height: 10px;
                            `}
                          />
                          <img
                            src={require("./image/grade_black_24dp.svg")}
                            alt=""
                            css={css`
                              width: 10px;
                              height: 10px;
                            `}
                          />
                          <img
                            src={require("./image/grade_black_24dp.svg")}
                            alt=""
                            css={css`
                              width: 10px;
                              height: 10px;
                            `}
                          />
                        </div>
                        <span
                          css={css`
                            height: 10px;
                            font-size: 11px;
                            line-height: 1.09;
                            color: #61ac00;
                          `}
                        >
                          9
                        </span>
                      </div>
                    </span>
                  </div>
                </li>
                <li
                  className="BookWrapper"
                  css={css`
                    display: flex;
                    flex-direction: column;
                    box-sizing: content-box;
                    min-width: 140px;
                    width: 140px;
                    height: 100%;
                  `}
                >
                  <a
                    href="/"
                    className="StyledAnchor"
                    css={css`
                      display: inline-block;
                    `}
                  >
                    <div
                      className="StyledThumbnailWrapper"
                      css={css`
                        width: 140px;
                        height: 216px;
                        display: flex;
                        align-items: flex-end;
                        flex-shrink: 0;
                      `}
                    >
                      <div
                        className="ThumbnailWrapper"
                        css={css`
                          position: relative;
                          line-height: 0;
                          max-height: inherit;
                          background: linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), linear-gradient(90deg, rgba(0, 0, 0, 0.15) 0, rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 0) 95%, rgba(0, 0, 0, 0.15) 100%);
                        `}
                      >
                        <img
                          className="StyledThumbnailImage"
                          src={require("./image/한국사기출500제.png")}
                          sizes="(max-wideth: 999px) 100px, 140px"
                          alt="책이미지"
                          css={css`
                            width: 140px;
                            max-height: calc(140px * 1.618 - 10px);
                          `}
                        />
                        <div
                          className="DiscountWrapper"
                          css={css`
                            position: absolute;
                            display: block;
                            top: -7px;
                            left: -7px;
                          `}
                        >
                          <div
                            className="DiscountSticker"
                            css={css`
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
                            `}
                          >
                            <span
                              className="DiscountNumber"
                              css={css`
                                font-size: 16px;
                                mix-blend-mode: normal;
                                font-weight: bold;
                                line-height: 14px;
                                opacity: 0.99;
                              `}
                            >
                              10
                            </span>
                            <span
                              className="DiscountPercentage"
                              css={css`
                                font-weight: bold;
                                margin-left: 1px;
                                font-size: 14px;
                                position: relative;
                                line-height: 9px;
                              `}
                            >
                              %
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <div
                    className="BookInfoContainer"
                    css={css`
                      width: 100%;
                      margin-top: 10px;
                      display: flex;
                      flex-direction: column;
                    `}
                  >
                    <a href="/">
                      <div
                        className="BookTitleBelowThumbanil"
                        css={css`
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
                        `}
                      >
                        우연히, 웨스 앤더스
                      </div>
                    </a>
                    <span
                      className="BookAuthorBelowThumbnail"
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
                      <a href="/">췰리 코발</a>
                    </span>
                    <span>
                      <div
                        role="img"
                        className="RatingWrapper"
                        css={css`
                          display: inline-flex;
                          align-items: center;
                          font-size: 11px;
                          color: #999999;
                          line-height: 1.09;
                        `}
                      >
                        <div
                          className="StarContainer"
                          css={css`
                            position: relative;
                            margin-right: 2px;
                            line-height: 0;
                          `}
                        >
                          <img
                            src={require("./image/grade_black_24dp.svg")}
                            alt=""
                            css={css`
                              width: 10px;
                              height: 10px;
                            `}
                          />
                          <img
                            src={require("./image/grade_black_24dp.svg")}
                            alt=""
                            css={css`
                              width: 10px;
                              height: 10px;
                            `}
                          />
                          <img
                            src={require("./image/grade_black_24dp.svg")}
                            alt=""
                            css={css`
                              width: 10px;
                              height: 10px;
                            `}
                          />
                          <img
                            src={require("./image/grade_black_24dp.svg")}
                            alt=""
                            css={css`
                              width: 10px;
                              height: 10px;
                            `}
                          />
                          <img
                            src={require("./image/grade_black_24dp.svg")}
                            alt=""
                            css={css`
                              width: 10px;
                              height: 10px;
                            `}
                          />
                        </div>
                        <span
                          css={css`
                            height: 10px;
                            font-size: 11px;
                            line-height: 1.09;
                            color: #61ac00;
                          `}
                        >
                          9
                        </span>
                      </div>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>금주의 신간</section>
        <section>어떤 주제의 책</section>
        <section>어떤 주제의 책2</section>
      </main>
      <footer>footer</footer>
    </>
  );
}

export default Ridi;

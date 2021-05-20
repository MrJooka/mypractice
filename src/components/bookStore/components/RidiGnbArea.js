/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { PureComponent } from "react";

class RidiGnbArea extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div className="GNBWrapper">
          <header css={header}>
            <div className="GNBContainer" css={gnbContainer}>
              <div className="NavigationWrapper" css={navigationWrapper}>
                <div className="LogoSearchArea" css={logoSearchArea}>
                  <form className="SearchWrapper" css={searchWrapper}>
                    <label className="SearchBoxWrapper" css={searchBoxWrapper}>
                      <img src="round_search_black_18dp.png" alt="검색" css={searchImage} />
                      <input className="SearchBox" type="search" placeholder="제목, 저자, 출판사 검색" css={searchBox} />
                    </label>
                  </form>
                </div>
              </div>
            </div>
          </header>
        </div>
      </React.Fragment>
    );
  }
}

export default RidiGnbArea;

const header = css`
  /* background: #1f8ce6; */
  max-width: 100%;
`;

const gnbContainer = css`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const navigationWrapper = css`
  padding: 16px 16px 16px 16px;
`;

const logoSearchArea = css`
  display: flex;
  flex-direction: row;
`;

const searchWrapper = css`
  width: 100%;
  margin: 0 auto;
  max-width: 340px;
  flex: 1;
`;

const searchBoxWrapper = css`
  display: flex;
  align-items: center;
  border-radius: 3px;
  background-color: white;
  border: 1px solid#ccc4c4;
`;

const searchImage = css`
  width: 24px;
  height: 24px;
  margin: 0 4px 0 4px;
  opacity: 0.7;
  flex: none;
`;

const searchBox = css`
  flex: 1;
  height: 36px;
  background: none;
  appearance: none;
  box-shadow: none;
  border: none;
  font-size: 16px;
  outline: none;
`;

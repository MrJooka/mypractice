import React, { Component } from "react";
import { GlobalStyle } from "./components/GlobalStyle";
import RidiGnbArea from "./components/RidiGnbArea";

class MyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <RidiGnbArea books_in_cart={this.props.books_in_cart} />
        <div style={{ display: "flex", margin: "0 auto", position: "relative", clear: "both", marginTop: "33px", width: "953px", padding: "0 24px" }}>
          <div style={{ display: "flex", flexDirection: "column", width: "235px", flexShrink: "0" }}></div>
          <div></div>
        </div>
      </React.Fragment>
    );
  }
}

export default MyPage;

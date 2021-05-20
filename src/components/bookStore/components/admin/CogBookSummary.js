import React, { Component } from "react";

class CogBookSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  render() {
    return (
      <div style={{ paddingBottom: "20px" }}>
        <h2 style={{ fontSize: "21px", color: "#333", fontWeight: "700", width: "100%" }}>콕북 통계 및 여러가지 Summary</h2>
      </div>
    );
  }
}

export default CogBookSummary;

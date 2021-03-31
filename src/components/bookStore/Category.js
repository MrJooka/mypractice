import React, { Component } from "react";
import InputTag from "./InputTag";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getCheckboxValue = () => {
    const query = 'input[name="category"]:checked';

    const selectedEls = document.querySelectorAll(query);

    var values = [].map.call(selectedEls, function (obj) {
      return obj.value;
    });
    console.log(values);
    this.props.categoryState(values);
  };

  render() {
    return (
      <>
        <div
          style={{
            fontSize: "1rem",
            marginRight: "8px",
            MarginTop: "30px",
            background: "gray",
            justifyContent: "space-between",
            display: "flex",
            flexWrap: "wrap",
            // flexWrap: "wrap",
            // gridTemplateColumns: "1fr 1fr 1fr 1fr",
            // gridTemplateRows: "1fr 1fr",
          }}
        >
          <label
            style={{
              // display: "inline-block",
              width: "25%",
              flexShrink: "0",
              boxSizing: "border-box",
              lineHeight: "30px",
              background: "yellow",
            }}
          >
            <input
              type="checkbox"
              name="category"
              value="elementaryschool"
              defaultChecked={false}
              style={{ marginRight: "10px" }}
              onClick={this.getCheckboxValue}
            />
            초등
          </label>
          <label
            style={{
              width: "25%",
              flexShrink: "0",
              boxSizing: "border-box",
              lineHeight: "30px",
              background: "yellow",
            }}
          >
            <input
              type="checkbox"
              name="category"
              defaultChecked={false}
              value="middleschool"
              style={{ marginRight: "10px" }}
              onClick={this.getCheckboxValue}
            />
            중등
          </label>
          <label
            style={{
              width: "25%",
              flexShrink: "0",
              boxSizing: "border-box",
              lineHeight: "30px",
              background: "yellow",
            }}
          >
            <input
              type="checkbox"
              name="category"
              defaultChecked={false}
              value="highschool"
              style={{ marginRight: "10px" }}
              onClick={this.getCheckboxValue}
            />
            고등
          </label>
          <label
            style={{
              width: "25%",
              flexShrink: "0",
              boxSizing: "border-box",
              lineHeight: "30px",
              background: "yellow",
            }}
          >
            <input
              type="checkbox"
              name="category"
              defaultChecked={false}
              value="worker"
              style={{ marginRight: "10px" }}
              onClick={this.getCheckboxValue}
            />
            직장인
          </label>

          <label
            style={{
              width: "25%",
              flexShrink: "0",
              boxSizing: "border-box",
              lineHeight: "30px",
              background: "yellow",
            }}
          >
            <input
              type="checkbox"
              name="category"
              defaultChecked={false}
              value="english"
              style={{ marginRight: "10px" }}
              onClick={this.getCheckboxValue}
            />
            영어
          </label>
          <label
            style={{
              width: "25%",
              flexShrink: "0",
              boxSizing: "border-box",
              lineHeight: "30px",
              background: "yellow",
            }}
          >
            <input
              type="checkbox"
              name="category"
              defaultChecked={false}
              value="chinese"
              style={{ marginRight: "10px" }}
              onClick={this.getCheckboxValue}
            />
            중국어
          </label>
          <label
            style={{
              width: "25%",
              flexShrink: "0",
              boxSizing: "border-box",
              lineHeight: "30px",
              background: "yellow",
            }}
          >
            <input
              type="checkbox"
              name="category"
              defaultChecked={false}
              value="japanese"
              style={{ marginRight: "10px" }}
              onClick={this.getCheckboxValue}
            />
            일본어
          </label>
          <label
            style={{
              width: "25%",
              flexShrink: "0",
              boxSizing: "border-box",
              lineHeight: "30px",
              background: "yellow",
            }}
          >
            <input
              type="checkbox"
              name="category"
              defaultChecked={false}
              value="coding"
              style={{ marginRight: "10px" }}
              onClick={this.getCheckboxValue}
            />
            코딩
          </label>
        </div>
        <InputTag hashtag={this.props.hashtag} />
      </>
    );
  }
}

export default Category;

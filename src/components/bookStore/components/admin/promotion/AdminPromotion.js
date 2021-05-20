import React, { Component } from "react";

class AdminPromotion extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  render() {
    return (
      <div style={{ paddingBottom: "20px", width: "100%" }}>
        <h2 style={{ fontSize: "21px", color: "#333", fontWeight: "700", width: "100%" }}>프로모션 관리메인 페이지</h2>
        <Search />
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ fontSize: "21px", color: "#333", fontWeight: "700", width: "100%" }}>{promotion_schema[0].title}</div>
            <div>
              <button>신규 프로모션 생성</button>
            </div>
          </div>
          <ul>
            {promotion_schema.map((item) => (
              <li key={item._id} style={{ marginTop: "10px", borderTop: "1px solid #eee2e2", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <div style={{ padding: "5px" }}>프로모션명: {item.name == "" ? "해당 없음" : item.name}</div>
                  <div style={{ padding: "5px" }}>
                    기간: {item.period.from} ~ {item.period.from}
                  </div>
                  <div style={{ padding: "5px" }}> 할인 금액: {item.gap}원</div>
                </div>
                <div style={{ marginLeft: "20px" }}>
                  <button style={{ marginRight: "10px" }}>삭제</button>
                  <button>수정</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default AdminPromotion;

const { useState } = React;

const Search = () => {
  const [text, setText] = useState("");

  const onSubmit = (evt) => {
    evt.preventDefault();
    if (text === "") {
      alert("Please enter something!");
    } else {
      alert(text);
      setText("");
    }
  };

  const onChange = (evt) => setText(evt.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} style={{ padding: "1.125rem 0 0.2rem 0", width: "100%", margin: "0 auto", background: "#e28f0" }}>
        <input
          type="text"
          name="text"
          placeholder="책 아이디를 입력하세요"
          value={text}
          onChange={onChange}
          style={{ background: "#fff", padding: "0.3rem", width: "40%", border: "0.5px solid #bec7d3" }}
        />
        <button
          type="submit"
          style={{
            background: "#fff",
            padding: "0.47rem",
            width: "10%",
            border: "0.5px solid #bec7d3",
            textAlign: "center",
            color: "#4299e1",
            marginLeft: "5px",
          }}
        >
          검색
        </button>
      </form>
      <hr />
    </div>
  );
};

const promotion_schema = [
  {
    _id: "23424",
    sellbook_id: "",
    title: "영어 단어 500제",
    name: "",
    gap: 3000,
    rate: "20%",
    period: {
      from: "2021-04-29",
      to: "2021-05-13",
    },
  },
  {
    _id: "2356",
    sellbook_id: "",
    title: "영어 단어 500제",
    name: "봄맞이 이벤트",
    gap: 2000,
    rate: "10%",
    period: {
      from: "2021-05-16",
      to: "2021-05-13",
    },
  },
];

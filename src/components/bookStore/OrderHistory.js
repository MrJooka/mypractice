import React, { Component } from "react";
import { Table } from "antd";

class OrderHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  render() {
    console.log("마이히스토리 랜더");
    return (
      <div style={{ paddingBottom: "20px" }}>
        <h2 style={{ fontSize: "21px", color: "#333", fontWeight: "700", width: "100%" }}>결제내역</h2>
        <Table columns={columns} dataSource={array} onChange={this.onChange} />
      </div>
    );
  }
}

export default OrderHistory;

const columns = [
  {
    title: "책제목",
    dataIndex: "book_title",
  },
  {
    title: "구매일",
    dataIndex: "purchage_date",
    sorter: {
      compare: (a, b) => new Date(a.purchage_date) - new Date(b.purchage_date),
      multiple: 3,
    },
  },
  {
    title: "주문 금액",
    dataIndex: "price",
    sorter: {
      compare: (a, b) => a.price - b.price,
      multiple: 2,
    },
  },
  {
    title: "결제 수단",
    dataIndex: "payment_method",
    sorter: {
      compare: (a, b) => a.payment_method - b.payment_method,
      multiple: 1,
    },
  },
];

const data = [
  {
    key: "1",
    book_title: "수학의 정석",
    purchage_date: "2021-03-18",
    price: 1200,
    payment_method: "신용카드",
  },
  {
    key: "2",
    book_title: "수능 영단어 500",
    purchage_date: "2021-03-25",
    price: 500,
    payment_method: "네이버페이",
  },
  {
    key: "3",
    book_title: "바둑 기보 500",
    purchage_date: "2020-03-18",
    price: 10000,
    payment_method: "계좌이체",
  },
  {
    key: "4",
    book_title: "EBS 영어 독해",
    purchage_date: "2019-03-18",
    price: 3000,
    payment_method: "쿠폰",
  },
];

let array = [];

data.map((index) => {
  let object = {};
  object.key = index.key;
  object.book_title = index.book_title;
  object.purchage_date = index.purchage_date;
  object.price = index.price;
  object.payment_method = index.payment_method;

  array.push(object);
});

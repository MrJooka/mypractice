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
    title: "결제일",
    dataIndex: "purchage_order_date",
    sorter: {
      compare: (a, b) => new Date(a.purchage_order_date) - new Date(b.purchage_order_date),
      multiple: 3,
    },
  },
  {
    title: "주문명",
    dataIndex: "purchage_order_title",
    sorter: {
      // TODO 내림차순 정렬 방법 찾아서 해결해야함
      compare: (a, b) => a.purchage_order_title - b.purchage_order_title,
      multiple: 1,
    },
  },
  {
    title: "결제 금액",
    dataIndex: "price",
    sorter: {
      compare: (a, b) => a.price - b.price,
      multiple: 2,
    },
  },
  {
    title: "주문 번호",
    dataIndex: "purchage_order_number",
    sorter: {
      compare: (a, b) => a.purchage_order_number - b.purchage_order_number,
      multiple: 1,
    },
  },
  {
    title: "진행 상태",
    dataIndex: "purchage_order_status",
  },
];

const data = [
  {
    key: "1",
    purchage_order_title: "수학의 정석",
    purchage_order_date: "2021-03-18",
    price: 1200,
    purchage_order_number: "2321547855",
    purchage_order_status: "완료",
  },
  {
    key: "2",
    purchage_order_title: "수능 영단어 500",
    purchage_order_date: "2021-03-25",
    price: 2500,
    purchage_order_number: "12325786",
    purchage_order_status: "취소",
  },
  {
    key: "3",
    purchage_order_title: "바둑 기보 500",
    purchage_order_date: "2020-03-18",
    price: 33000,
    purchage_order_number: "33564896",
    purchage_order_status: "완료",
  },
  {
    key: "4",
    purchage_order_title: "EBS 영어 독해",
    purchage_order_date: "2019-03-18",
    price: 13000,
    purchage_order_number: "595635796",
    purchage_order_status: "완료",
  },
  {
    key: "5",
    purchage_order_title: "수학의 정석",
    purchage_order_date: "2021-03-18",
    price: 1200,
    purchage_order_number: "2321547855",
    purchage_order_status: "완료",
  },
  {
    key: "6",
    purchage_order_title: "수능 영단어 500",
    purchage_order_date: "2021-03-25",
    price: 2500,
    purchage_order_number: "12325786",
    purchage_order_status: "완료",
  },
  {
    key: "7",
    purchage_order_title: "바둑 기보 500",
    purchage_order_date: "2020-03-18",
    price: 33000,
    purchage_order_number: "33564896",
    purchage_order_status: "완료",
  },
  {
    key: "8",
    purchage_order_title: "EBS 영어 독해",
    purchage_order_date: "2019-03-18",
    price: 13000,
    purchage_order_number: "595635796",
    purchage_order_status: "완료",
  },
  {
    key: "9",
    purchage_order_title: "수학의 정석",
    purchage_order_date: "2021-03-18",
    price: 1200,
    purchage_order_number: "2321547855",
    purchage_order_status: "완료",
  },
  {
    key: "10",
    purchage_order_title: "수능 영단어 500",
    purchage_order_date: "2021-03-25",
    price: 2500,
    purchage_order_number: "12325786",
    purchage_order_status: "완료",
  },
  {
    key: "11",
    purchage_order_title: "바둑 기보 500",
    purchage_order_date: "2020-03-18",
    price: 33000,
    purchage_order_number: "33564896",
    purchage_order_status: "완료",
  },
  {
    key: "12",
    purchage_order_title: "EBS 영어 독해",
    purchage_order_date: "2019-03-18",
    price: 13000,
    purchage_order_number: "595635796",
    purchage_order_status: "취소",
  },
  {
    key: "13",
    purchage_order_title: "수학의 정석",
    purchage_order_date: "2021-03-18",
    price: 1200,
    purchage_order_number: "2321547855",
    purchage_order_status: "완료",
  },
  {
    key: "14",
    purchage_order_title: "수능 영단어 500",
    purchage_order_date: "2021-03-25",
    price: 2500,
    purchage_order_number: "12325786",
    purchage_order_status: "완료",
  },
  {
    key: "15",
    purchage_order_title: "바둑 기보 500",
    purchage_order_date: "2020-03-18",
    price: 33000,
    purchage_order_number: "33564896",
    purchage_order_status: "취소",
  },
  {
    key: "16",
    purchage_order_title: "EBS 영어 독해",
    purchage_order_date: "2019-03-18",
    price: 13000,
    purchage_order_number: "595635796",
    purchage_order_status: "완료",
  },
];

let array = [];

data.map((index) => {
  let object = {};
  object.key = index.key;
  object.purchage_order_title = index.purchage_order_title;
  object.purchage_order_date = index.purchage_order_date;
  object.price = index.price;
  object.purchage_order_number = index.purchage_order_number;
  object.purchage_order_status = index.purchage_order_status;

  array.push(object);
});

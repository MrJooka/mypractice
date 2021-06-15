import { Button } from "antd";
import React, { PureComponent } from "react";

class MyCartBookList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        {PO_data.purchased_item.map((book) => (
          <li key={book._id_purhchased_item} style={{ display: "flex", padding: "8px 0 8px 25px" }}>
            <div style={{ display: "flex", alignItems: "center" }}></div>
            <div>
              <img
                className="ThumbnailImage"
                src={book.book_thumbnail}
                alt=""
                sizes="30px"
                style={{
                  width: "30px",
                  maxHeight: "45px",
                }}
              />
            </div>
            <div style={{ width: "400px", marginLeft: "15px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div style={{ fontSize: "16px", lineHeight: "22px", fontWeight: "bold" }}>{book.title}</div>
              <div style={{ fontSize: "11px", color: "darkgray" }}> 주문번호: {book._id_purhchased_item}</div>
              <div style={{ marginBottom: "2px" }}></div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-around", width: "200px" }}>
              <div style={{ fontSize: "12px", color: "darkslategray" }}>할인가: {isNaN(book.gap) ? "-" : book.gap}</div>
              <div style={{ fontSize: "12px", color: "darkslategray" }}>주문금액: {Number(book.price).toLocaleString()} 원</div>
            </div>
          </li>
        ))}
      </React.Fragment>
    );
  }
}
class PurchaseOrderDetail extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visible_items: false,
    };
  }

  render() {
    return (
      <React.Fragment>
        <div
          style={{
            position: "relative",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          <div style={{ width: "952px", maxWidth: "1000px", marginTop: "25px", fontSize: "24px", fontWeight: "bold" }}>
            <div style={{ display: "flex" }}>
              <div style={{ width: "680px" }}>
                <div style={{ paddingBottom: "20px" }}>결제 상세내역</div>
                <div style={{ border: "1px solid #d1d5d9", padding: "15px" }}>
                  <div style={{ fontSize: "14px", fontWeight: "bold", display: "flex", justifyContent: "space-between", paddingBottom: "8px", borderBottom: "1px solid #d1d5d9" }}>
                    <div>주문번호</div> <div> {PO_data._id} </div>
                  </div>
                  <div style={{ fontSize: "14px", fontWeight: "bold", display: "flex", justifyContent: "space-between", padding: "8px 0 8px 0", borderBottom: "1px solid #d1d5d9" }}>
                    <div>상품가</div> <div> {PO_data.total_price}원 </div>
                  </div>
                  <div style={{ fontSize: "14px", fontWeight: "bold", display: "flex", justifyContent: "space-between", padding: "8px 0 8px 0", borderBottom: "1px solid #d1d5d9" }}>
                    <div>할인가</div> <div> {PO_data.total_gap}원 </div>
                  </div>
                  <div style={{ fontSize: "14px", fontWeight: "bold", padding: "8px 0 8px 0", borderBottom: "1px solid #d1d5d9" }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <div>
                        상품수량
                        <Button
                          style={{ marginLeft: "25px" }}
                          size="small"
                          onClick={() => {
                            this.setState({ visible_items: !this.state.visible_items });
                          }}
                        >
                          상세아이템 {this.state.visible_items ? "접기" : "보기"}
                        </Button>
                      </div>
                      <div> {PO_data.purchased_item.length} </div>
                    </div>
                    <ul style={{ display: this.state.visible_items ? "block" : "none" }}>
                      <MyCartBookList />
                    </ul>
                  </div>

                  <div
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",

                      padding: "8px 0 8px 0",
                      borderBottom: "1px solid #d1d5d9",
                    }}
                  >
                    <div style={{ fontSize: "14px", fontWeight: "bold", display: "flex", justifyContent: "space-between" }}>
                      <div>결제금액</div> <div> {PO_data.total_payment_price}원 </div>
                    </div>
                    <div style={{ fontSize: "12px", fontWeight: "bold", margin: "8px 0 0 25px", display: "flex", justifyContent: "space-between" }}>
                      <div>콕북 캐시 사용액</div> <div> {PO_data.cogbook_cash}원 </div>
                    </div>
                    <div style={{ fontSize: "12px", fontWeight: "bold", margin: "8px 0 0 25px", display: "flex", justifyContent: "space-between" }}>
                      <div>콕북 포인트 사용액</div> <div> {PO_data.cogbook_point}원 </div>
                    </div>
                    <div style={{ fontSize: "12px", fontWeight: "bold", margin: "8px 0 0 25px", display: "flex", justifyContent: "space-between" }}>
                      <div>PG 결제 사용액</div> <div> {PO_data.pg_payment_price}원 </div>
                    </div>
                  </div>
                  <div style={{ fontSize: "14px", fontWeight: "bold", display: "flex", justifyContent: "space-between", padding: "8px 0 8px 0", borderBottom: "1px solid #d1d5d9" }}>
                    <div>적립 콕북 포인트</div> <div> {PO_data.received_cogbook_point}원 </div>
                  </div>
                  <div style={{ fontSize: "14px", fontWeight: "bold", display: "flex", justifyContent: "space-between", padding: "8px 0 8px 0" }}>
                    <div>문화비 소득공제</div> <div> 가능 </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PurchaseOrderDetail;

const PO_data = {
  _id: "232432525",
  total_price: 40000,
  total_gap: 2000,
  purchased_item: [
    { _id_purhchased_item: "344234", title: "EBS 수학영어", price: 30000, gap: 1000, book_thumbnail: "https://bookcoverofcogbook.s3.ap-northeast-2.amazonaws.com/medium/16181893713344.png" },
    {
      _id_purhchased_item: "322448",
      title: "영단어500",
      price: 10000,
      gap: 1000,
      book_thumbnail: "https://bookcoverofcogbook.s3.ap-northeast-2.amazonaws.com/small/1618200069172onedayKoreanhistory.png",
    },
  ],
  purchased_method: "credit",
  total_payment_price: 38000,
  cogbook_cash: 10000,
  cogbook_point: 0,
  pg_payment_price: 28000,
  received_cogbook_point: 380,
};

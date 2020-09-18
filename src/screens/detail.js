import React, { useEffect, useState } from 'react'
import {
  getDetailProducts,
  getDetail,
  getProducts,
  getProductsComment,
  getPostComment,
} from "./services/Api";
import { useParams, useHistory } from 'react-router-dom'
import { processImage} from '../utils'
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from '../actions/cartAction';



export default function Detail() {
  const dispatch = useDispatch();
  let history = useHistory();
  const [detail, setDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [commentData, setCommentData] = useState("");
  const [isPostOk, setIsPostOk] = useState(false);
  const [formData, setFormData] = useState({});
  const isStock = detail.is_Stock ? "Còn hàng" : "Hết hàng";
  const params = useParams();

  // detail
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      // console.log('params.productId', params.productId)
      const result = await getDetail(params.productId);
      setDetail(result.data.data);
      setIsPostOk(false);
      // console.log('result', result)
      // setIsLoading(false)
    }
    fetchData();
  }, [params.productId]);

  // get comment
  useEffect(() => {
    async function fetchData() {
      const result = await getProductsComment(params.productId);
      setCommentData(result.data.data);
    }
    fetchData();
  }, [params.productId, isPostOk]);

  // formdata
  const onInputChange = (ev) => {
    ev.persist();
    setFormData((prev) => ({ ...prev, [ev.target.name]: ev.target.value }));
  };

  // create comment
  const onSubmit = async () => {
    const result = await getPostComment({
      ...formData,
      productId: params.productId,
    });
    if (result.data.result === "ok") {
      setIsPostOk(true);
    }
    console.log("result", result);
  };

  // khởi tạo 1 sản phẩm mặc định mỗi khi chọn sp
  const onAddCart = () => {
    dispatch(addCart({ ...detail, quantity: 1 }));
  };

  return (
    <div id="product">
      {/* hello */}
      <div id="product-head" class="row">
        <div id="product-img" class="col-lg-6 col-md-6 col-sm-12">
          <img src={processImage(detail.image)} alt="product" />
        </div>
        <div id="product-details" class="col-lg-6 col-md-6 col-sm-12">
          <h1>{detail && detail.name}</h1>
          <ul>
            <li>
              <span>Bảo hành:</span> 12 Tháng
            </li>
            <li>
              <span>Đi kèm:</span> {detail && detail.accessories}
            </li>
            <li>
              <span>Tình trạng:</span> {detail && detail.status}
            </li>
            <li>
              <span>Khuyến Mại:</span> {detail && detail.accessories}
            </li>
            <li id="price">Giá Bán (chưa bao gồm VAT)</li>
            <li id="price-number">
              {Intl.NumberFormat("vn-VN").format(detail && detail.price)}đ
            </li>
            <li id="status">{isStock}</li>
          </ul>
          <div id="add-cart">
            <a href="#" onClick={onAddCart}>
              Mua ngay
            </a>
          </div>
        </div>
      </div>
      <div id="product-body" class="row">
        <div class="col-lg-12 col-md-12 col-sm-12">
          <h3>{detail && detail.name}</h3>
          <p>{detail && detail.details}</p>
        </div>
      </div>
      <div id="comment" class="row">
        <div class="col-lg-12 col-md-12 col-sm-12">
          <h3>Bình luận sản phẩm</h3>
          <form
            method="post"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div class="form-group">
              <label>Tên:</label>
              <input
                name="name"
                required
                type="text"
                class="form-control"
                value={formData.name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div class="form-group">
              <label>Email:</label>
              <input
                name="email"
                required
                type="email"
                class="form-control"
                value={formData.email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div class="form-group">
              <label>Nội dung:</label>
              <textarea
                name="content"
                required
                rows="8"
                class="form-control"
                value={formData.content}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button
              type="submit"
              name="sbm"
              class="btn btn-primary"
              onClick={onSubmit}
            >
              Gửi
            </button>
          </form>
        </div>
      </div>

      <div id="comments-list" class="row">
        <div class="col-lg-12 col-md-12 col-sm-12">
          {commentData &&
            commentData.map((e, i) => (
              <div class="comment-item" key={i}>
                <ul>
                  <li>
                    <b>{e && e.name}</b>
                  </li>
                  <li>
                    {moment(e && e.updated_date).format("DD-MM-YYYY hh:mm:ss")}
                  </li>
                  <li>
                    <p>{e && e.content}</p>
                  </li>
                </ul>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
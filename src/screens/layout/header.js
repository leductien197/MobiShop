import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux' 

export default function Header() {

  const products = useSelector( state => state.cart.products)
  let history = useHistory();
  const [query, setQuery] = useState('')
  
  const onChangeText=(e)=>{
    // lấy đc giá trị ô input
    setQuery(e.target.value)
  }

  const onSubmit = () => {
    // history giống link, tùy phương thức mà nó sẽ thao tác khác nhau. Pust=> chuyển màn, Replace: thay thế trang hiện tại
    // đẩy string ở input lên sever theo đường dẫn trong ()
    history.push(`/search?query=${query}`)
  }
  return (
    <div id="header">
      <div className="container">
        <div className="row">
          <div id="logo" className="col-lg-3 col-md-3 col-sm-12">
            <h1>
              <a >
                <img className="img-fluid" src="images/logo.png" />
              </a>
            </h1>
          </div>
          <div id="search" className="col-lg-6 col-md-6 col-sm-12">
            <form className="form-inline" onSubmit={e=>e.preventDefault()}>
              <input
                className="form-control mt-3"
                type="search"
                placeholder="Tìm kiếm"
                aria-label="Search"
                value={query}
                onChange={onChangeText}
              />
              <button onClick={onSubmit} className="btn btn-danger mt-3" type="submit">
                Tìm kiếm
              </button>
            </form>
          </div>
          <div id="cart" className="col-lg-3 col-md-3 col-sm-12">
            <Link>
              giỏ hàng
            </Link>
            <span className="mt-3">8</span>
          </div>
        </div>
      </div>
      <button
        className="navbar-toggler navbar-light"
        type="button"
        data-toggle="collapse"
        data-target="#menu"
      >
        <span className="navbar-toggler-icon" />
      </button>
    </div>
  );
}

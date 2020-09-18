
import React, { useState, useEffect } from "react";
import Item from './components/item'
import { getProducts } from './services/Api'
import { useParams, useLocation } from "react-router-dom";

function Search() {
  
    // màn này có nv lấy url đc gửi lên từ header để get api theo đường dẫn đó
    const location = useLocation()
    // console.log('location: ',location)
    const params = useParams()
    const [searchProduct, setSearchProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    let searchParams = new URLSearchParams(location.search)
    // console.log('searchParams: ', searchParams) thằng này để lấy đường dẫn url đc gửi từ header

    // dòng 15 screen header truyền vào 'query'
    const searchValue = searchParams.get('query') //query theo id sản phẩm

    useEffect(() => {
      async function fetchData() {
        setIsLoading(true);
        const result = await getProducts({name: searchValue }); // resuilt : lấy dữ liệu từ api đổ về theo name:searchValue
        setSearchProduct(result.data.data); // truyền vào data sản phẩm
        setIsLoading(false);
      }
      fetchData();
    }, [searchValue]); // ~ component didUpdate: mỗi searchValue (id sản phẩm thay đổi) sẽ run lại 1 lần

    return (
      <>
        <div class="products">
          <h3>Sản phẩm tìm kiếm: </h3>
          <div className="product-list card-deck">
            {searchProduct.map((e)=>(<Item key={e._id} data={e}/>))}
          </div>
        </div>
      </>
    );
}

export default Search

import React, { useState, useEffect } from "react";
import axios from 'axios';
import Item from './components/item'
import { getProducts } from './services/Api'


function Product() {
  const [featureProduct, setFeatureProduct] = useState([]);
  const [newProduct, setNewProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function fetchData() {
      // const result = await getProducts({ limit: 6 });
      setIsLoading(true)

      // sét promise để trả về dữ liệu cùng lúc
      const [featurePro, newProduct] = await Promise.all(
        [getProducts({ limit: 6, isFeatured: true }),
        getProducts({ limit: 6, isFeatured: false })])
      setFeatureProduct(featurePro.data.data)
      setNewProduct(newProduct.data.data)
      setIsLoading(false)
    }

    fetchData();
  }, []);

  return (
    <>
      <div className="products">
        <h3>Sản phẩm nổi bật</h3>
        <div class="product-list card-deck">
          {featureProduct.map(e => <Item key={e._id} data={e} />)}
        </div>
      </div>

      <div className="products">
        <h3>Sản phẩm mới</h3>
        <div className="product-list card-deck">
          {newProduct.map(e => <Item key={e._id} data={e} />)}
        </div>
      </div>
    </>
  );
}

export default Product
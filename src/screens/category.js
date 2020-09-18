import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Item from "./components/item";
import { getProducts } from "./services/Api";

function Category() {

  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const result = await getProducts({ categoryId: params.categoryId }); // issues
      setProducts(result.data.data);
      setIsLoading(false);
    }
    fetchData();
  }, [params.categoryId]);


  return (
    <>
      <div className="products">
        {/* <h3>Sản phẩm: </h3> */}
        <div className="product-list card-deck">
          {products.map((e) => (
            <Item key={e._id} data={e} />
          ))}
        </div>
      </div>
    </>
  );
}
export default Category;

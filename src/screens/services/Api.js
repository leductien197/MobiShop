
import axios from "axios"

// https://github.com/axios/axios#creating-an-instance
// khởi tạo api
const api = axios.create({
    baseURL: "https://mobileshop.hungvu.net",
    timeout:1000,
    headers:{
        Accept: "application/json",
        "Content-Type": "application/json"
    },
    timeout:60000
});

// tạo function để gọi api

export function getProducts(params){
    return api.get("/get-products", { params})  // string truyền vào trong get phải trùng với api backend thiết kế
    }

// export function getDetailProducts(productId){
//     return api.get(`/product/${productId}`)
// }

export function getDetail(productId){
    return api.get(`/product/${productId}`)
    }

export function getCategory() {
    return api.get('/get-categories')
}

export function getProductsComment(productId){
    return api.get(`/get-product-comments/${productId}`);
}

// post la day len Backend
export function getPostComment(params){
    return api.post("/create-comment", params);
}
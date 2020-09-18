import * as ActionTypes from '../actions/actionTypes';

const initialState = {
    product: [],
    wishlist: []
}

export default function cartReducer(state = initialState, action) {
  console.log('state.product', state.product)
    switch (action.type) {
      case ActionTypes.CHANGE_QUANTITY:
        const isExist = state.product.find(
          el => el._id === action.product._id
        );
        const data = state.product.map(e => {
          if (e._id === action.product._id) {
            return { ...e, quantity: action.product.quantity };
          }
          return e;
        });
        return {
          product: isExist ? data : [...state.product, action.product],
        };

      case ActionTypes.ADD_CART:
        // kiểm tra xem sản phẩm đã tồn tại trong list cart chưa
        const isExistAddNew = state.product.find(
          el => el._id === action.product._id
        );
        //  dùng map để lặp qua các sản phẩm, nếu sản phẩm đó trùng với sản phẩm gửi lên thì tăng quantity !
        const dataAddNew = state.product.map( e => {
            if (e._id ==- action.product._id) {
                return ({ ...e, quantity: Number(e.quantity) + 1 })
            }
        })
        // trả về store, nếu có sản phẩm trong list cart thì trả về cái đc tăng quantity
        // còn không thì thêm mới
        return {
          product: isExistAddNew ? dataAddNew : [ ...state.product, action.product],
        };

        case ActionTypes.REMOVE_PRODUCT:
            return {
                product: state.product.filter( p =>p._id !== action.product._id)
            }

        case ActionTypes.ADD_WIST_LISH:
          return {

          }
      
      default:
        return state;
    }
}
import {
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_CLEAN,
} from "../constants/productConstants";

const productDetailsReducer = (
  state = { product: { reviews: [], loading: false } },
  action
) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case PRODUCT_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };
    case PRODUCT_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case PRODUCT_DETAILS_CLEAN:
      return {
        ...state,
        product: {},
      };
    default:
      return state;
  }
};

export default productDetailsReducer;

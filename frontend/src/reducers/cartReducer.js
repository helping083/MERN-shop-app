import { CART_ADD_ITEM } from "../constants/cartConstants";

const handleCartAddition = (state, action) => {
  const item = action.payload;

  const existItem = state.cartItems.find((cart) => cart.product === item.product);

  if (existItem) {
    return {
      ...state,
      cartItems: state.cartItems.map((cart) =>
        cart.product === existItem.product ? item : cart
      ),
    };
  }
  return {
    ...state,
    cartItems: [...state.cartItems, item],
  };
};

const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      return handleCartAddition(state, action);
    default:
      return state;
  }
};

export default cartReducer;

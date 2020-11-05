import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

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
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;

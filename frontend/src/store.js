import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import productReducer from "./reducers/productReducer";
import productDetailsReducer from "./reducers/productDetailsReducer";
import cartReducer from "./reducers/cartReducer";
import { userLoginReducer } from "./reducers/userReducers";
import LocalStoragePersistor from "./shared/classes/LocalStoragePersistor";

const reducer = combineReducers({
  productList: productReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  user: userLoginReducer,
});
const localStoragePersistor = new LocalStoragePersistor();

const initialState = {
  cart: {
    cartItems: localStoragePersistor.cartItemsFromStorage(),
  },
  userLogin: {
    userInfo: localStoragePersistor.userInfoFromStorage(),
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

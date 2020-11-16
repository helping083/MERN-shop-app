class LocalStoragePersistor {
  cartItemsFromStorage = () => {
    return localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [];
  };

  userInfoFromStorage = () => {
    return localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null;
  };

  shippingAddressFromStorage = () => {
    return localStorage.getItem("shippingAddress")
      ? JSON.parse(localStorage.getItem("shippingAddress"))
      : {};
  };

  setToLocalStorage = () => {};
}

export default LocalStoragePersistor;

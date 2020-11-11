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
}

export default LocalStoragePersistor;

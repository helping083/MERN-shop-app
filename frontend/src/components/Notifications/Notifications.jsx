import React from "react";
import PropTypes from "prop-types";
import Message from "../Message";
import Loader from "../Loader";

const Notifications = ({ message, error, loading, success, successMessage }) => {
  return (
    <>
      {message && <Message variant="danger">{message}</Message>}
      {error && <Message variant="danger">{error}</Message>}
      {success && <Message variant="success">{successMessage}</Message>}
      {loading && <Loader />}
    </>
  );
};

Notifications.propTypes = {
  message: PropTypes.string,
  error: PropTypes.string,
  loading: PropTypes.bool,
  success: PropTypes.string,
  successMessage: PropTypes.string,
};

export default Notifications;

import React from "react";
import ToastItem from "./ToastItem";

const ToastContainer = (props) => {
  const { toasts } = props;
  return (
    <>
      {toasts.map((toast) => (
        <ToastItem key={toast.id} {...toast} />
      ))}
    </>
  );
};

export default ToastContainer;

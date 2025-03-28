import React, { createContext, useContext, useState } from "react";
import ToastContainer from "../components/ToastContainer";

const ToastContext = createContext();

export const useToast = () => {
  return useContext(ToastContext);
};

const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const showToast = ({
    message = "Success Message",
    type = "success",
    duration = 3,
  }) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type, duration }]);
    setTimeout(() => {
      removeToast(id);
    }, duration * 1000);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ showToast, removeToast }}>
      {children}
      <ToastContainer toasts={toasts} />
    </ToastContext.Provider>
  );
};

export default ToastProvider;

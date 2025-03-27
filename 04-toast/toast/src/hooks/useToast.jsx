import React, { useState } from "react";
import Toast from "../components/Toast";

const useToast = () => {
  const [toast, setToast] = useState("top-right");

  const showToast = (toastProps) => {
    setToast(toastProps);
  };

  const toastComponent = toast ? (
    <div>
      <Toast {...toast} />
    </div>
  ) : null;

  return { toastComponent, showToast };
};

export default useToast;

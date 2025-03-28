import React from "react";
import { useToast } from "../context/ToastContext";
import classnames from "classnames";
import "./ToastItem.css";
const ToastItem = (props) => {
  const { id, message, type } = props;

  const { removeToast } = useToast();
  return (
    <div className={classnames("toast-item", type)}>
      {message}
      <button className="cancel-btn" onClick={() => removeToast(id)}>
        X
      </button>
    </div>
  );
};

export default ToastItem;

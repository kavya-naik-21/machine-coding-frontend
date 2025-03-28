import React, { useState } from "react";
import "./App.css";
import { useToast } from "./context/ToastContext";

const App = () => {
  const { showToast } = useToast();
  return (
    <div className="toast-btns">
      <button
        onClick={() =>
          showToast({
            message: "File sent successfully",
            type: "success",
            duration: 2,
          })
        }
        className="toast-btn"
      >
        Show Success
      </button>
      <button
        onClick={() =>
          showToast({
            message: "Warning some issues",
            type: "warning",
            duration: 3,
          })
        }
        className="toast-btn"
      >
        Show Warning
      </button>
      <button
        onClick={() =>
          showToast({
            message: "Some error occured",
            type: "error",
            duration: 4,
          })
        }
        className="toast-btn"
      >
        Show Error
      </button>
      <button
        onClick={() =>
          showToast({ message: "File Info", type: "info", duration: 5 })
        }
        className="toast-btn"
      >
        Show Info
      </button>
    </div>
  );
};

export default App;

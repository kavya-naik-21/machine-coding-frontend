import React from "react";
import useToast from "./hooks/useToast";

const App = () => {
  const { toastComponent, showToast } = useToast();
  return (
    <div>
      <button onClick={() => showToast({ type: "success" })}>
        Show Success
      </button>
      <button onClick={() => showToast({ type: "warning" })}>
        Show Warning
      </button>
      <button onClick={() => showToast({ type: "error" })}>Show Error</button>
      <button onClick={() => showToast({ type: "info" })}>Show Info</button>
      {toastComponent}
    </div>
  );
};

export default App;

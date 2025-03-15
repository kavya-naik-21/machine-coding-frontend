import React, { useState } from "react";
import Folder from "./components/Folder";
import data from "./data/folderData.json";
import './App.css'

const App = () => {
  const [folderData, setFolderData] = useState(data);
  return (
    <div className="app">
      <Folder list={folderData} />
    </div>
  );
};

export default App;

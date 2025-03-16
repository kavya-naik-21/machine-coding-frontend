import React, { useState } from "react";
import Folder from "./components/Folder";
import data from "./data/folderData.json";
import "./App.css";

const App = () => {
  const [folderData, setFolderData] = useState(data);

  const createFolder = (folderId) => {
    const updateFolderStructure = (tree) => {
      if (tree.isFolder) {
        if (tree.id === folderId) {
          tree.children.unshift({
            id: Date.now().toString(),
            name: "new folder",
            isFolder: true,
            children: [],
          });
        } else {
          tree.children.map((child) => {
            return updateFolderStructure(child);
          });
        }
      }
      return tree;
    };

    setFolderData((prev) => updateFolderStructure(prev));
  };
  return (
    <div className="app">
      <Folder list={folderData} createFolder={createFolder} />
    </div>
  );
};

export default App;

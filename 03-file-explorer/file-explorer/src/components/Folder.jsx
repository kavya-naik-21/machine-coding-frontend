import React, { useState } from "react";
import { FaFolder } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";
import "../App.css";

const Folder = ({ list, createFolder }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  if (list.isFolder) {
    return (
      <div className="item">
        <div className="item-box">
          <div
            className="folder-name"
            onClick={() => {
              setIsExpanded(!isExpanded);
            }}
          >
            <FaFolder />
            {list.name}
          </div>
          <div className="control-btns">
            <div
              className="add-folder"
              onClick={() => {
                createFolder(list.id);
                setIsExpanded(true);
              }}
            >
              Folder +
            </div>
            <div className="add-file"> File + </div>
          </div>
        </div>
        {isExpanded &&
          list.children.map((item) => {
            return (
              <Folder list={item} key={item.id} createFolder={createFolder} />
            );
          })}
      </div>
    );
  } else {
    return (
      <div className="item">
        <div className="item-box">
          <FaRegFileAlt />
          {list.name}
        </div>
      </div>
    );
  }
};

export default Folder;

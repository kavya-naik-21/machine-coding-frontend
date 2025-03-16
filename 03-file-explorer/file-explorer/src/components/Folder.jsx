import React, { useState } from "react";
import { FaFolder } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";
import "../App.css";

const Folder = ({ list }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  if (list.isFolder) {
    return (
      <div className="item">
        <div
          className="item-box"
          onClick={() => {
            setIsExpanded(!isExpanded);
          }}
        >
          <FaFolder />
          {list.name}
        </div>
        {isExpanded &&
          list.children.map((item) => {
            return <Folder list={item} key={item.id} />;
          })}
      </div>
    );
  } else {
    return (
      <div className="item">
        <div className="item-box">
          {" "}
          <FaRegFileAlt />
          {list.name}
        </div>
      </div>
    );
  }
};

export default Folder;

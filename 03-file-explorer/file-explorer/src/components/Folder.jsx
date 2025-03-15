import React from "react";
import { FaFolder } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";
import "../App.css";

const Folder = ({ list }) => {
  if (list.isFolder) {
    return (
      <div className="item">
        <FaFolder />
        {list.name}
        {list.children.map((item) => {
          return <Folder list={item} key={item.id} />;
        })}
      </div>
    );
  } else {
    return (
      <div className="item">
        <FaRegFileAlt />
        {list.name}
      </div>
    );
  }
};

export default Folder;

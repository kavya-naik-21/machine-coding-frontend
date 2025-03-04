import React, { useState } from "react";
import EmployeeForm from "./EmployeeForm/EmployeeForm";
import EmployeeDashboard from "./EmployeeDashboard/EmployeeDashboard";

const Body = () => {
  const [addEmployeeBtnClicked, setAddEmployeeBtnClicked] = useState(true);

  const handleAddEmployeeBtn = () => {
    setAddEmployeeBtnClicked(!addEmployeeBtnClicked);
  };

  return (
    <div className="flex flex-wrap flex-col p-5 m-5 h-full">
      <div className="w-2/3 flex justify-end">
        <button
          className="bg-gray-400 p-3 rounded-xl "
          onClick={handleAddEmployeeBtn}
        >
          Add Employee
        </button>
      </div>

      {addEmployeeBtnClicked && (
        <EmployeeForm onCancel={handleAddEmployeeBtn} />
      )}
      <EmployeeDashboard />
    </div>
  );
};

export default Body;

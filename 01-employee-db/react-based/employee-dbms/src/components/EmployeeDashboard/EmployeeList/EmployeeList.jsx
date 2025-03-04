import React from "react";
import EmployeeItem from "./EmployeeItem";

const EmployeeList = () => {
  let employees = JSON.parse(localStorage.getItem("employees")) || [];
  return (
    <div className="border-2 w-1/4 overflow-auto">
      {employees.map((employee) => (
        <EmployeeItem employee={employee} />
      ))}
    </div>
  );
};

export default EmployeeList;

import React from "react";
import EmployeeDetails from "./EmployeeDetails/EmployeeDetails";
import EmployeeList from "./EmployeeList/EmployeeList";

const EmployeeDashboard = () => {
  return (
    <div className="border-2 mt-5 flex h-[35em]">
      <EmployeeList />

      <EmployeeDetails />
    </div>
  );
};

export default EmployeeDashboard;

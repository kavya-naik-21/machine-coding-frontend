import React from "react";
import { useEmployeeContext } from "../../../context/EmployeeContext";

const EmployeeItem = ({ employee }) => {
  const {selectedEmployee, setSelectedEmployee} = useEmployeeContext()

  const handleSelectedEmployee = () => {
    setSelectedEmployee(employee)
  }
  return (
    <div className="border-2 m-3 flex p-2" onClick={handleSelectedEmployee}>
      <span className="w-full">{employee.fullName}</span>
      <div className="flex justify-end text-red-700">
        <button>X</button>
      </div>
    </div>
  );
};

export default EmployeeItem;

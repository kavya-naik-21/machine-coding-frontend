import React from "react";
import { useEmployeeContext } from "../../../context/EmployeeContext";

const EmployeeDetails = () => {
  const {selectedEmployee, setSelectedEmployee} = useEmployeeContext()
  return (
    <div className="border-2 w-3/4 p-5 justify-items-center">
      <div className="w-full justify-items-center">
        <img
          src={selectedEmployee?.profilePic}
          alt="profile image"
          className="w-1/4"
        ></img>
      </div>
      <div className=" w-1/2 mt-10 border-2 justify-center">
        <div className=" p-5">
          <div>
            Full Name: <span> {selectedEmployee?.fullName}</span>
          </div>
          <div>
            Phone No: <span>{selectedEmployee?.phoneNo}</span>
          </div>
          <div>
            Email Id: <span> {selectedEmployee?.emailId}</span>
          </div>
          <div>
            Address:
            <span>
            {selectedEmployee?.address}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;

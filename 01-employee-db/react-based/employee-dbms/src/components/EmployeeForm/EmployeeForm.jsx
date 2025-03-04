import React, { useRef } from "react";

const EmployeeForm = (props) => {
  const fullNameRef = useRef(null);
  const profilePicRef = useRef(null);
  const phoneNoRef = useRef(null);
  const emailIdRef = useRef(null);
  const addressRef = useRef(null);

  const { onCancel } = props;

  const onSubmit = () => {
    if (
      !fullNameRef.current.value ||
      !profilePicRef.current.value ||
      !phoneNoRef.current.value ||
      !emailIdRef.current.value ||
      !addressRef.current.value
    ) {
      return;
    }

    const employee = {
      fullName: fullNameRef.current.value,
      profilePic: profilePicRef.current.value,
      phoneNo: phoneNoRef.current.value,
      emailId: emailIdRef.current.value,
      address: addressRef.current.value,
    };

    let employees = JSON.parse(localStorage.getItem("employees")) || [];
    employees.push(employee);
    localStorage.setItem("employees", JSON.stringify(employees));
    onCancel();
  };

  return (
    <div className=" bg-amber-100 rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 p-10">
      <div className="text-lg font-bold pb-2 ml-10">Add Employee Form</div>
      <form
        className="flex flex-wrap flex-col "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={fullNameRef}
          placeholder="Full Name"
          className="border-2 rounded-md m-2"
          required={true}
        />
        <input
          ref={profilePicRef}
          placeholder="Profile Picture URL"
          className="border-2 rounded-md m-2"
          required={true}
        />
        <input
          ref={phoneNoRef}
          placeholder="Phone No."
          className="border-2 rounded-md m-2"
          required={true}
        />
        <input
          ref={emailIdRef}
          placeholder="Email Id"
          className="border-2 rounded-md m-2"
          required={true}
        />
        <input
          ref={addressRef}
          placeholder="Address"
          className="border-2 rounded-md m-2"
          required={true}
        />
        <div className="w-full flex justify-end gap-5">
          <button
            className="bg-green-300 pl-2 pr-2 rounded-md"
            onClick={() => {
              onSubmit();
            }}
          >
            Submit
          </button>
          <button
            className="bg-gray-300 pl-2 pr-2 rounded-md"
            onClick={() => {
              onCancel();
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmployeeForm;

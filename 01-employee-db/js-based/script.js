const addEmployeeBtn = document.getElementById("add_employee_btn");

const addEmployeeModal = document.getElementById("add_employee_modal");
const addEmployeeForm = document.getElementById("add_employee_form");

const addEmployeeFormCancelBtn = document.getElementById(
  "add_employee_form_cancel_btn"
);
const addEmployeeFormSubmitBtn = document.getElementById(
  "add_employee_form_submit_btn"
);

const employeeList = document.getElementById("employee_list");

addEmployeeForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

addEmployeeBtn.addEventListener("click", () => {
  addEmployeeModal.style.display = "flex";
});

addEmployeeFormCancelBtn?.addEventListener("click", (e) => {
  e.preventDefault();
  addEmployeeModal.style.display = "none";
});

addEmployeeFormSubmitBtn?.addEventListener("click", (e) => {
  // e.preventDefault();
  const fullName = document.getElementById("fullName").value;
  const profilePic = document.getElementById("profilePic").value;
  const phone = document.getElementById("phoneNo").value;
  const emailId = document.getElementById("emailId").value;
  const address = document.getElementById("address").value;

  const employeesFromLocalStorage =
    JSON.parse(localStorage.getItem("employees")) || [];
  if (fullName && profilePic && phone && emailId && address) {
    console.log(fullName);
    console.log("came here");
    employeesFromLocalStorage.push({
      fullName: fullName,
      profilePic: profilePic,
      phone: phone,
      emailId: emailId,
      address: address,
    });
    localStorage.setItem(
      "employees",
      JSON.stringify(employeesFromLocalStorage)
    );
    location.reload();
  }
});

const displaySelectedEmployee = (employee) => {
  const employeeProfilePic = document.getElementById("employee_profile_pic");
  const employeeName = document.getElementById("employee_name");
  const employeePhNo = document.getElementById("employee_ph_no");
  const employeeEmail = document.getElementById("employee_email");
  const employeeAddress = document.getElementById("employee_address");

  employeeProfilePic.src = employee.profilePic;
  employeeName.innerText = employee.fullName;
  employeePhNo.innerText = employee.phone;
  employeeEmail.innerText = employee.emailId;
  employeeAddress.innerText = employee.address;
};

const getEmployees = async () => {
  const data = await fetch("./data.json");
  const employees = await data.json();

  if (!localStorage.getItem("employees"))
    localStorage.setItem("employees", JSON.stringify(employees));

  const employeeFromLocalStorage =
    JSON.parse(localStorage.getItem("employees")) || [];

  employeeFromLocalStorage.map((employee) => {
    const employeeItem = document.createElement("div");
    employeeItem.classList = "employee_item";
    employeeItem.id = "employee_item" + employee.emailId;

    const employeeName = document.createElement("span");
    employeeName.innerText = employee.fullName;
    employeeName.classList = "employee_name";

    const deleteEmployeeBtn = document.createElement("button");
    deleteEmployeeBtn.innerText = "X";
    deleteEmployeeBtn.classList = "delete_employee";
    deleteEmployeeBtn.id = "delete_employee" + employee.emailId;

    employeeItem.appendChild(employeeName);
    employeeItem.appendChild(deleteEmployeeBtn);

    employeeItem.addEventListener("click", () => {
      displaySelectedEmployee(employee);
    });

    deleteEmployeeBtn.addEventListener("click", async () => {
      const updatedEmployees = employeeFromLocalStorage.filter(
        (emp) => emp.emailId !== employee.emailId
      );
      localStorage.setItem("employees", JSON.stringify(updatedEmployees));
      location.reload();
    });
    employeeList.appendChild(employeeItem);
  });
};

getEmployees();

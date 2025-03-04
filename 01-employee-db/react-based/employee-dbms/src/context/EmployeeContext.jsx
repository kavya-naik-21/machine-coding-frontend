import { createContext, useContext, useState } from "react";

export const EmployeeContext = createContext();

export const useEmployeeContext = () => {
  return useContext(EmployeeContext);
};

export const EmployeeContextProvider = ({ children }) => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  return (
    <EmployeeContext.Provider value={{ selectedEmployee, setSelectedEmployee }}>
      {children}
    </EmployeeContext.Provider>
  );
};

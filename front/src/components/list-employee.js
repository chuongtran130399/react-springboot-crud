import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EmployeeSerVice from "../services/employee-service";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getEmployees();
  }, []);

  const getEmployees = () => {
    EmployeeSerVice.getEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteEmployee = (employeeId) => {
    EmployeeSerVice.deleteEmployee(employeeId).then((response) => {
      getEmployees();
    });
  };

  return (
    <div className="container">
      <h1 className="text-center"> Employees List</h1>
      <Link to="/add-employee" className="btn btn-primary mb-2">
        Add Employee
      </Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th> Employee Id</th>
            <th> Employee First Name</th>
            <th> Employee Last</th>
            <th> Employee Email</th>
            <th> Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td> {employee.id}</td>
              <td> {employee.firstName}</td>
              <td> {employee.lastName}</td>
              <td> {employee.emailId}</td>
              <td>
                <Link
                  className="btn btn-info"
                  to={`/edit-employee/${employee.id}`}
                >
                  Update
                </Link>
                <button
                  className="btn btn-danger"
                  style={{ marginLeft: "10px" }}
                  onClick={() => deleteEmployee(employee.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default EmployeeList;

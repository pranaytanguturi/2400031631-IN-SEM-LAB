import { useState } from "react";
import "./App.css";

function App() {
  // Predefined array of employee data
  const employeesData = [
    { name: "Alice", department: "HR", salary: 50000 },
    { name: "Bob", department: "IT", salary: 70000 },
    { name: "Charlie", department: "Finance", salary: 60000 },
    { name: "David", department: "Marketing", salary: 55000 },
    { name: "Eve", department: "IT", salary: 80000 },
  ];

  const [employees, setEmployees] = useState(employeesData);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  // Sorting logic
  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }

    const sortedData = [...employees].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setEmployees(sortedData);
    setSortConfig({ key, direction });
  };

  return (
    <div className="container">
      <h1>Sortable Employee Table</h1>
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort("name")}>
              Name {sortConfig.key === "name" ? (sortConfig.direction === "asc" ? "▲" : "▼") : ""}
            </th>
            <th onClick={() => handleSort("department")}>
              Department {sortConfig.key === "department" ? (sortConfig.direction === "asc" ? "▲" : "▼") : ""}
            </th>
            <th onClick={() => handleSort("salary")}>
              Salary {sortConfig.key === "salary" ? (sortConfig.direction === "asc" ? "▲" : "▼") : ""}
            </th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, index) => (
            <tr key={index}>
              <td>{emp.name}</td>
              <td>{emp.department}</td>
              <td>{emp.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import employees from "./new-employees.json";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  // Setting this.state.employees to the employees json array
  state = {
    employees,
  };

  removeEmployee = (id) => {
    // Filter this.state.emmployees for employees with an id not equal to the id being removed
    const employees = this.state.employees.filter(
      (employee) => employee.info.seed !== id
    );
    // Set this.state.employees equal to the new employees array
    this.setState({ employees });
  };
  // Map over this.state.employees and render a EmployeeCard component for each employee object
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Wrapper>
          {this.state.employees.map((employee) => (
            <EmployeeCard
              removeEmployee={this.removeEmployee}
              id={employee.info.seed}
              key={employee.info.seed}
              name={`${employee.results[0].name.first} ${employee.results[0].name.last}`}
              image={employee.results[0].picture.large}
              occupation={employee.job}
              location={`${employee.results[0].location.street.number} ${employee.results[0].location.street.name}, ${employee.results[0].location.city}, ${employee.results[0].location.state}, ${employee.results[0].location.country}, ${employee.results[0].location.postcode}`}
              phone={employee.results[0].phone}
              email={employee.results[0].email}
              city={employee.results[0].location.city}
              country={employee.results[0].location.country}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;

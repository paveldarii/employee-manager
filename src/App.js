import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./new-employees.json";

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
    console.log(employees);
    return (
      <Wrapper>
        <Title>Employee List</Title>
        {this.state.employees.map((employee) => (
          <EmployeeCard
            removeEmployee={this.removeEmployee}
            id={employee.info.seed}
            key={employee.info.seed}
            name={
              employee.results[0].name.first + employee.results[0].name.last
            }
            image={employee.results[0].picture.large}
            occupation={employee.job}
            location={`${employee.results[0].location.street.number} ${employee.results[0].location.street.name}, ${employee.results[0].location.city}, ${employee.results[0].location.state}, ${employee.results[0].location.country}`}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;

import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import SortForm from "./components/SortForm";
import FilterForm from "./components/FilterForm";
import employees from "./new-employees.json";
import employeesTest from "./employee-test.json";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  // Setting this.state.employees to the employees json array
  state = {
    employees: employees,
    currentNavStatus: "",
    filteredEmployees: [],
  };

  handleSortByChange = (sortItem) => {
    this.setState({ sortFormState: sortItem });
  };

  handleNavStatus = (status) => {
    this.setState({ currentNavStatus: status });
  };
  renderSearchSection = () => {
    if (this.state.currentNavStatus === "sort") {
      return (
        <SortForm renderSortedEmployee={this.renderSortedEmployee}></SortForm>
      );
    } else if (this.state.currentNavStatus === "filter") {
      return <FilterForm></FilterForm>;
    } else if (this.state.currentNavStatus === "") {
      return "";
    }
  };
  renderSortedEmployee = (sortItem) => {
    if (sortItem === "age") {
      this.setState({ employees: employeesTest });
    } else if (sortItem === "experience") {
      this.setState({ employees: employeesTest });
    } else if (sortItem === "name") {
      this.setState({ employees: employeesTest });
    } else {
      this.setState({ employees });
    }
  };
  resetTheScreen = () => {
    this.setState({ currentNavStatus: "" });
    this.renderSortedEmployee("");
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
        <Navbar
          resetTheScreen={this.resetTheScreen}
          handleNavStatus={this.handleNavStatus}
        ></Navbar>
        {this.renderSearchSection()}
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
              age={employee.results[0].dob.age}
              experience={
                employee.results[0].dob.age - employee.results[0].registered.age
              }
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;

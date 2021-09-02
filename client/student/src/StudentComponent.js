import React, { Component, useState } from "react";
import "./App.css";

export const Student_info = () => {
  const [setIntialState] = useState([]);
  fetch("/http://localhost:3001/")
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((jsonResponse) => setIntialState(jsonResponse.Component));
};
class StudentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      RegisterNumber: "",
      FatherName: "",
      emailId: "",
      Department: "",
    };

    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changeRegisterNumberHandler =
      this.changeRegisterNumberHandler.bind(this);
    this.changeFatherNameHandler = this.changeFatherNameHandler.bind(this);
    this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
    this.changeDepartmentHandler = this.changeDepartmentHandler.bind(this);
    this.saveStudent = this.saveStudent.bind(this);
  }

  changeNameHandler = (event) => {
    this.setState({ Name: event.target.value });
  };

  changeRegisterNumberHandler = (event) => {
    this.setState({ RegisterNumber: event.target.value });
  };

  changeFatherNameHandler = (event) => {
    this.setState({ FatherName: event.target.value });
  };

  changeEmailIdHandler = (event) => {
    this.setState({ emailId: event.target.value });
  };

  changeDepartmentHandler = (event) => {
    this.setState({ Department: event.target.value });
  };

  saveStudent = (e) => {
    e.preventDefault();
    let student = {
      Name: this.state.Name,
      RegisterNumber: this.state.RegisterNumber,
      FatherName: this.state.FatherName,
      emailId: this.state.emailId,
      Department: this.state.Department,
    };
    console.log("Student=>" + JSON.stringify(student));
  };

  cancel() {
    this.props.history.push();
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <br></br>
            <h1 className="text-center">Student Registration Form</h1>
            <br></br>
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>Name:</label>
                    <input
                      placeholder="Name"
                      name="Name"
                      className="form-control"
                      value={this.state.Name}
                      onChange={this.changeNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>RegisterNumber:</label>
                    <input
                      placeholder="RegisterNumber"
                      name="RegisterNumber"
                      className="form-control"
                      value={this.state.RegisterNumber}
                      onChange={this.RegisterNumberHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>FatherName:</label>
                    <input
                      placeholder="FatherName"
                      name="FatherName"
                      className="form-control"
                      value={this.state.FatherName}
                      onChange={this.changeFatherNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email:</label>
                    <input
                      placeholder="Email"
                      name="emailId"
                      className="form-control"
                      value={this.state.emailId}
                      onChange={this.changeEmailIdHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Department:</label>
                    <input
                      placeholder="Department"
                      name="Department"
                      className="form-control"
                      value={this.state.Department}
                      onChange={this.changeDepartmentHandler}
                    />
                  </div>
                  <br></br>
                  <br></br>
                  <button
                    className="btn btn-success"
                    onClick={this.saveStudent}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default StudentComponent;

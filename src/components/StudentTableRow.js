import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default class StudentTableRow extends Component {
  constructor(props) {
    super(props);
    this.deleteStudent = this.deleteStudent.bind(this);
  }

  // to delete student

  deleteStudent() {
    axios
      .delete(
        "http://localhost:5000/students/delete-student/" + this.props.obj._id
      )
      .then((res) => {
        console.log("Student successfully deleted!");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <tr>
        <td>{this.props.obj.name}</td>
        <td>{this.props.obj.email}</td>
        <td>{this.props.obj.rollno}</td>
        <td>
          <Link
            to={"/edit-student/" + this.props.obj._id}
            className="edit-link"
          >
            Edit
          </Link>
          <Button onClick={this.deleteStudent} size="sm" variant="danger">
            Delete
          </Button>
        </td>
      </tr>
    );
  }
}

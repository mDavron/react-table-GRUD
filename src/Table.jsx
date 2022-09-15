import React, { Component } from "react";
import "./Table.css";

class Table extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <>
        <div className="table-title">
          <h1 style={{ textAlign: "center" }}>
            <i class="fa-brands fa-react"></i>&nbsp; React Table GRUD
          </h1>
          <hr />
        </div>

        <header className="table-header">
          <h2>
            Employee <span>Details</span>
          </h2>
          <h3>
            Length:&nbsp;<span style={{ color: "crimson" }}>{null}5</span>
          </h3>
          <button className="table-add-btn">+ Add New</button>
        </header>

        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email Adress</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map((user, index) => {
              return (
                <tr key={user.id}>
                  <td>{index+1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>
                    <div className="table-actions">
                    <button className="edit-btn">
                      <i class="fa-solid fa-pencil"></i>
                    </button>
                    <button className="delete-btn">
                      <i class="fa-solid fa-trash"></i>
                    </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

export default Table;

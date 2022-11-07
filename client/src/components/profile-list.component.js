import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import ProfileTableRow from './ProfileTableRow';

export default class ProfileList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      profiles: []
    };
  }
  componentDidMount() {
    axios.get('https://localhost:4000/profiles/' )
    .then(res => {
      this.setState({
        posts: res.data
      });
    })
    .catch((error) => {
      console.log(error);
    })
  }
  DataTable() {
    return this.state.profiles.map((res, i) => {
      return <ProfileTableRow obj={res} key={i} />;
    });
  }

  render() {
    return (<div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Pasword</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}
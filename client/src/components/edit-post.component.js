import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
export default class EditPost extends Component {
  constructor(props) {
    super(props)
    this.onChangePostStreet = this.onChangePostStreet.bind(this);
    this.onChangePostCity = this.onChangePostCity.bind(this);
    this.onChangePostState = this.onChangePostState.bind(this);
    this.onChangePostZip = this.onChangePostZip.bind(this);
    this.onChangePostCompany =  this.onChangePostCompany.bind(this);
    this.onChangePostJobTitle = this.onChangePostJobTitle.bind(this);
    this.onChangePostMaxSal = this.onChangePostMaxSal.bind(this);
    this.onChangePostMinSal = this.onChangePostMinSal.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    // State
    this.state = {
      street: '',
      city: '',
      state: '',
      zip:'',
      company:'',
      jobTitle:'',
      maxSal:'',
      minSal:''
    }
  }
  componentDidMount() {
    axios.get('http://localhost:4000/posts/edit-post/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          street: res.data.street,
          city: res.data.city,
          State: res.data.state,
          zip: res.data.zip,
          company: res.data.company,
          jobTitle: res.data.jobTitle,
          maxSal: res.data.maxSal,
          minSal: res.data.minSal
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }
  onChangePostStreet(e) {
    this.setState({ name: e.target.value })
  }
  onChangePostCity(e) {
    this.setState({ email: e.target.value })
  }
  onChangePostState(e) {
    this.setState({ Phone: e.target.value })
  }
  onChangePostZip(e) {
    this.setState({ Phone: e.target.value })
  }
  onChangePostCompany(e) {
    this.setState({ Phone: e.target.value })
  }
  onChangePostJobTitle(e) {
    this.setState({ Phone: e.target.value })
  }
 onChangePostMaxSal(e) {
    this.setState({ Phone: e.target.value })
  }
  onChangePostMinSal(e) {
    this.setState({ Phone: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()
    const studentObject = {
      street: this.state.name,
      city: this.state.email,
      state: this.state.rollno,
      zip: this.state.rollno,
      company: this.state.rollno,
      jobTitle: this.state.rollno,
      maxSal: this.state.rollno,
      minSal: this.state.rollno
    };
    axios.put('http://localhost:4000/posts/update-post/' + this.props.match.params.id, studentObject)
      .then((res) => {
        console.log(res.data)
        console.log('Job Posting successfully updated')
      }).catch((error) => {
        console.log(error)
      })
    // Redirect to Student List 
    this.props.history.push('/post-list')
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeStudentName} />
        </Form.Group>
        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeStudentEmail} />
        </Form.Group>
        <Form.Group controlId="Name">
          <Form.Label>Roll No</Form.Label>
          <Form.Control type="text" value={this.state.rollno} onChange={this.onChangeStudentRollno} />
        </Form.Group>
        <Button variant="danger" size="lg" block="block" type="submit">
          Update Post
        </Button>
      </Form>
    </div>);
  }
}
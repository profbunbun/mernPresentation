import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
export default class PostTableRow extends Component {
    constructor(props) {
        super(props);
        this.deletePost = this.deletePost.bind(this);
    }
    deletePost() {
        axios.delete('/posts/delete-post/' + this.props.obj._id)
            .then((res) => {
                console.log('Job post successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }
    render() {
        return (
            <tr>
                <td>{this.props.obj.street}</td>
                <td>{this.props.obj.city}</td>
                <td>{this.props.obj.state}</td>
                <td>{this.props.obj.zip}</td>
                <td>{this.props.obj.company}</td>
                <td>{this.props.obj.jobTitle}</td>
                <td>{this.props.obj.maxSal}</td>
                <td>{this.props.obj.minSal}</td>
                <td>
                    <Link className="edit-link" to={"/edit-post/" + this.props.obj._id}>
                        Edit
                    </Link>
                    <Button onClick={this.deletePost} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
}
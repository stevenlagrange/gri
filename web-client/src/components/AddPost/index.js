import React, { Component } from 'react';
import { Row, Input, CardPanel, Button, Col } from 'react-materialize';
import API from '../../api'

class AddPost extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title : '',
      post: ''
    }

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handlePostChange = this.handlePostChange.bind(this);
    this.handleUpdateView = this.handleUpdateView.bind(this);
    this.clearForm = this.clearForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(event) {
    this.setState({title: event.target.value});
  }

  handlePostChange(event) {
    this.setState({post: event.target.value});
  }

  handleUpdateView() {
    this.props.updateView();
  }

  clearForm() {
    this.setState({title: ""});
    this.setState({post: ""});
  }

  handleSubmit(e) {
    let c = this;

    e.preventDefault();
    let form = {
      title: this.state.title,
      data: this.state.post,
      user: 1
    };

    API.createPost(form)
      .then(function(response) {
        console.log(response);
        c.handleUpdateView();
        c.clearForm();
    }).catch(function(response) {
        console.log(response);
    });
  }


  render() {
    return (
    <Row>
      <form onSubmit={this.handleSubmit.bind(this)}>
        <CardPanel>
          <Row>
            <Input s={12} label="Title" value={this.state.title} onChange={this.handleTitleChange}/>
            <Input s={12} type='textarea' label="Let's hear from you..." value={this.state.post} onChange={this.handlePostChange}/>
          </Row>
          <Row>
          <Button className="add-button">Create Post</Button>
          </Row>
        </CardPanel>
      </form>
    </Row>
    );
  }
}


export default AddPost;

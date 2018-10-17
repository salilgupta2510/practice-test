import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addPost} from '../actions/addPost';
import { bindActionCreators } from 'redux';


class NewPost extends Component {
  handleChange=(event)=>{
    var name = event.target.name.value
    var title = event.target.title.value
    var data = event.target.comment.value
    var newPost = {name,title,data}
    this.props.addPost(newPost)
  }
  render() {
    console.log("New Post");
    return ( 
      <div className="row">
        <div className="col">
          <div className="alert alert-danger" role="alert">
            All fields are required.
          </div>
          <form onSubmit={(e)=>this.handleChange(e)}>
            <div className="form-group">
              <label name="name">Name</label>
              <input type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter user name" />
            </div>
            <div className="form-group">
              <label name="title">Title</label>
              <input type="text" className="form-control" id="title" placeholder="Enter comment title" />
            </div>
            <div className="form-group">
              <label name="comment">Comment</label>
              <textarea className="form-control" id="comment" placeholder="Enter comment" />
            </div>
            <div className="text-right">
              <button type="button" className="btn btn-secondary">Cancel</button>
              &nbsp;
          <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return {
    addPost: bindActionCreators(addPost, dispatch)
  }
}
export default connect(null, mapDispatchToProps)(NewPost);
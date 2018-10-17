import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import logo from './images/logo.png';
import './styles/App.css';
import Card from './components/card';
import NewPost from './components/newPost';
import {connect} from 'react-redux';
import * as postAction from './actions/postsAction';
import { bindActionCreators } from 'redux';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false
    }
  }
  clicked = () => {
   this.setState({ flag: true })
  }
  submitted=()=>{
    this.setState({ flag: false })
  }

  display=()=>{
    return(
    <Card posts={this.props.posts}/>
    );
  }

  render() {
   console.log(">>>123",this.props.posts)
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h3> Post Comments </h3>
        </header>
        <div className="container m-5">
          {this.state.flag ? <NewPost flag={this.submitted} /> :
            <div className="row mb-4">
              <div className="col">
                <button type="button" className="btn btn-primary" onClick={this.clicked}>Add Comment</button>
              </div>
            </div>}
            {this.props.posts ? this.display() : null}
            
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    posts: state.posts
  }
}

function mapDispatchToProps(dispatch){
  return {
    postAction: bindActionCreators(postAction, dispatch)
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);

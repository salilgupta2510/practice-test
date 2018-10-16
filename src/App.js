import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import logo from './images/logo.png';
import './styles/App.css';
import Card from './components/card';
import NewPost from './components/newPost';
import {connect} from 'react-redux';
//import {bindActionCreators} from 'redux';

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

  display=(props)=>{
    this.props.posts.map(item => {
      return(
        <Card posts={item} />
      )
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1> Post Comments </h1>
        </header>
        <div className="container m-5">
          {this.state.flag ? <NewPost /> :
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
    posts: state.post
  }
}
export default connect(mapStateToProps,null)(App);

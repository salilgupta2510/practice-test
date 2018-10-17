import React, { Component } from 'react';

class Card extends Component {
  
  display = (posts) => {
    var newPosts = [posts]
    return (
      newPosts.map((item, i) => {
        return (
          <div className="row mb-4" key={i}>
            <div className="col">
              <div className="card">
                <h6 className="card-header">{item.name}</h6>
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.data}</p>
                </div>
              </div>
            </div>
          </div>
        )
      })
    )
  }
  render() {
    console.log("Hi")
    return (
      this.display(this.props.posts)
    );
  }
}

export default Card;


import React, { Component } from 'react';

// class Card extends Component {
//   render() { 
//     return ( 
//       <div className="row mb-4">
//             <div className="col">
//               <div className="card">
//                 <h6 className="card-header">User 1</h6>
//                 <div className="card-body">
//                   <h5 className="card-title">Title 1</h5>
//                   <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//      );
//   }
// }
 
// export default Card;

export const Card = (props)=>{
  return ( 
          <div className="row mb-4">
                <div className="col">
                  <div className="card">
                    <h6 className="card-header">{props.name}</h6>
                    <div className="card-body">
                      <h5 className="card-title">{props.title}</h5>
                      <p className="card-text">{props.data}</p>
                    </div>
                  </div>
                </div>
              </div>
         );
}
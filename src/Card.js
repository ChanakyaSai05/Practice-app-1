import React from "react";

//this can be written as
export default class Card extends React.Component {
  render() {
    return (
      <div class="col-4">
        <div class="card" style={{ width: "18rem" }}>
          <img src={this.props.imageURL} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{this.props.title}</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}

// export default function card(){
//     return(
//     <div class="col-4">
//     <div class="card" style={{width: "18rem"}}>
//         <img src="..." class="card-img-top" alt="..."/>
//         <div class="card-body">
//         <h5 class="card-title">Card title</h5>
//         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//         <a href="#" class="btn btn-primary">Go somewhere</a>
//         </div>
//     </div>
//     </div>
//     );
// }

//this can be written as
// function Card(){
//     return(

//     );
// }
// export default Card;

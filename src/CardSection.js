import React from "react";
import Card from "./Card";

//Another way of declaring a component.
export default class CardSection extends React.Component {
  //what ever the functions available in React.Component class that are also avilable in cardsection.This is called inheritance(It is there in revision topic after react)
  //All the methods of react.component will be vailable inside card section
  render() {
    //It is a method internally the react library will call the render method
    //onesuch method of react.component is render()
    return (
      <section className="contact bg-success">
        <div className="container">
          <h2 className="text-white">we love new friends!</h2>
          <div className="row">
            <Card
              imageURL="https://cdn.vox-cdn.com/thumbor/SJcmPEheS_cbdujd4zbIPTpuXfg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13315959/akrales_181019_3014_0770.jpg"
              title="Phone1"
            />
            <Card
              imageURL="https://m.media-amazon.com/images/I/61iy2Ru9KdS._SX569_.jpg"
              title="Phone2"
            />
            <Card
              imageURL="https://static.digit.in/default/3a9e046b7aeed0a2301de2598e8d3e6bd9d5880e.jpeg?tr=w-1200"
              title="Phone3"
            />
          </div>
        </div>
      </section>
    );
  }
}

// export default function CardSection(){
//     return (
//         <section className="contact bg-success">
//         <div className="container">
//             <h2 className="text-white">we love new friends!</h2>
//             <div className="row">
//                 {/* <div class="col-4">
//                     <Card/>
//                 </div>
//                 <div class="col-4">
//                     <Card/>
//                 </div>
//                 <div class="col-4">
//                     <Card/>
//                 </div> */}

//                 {/* or sir method below */}

//                 <Card />
//                 <Card />
//                 <Card />
//             </div>
//         </div>
//       </section>

//     );
// }

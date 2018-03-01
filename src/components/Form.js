import React from "react";

// stateless==========================================

const Form = props => (

<form onSubmit={props.getWeather}>
          <input type="text" name="city" placeholder="City..."/>
          <input type="text" name="country" placeholder="Country..."/>
          <button>Get Weather</button>
        </form>



);
// statelesss=================================






// this is with a state=======================

// class Form extends React.Component {
//   render() {
//     return(
//
//
//         <form onSubmit={this.props.getWeather}>
//           <input type="text" name="city" placeholder="City..."/>
//           <input type="text" name="country" placeholder="Country..."/>
//           <button>Get Weather</button>
//         </form>
//
//
//     );
//   }
// };

// with state =================================

export default Form;

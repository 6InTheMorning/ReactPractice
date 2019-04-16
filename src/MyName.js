import React, { Component } from 'react';

const MyName = ({ name }) => {
  return <div>안녕하세요! {name} 입니다.</div>;
};

MyName.defaultProps = {
  name: 'Velopert'
};
// class MyName extends Component {
//   static defaultProps = {
//     name: 'defaultName'
//   };
//   render() {
//     return (
//       <div>
//         안녕하세요! <b>{this.props.name}</b> 입니다
//       </div>
//     );
//   }
// }

export default MyName;

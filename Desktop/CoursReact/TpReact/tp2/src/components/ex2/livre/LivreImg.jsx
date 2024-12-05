import React, { Component } from 'react';
export default class LivreImg extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <img src={this.props.data} style={{ width: '150px', height: '200px', borderRadius: '5px' }} />
    );
  }
}          
// const LivreImg = ({src}) => {
//   return <img src={src} style={{ width: '150px', height: '200px', borderRadius: '5px' }} />;
// };
// export default LivreImg;

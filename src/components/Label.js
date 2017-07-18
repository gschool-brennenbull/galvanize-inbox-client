import React, {Component} from 'react';
export default class Label extends Component{
  render(){
    return(
      <span className="label label-warning">{this.props.label}</span>
    )
  }
}

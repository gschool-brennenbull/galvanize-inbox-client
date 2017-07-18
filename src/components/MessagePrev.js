import React, {Component} from 'react';
import Label from './Label';
export default class MessagePrev extends Component{

  render(){
    const starBtn = ()=>{
      if(!this.props.data.starred){
        return 'star fa fa-star-o';
      }
      return 'star fa fa-star';
    }

    const checkbox = ()=>{
      if(!this.props.data.selected){
        return null;
      }
      return 'checked';
    }

    const read = ()=>{
      if(!this.props.data.read){
        return 'unread';
      }
      return 'read';
    }

    const selected = ()=>{
      if(!this.props.data.selected){
        return null;
      }
      return 'selected';
    }


    return(
      <div className={'row message ' + read()+ " " + selected()}>
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
              <input type="checkbox" checked={checkbox()} onChange ={()=>{this.props.check(this.props.data)}}/>
            </div>
            <div className="col-xs-2">
              <i className={starBtn()} onClick={()=>{this.props.star(this.props.data)}}></i>
            </div>
          </div>
        </div>
        <div className="col-xs-11">
          {this.props.data.labels.map((ele, index)=>(
            <Label label={ele} key={index}/>
          ))}
          <a href="#" onClick={()=>{this.props.markAsRead(this.props.data)}}>
            {this.props.data.subject}
          </a>
        </div>
      </div>
    )
  }
}

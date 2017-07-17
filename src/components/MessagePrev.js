import React, {Component} from 'react';

export default class MessagePrev extends Component{
  constructor(){
    super();
    this.state = {
      stared:{
        isChecked: false
      },
      checkbox:{
        isChecked: false
      }
    }
    this.handelClick = this.handelClick.bind(this);
  }

  handelClick(){
    if(this.state.stared.isChecked){
      this.setState({stared:{isChecked: false}})
    }else if(!this.state.stared.isChecked){
      this.setState({stared:{isChecked: true}})
    }
  }

  render(){
    const starBtn = ()=>{
      if(!this.state.stared.isChecked){
        return 'star fa fa-star-o';
      }
      return 'star fa fa-star';
    }

    const checkbox = ()=>{
      if(!this.state.checkbox.isChecked){
        return null;
      }
      return 'checked';
    }

    return(
      <div className="row message unread">
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
              <input type="checkbox" checked={checkbox()}/>
            </div>
            <div className="col-xs-2">
              <i className={starBtn()} onClick={this.handelClick}></i>
            </div>
          </div>
        </div>
        <div className="col-xs-11">
          <a href="#">
            Here is some message text that has a bunch of stuff
          </a>
        </div>
      </div>
    )
  }
}

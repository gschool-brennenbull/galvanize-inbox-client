import React, {Component} from 'react';

export default class ToolBar extends Component{
  constructor(){
    super();
    this.state ={
      checked: false
    }
    this.handleCheck = this.handleCheck.bind(this);
    this.ischecked=this.ischecked.bind(this);
    this.addLabel = this.addLabel.bind(this);
    this.removeLabel = this.removeLabel.bind(this);
  }

  areAllChecked(){
    if(this.props.max - this.props.data.length === 0){
      return true;
    }
    return false;
  }

  handleCheck(){
    if(this.state.checked || this.areAllChecked()){
      this.props.deselect();
      this.setState({checked:false})
      return
    }
    this.props.select();
    this.setState({checked: true});
  }


  ischecked(){
    if(this.props.max - this.props.data.length === 0){
      return 'fa-check-square-o';
    }else if(this.props.max - this.props.data.length !== 0 &&  this.props.data.length > 0){
      return 'fa-minus-square-o';
    }else{
      return 'fa-square-o';
    }
  }

  addLabel(e){
    if(e.target.value !== 'Apply label'){
      this.props.setLabel(this.props.data, e.target.value);
    }
  }

  removeLabel(e){
    this.props.unsetLabel(this.props.data, e.target.value);
  }

  render(){

    const enable = ()=>{
      if(this.props.data.length <= 0){
        return 'disabled';
      }
      return null;
    }

    return (
      <div className="row toolbar">
        <div className="col-md-12">
          <p className="pull-right">
            <span className="badge badge">{this.props.read}</span>
            unread messages
          </p>
          <a className="btn btn-danger">
            <i className="fa fa-plus"></i>
          </a>
          <button className="btn btn-default" onClick={this.handleCheck}>
            <i className={'fa ' + this.ischecked()}></i>
          </button>
          <button className="btn btn-default" disabled={enable()} onClick={()=>{this.props.markAsRead()}}>
            Mark As Read
          </button>
          <button className="btn btn-default" disabled={enable()} onClick={()=>{this.props.markAsUnread()}}>
            Mark As Unread
          </button>
          <select className="form-control label-select" disabled={enable()} onChange={this.addLabel} value = {null}>
            <option value={null}>Apply label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>
          <select className="form-control label-select" disabled={enable()} onChange={this.removeLabel} value = {null}>
            <option value={null}>Remove label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>
          <button className="btn btn-default" disabled={enable()} onClick={()=>this.props.deletelSelected()}>
            <i className="fa fa-trash-o"></i>
          </button>
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react';
import ToolBar from './components/ToolBar';
import MessagePrev from './components/MessagePrev';

const messagesArray = [
  {
    subject: 'Hello, Welcome to galvanize inbox',
    id:1,
    starred:false,
    selected: false,
    read: false,
    labels: ["dev", "personal"]
  },{
    subject: 'Learn Cool things about all the stuff',
    id:2,
    starred:false,
    selected: false,
    read: false,
    labels: []
  },{
    subject: 'Make cool things with the cool stuff',
    id:3,
    starred:false,
    selected: false,
    read: false,
    labels: ['personal']
  }
]

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      messages: messagesArray
    }
    this.starClick = this.starClick.bind(this);
    this.selectChange = this.selectChange.bind(this);
    this.makeRead = this.makeRead.bind(this);
    this.selectAll = this.selectAll.bind(this);
    this.deselectAll = this.deselectAll.bind(this);
    this.markSelectedAsRead = this.markSelectedAsRead.bind(this);
    this.addLabel=this.addLabel.bind(this);
    this.removeLabel=this.removeLabel.bind(this);
    this.deleteAllSelected=this.deleteAllSelected.bind(this);
    this.markSelectedAsUnread=this.markSelectedAsUnread.bind(this);
    this.countSelected=this.countSelected.bind(this);
  }

// NOTE: Single Message Functions---------
  starClick(obj){
    if(obj.starred === true){
      obj.starred = false;
      obj.isIn = true;
      this.setState({messages:this.state.messages}, ()=>{
      });
    }else if(obj.starred === false){
      obj.starred = true;
      obj.isIn = true;
      this.setState({messages:this.state.messages}, ()=>{
      });
    }
  }

  selectChange(obj){
    if(obj.selected){
      obj.selected = false;
      this.setState({messages:this.state.messages});
      return;
    };
    obj.selected = true;
    this.setState({messages:this.state.messages});
    return;
  }

  makeRead(obj){
    if(!obj.read){
      obj.read = true;
      this.setState({messages:this.state.messages})
    }
  }

// NOTE: ToolBar Functions---------------
  selectAll(){
    this.state.messages.forEach((ele)=>{
      ele.selected = true;
    })
    this.setState({messages:this.state.messages});
  }

  deselectAll(){
    this.state.messages.forEach((ele)=>{
      ele.selected = false;
    })
    this.setState({messages:this.state.messages})
  }

  markSelectedAsUnread(){
    this.state.messages.forEach((ele)=>{
      if(ele.selected){
        ele.read = false;
      }
    })
    this.setState({messages:this.state.messages})
  }

  markSelectedAsRead(){
    this.state.messages.forEach((ele)=>{
      if(ele.selected){
        ele.read = true;
      }
    })
    this.setState({messages:this.state.messages})
  }

  addLabel(objArr, value){
    objArr.forEach((ele)=>{
      if(ele.labels.indexOf(value) === -1){
        ele.labels.push(value);
      }
    });
    this.setState({messages:this.state.messages});
  }

  removeLabel(objArr, value){
    objArr.forEach((ele)=>{
      if(ele.labels.indexOf(value) !== -1){
        ele.labels.splice(ele.labels.indexOf(value),1);
      }
    });
    this.setState({messages:this.state.messages});
  }

  countSelected(){
    let count = 0;
    this.state.messages.forEach((ele, index)=>{
      if(ele.selected){
        count ++;
      }
    });
    return count;
  }

  deleteAllSelected(){
    if(this.countSelected() === this.state.messages.length){
      this.setState({messages:[]});
      return
    }
    this.state.messages.forEach((ele, index)=>{
      if(ele.selected){
        this.state.messages.splice(index,1);
      }
    });
    this.setState({messages:this.state.messages});
  }

// NOTE: RENDER ---------------------
  render() {
    const findSelected = ()=>{
      let data = []
      this.state.messages.forEach((ele, i)=>{
        if(ele.selected){
          data.push(ele);
        }
      });
      return data;
    }

    const count = ()=>{
      let numb = 0;
      this.state.messages.forEach((ele, i)=>{
        if(!ele.read){
          numb += 1;
        }
      })
      return numb
    }

    return (
      <div className='container'>
        <ToolBar data={findSelected()} select={this.selectAll} deselect={this.deselectAll}
        markAsRead={this.markSelectedAsRead} markAsUnread={this.markSelectedAsUnread}
        max={this.state.messages.length} read={count()} setLabel={this.addLabel} unsetLabel={this.removeLabel} deletelSelected={this.deleteAllSelected}/>
        {this.state.messages.map((ele, index)=>(
          <MessagePrev  data={ele} key={index} markAsRead={this.makeRead} check={this.selectChange} star={this.starClick} />
        ))}
      </div>
    );
  }
}

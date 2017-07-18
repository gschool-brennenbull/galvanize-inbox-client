import React, {Component} from 'react';
import MessagePrev from './MessagePrev';

export default class MessageList extends Component{
 constructor(props){
   super(props);
   this.state = {
     messageList: this.props.messages
   }
 }

 render(){
   return(
     <div>
      {this.state.messageList.map((ele, index)=>(
        <MessagePrev  data={ele} key={index}/>
      ))}
     </div>
   )
 }
}

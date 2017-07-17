import React, { Component } from 'react';
import ToolBar from './components/ToolBar';
import MessagePrev from './components/MessagePrev';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <ToolBar />
        <MessagePrev />
      </div>
    );
  }
}

import React, { Component } from 'react';
import UserDetail from '../containers/user_detail';
import UserList from '../containers/user_list'
export default class App extends Component {
  render() {
    return (
      <div>

      <UserList/>

      <UserDetail/>
      
      </div>
    );
  }
}

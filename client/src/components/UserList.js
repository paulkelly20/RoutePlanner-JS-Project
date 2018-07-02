import React, {Component} from 'react';
import SingleUser from './SingleUser.js'


export default class UserList extends Component {

  render(){
      const usersList = this.props.users.map( (user, index) => (
      <li key={index}><SingleUser user={user}/></li>
      ))
      return(
        <ul>
          {usersList}
        </ul>
      )
  }
}
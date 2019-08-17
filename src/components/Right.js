import React, { Component } from 'react';
import Users from './Users'

class Right extends Component {
  render() {
    const { users, onRemove } = this.props;
    //console.log(users);
    const userList = users.map(
      ({id, email, name, phone, address}) => (
        <Users id={id} email={email} name={name} onRemove={onRemove}/>
      )
    );

    return(
      <div>
        사용자 정보<br/>
        //id<t/>email<t/>name<t/><br/>
        {userList}
      </div>
    );
  }
};

export default Right;

import React, { Component } from 'react';
import './Users.css'

class Users extends Component {
  render() {
    const { id, email, name, onRemove } = this.props;

    return (
      <div className="user-info">
        <div className="user-id">
          <div>{id}</div>
        </div>
        <div className="user-email">
          <div>{email}</div>
        </div>
        <div className="user-name">
          <div>{name}</div>
        </div>
        <div className="delete-button" onClick={(e) => {
          onRemove(id)
        }}>삭제</div>
      </div>
    );
  }
};

export default Users;

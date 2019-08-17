import React, { Component } from 'react';
import './Left.css'

const Left = ({
  email, name, phone, addr,
  onChangeEmail, 
  onChangeName,
  onChangePhone,
  onChangeAddr,
  onCreateUser}) => {
  return(
    <div className="form">
      <div className="input-box">
        E-mail : <input type="text" placeholder="email" value={email} onChange={onChangeEmail}/><br/>
        이름: <input type="text" placeholder="이름" value={name} onChange={onChangeName}/><br/>
        연락처 : <input type="text" placeholder="전화번호" value={phone} onChange={onChangePhone}/><br/>
        주소 : <input type="text" placeholder="주소" value={addr} onChange={onChangeAddr}/><br/>
      </div>

      <div className="create-button" onClick={onCreateUser}>
        생성
      </div>
    </div>
  );
};
export default Left;

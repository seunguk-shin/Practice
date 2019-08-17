import React, { Component } from 'react';
import axios from 'axios';
import Template from './components/Template'
import Left from './components/Left'
import Right from './components/Right'

class App extends Component {
  id = 0;

  state = {
    email_: '',
    name_: '',
    phone_: '',
    addr_: '',
    users: [{
      id: 0,
      email: "example_kim@react.com",
      name: "김예제",
      phone: "010-1234-5678",
      addr: "Seoul"
    }],
    msg: []
  }

  handleChangeEmail = (e) => {
    this.setState({
      email_: e.target.value
    });
  }

  handleChangeName = (e) => {
    this.setState({
      name_: e.target.value
    });
  }

  handleChangePhone = (e) => {
    this.setState({
      phone_: e.target.value
    });
  }

  handleChangeAddr = (e) => {
    this.setState({
      addr_: e.target.value
    });
  }

  handleCreateUser = () => {
    const {
      email_,
      name_,
      phone_,
      addr_,
      users
    } = this.state;

    console.log(this.id);
    // insert query start
    var body = { 
      id: this.id,
      email: email_,
      name: name_,
      phone: phone_,
      addr: addr_
    };
    axios.post('/infos/createuser', body)
      .then(res => console.log(res));
    // insert query end

    this.setState({
      email_: '',
      name_: '',
      phone_: '',
      addr_: '',
      users: users.concat({
        id: this.id++,
        email: email_,
        name: name_,
        phone: phone_,
        addr: addr_
      })
    }); 
  }

  handleRemove = (id) => {
    const { users } = this.state;
    // drop query
    console.log(id);
    var body ={ id_: id };
    axios.post('/infos/deleteuser', body)
      .then(res => console.log(res));
    this.setState({
      users: users.filter(user => user.id !== id)
    });
  }

  componentDidMount() {
    fetch('/infos/selectall')
      .then(res => res.json())
      //.then(res => res.text())
      //.then(text => console.log(text)) 
      .then(users => this.setState({ users: users }));

    fetch('/infos/selectmaxid')
      .then(res => res.json())
      //.then(maxid => console.log(maxid[0].max));
      //.then(maxid => this.setState({ id: maxid.max }));
      .then(maxid => this.id = maxid[0].max);
    //console.log(this.id); //여기서 0이 찍히는데... 생성하면 제대로 2가 됨 왜지..
  }
  
  render() {
    const { email_, name_, phone_, addr_, users} = this.state;

    const {
      handleChangeEmail,
      handleChangeName,
      handleChangePhone,
      handleChangeAddr,
      handleCreateUser,
      handleRemove
    } = this;

    return(
      <Template left={(
        <Left
          email={email_} name={name_} phone={phone_} addr={addr_}
          onChangeEmail={handleChangeEmail}
          onChangeName={handleChangeName}
          onChangePhone={handleChangePhone}
          onChangeAddr={handleChangeAddr}
          onCreateUser={handleCreateUser}
        />
      )} right={(
        <Right 
          users={users}
          onRemove={handleRemove}
        />)}>
        {/*}
        <Right/> // 이건 외않된대??
        */}
      </Template>
    );
  }
};

export default App;

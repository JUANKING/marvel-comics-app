import React, { Component } from 'react';
import auth from './auth/auth';
import { Link } from 'react-router-dom';


import './App.css';

class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/authenticate',{method:"POST"});
    const body = await response.json();
    console.log(body);
    if (response.status !== 200) throw Error(body.message)
    else auth.setToken(body.token);

    return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">          
          <h1 className="App-title">Marvel comics</h1>
        </header>
        <div className="title">
        <Link to="/comics"><button>Ver comics</button></Link>
      </div>
      </div>
    );
  }
}


export default App;

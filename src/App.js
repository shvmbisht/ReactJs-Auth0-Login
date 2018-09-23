import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Github from './Github';
import Header from './Components/Header.js';

import { Auth0Lock } from 'auth0-lock';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      idToken:'',
      profile:{

      }
    };
  }

  static defaultProps ={
    clientID:'v6yoLWPRxp3ii1rzX6pXqIgtBIx99293',
    domain:'shvmbisht.auth0.com'
  }

  componentWillMount(){
    this.lock = new Auth0Lock(this.props.clientID,this.props.domain);
    this.lock.on('authenticated',(authResult) => {
      console.log(authResult);
    console.log(authResult.idToken);
    this.lock.getProfile(authResult.idtoken, (error,profile) => {
      if (error) {
        console.log(error);
        return;
      }
      console.log(profile)
    });
    });
  }

  showLock(){
    this.lock.show();
  }
  render() {
    return (
      <div className="App">
<Header onLogin = {this.showLock.bind(this)}/>
<Github />

      </div>
    );
  }
}

export default App;

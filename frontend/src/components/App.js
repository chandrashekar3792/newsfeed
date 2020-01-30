import React, { Component } from "react";
import { BrowserRouter, Route,Redirect } from "react-router-dom";
import Footer from "./footer/Footer"
import Main from "./main/Main";
import Login from "./login/login"
import Signup from "./signup/signup"

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    localStorage.getItem('Authorization')
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)



class App extends Component {
  constructor(props){
    super(props)
    this.state={
      isAuthenticated:false
    }
  }
  componentDidMount() {
    let token=localStorage.getItem('Authorization');
    if(token){
      this.setState({
        isAuthenticated:true
      })
    }
    
  }
  render() {

    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <PrivateRoute path='/' component={Main} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup}/>
            <Footer/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

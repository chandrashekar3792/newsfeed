import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/App.css'
class Header extends Component {
  render() {
    return (
      <footer className="page-footer font-small  Footer ">
        <div className="footer-copyright text-center py-3  ">© 2020 Copyright:  
          <a href="/">chandrashekar.com</a>
        </div>
      </footer>
    );
  }
}

export default Header;

import React, { Component } from 'react';
import '../../styles/App.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Collapse,
  NavbarToggler} from 'reactstrap';

export class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
		 isOpen: false,
		 token:localStorage.getItem("Authorization")
		};
		this.toggle = this.toggle.bind(this);
		this.closeNav = this.closeNav.bind(this);
		this.logout=this.logout.bind(this);
	}

	logout(){
		localStorage.removeItem("Authorization");
		// window.location.reload();
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	closeNav() {
		if (this.state.isOpen === true) {
			this.toggle();
		}
	}


	render() {
	return (
		<div className='navbar-container'>
			<Navbar color='light' light expand='md'>
				<NavbarBrand href="/">News Feed</NavbarBrand>
				<NavbarToggler onClick={this.toggle} />
				<Collapse isOpen={this.state.isOpen} navbar>
					{this.props.auth || this.state.token?
					<Nav navbar className='ml-auto'>
						<NavItem>
							<Link to="/" className='padded-nav' onClick={this.logout}> Log Out </Link>
						</NavItem>
					</Nav>
					:<Nav navbar className='ml-auto'>
						<NavItem>
							<Link to="/login" className='padded-nav'> Login </Link>
						</NavItem>

						<NavItem>
						<Link to="/signup" className='padded-nav'> Sign Up </Link>
						</NavItem>
					</Nav>
					}
				</Collapse>
			</Navbar>
		</div>
    );
  }
}
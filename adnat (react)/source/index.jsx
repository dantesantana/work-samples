import React from 'react';
import ReactDOM from 'react-dom';

import Login from './Views/Login'
import Signup from './Views/Signup'
import Home from './Views/Home'

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { currentPage: 'LOGIN' };
		//this binding makes 'this' work in the callback
		this.signupPageClick = this.signupPageClick.bind(this);
		this.loginPageClick = this.loginPageClick.bind(this);
		this.submit = this.submit.bind(this);
	}

	//change the state of current page for the purposes of the switch statement in render()
	signupPageClick() {
		this.setState({ currentPage: 'SIGNUP' });
	}

	loginPageClick() {
		this.setState({ currentPage: 'LOGIN' });
	}

	submit() {
		if (this.state.currentPage == 'LOGIN') {
			this.setState({ currentPage: 'HOME' });
		} else if (this.state.currentPage == 'SIGNUP') {
			this.setState({ currentPage: 'LOGIN' });
		}
	}
	
	render() {
		switch (this.state.currentPage) {
			case 'LOGIN':
				return (
					<div>
						<Login />
						<button onClick={this.submit}>Submit</button>
						<button onClick={this.signupPageClick}>SignUp Page</button>
					</div>
				);
			case 'SIGNUP':
				return (
					<div>
						<Signup />
						<button onClick={this.submit}>Submit</button>
						<button onClick={this.loginPageClick}>Login Page</button>
					</div>
				);
			case 'HOME':
				return (
					<div>
						<Home />						
						<button onClick={this.loginPageClick}>Log Out</button>
					</div>
				);
		}
	}
}

ReactDOM.render(<App />, document.getElementById('App'));
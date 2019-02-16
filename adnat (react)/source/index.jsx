import React from 'react';
import ReactDOM from 'react-dom';

import Login from './Views/Login'
import Signup from './Views/Signup'

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { currentPage: 'LOGIN' };
		//this binding makes 'this' work in the callback
		this.signupPageClick = this.signupPageClick.bind(this);
		this.loginPageClick = this.loginPageClick.bind(this);
	}

	//change the state of current page for the purposes of the switch statement in render()
	signupPageClick() {
		this.setState(state => ({ currentPage: 'SIGNUP' }));
	}

	loginPageClick() {
		this.setState(state => ({ currentPage: 'LOGIN' }));
	}

	render() {
		switch (this.state.currentPage) {
			case 'LOGIN':
				return (
					<div>
						<Login />
						<button>Login</button>
						<button onClick={this.signupPageClick}>SignUp Page</button>
					</div>
				);
			case 'SIGNUP':
				return (
					<div>
						<Signup />
						<button>SignUp</button>
						<button onClick={this.loginPageClick}>Back to Login Page</button>
					</div>
				);
		}
	}
}

ReactDOM.render(<App />, document.getElementById('App'));
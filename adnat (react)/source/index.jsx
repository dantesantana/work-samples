import React from 'react';
import ReactDOM from 'react-dom';

import Login from './Views/Login'
import Signup from './Views/Signup'

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { currentPage: 'LOGIN' }
	}
	render() {
		switch (this.state.currentPage) {
			case 'LOGIN':
				return (<Login />);
			case 'SIGNUP':
				return(<Signup />);			
			
		}
	}
}

ReactDOM.render(
	<div>
		<App />
		<button>Login</button>
		<button>Signup</button>
	</div>
	, document.getElementById('App'));
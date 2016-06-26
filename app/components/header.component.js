import React, { Component } from 'react';

export default class Header extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<header className="main-header">
				<h1 className="main-logo">React<strong>Redux</strong></h1>
			</header>
		);
	}
}
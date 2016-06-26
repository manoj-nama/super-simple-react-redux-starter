import React, { Component } from 'react';

export default class Header extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<header className="main-header">
				<h1 className="main-logo">Header<strong>Component</strong> Here</h1>
			</header>
		);
	}
}
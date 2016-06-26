import React, { Component, PropTypes } from 'react';

export default class Filter extends Component {
	render() {
		return (
			<div className="filter-component">
				This is filter component
				<button onClick={this.props.onUpdate}> Update list </button>
			</div>
		);
	}
}

Filter.PropTypes = {
	filters: PropTypes.object,
	onUpdate: PropTypes.func,
}
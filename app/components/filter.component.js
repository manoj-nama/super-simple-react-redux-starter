import React, { Component, PropTypes } from 'react';

export default class Filter extends Component {
	render() {
		return (
			<div className="filter-component">This is filter component</div>
		);
	}
}

Filter.PropTypes = {
	filters: PropTypes.object
}
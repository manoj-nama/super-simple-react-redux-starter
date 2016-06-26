import React, { Component, PropTypes } from 'react';

export default class Pager extends Component {
	render() {
		return (
			<div className="pager-component">
				<p>
					total: {this.props.paging.total} - 
					hits: {this.props.paging.hits} -
					pages: {this.props.paging.pages} -
					currentPage: {this.props.paging.currentPage}
				</p>
			</div>
		);
	}
}

Pager.PropTypes = {
	paging: PropTypes.object,
	// { total: 0,
	//   hits: 0,
	//   pages: 0,
	//   currentPage: 1, }
};
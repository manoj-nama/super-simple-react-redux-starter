import React, { Component, PropTypes } from 'react';

export default class Filter extends Component {

	constructor(props) {
		super(props);
		console.log(this.props.filters);
		this.tempFilters = Object.assign({}, this.props.filters, {});
	}

	handleChange(evt, field) {
		this.tempFilters[field] = evt.target.value;
	}

	render() {
		return (
			<div className="filter-component" ref="filterComponent">
				<span><i className="fa fa-filter"></i> Filters</span>
				<form>
					<select
						name="sortOrder"
						disabled={this.props.loading}
						defaultValue={this.tempFilters['sort_order']}
						onChange={(e) => {
							this.handleChange(e, 'sort_order');
						} }>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
					</select>
					<button
						disabled={this.props.loading}
						onClick={() => {
							this.props.onUpdate(this.tempFilters);
						} }> 
						Update list 
					</button>
				</form>
				<a className="filter-dropdown" href="javascript:void(0)">
					<i className="fa fa-chevron-down"></i>
				</a>
			</div>
		);
	}
}

Filter.PropTypes = {
	filters: PropTypes.object,
	loading: PropTypes.boolean,
	onUpdate: PropTypes.func,
}
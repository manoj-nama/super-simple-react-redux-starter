import React, { Component, PropTypes } from 'react';

export default class Filter extends Component {

	constructor(props) {
		super(props);
		this.elementOffset = 0;
		console.log(this.props.filters);
		this.tempFilters = Object.assign({}, this.props.filters, {});
	}

	componentDidMount() {
		let el = this.refs.filterComponent;
		this.elementOffset = el.offsetTop;
		document.addEventListener("scroll", this._stickyScroll.bind(this), false);
	}

	_stickyScroll() {
		let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		if (scrollTop > this.elementOffset) {
			//make it sticky
			document.body.classList.add("sticky-el");
		} else {
			document.body.classList.remove("sticky-el");
		}
	}

	componentWillUnmount() {
		document.removeEventListener("scroll", this._stickyScroll.bind(this), false);
	}

	handleChange(evt, field) {
		this.tempFilters[field] = evt.target.value;
	}

	render() {
		return (
			<div className="filter-component" ref="filterComponent" style={{overflow: 'hidden'}}>
				<span style={{float: 'left'}}><i className="fa fa-filter"></i> Filters</span>
				<form style={{float: 'left'}}>
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
				<a style={{float: 'left'}} className="filter-dropdown" href="javascript:void(0)">
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
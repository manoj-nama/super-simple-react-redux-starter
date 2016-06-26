import React, { Component, PropTypes } from 'react';

export default class Filter extends Component {

	constructor(props) {
		super(props);
		this.elementOffset = 0;
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

	render() {
		return (
			<div className="filter-component" ref="filterComponent">
				<i className="fa fa-filter"></i> Filters
				<button disabled={this.props.loading} onClick={this.props.onUpdate}> Update list </button>

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
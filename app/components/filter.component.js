import React, { Component, PropTypes } from 'react';

export default class Filter extends Component {

	constructor(props) {
		super(props);
		this.tempFilters = Object.assign({}, this.props.filters, {});

		//Local state for presentational flags
		this.state = {
			filterVisible: false
		};
	}

	handleChange(evt, field) {
		this.tempFilters[field] = evt.target.value;
	}

	toggleFilter() {
		this.setState({ filterVisible: !this.state.filterVisible });
	}

	render() {
		return (
			<div className={'filter-component ' + (this.state.filterVisible ? 'active' : '') }>
				<div className="action-area" onClick={(e) => {
					this.toggleFilter();
				} }>
					<span><i className="fa fa-filter"></i> Filter</span>
					<i className={'fa arrow ' + (this.state.filterVisible ? 'fa-chevron-up' : 'fa-chevron-down')}></i>
				</div>
				<div className="filter-area">
					<form>

						<div className="form-control">
							<label for="sortOrder">Sort Order</label>
							<select
								name="sortOrder"
								id="sortOrder"
								disabled={this.props.loading}
								defaultValue={this.tempFilters['sort_order']}
								onChange={(e) => {
									this.handleChange(e, 'sort_order');
								} }>
								<option value="asc">Ascending</option>
								<option value="desc">Descending</option>
							</select>
						</div>

						<div className="form-control">
							<label for="sortField">Sort Field</label>
							<select
								name="sortField"
								id="sortField"
								disabled={this.props.loading}
								defaultValue={this.tempFilters['sort_field']}
								onChange={(e) => {
									this.handleChange(e, 'sort_field');
								} }>
								<option value="asc">Ascending</option>
								<option value="desc">Descending</option>
							</select>
						</div>


						<button
							className="submit-btn"
							disabled={this.props.loading}
							onClick={() => {
								this.toggleFilter();
								this.props.onUpdate(this.tempFilters);
							} }>
							Update list
						</button>
					</form>
				</div>
			</div>
		);
	}
}

Filter.PropTypes = {
	filters: PropTypes.object,
	loading: PropTypes.boolean,
	onUpdate: PropTypes.func,
}
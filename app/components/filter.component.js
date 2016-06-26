import React, { Component, PropTypes } from 'react';
import { filterTypes } from "../env/constants";

export default class Filter extends Component {

	constructor(props) {
		super(props);
		this.tempFilters = Object.assign({}, this.props.filters, {});

		//Local state for presentational flags
		this.state = {
			filterVisible: false
		};
	}

	handleChange(evt, field, valField) {
		this.tempFilters[field] = evt.target[valField || 'value'];
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
					<i className={'fa arrow ' + (this.state.filterVisible ? 'fa-chevron-up' : 'fa-chevron-down') }></i>
				</div>
				<div className="filter-area">
					<form>
						{
							filterTypes.map((filter, i) => {
								switch (filter.type) {
									case 'select':
										return (
											<div className="form-control" key={i}>
												<label htmlFor={filter.field}>{filter.name}</label>
												<select
													name={filter.field}
													id={filter.field}
													disabled={this.props.loading}
													defaultValue={this.tempFilters[filter.field]}
													onChange={(e) => {
														this.handleChange(e, filter.field);
													} }>

													{
														filter.options.map((field, i) => {
															let _field = field.split('_').join(' ');
															return (<option key={i} value={field}>{_field}</option>);
														})
													}
												</select>
											</div>
										)

									case 'check':
										return (
											<div className="form-control" key={i}>
												<label htmlFor={filter.field} className="check">
													<input
														type="checkbox"
														defaultValue={this.tempFilters[filter.field]}
														name={filter.field}
														id={filter.field}
														onChange={(e) => {
															this.handleChange(e, filter.field, 'checked');
														} }
														/>
													{filter.name}
												</label>
											</div>
										)

									case 'text':
										return (
											<div className="form-control" key={i}>
												<label htmlFor={filter.field}>{filter.name}</label>
												<input
													type="text"
													defaultValue={this.tempFilters[filter.field]}
													name={filter.field}
													id={filter.field}
													onChange={(e) => {
														this.handleChange(e, filter.field);
													} }
													/>
											</div>
										)
								}
							})
						}

						<div className="action-area">
							<button
								className="submit-btn"
								disabled={this.props.loading}
								onClick={() => {
									this.toggleFilter();
									this.props.onUpdate(this.tempFilters);
								} }>
								Update list
							</button>
						</div>
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
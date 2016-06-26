import React, { Component, PropTypes } from 'react';

export default class Row extends Component {
	render() {
		return (
			<div className={'row-component ' + (this.props.isHeader ? 'row-header' : '')}>
				{
					this.props.columns.map((col, i) => {
						return (
							<div className="row-column" key={i}>
								{
									this.props.isHeader ? 
									<strong className="row-header">{col}</strong> : 
									(this.props.item[col] || this.props.item)
								}
							</div>
						)
					})
				}
			</div>
		);
	}
}

Row.PropTypes = {
	isHeader: PropTypes.boolean,
	item: PropTypes.object,
	columns: PropTypes.array, // ["name", "age", "gender"] ...
}
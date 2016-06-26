import React, { Component, PropTypes } from 'react';

export default class List extends Component {
	render() {
		return (
			<div className="list-component">
				<h3>Items!!!</h3>
				<ul>
					{
						this.props.items.map((i) => {
							return (<li key={i}><em>{i}</em></li>)
						})
					}
				</ul>
				<p>
					{this.props.loading ? 'Loading items ...' : 'Completed loading ...'}
				</p>
			</div>
		);
	}
}

List.PropTypes = {
	items: PropTypes.object,
	loading: PropTypes.boolean
}
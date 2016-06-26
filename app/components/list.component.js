import React, { Component, PropTypes } from 'react';
import Row from './row.component';

export default class List extends Component {
	render() {
		const columns = ["name", "discount"];
		return (
			<div className="list-component-wrap">
				{
					this.props.loading ?
						<div className="list-loader">
							<img src="/img/loader.gif"/>
						</div> : ''
				}
				<div className={'list-component ' + (this.props.loading ? 'list-loading' : '') }>
					<Row
						key={-1}
						isHeader={true}
						columns={columns}
						item={{}}>
					</Row>
					{
						this.props.items.map((item, i) => {
							return (
								<Row
									key={i}
									isHeader={false}
									columns={columns}
									item={item}>
								</Row>
							)
						})
					}
				</div>
			</div>
		);
	}
}

List.PropTypes = {
	items: PropTypes.object,
	loading: PropTypes.boolean,
}
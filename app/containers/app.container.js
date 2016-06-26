import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import * as api from '../actions/api.actions';
import Filter from '../components/filter.component';
import List from '../components/list.component';
import Pager from '../components/pager.component';
import Header from '../components/header.component';

class AppContainer extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this._fetchLoans();
	}

	_fetchLoans() {
		const { dispatch } = this.props;
		dispatch(api.fetchLoans());
	}

	render() {
		return (
			<div>
				<Header></Header>
				<Filter filters={this.props.filters}></Filter>
				<List items={this.props.loans.items} loading={this.props.loans.isFetching}></List>
				<Pager></Pager>				
			</div>
		);
	}

}

const mapStateToProps = function (state) {
	return state;
}

const App = connect(mapStateToProps)(AppContainer);
export default App;
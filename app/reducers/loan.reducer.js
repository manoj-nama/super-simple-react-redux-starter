import * as types from '../actions';

const initialState = {
	isFetching: false,
	selectedLoan: {},
	items: []
};

const loanReducer = function (state = initialState, action) {
	switch (action.type) {
		case types.REQUEST_LOANS:
			console.log("request reducer");
			return Object.assign({}, state, { isFetching: true });
		case types.RECIEVE_LOANS:
			console.log("recieve reducer", action.loans.hits);
			return Object.assign({}, state, { isFetching: false, items: action.loans.hits });
		case types.SELECT_LOAN: 
			console.log("selected loan", action.loan);
			return Object.assign({}, state, {selectedLoan: loan});
		case types.DESELECT_LOAN: 
			console.log("deselected loan");
			return Object.assign({}, state, {selectedLoan: {}});
	}
	return state;
}

export default loanReducer;
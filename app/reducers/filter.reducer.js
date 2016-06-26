import * as types from '../actions';

const initialState = {
	"max_loan_term": 30,
	"page": 1,
	"max_borrowing_amount": 250000,
	"sort_field": "comparison_rate",
	"sort_order": "asc",
	"per_page": 5,
	"min_deposit": 30,
	"principal_and_interest": false,
	"interest_only": false,
	"redraw_facility": false,
	"repayments_type": false,
	"allows_split_loan": false,
	"allows_low_doc": false,
	"has_construction_facility": false,
	"bank": false,
	"non_bank": false,
};

const filterReducer = function (state = initialState, action) {
	return state;
}

export default filterReducer;
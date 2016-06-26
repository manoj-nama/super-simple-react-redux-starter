import * as actions from '../actions';

const initialState = {
	total: 0,
	hits: 0,
	pages: 0,
	currentPage: 1,
};

const pagingReducer = function(state = initialState, action) {
	switch(action.type) {
		case actions.CHANGE_PAGE:
			return Object.assign({}, state, {
				total: action.params.total_count,
				hits: action.params.hit_count,
				pages: action.params.page_count,
				currentPage: action.params.currentPage || state.currentPage
			});
	}
	return state;
}

export default pagingReducer;
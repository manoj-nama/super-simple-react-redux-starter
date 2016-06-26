import { combineReducers } from 'redux';
import filterReducer from './filter.reducer';
import loanReducer from './loan.reducer';
import pagingReducer from './paging.reducer';

const rootReducer = combineReducers({
	loans: loanReducer,
	filters: filterReducer,
	paging: pagingReducer,
});

export default rootReducer;
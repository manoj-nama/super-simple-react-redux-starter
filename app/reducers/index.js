import { combineReducers } from 'redux';
import filterReducer from './filter.reducer';
import loanReducer from './loan.reducer';

const rootReducer = combineReducers({
	loans: loanReducer,
	filters: filterReducer,
});

export default rootReducer;
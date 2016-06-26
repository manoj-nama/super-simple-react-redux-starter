import * as actions from '../actions';
import fetch from 'isomorphic-fetch';

const url = 'https://test.com/test-api/loans';
const defaultFilters = {
	page: 0,
	per_page: 1
}

export function fetchLoans(filters = defaultFilters) {
	let qs = '?';
	let filterArr = [];
	for(let i in filters) {
		if(filters.hasOwnProperty(i)) {
			filterArr.push(i + "=" + filters[i]);
		}
	}

	qs += filterArr.join("&");

	console.log(url + qs);

	return dispatch => {
		dispatch(actions.requestLoans(filters));
		return setTimeout(function() {
			console.log("completed fetch");
			return dispatch(actions.recieveLoans({hits: [1,2,3]}));
		}, 3000);
		// return fetch(url + qs)
		// 	.then(resp => resp.json())
		// 	.then(json => {
		// 		return dispatch(actions.recieveLoans(json))
		// 	});
	}
}
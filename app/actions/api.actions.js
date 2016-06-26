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
	for (let i in filters) {
		if (filters.hasOwnProperty(i)) {
			filterArr.push(i + "=" + filters[i]);
		}
	}

	qs += filterArr.join("&");

	console.log(url + qs);

	return dispatch => {
		dispatch(actions.requestLoans(filters));
		return setTimeout(function () {
			console.log("completed fetch");

			//update paging state
			dispatch(actions.changePage({
				total: 0,
				hits: 0,
				pages: 0,
				currentPage: 1,
			}));
			//update items state
			return dispatch(actions.recieveLoans({ hits: [1, 2, 3] }));
		}, 1000);
		// return fetch(url + qs)
		// 	.then(resp => resp.json())
		// 	.then(json => {
		// 		return dispatch(actions.recieveLoans(json))
		// 	});
	}
}
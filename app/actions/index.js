export const REQUEST_LOANS = 'REQUEST_LOANS';
export const RECIEVE_LOANS = 'RECIEVE_LOANS';
export const UPDATE_FILTERS = 'UPDATE_FILTERS';
export const CHANGE_PAGE = 'CHANGE_PAGE';
export const SELECT_LOAN = 'SELECT_LOAN';

export function requestLoans(filters) {
	return {
		type: REQUEST_LOANS,
		filters
	}
}

export function recieveLoans(loans) {
	return {
		type: RECIEVE_LOANS,
		loans
	}
}

export function updateFilters(filters) {
	return {
		type: UPDATE_FILTERS,
		filters
	}
}

export function changePage(params) {
	return {
		type: CHANGE_PAGE,
		params
	}
}

export function  selectLoan(loan) {
	return {
		type: SELECT_LOAN,
		loan
	}
}
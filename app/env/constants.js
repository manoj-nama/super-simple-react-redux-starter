export const comparisionFields = ["id", "supplier_reference", "ratecity_data_id", "name", "investment_purpose", "first_home_buyers", "owner_occupied", "refinance_home", "line_of_credit", "smsf", "extra_repayments", "revenue_currency", "comparison_rate", "advertised_rate", "introductory_rate", "introductory_period_months", "recommend_score", "revert_rate", "rate_type", "principal_and_interest", "interest_only", "allows_split_loan", "min_loan_term", "max_loan_term", "offset_account", "redraw_facility", "redraw_fee", "upfront_fee", "legal_fee", "valuation_fee", "settlement_fee", "discharge_fee", "application_fee", "ongoing_fee", "ongoing_fee_frequency", "initial_ongoing_fee", "initial_ongoing_fee_period", "yearly_ongoing_fees", "switch_to_fixed_fee", "min_borrowing_amount", "max_borrowing_amount", "max_lvr", "min_deposit", "nsw_applicable", "vic_applicable", "wa_applicable", "nt_applicable", "tas_applicable", "qld_applicable", "sa_applicable", "is_new_customer", "intro_ongoing_fees", "revert_ongoing_fees", "revert_ongoing_fees_freq", "redraw_activation_fee", "allows_guarantor", "allows_low_doc", "allows_extra_repayments", "extra_repayments_value", "quick_approval_loan", "has_construction_facility", "has_weekly_repayments", "has_fortnightly_repayments", "has_monthly_repayments", "has_full_offset", "has_offset_account", "annual_fees", "has_credit_card", "has_redraw_facility", "featured", "bank", "non_bank", "priority_key"];

export const filterTypes = [
	{type: 'select', name: 'Sort Order', field: 'sort_order', options: ["asc", "desc"]},
	{type: 'select', name: 'Sort Field', field: 'sort_field', options: comparisionFields},	
	{type: 'check', name: 'Interest Only', field: 'interest_only'},
	{type: 'check', name: 'Redraw Facility', field: 'redraw_facility'},
	{type: 'check', name: 'Allows Split Loan', field: 'allows_split_loan'},	
	{type: 'check', name: 'Has Construction Facility', field: 'has_construction_facility'},
	{type: 'text', name: 'Max Loan Term', field: 'max_loan_term'},
	{type: 'text', name: 'Min Deposit', field: 'min_deposit'},
	{type: 'text', name: 'Max Borrowing Amount', field: 'max_borrowing_amount'},	
]
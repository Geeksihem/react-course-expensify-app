import React from 'react'; 
import ConnectedExpenseList from './ExpenseList'; 
import ExpenseListFilters from './ExpenseListFilters'; 

const ExpenseDashboadrPag = ()=>( 
    <div> 
    <ExpenseListFilters /> 
<ConnectedExpenseList  />
    </div>
    ) ; 
 export default ExpenseDashboadrPag; 


store.subscribe(() => {
 const state = store.getState(); 
 const visibleExpenses = getVisibleExpenses( state.expenses, state.filters )
    console.log( visibleExpenses);
});

 const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: 1000 }));
 const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 }));
// const expenseThree = store.dispatch(addExpense({ description: 'Rddddddent', amount: 1 }));

// //store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

  // store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());
  store.dispatch(sortByAmount ()); 
 
// store.dispatch(setStartDate(125)); 
// store.dispatch(setStartDate()); // raj3iitt undefined :p 
 
const demoState = {
  expenses: [{
    id: 'poijasdfhwer',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};
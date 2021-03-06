import React from 'react'; 
import {connect} from 'react-redux';
import ExpenseListItem from  './ExpenseListItem'; 
import selecExpenses from '../selectors/expenses'; 

export const ExpenseList = (props) => (
    <div>
      <h1>Expensedd List</h1>

      {
       props.expenses.length === 0 ? (
   <p>No expenses</p>
       ) : (
        props.expenses.map((expense) => {
        return <ExpenseListItem key={expense.id} {...expense} />;
      })
       ) 
  }
    </div>
  ); 
const mapStateToProps  = (state)=>{
    return { 
        expenses  : state.expenses , 
        filters : state.filters 
    };  
 }; 


export default connect(mapStateToProps)(ExpenseList) ;
 
  // connect : conecter  component au  redux store 
 
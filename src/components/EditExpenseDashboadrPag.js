import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

class  EditExpensePage  extends React.Component{
 
editExpense=  (expense) => {
    this.props.editExpense( this.props.expense.id, expense);
    this.props.history.push('/');
  }; 
  removeExpense= () => {
    this.props.removeExpense({ id:  this.props.expense.id });
    this.props.history.push('/');
  }; 
render(){
  return (
    <div>
    <ExpenseForm
      expense={props.expense}
      onSubmit={this.editExpense}
    />
    <button onClick={this.removeExpense}>Remove</button>
  </div> 
  )
} 

}
 

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  };
};
const mapDispatchToProps = (dispatch) =>({
  editExpense : (id, expense)=>dispatch(editExpense(id, expense )) , 
  removeExpense : (data )=>dispatch(removeExpense(data))  
})
export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage); 
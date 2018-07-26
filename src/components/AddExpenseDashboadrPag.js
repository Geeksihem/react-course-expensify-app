import React from 'react'; 
import ExpenseForm from './ExpenseForm'; 
import {connect} from 'react-redux'; 
import {addExpense} from '../actions/expenses';  
export class AddExpenseDashboadrPag extends  React.Component {
    onSubmit =  (expense)=>{
        //props.dispatch(addExpense(expense ));
       this.props.onSubmit(expense); 
       this.props.history.push('/');  
    }; 
     render(){
        return(
            <div> 
            add page 
            <ExpenseForm
             onSubmit =  {this.onSubmit}
            /> 
            </div>
        )
    } 
   }  
    const mapDispatchToProps = (dispatch)=>({
        onSubmit: (expense)=> dispatch(addExpense(expense))
       
    } )
export default  connect( undefined, mapDispatchToProps)(AddExpenseDashboadrPag); 
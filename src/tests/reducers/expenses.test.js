import expensesReducer from '../../reducers/expenses';  
import expenses from '../fixture/expenses';  
 
test('should set default state ',()=>{
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]) 
} ); 

test('should remove test by id ', ()=>{
    const action = {
        type : 'REMOVE_EXPENSE', 
        id : expenses[1].id
    }; 
    const state = expensesReducer(expenses,action ); 
    expect(state).toEqual([expenses[0],expenses[2] ])
})

test('should not remove expense when id not found ', ()=>{
    const action = {
        type : 'REMOVE_EXPENSE', 
        id : '-2'
    }; 
    const state = expensesReducer(expenses,action ); 
    expect(state).toEqual([expenses[0],expenses[1], expenses[2] ])
})


test('should add expense', ()=>{
     const expense = {
         id : '222', 
         description : 'laptop', 
         nte : '', 
         createdAt:  2000,
         amount : 22
     }; 
     const action = {
         type : 'ADD_EXPENSE', 
         expense 
     }; 
     const state = expensesReducer(expenses, action); 
     expect(state).toEqual([...expenses, expense]); 

}); 

test('should edit an expense', ()=>{
    const amount = 333; 
    const action = {
        type: 'EDIT_EXPENSE', id: expenses[1].id, 
         updates: {
             amount
         }
       
    }
    const state = expensesReducer(expenses, action); 
  expect(state[1].amount).toBe(amount); 
}); 

test('should not edit an expense when id not valid', ()=>{
    const amount = 222; 
     const action = {
     type: 'EDIT_EXPENSE', 
     id: '-22', 
     updates: { 
         amount
     }
     }; 
     const state = expensesReducer (expenses, action); 
     expect(state).toEqual(expenses); 
})







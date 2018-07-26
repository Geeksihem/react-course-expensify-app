import {addExpense, editExpense, removeExpense} from '../../actions/expenses'; 
test('should setup remove expense', ()=>{
    const action = removeExpense ({id: '123abc'}); 
    expect(action).toEqual({
        type:'REMOVE_EXPENSE', 
        id: '123abc'
    })
})
test('should edit  expense ', ()=>{ 
    const action =  editExpense( '123abc' ,
      {note: "ddddd"}); 
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
         id:'123abc' , 
         updates: {note: "ddddd" }

    })
})
test ('SHould add expense ', ()=>{
    const expenseData= {
            description : 'hii',
            note : 'note',
            amount : 0,
            createdAt : 0

    };
    const action = addExpense (expenseData) ; 
     expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense : { 
            ...expenseData, 
            id : expect.any(String)
        } 
     })
}); 

test( 'Should add expense with defauls values', ()=>{ 
const action = addExpense(); 
expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense : {

        id: expect.any(String), 
        description:'', 
        note: '', 
        amount: 0 , 
        createdAt:0
    } 
})    
})
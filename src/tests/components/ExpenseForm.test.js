import React from 'react'; 
import {shallow}from 'enzyme';
import   ExpenseForm   from '../../components/ExpenseForm'; 
import  expenses from '../fixture/expenses';
import { wrap } from 'module';
  

 
test('should  render expenseform correctly with expense data', ()=>{
    const wrapper = shallow(<ExpenseForm  expense= {expenses[1]}/> ); 
    expect(wrapper).toMatchSnapshot(); 

})

test('should render ExpenseForm correctly with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
    expect(wrapper).toMatchSnapshot();
  });  


  test('should render error for  invalid submit ' , ()=>{ 
      const wrapper = shallow (<ExpenseForm />); 
      wrapper.find('form').simulate('submit',{
          preventDefault: ()=>{   
          }
      }); 

      expect(wrapper.state('error').length).toBeGreaterThan(0); 
      expect(wrapper).toMatchSnapshot();
    
  })
  test('should set descruiption on ipnut change', ()=>{
    const value = 'New description'
    const wrapper = shallow (<ExpenseForm/>);
      //at (0):  the first input 
      wrapper.find('input').at(0).simulate('change',{
         target:  { value } 
      } ); 
  expect(wrapper.state('description')).toBe(value); 
    })


    // test input textarea works well 

    test('should set   textarea correctly', ()=>{
   const value = 'new note'; 
   const wrapper = shallow(<ExpenseForm />); 
  wrapper.find('textarea').simulate('change', { 
      target: {value}
  }); 
  expect(wrapper.state('note')).toBe(value); 

    }); 

//  test amount works well 
    test('sould set amoiut if valid input ', ()=>{ 
  const value ='22.22'; 
  const wrapper = shallow (<ExpenseForm />); 
  wrapper.find('input').at(1).simulate('change', {
      target: {value}
  }); 
  expect(wrapper.state('amount')).toBe(value); 
    })

//  test set amount not working when invalid  input 


test('should not set amount when invalid input ',()=>{

const value = '2.333'; 
const wrapper= shallow(<ExpenseForm/>); 
wrapper.find('input').at(1).simulate('change', { 
    target: {value}
}); 
expect(wrapper.state('amount')).toBe(''); 
} )


test('should  calll  onsubmit prop for  valid form submission ', ()=>{
    const onSubmitSpy = jest.fn(); 
    onSubmitSpy('andrew', 'ddd'); 
    expect(onSubmitSpy).toHaveBeenCalledWith('andrew', 'ddd'); 

})
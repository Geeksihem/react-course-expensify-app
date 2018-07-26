import React from 'react'; 
import {shallow } from 'enzyme'; 
import {AddExpenseDashboadrPag} from '../../components/AddExpenseDashboadrPag'; 
import  expenses from '../fixture/expenses';

let history, onSubmit, wrapper; 

beforeEach(()=>{
      onSubmit = jest.fn(); 
      history = {push: jest.fn()}; 
      wrapper = shallow(<AddExpenseDashboadrPag onSubmit= {onSubmit} history= {history} />)
 }); 
test('should render  addexpense paage ', ()=>{
   expect(wrapper).toMatchSnapshot(); 
}) 
test('should handle onSubmit ', ()=>{ 
  wrapper.find('ExpenseForm').prop('onSubmit')(expect[1]); 
   expect(history.push).toHaveBeenLastCalledWith('/'); 
   expect(onSubmit).toHaveBeenLastCalledWith( expect[1]); 
 })
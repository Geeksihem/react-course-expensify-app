import React from 'react'; 
import {shallow}from 'enzyme';
import {ExpenseList  } from '../../components/ExpenseList'; 
import  expenses from '../fixture/expenses';
  

test('should render list of expenses with empty aaray ', ()=>{

const wrapper = shallow(<ExpenseList expenses={[]} />); 
expect(wrapper).toMatchSnapshot(); 

})

test('should render list of expenses   ', ()=>{

    const wrapper = shallow(<ExpenseList expenses={expenses} />); 
    expect(wrapper).toMatchSnapshot(); 
    
    })
    


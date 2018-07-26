import  NotFOundPage from '../../components/NotFOundPage'; 
import  {shallow } from 'enzyme'; 
import React from 'react'; 

test('should  render not found page ', ()=>{
    const wrapper = shallow(<NotFOundPage/>); 
    expect(wrapper).toMatchSnapshot(); 

})
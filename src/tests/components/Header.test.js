import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import {shallow} from 'enzyme'; 
import Header from '../../components/Header';
import toJSON from 'enzyme-to-json'; 


// test('should render Header correctly', () => {
//   const renderer = new ReactShallowRenderer();
//   renderer.render(<Header/>);
//   expect(renderer.getRenderOutput()).toMatchSnapshot();
// });


test('should render Header correctly', () => {
const wrapper = shallow(<Header/>); 
 expect(toJSON(wrapper)).toMatchSnapshot(); 



});
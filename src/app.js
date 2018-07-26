import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css'; 
import './styles/style.scss'; 
import React from 'react';
import  configurationStore from './store/configureStore'; 
import AppRouter from './routers/AppRouter'; 
import {addExpense } from './actions/expenses'; 
import {setTextFilter } from './actions/filters'; 
import getVisibleExpenses from './selectors/expenses'; 
import {Provider} from 'react-redux'; 
import 'react-dates/lib/css/_datepicker.css';

const store  = configurationStore(); 
store.dispatch(addExpense({ discription : 'water ', amount :  3})) 
store.dispatch(addExpense({ discription : 'ssssssssss ', amount : 222})) 
store.dispatch(setTextFilter('water')); 
const state  =  store.getState(); 
const  VisibleExpenses = getVisibleExpenses(state.expenses, state.filters); 
console.log('vv',  VisibleExpenses); 

 
const jsx = ( 
  <Provider store = {store} >
     <AppRouter/>
  </Provider>
)
ReactDOM.render( jsx , document.getElementById('app')); 

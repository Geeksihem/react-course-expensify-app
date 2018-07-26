import React from 'react'; 
import {BrowserRouter, NavLink, Route,Switch ,  Link } from 'react-router-dom'; 
import  ExpenseDashboadrPag from '../components/ExpenseDashboadrPag'; 
import AddExpenseDashboadrPag from '../components/AddExpenseDashboadrPag'; 
import EditExpenseDashboadrPag from '../components/EditExpenseDashboadrPag'; 
import HelpExpenseDashboadrPag from '../components/HelpExpenseDashboadrPag'; 
import NotFOundPage from '../components/NotFOundPage'; 
import Header  from '../components/Header';  

    const AppRouter = ()=>(
    <BrowserRouter> 
     <div> 
     <Header/>
    <Switch> 
    <Route  path= "/" exact= {true} component= {ExpenseDashboadrPag}/>
    <Route path= "/create" component= {AddExpenseDashboadrPag}  />
    <Route path= "/edit/:id" component= {EditExpenseDashboadrPag}  />
    <Route path= "/help" component= {HelpExpenseDashboadrPag}  />
    <Route  component= {NotFOundPage}  />
    </Switch>
     </div> 
    
    </BrowserRouter>
    
    ); 
export default AppRouter ; 
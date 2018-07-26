import React from 'react'; 
import {Link} from 'react-router-dom'; 
 
// export a staless funtion 
const ExpenseListItem  = ({  dispatch,  id, description,  amount, createdAt, note } )=>(
    <div> 
<Link to={`/edit/${id}`}>  <p> dddd</p>
</Link>
    <p> {amount} -- {createdAt} </p> 
    <p> {note}</p>
 
    </div>
)

export default  ExpenseListItem   ; 
 
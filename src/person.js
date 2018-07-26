
// const isAdult= (age)=>{ 
//   if( age>18){ 
//       return true
//   }
//   return false ; 
// }
const isAdult= (age)=> age>=18 ; 
const canMarry = (age)=> age>=1 ;
const isSenior = (age)=> age>65; 


export{ isAdult, canMarry, isSenior as default }; 
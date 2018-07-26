// const person = { 
//     name : 'sihem', 
//     age : 2 ,
//     location : {
//         temp: 98, 
//         city : 'bengo '   
//     } 
//     }; 
    
//      const {  city, temp}=  person.location ; 

//      if (city && temp){ 
//          console.log(` it s ${temp}  in ${ city} `)
//      }
// --- array destructing ----

// const address = ['123 dd srreet', 'second', 'third', 'forth']; 
// const [street, city , state, zip ]= address; 

// console.log(` you 're  in ${address[1]} ${address[2]}`)

const item = ['coffe', '333', '222']; 
 const [ type, , price2 ] = item ; 
 console.log(` a medium ${type} costs ${price2}`); 
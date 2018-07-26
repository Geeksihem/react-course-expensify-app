const add = (a, b)=> a + b ; 
test('shoulf add two numbers', ()=> {
    const res = add(2,2) ; 
expect(res).toBe(4 ); 
}
); 
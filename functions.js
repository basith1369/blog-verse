function greet(){
    console.log("Welcome to DevAstra")
}
greet()

function add(x,y){
    return x+y;
}
let result=add(18,2)
console.log(result)

const multiply = function(x,y)
{
    return x*y
}
console.log(multiply(5,3))

//Arrow function
const square =(x) => x*x;
console.log(square(5))
const subtract = (x,y) =>{
     console.log(x,y);
     return x-y;
}
console.log(subtract(20,15))
//Arthmetic operators

let x=10,y=3;

console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x/y)
console.log(x%y)
console.log(x**y)

//Assignment operators
let z=5;
z+=3;
console.log(z)
z-=3;
console.log(z)
z*=3;
console.log(z)
z/=3;
console.log(z)
z%=3;
console.log(z)

//Comparision operators

let a=10,b="10"

console.log(a==b)
console.log(a!=b)
console.log(a===b)
console.log(a!==b)

//Logical operators
let age=20
console.log(age>=20 && age<=40)
console.log(age<20 || age>20)
console.log(!(age<18))

//String operators
let firstName="Abdul"
let lastName="Basith"
let fullName=firstName+" "+lastName
console.log(fullName)
let correctName=`Hello ${firstName} ${lastName}, welcome to DevAstra` 
console.log(correctName)

//Ternary operators
let myAge=19
if(myAge>=18){
    console.log("Eligible to vote")
}else{
    console.log("Not eligible to vote")
}
let result=myAge>=18 ? "Eligible to vote" : "Not eligible to vote"
console.log(result)

//Increment operators and Decrement operators
let c=5
console.log(c++)
console.log(c)
console.log(++c)

//typeof operators
console.log(typeof c)
console.log(typeof "DevAstra")
console.log(typeof 18)


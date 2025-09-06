let person = {
    name : "Basith",
    age : "20"
}

console.log(person.name)
console.log(person["age"])

const {name,age}=person;  //Destructuring assignment
console.log(name)
console.log(age)


let fruits=["apple","banana","mango"]
console.log(fruits[1])

let numbers=[1,2,3,4,5]

let squares=numbers.map((num)=>num*num); //Transform the values
console.log(squares)

let evens=numbers.filter((num)=>num%2==0); //Filter values
console.log(evens)

let odds=numbers.filter((num)=>num%2!=0);
console.log(odds)

let sum=numbers.reduce((present,num)=>present+num,0);
console.log(sum)

//Array of objects
let students=[
{
    name : "Ajay",
    marks : "99"
},
{
    name : "Amar",
    marks : "97"
},
{
    name : "Ashish",
    marks : "100"
}
]
let maxMarks=0
let topper="";
for(let student of students){
    if(person.marks>maxMarks){
        maxMarks=person.marks;
        topper=person.name;
    }
}
console.log(`Topper is ${topper} and he got ${maxMarks}`)
    

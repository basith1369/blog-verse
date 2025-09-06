let Marks=85
if(Marks>=90){
   console.log("A+ Grade")
}else if(Marks>=80){
   console.log("B+ Grade") 
}else if(Marks>=70){
   console.log("C Grade") 
}else{
   console.log("Fail") 
}

let day=3
switch(day){
case 1: console.log("Sunday")
          break;
case 2: console.log("Monday")
          break;
case 3: console.log("Tuesday")
          break;
case 4: console.log("Wednesday")
          break;
case 5 :console.log("Thursday")
          break;                    
case 6: console.log("Friday")
          break;          
case 7: console.log("Saturday")
          break;
default:console.log("Invalid")
          break;
        }

//Loops

for(i=1;i<=3;i++){
    console.log("welcome to DevAstra")
}

let j=1
while(j<=3){
    console.log("Hello World")
    j++;
}

k=1
do{
   console.log("This makes the future")
   k++
}while(k<=3);

//Arrays

let colors=["Red","Blue","Green"]
for(let i=0;i<colors.length;i++){
    console.log(colors[i])
}
for(let color of colors){
    console.log(color)
}

let person ={
    name : "Basith",
    age : "19",
    college : "JNTUGV"
}

for(let key in person){
    console.log(`${key} : ${person[key]}`)
}

for(let i=5;i>=0;i--){
    if(i===3){
        continue;
    }else if(i===2){
        break;
    }
    console.log(i)
}
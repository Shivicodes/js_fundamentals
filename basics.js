//js n Ecmajs
//Execution of js ?
// 1. browser /2. js runtime(nodejs) /3. HTML script tag /4. replit
//static type lang vs dynamic typed lang 

/* EXAMPLE WHY DYNAMIC TYPE*/
let a=12;
console.log(a);
a="twelve";
console.log(a); // "twelve"  :>
// variable should not start with no.
// case-senstive lang...

// Diff b/w LET,VAR,CONST?

// ES6: prior to it var was used
// Const:constant declaration
// let:block scope declaration
// var is globally scoped ; the change in block was reflected outside the block also
var a1="10";
var a1=10;

let aa1="10"; 
//let aa1=10;
// on redeclaration with let it will give error that isn't in with VAR

//const c1;  //ERROR
 // const variable not declare
const c11=10;

//Primitive Datatype:(7) nbsu ; Non-Primitive Datatype: Objects;
a=null;
let b;
console.log(typeof a);
console.log(typeof b);

console.log(typeof "types"+100);
console.log(typeof("h"+100));
// the const type object values can be altered becoz  it holds reference
const dict1={
    'name':'varun ',
    'age':23,
    'location':'australia'
}
dict1['clg']='vit';  // no error
dict1['location']='india';  // no error
console.log(dict1);


//let age=prompt("entre the age");  // prompt is used in browser 
let age=27;
if(age>10){
 console.log("hii");
}
else if(age>10 && age<=20){
    console.log("hey");
}
else{
    console.log("bye");
}
//LOOPS....
//FOR/FOR IN/FOR OF:(object must be iterable)/WHILE/DO-WHILE
for(let i=0;i<5;i++){
    console.log(i);
}
let obj_new={'name':'Pragya','age':22,'clg':'psit'}
for(let j in obj_new){
    console.log(obj_new[j]);
}
//for(let k of obj_new) //ERROR
for(let k of "malaysia"){
    console.log(k);
    console.log(k[0]);
}
let i=1;
do{
    console.log(i);
    i++;

}
while(i<5)











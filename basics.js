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

// function:RETURN vs procedures

//block of code need to be executed many times
// i need to supply parameters of diff types , diff size, diff val
// sum(a,b)  sum(b,c)  sum(c,c)
// change one time in a block and when ever u call it will be evaluated like that
//let s1="sandy';

//template literals
let by1="priyansh"
let by2="garvit"
let s1=`${by1} and ${by2}`
let fruits='bana\'na'
let fruit='banana'
console.log(fruits.length)
console.log(fruit.length)

let tester="testme"
let growth="growth"
console.log(tester);
console.log(tester.toLowerCase());
console.log(tester.toUpperCase());
//on applying the func. the original string remains the same only the new string is returned.
console.log(tester.slice(2,4));
console.log(tester.slice(2));
tester.replace("test","prep");
tester.concat("is a friend",growth);
let trimer="     glow    ";
trimer.trim()
console.log(trimer)
// strings r immutable
let fr="shikha"
fr[0]="ritika"; // no erroer but no change in str
console.log(fr);  // it will print shikha 

let str="samuel\"";
console.log(str); //7
let stentence="hello i am here";
let word="am";
if(stentence.includes(word)){  //startswith . endswith
    console.log(`the word "${word}" ${stentence.includes(word)?'is':'is not '} in the sentence`);
}

//                                    .........ARRAYS.....
// more than one type of data can be put
let arr=[10,20,"hello",null,false]
console.log(arr[10]); //NO ERROR  undefined 
console.log(arr.length);//5
arr[2]=12/7;
console.log(arr);  // change will be reflected MUTABLE
console.log(typeof arr)// object
console.log(arr.toString());
let joiner=arr.join('-');

console.log(joiner);
//pop same arr is returned 
arr.pop();
console.log(arr);
//push new arr ; add element in end
let r=arr.shift() // removes element from start
console.log(r,arr);
let r1=arr.unshift(123); //add element to the start 
console.log(r1);


//DELETE

let arr1=[1,2,3,4,5,6,7,8,9]
console.log(arr1[0]);
console.log(arr1.length);
delete arr1[0]
console.log(arr1.length);
console.log(arr1[0]);
console.log(arr1[1]);





































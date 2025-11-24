// //javascript basics to advanced practice

// //to display the code in viewport of webpage
// document.write("hello jyotish");
// //declaration the variable
// var name="jyotish";
// name="java";
// //reassignment the variable
// let marks=34;

// //implict and explict declaration/creation the variable
// //explicit=>first declare the variable and then assign the value
// //implict=>declare and assign the value and variable at the same line 

// //let a;
// a=34;
// marks=35;
// marks=23;
// //const age=45;
// //using const variable don't reassign the value 
// console.log(marks);
// console.log(age);
// console.log(name);

// console.log(3+4==7 ? 6 : 7);
        
// //take input from user
// // t=Number("enter value of t");
// p=Number(prompt("enter a number"));
// //not exist char like data type
// y=char(prompt("enter a character"));
// console.log(y);
// console.log(p.value);
// document.write(p);
         
// //tertiary operator like if-else statement
// var age=20
// //console.log( age>=18 ? "adult" : "not adult");

// //comparison operator
// // == (equal to)
// console.log(4==4);
// console.log(4=="4");
// //=== (strictly equal value and type)
// console.log(5===5);
// console.log(2==="2");
        
// // 3 logical operator 
// console.log(4>3 && 5<4);
// console.log(3>5 || 3===3);
// console.log(!(2==3));

// //string operator=>(+) operator in use to concatenate string , 
// console.log("wel"+"come");       

// //increment and decrement operator
// var a=39;
// console.log(a++);

// //write a program to demostrate the concept of logical operator in javascript

// const a=5;
// console.log(a>9 && a<4);
        
// //conditional statement
// //using explicit variable
// var age;
// age=18;
// if(age<18){
//     console.log("not adult");
// }else if(age>18){
//     console.log("adult");

// }else if(age==18){
//     console.log("adult");
// }else{
//     console.log("error");
// }

// //ternary operator
// console.log(age>18 ? "adult" : "not adult");

// //using implicit variable
// var a=Number(prompt("enter a number:"));
// if(a%2===0){
//     console.log("even");
// }else{
//     console.log("odd");
// };

// //switch case for cleaner way
// let day=5;
// switch(day){
//     case 1:
//         console.log("Monday");
//     break;
//     case 2:
//         console.log("Tuesday");
//     break;
//     case 3:
//         console.log("wednesday");
//     break;
//     case 4:
//         console.log("thursday");
//     break;
//     case 5:
//         console.log("friday");
//     break;

//     default:
//         console.log("Invalid");
//     break;
// };

// //calculator
// let a=Number(prompt("enter 1 for addition 2 for subtraction 3 for multiplication:"));
// let b=Number(prompt("enter 1st number:"));
// let c=Number(prompt("enter 2nd number:"));

// //switch case
// switch (a){
//     case 1 :
//         sum=b+c;
//         document.write(sum);
//         console.log(sum);
//     break;
//     case 2 :
//         sub=b-c;
//         document.write(sub);
//         console.log(sub);
//     break;
//     case 3:
//         mul=b*c;
//         document.write("mul");
//         console.log("mul");
//     default:
//         document.write("choose valid case");
//     break;
// }

//do-while loop
// var i=0;
// do{
//     console.log("hello jyotish");
//     i++;
// }while(i<5);

// //for loop
// var j=1;
// for(var j=0;j<4;j++){
//     console.log("hello jyotish");


////-----------------------------------------------
////---------------------------------------------

// //for loop
// //initilization=>condition=>execution=>increment/decrement
// var j=0;
// for(var j=0;j<5;j++){
//     console.log("hello jyotish");
// }

// //while loop
// var k=0;
// while(k<5){
//     console.log("hello jyotish");
//     k++;
// }

// //do while loop
// var m=1;
// do{
//     console.log(m);
//     m++;
// }while(m<=5);

////make a table of user given number
// let k=Number(prompt("Enter a number to print its table:"));
// for(var i=1;i<=10;i++){
//     console.log(k*i);
// }


////nested for loop
// for(var i=1;i<=2;i++){
//     for(var j=2;j<=3;j++){
//         for(var k=3;k<=4;k++){
//             if(i==1 && j==2 && k==3){
//                 console.log("i="+i+",j="+j+",k="+k);
//             }else if (i==1 && j==2 && k==4){
//                 console.log("i="+(i+3)+",j="+(j+3)+",k="+(k+2));
//             }
            
//         }
//     }  
// }

////printing trianle of *
// for(var i=1;i<=3;i++){
//     for(var j=1;j<=2;j++){
//         console.log("*");
//     };
    
// };

////post increment and decrement
// var a=4;
// console.log(a++);
// console.log(a--);

////pre increment and decrement
// var b=4;
// console.log(++b);
// console.log(--b);

////
// var a=5;
// var b=++a;
// var c=a++;
// console.log(a);
// console.log(b);
// console.log(c);

////
// var a=5;
// a++;
// ++a;
// console.log(a);

////
// var a=10;
// var b=--a;
// var d=a--;
// var e=--a;
// console.log(a);
// console.log(b);
// console.log(d);
// console.log(e);

// var a=10;
// b=--a;
// console.log(a);
// console.log(b);

////b=a-- means first assign value of a in b then decrement of value of a
////b=--a means first decrement value of a then assign the value of a in b
// var a=10;
// var b=a--;
// console.log(a);
// console.log(b);




////-----------------------------------------------
////---------------------------------------------


////Functions 
////Types of functions 
////(1)Named function==>function defined with name of function and called using that name
////function to demonstrate return statement
// function sum(a,b){
//     return a+b;


////function with parameters and arguments
// function multiply(x,y){
//     console.log(x*y);
// }
// multiply(4,5);
// multiply(6,7);
// multiply(8,9);


////taking multiple arguments using single parameter
////method1 using array
// function addAll(){
//     var sum=0;
//     for(var i=0;i<arguments.length;i++){
//         sum+=arguments[i];
//     }
//     console.log("Sum is: "+sum);
// }
// addAll(1,2,3);
// addAll(4,5,6,7,8);
// addAll(9,10);

////method2 using rest operator
// function addAllRest(...numbers){
//     console.log(numbers);
// }
// addAllRest(1,2,3,4,5,"six");
// addAllRest(6,7,8,9);
// addAllRest(10,11);

////write a program to subtact two numbers
// var a=Number(prompt("Enter first number:"));
// var b=Number(prompt("Enter second number:"));

// function subTwoNum(e,t){
//     console.log(e-t);
// }
// subTwoNum(a,b);  
// subTwoNum(b,a);

//function with default arguments
// function greetUser(name="Guest"){
//     console.log("Welcome:"+name+"!");
// }
// greetUser();
// greetUser("jyotish");

//write a program to develope a calculator using function

// operator = prompt("Enter operator (+, -, *, /):");
// num1 = parseFloat(prompt("Enter first number:"));
// num2 = parseFloat(prompt("Enter second number:"));
// function calculator(num1,num2,operator){
//     switch(operator){
//         case "+":
//             console.log(num1+num2);
//             break;
//         case "-":
//             console.log(num1-num2);
//             break;
//         case "*":
//             console.log(num1*num2);
//             break;
//         case "/":
//             console.log(num1/num2);
//             break;
//         default:
//             console.log("Invalid operator");
//     }
// }


////(2)Anonymous function==>function defined without name and called using variable name in python like lambda function

// const square = function(num){
//     return num*num;
// }
// console.log(square(5));

////(3)Arrow function==>shorter syntax of writing function using arrow notation
// const add = ()=>{
//     return "Hello jyotish";
// }
// console.log(add());

////(4)Immediately Invoked Function Expression(IIFE) ==>function which is invoked immediately after its creation
// (function(){
//     console.log("IIFE executed");
// })
// ();

////(5)Callback function ==>function passed as argument to another function and called inside that function
function add(x,y,callback){
    var sum=x+y;
    callback(sum);
}
function displayResult(result){
    console.log("Result is: "+result);
}
add(5,10,displayResult);












////-------------------------------------
////classes and object
////---------------
////Creation using object literals
// var obj={
//     name:"jyotish",
//     college:"LPU",
//     state:"Bihar"
// };
// console.log(obj.name);
// console.log(obj.college);
// console.log(obj.state);

////Creation using  new object() constructor
////js object is mutable
////js is case-sensitive


    
// var obj=new Object();
// obj.name="Rahul"
// obj.age=20
// obj.Roll_no=21

//console.log(obj.name);
////delete property of object using delete operator
//delete obj.name;
////access using square notation
//console.log(obj["name"]);
////access using dot notation
//console.log(obj.name);
////check existance or not
//console.log("Jyotish" in obj);
//console.log(obj.hasOwnProperty("Rahul"));

//


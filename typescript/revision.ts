
// // // // literals : types of variable. 
// // // console.log(20);
// // // console.log(3.5);

// // // console.log(typeof(40));
// // // console.log(typeof(4.5));

// // // console.log(true);
// // // console.log(typeof(true));

// // // console.log("hello world of ecoders");
// // // console.log('Hello world of ecoders');
// // // console.log(`Hello world of ecoders.`);

// // // // datatypes. declariables. and initilize and print it. 

// var a :number = 20;  // initializing.
// // // console.log(a);
// // // a = 300;
//  console.log(a);

// var b :number = 200; 
// console.log(b);

// var b:number = 2000; 
// console.log(b);

// // // // const c = 300;
// // // // console.log(c);

// // // // concatination 
//  var firstname : string = "Gurupreeth";
// var lastname : string = "Singh";
//  console.log(typeof(firstname));
//  console.log(typeof(lastname));
//  console.log(firstname  + lastname);

// var a :number = 10; 
// var b: number = 20; 
// var c :number = a+b;
// console.log("The sum of a and b is " + (c));
// console.log("The sum of a and b is ", (c));
// console.log("The sum of a and b is " + (c));
// console.log(`The sum of ${a} and ${b} is ${c}`);
// var result :boolean  = true;
// console.log(`The result came as ${result}`);


// // // // conditional statements. 
// // // // if, if-else, if-else if- else, break, continue, switch-case . 

// var name1 : string = "Sham";

// if (name1 === "raj")
// {
//     console.log("Access granted");
// }
// else if (name1 === "raju")
//     {
//         console.log("Access granted");
//     }
//  else if (name1 === "rajesh")
//         {
//             console.log("Access granted");
//         }
// else{
//     console.log("Access denied");
// }

// // 

// switch(name1)
// {
//     case "raj" : 
//     {
//         console.log("Access granted,");
//         break;
//     }

//     case "raju" : 
//     {
//         console.log("Access granted,");
//         break;
//     }

//     case "rajesh" : 
//     {
//         console.log("Access granted,");
//         break;
//     }

//     case "ram" : 
//     {
//         console.log("Access granted,");
//         break;
//     }
//     default:
//         {
//             console.log("Access denied");
//         }
// }

// // loops. 

// let i :number;

// for( i = 1; i<= 10; i++)
// {
//     console.log(i);
//     if(i == 5)
//     {
//         break;
//     }
// }

// var a : number ; 
// for( a = 1; a<= 10; a++)
//     {
//         if(a==5)
//         {
//             continue;
//         }
//         console.log(a);
//     }

// // var i =1;
// // while (i<=10)
// // {
// //     console.log(i);
// //     i++;
// // }

// // var i = 111;
// // console.log(i++);
// // console.log(i);

// // do - while 

// // var i = 20; 

// // do{
// //     console.log(i);
// //     i++;
// // }
// // while(i<=10);



// // functions : 1funtion with no parameters

// function add() : void
// {
//     var a:number = 10 ; 
//     var b:number = 20; 
//     console.log(a+b);
// }

// add();

// // 2 function with parameters as arguments. 

// function addition(a,b)   // parameters
// {
//     console.log(a+b);
// }

// addition(15,5);   // arguments
// addition(15,10);
// addition(15,15);

// // 3 functions with return value. 
function subtract(a:number,b:number) : number
{
    return (a-b);
}

console.log(subtract(10, 5.5));

// // unanimous function ( functions with no name)
// // 4 varible expressions
var greet = function() : void
{
  console.log("Hello world");
}

greet();

// const square = function(num)
// {
//     console.log(num*num);
// }

// square(5);

// // 6 . arrow function. 


// function add()
// {
//     var a = 10; 
//     var b = 20; 
//     console.log(a+b);
// }

const add = () :void => {
    var a:number = 10; 
    var b:number = 20; 
    console.log(a+b);
}

add();


// function square(num)
// {
//     return (num* num);
// }

// const square = (num)=> {
//    return (num* num);
// }

// const square = (num)=> { 
//     console.log("Square of num is ");
//     console.log(num*num);
// }

// square(5);

// // 7 , IIFE function. (will run on its own. no need to call it. )
(function():void
{
    var name:string = "Ecoders";
    console.log(`Welcome ${name}`);
})();

// // 8. async - await
// // async function fetchData() :
// // {
// //     await response =  return ("http://localhost:3006/all-users");
// // }

// // 9 .  Call back functions. 
// // it will take another function as parameter. 

// // map() 

 var num_list : number[] = [1,2,3,4,5,6,7,8,9,10];

const square_list = num_list.map((num, index)=>{
  console.log(index,  (num * num));
})


// var numbers = [1,2,3,4,5,6,7,8,9,10];
// // filter() 

// var even_list = numbers.filter((eachnumber)=>{
//   return eachnumber % 2 == 0;
// })

// console.log(even_list);

// var odd_list = numbers.filter((eachnumber)=>{
//     return eachnumber % 2 != 0;
//   })
  
//   console.log(odd_list);


  // reduce() function. 
//   var numbers = [1,2,3,4,5,6,7,8,9,10]
  
//   var final_total = numbers.reduce((sum, eachnumber) =>{
//     return sum + eachnumber;
//   }, 0)

//   console.log(final_total);


  // combine all 3. 

  // all even numbers.  (filter())
  // square all the even numbers ,map() 
  // sum all the sqaures of even numbers.  reduce() 

//   var final_result = numbers.filter((eachnumber) => eachnumber % 2 == 0)
//                              .map((eachevennumber)=> eachevennumber*eachevennumber)
//                              .reduce((total_sum, eachsqredvalue) => { return total_sum+eachsqredvalue},0 )

// console.log(final_result);
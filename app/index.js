 import multiply from './math';
 import {add, subtract} from './math';
 
 /** let which helps u store variables which you can change */
 
 let limit = 100;
 limit += 200;
 console.log(limit);

/**const values cannot be changes */
 const limit2 = 100;
 console.log(limit2);
 
 /**you cannot vhange values for const but can add values to it if its an array */
 const emails= ['shr@emails.com','she@emails.com'];
 console.log(emails);
 emails.push('uti@gmail.com');
 console.log(emails);

/** Block Scoping start  */
 /**local scope and global scope  with let*/

 let capacity = 200;

 {
     let capacity = 10;
     console.log('backstage limit', capacity); //local scope
 }
 console.log('Overall limit', capacity); //global scope  

  /**local scope and global scope  with const*/

 const capacity2 = 200;

 {
     const capacity2 = 10;
     console.log('backstage limit with const', capacity2); //local scope
 }
 console.log('Overall limit with const', capacity2); //global scope 

/** Block scoping with var ie Java script variable.  var doesnt support block scoping and hence the value remains same */
 var capacity3 = 200;

 {
     var capacity3 = 10;
     console.log('backstage limit with var', capacity2); //local scope
 }
 console.log('Overall limit with var', capacity2); //global scope 

 /** Block scoping with functions */
 function hello(){
     let message = "Hello!";
     console.log(message);
 }

  function greeting(){
     let message = "How are you?";
     console.log(message);
 }

 hello();
 greeting();

 /** Block Scoping end  */

 /** Template literals start */
 /** They help us to avoid concatenation. You do not have to worry about spaces */
 let a = `good`;
 let b = `${a} morning`;
 console.log(b);
 
 /**Template literals end */

 /** Spread operators and rest parameters -- start */

 /** The below example works with integers and strings both or a combination of both too */
let c =[20,30,40];
let d = [10,...c, 50];
console.log(d);


/** You can add as many as values with rest parametrs */
function collect (...a){
    console.log(a);
}
collect(3,4,5,6,10,12);

/** Spread operators and rest parameters -- end */

/** Adding  destruction assignments */

/** Anonymous Function  expression start */

var cheer = function(){
    console.log("Woohoo!");
}
cheer();
/** Anonymous Function  expression end */

/** Arrow functions start */
/** Arrow functions are anonymous by default */
setTimeout(() => {
    console.log("Arrow Functions")
}, 3000);
/** Arrow Functions end */

/** Map  start */

let values = [20,30,40];

let double = (n) => {
    return n * 2 ;
}
 let doubled_1 = values.map(double);
 console.log(doubled_1);

 let doubled_2 = values.map((n) => n*2)
 console.log(doubled_2);

/** Map end */

/**  Filters start */
let points = [7, 16, 21, 4, 5, 36, 22, 7];
let highScores_1 = points.filter((n) => {
    return n > 15;
})
 console.log(highScores_1);

let highScores_2 = points.filter((n) => n > 20);
console.log(highScores_2);
/** Filters end */

/** Modules start */
    console.log(multiply(5,10));
    console.log(add(5,10));
/**Modules end */

/**Static method starts */
class Calculator{
    static multiplyNumbers(a,b){
        return a * b;
    }
}

let m = Calculator.multiplyNumbers(5,7);
console.log(m);

/** Static method ends */

 
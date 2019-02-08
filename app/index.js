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


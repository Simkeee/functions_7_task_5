// 5. Create a function that validates a password to conform to the following rules:
//  Length between 6 and 24 characters,
//  At least one uppercase letter (A-Z).
//  At least one lowercase letter (a-z).
//  At least one digit (0-9).
//  Maximum of 2 repeated characters (“aa” is OK, “aaa” is NOT).
//  Supported special characters: ! @ # $ % ^ &amp; * ( ) + = _ - { } [ ] : ; &quot; &#39; ? &lt; &gt; , .
//  Examples: validatePassword(&quot;P1zz@&quot;) ➞ false // Too short.
//  validatePassword(&quot;iLoveYou&quot;) ➞ false // Missing a number.
//  validatePassword(&quot;Fhg93@&quot;) ➞ true // OK!

function validation(password) 
{  "use strict"
   var message = "";
   var check = 0;
   var upperStr = 0;
   var lowerStr = 0;
   var numb = 0;
   var threeCar = 0;
   var supChar = 0;

   const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
   const alphabetLow = alphabet.map(e => e.toLowerCase());
   const specialSy = ["!", "@", "#", "$" ,"%", "^", "*", "(", ")", "+", "=", "_" ,"-" , "{","}", "[", "]", ":",";","\"","\'","?","<",">",",","."];
   const merged = [...alphabet, ...alphabetLow,...specialSy];

   if( password.length < 6 || password.length > 24 ) {
      message = "Length between 6 and 24 characters!";
      check = 1;
   };
   for (let i = 0; i < password.length; i++) {
         
      if( alphabet.includes(password[i]) ) {
         upperStr++;
      };
      if( alphabetLow.includes(password[i])) {
         lowerStr++;
      };
      if(isNaN(password[i]) == false) {
         numb++;
      };
      if( password[i] == password[i+1] && password[i] == password[i+2]) {
         threeCar++;
      };
      if( merged.includes(password[i]) || isNaN(password[i])== false) {
         supChar++;
      };
   };
   if(upperStr == 0){
      message = "Required at least one uppercase letter!";
      check = 1;
   };
   if(lowerStr == 0){
      message = "Required at least one lowercase letter!";
      check = 1;
   };
   if(numb == 0){
      message = "Required at least one one digit (0-9)!";
      check = 1;
   };
   if(threeCar != 0){
      message = "Maximum of 2 repeated characters!";
      check = 1;
   };
   if(supChar < password.length){
      message = "You use unsupported characters!";
      check = 1;
   };
   if(check == 0){
      message="Your password is corect!";
   }
     return message;
}
console.log(validation("llppioAo0"));
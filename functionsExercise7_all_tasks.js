// 1. Write a function named tellFortune that:
//  takes 4 arguments: number of children, partner&#39;s name, geographic location, job title.
//  outputs your fortune to the screen like so: &quot;You will be a X in Y, and married to Z with N kids.&quot;
// Call that function 3 times with 3 different values for the arguments.

function tellFortune(numbChildren,partnName,geoLocation,jobTitle){
"use strict"
    return "1.You will be a "+jobTitle+" in "+geoLocation+", and married to "+partnName+" with "+numbChildren+" kids.";
};
console.log(tellFortune(4,'Marija','Nis','arhitekta'));
console.log(tellFortune(6,'Sara','Sibotica','ucitelj'));
console.log(tellFortune(2,'Maja','Vranje','ucitelj'));


// 2. Write a function named calculateDogAge that:
//  takes 1 argument: your puppy&#39;s age.
//  calculates your dog&#39;s age based on the conversion rate of 1 human year to 7 dog years.
//  outputs the result to the screen like so: &quot;Your doggie is NN years old in dog years!&quot;
// Call the function three times with different sets of values.
// Bonus: Add an additional argument to the function that takes the conversion rate of human to dog
// years.

function calculateDogAge(puppyAge, yourAge){
    "use strict"
var convertPuppyAge=puppyAge*7;
var convertyourAge=parseInt(yourAge/7);
return "2.Your doggie is "+convertPuppyAge+" years old in humans years, and you are "+convertyourAge+" years old in dog years!"
}
console.log(calculateDogAge(2,23));
console.log(calculateDogAge(4,45));
console.log(calculateDogAge(10,84));


// 3. Write a function named calculateSupply that:
//  takes 2 arguments: age, amount per day.
//  calculates the amount consumed for rest of the life (based on a constant max age).
//  outputs the result to the screen like so: &quot;You will need NN to last you until the ripe old age of
// X&quot;
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

function calculateSupply(age, amount){
    "use strict"
     const maxAge=100;
     var amountPerRest=parseInt((maxAge-age)*365*amount);
     return "3.You will need "+amountPerRest+" to last you until the ripe old age of "+maxAge+".";
}
console.log(calculateSupply(12, 1.5));
console.log(calculateSupply(88, 1.6));
console.log(calculateSupply(47, 1.3));


// 4. Create a function called celsiusToFahrenheit:
//  Store a celsius temperature into a variable.
//  Convert it to fahrenheit and output &quot;NN°C is NN°F&quot;.
// Create a function called fahrenheitToCelsius:
//  Now store a fahrenheit temperature into a variable.
//  Convert it to celsius and output &quot;NN°F is NN°C.&quot;
// *NN is actual temperature you need to convert

function celsiusToFahrenheit(celsiusTemperature){
    "use strict"
    var fahrenheit=(celsiusTemperature*9/5) + 32;
    return "4.1  "+celsiusTemperature+"°C is "+fahrenheit+"°F."
}
function fahrenheitToCelsius(fahrenheitTemperature){
    "use strict"
    var celsius=(fahrenheitTemperature- 32)*5/9 ;
    return "4.2  "+fahrenheitTemperature+"°F is "+celsius+"°C."
}
console.log(celsiusToFahrenheit(-40));
console.log(fahrenheitToCelsius(-20));


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
     return '5.' + message;
}
console.log(validation("llppioAo0"));


// 6. Create a function that finds how many prime numbers there are, up to the given integer.
// Examples: primeNumbers(10) ➞ 4 // 2, 3, 5 and 7
// primeNumbers(20) ➞ 8 // 2, 3, 5, 7, 11, 13, 17 and 19
// primeNumbers(30) ➞ 10 // 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29

function primeNumbers(x){
    "use strict"
    var niz = [];
    for (let i = 1; i < x+1; i++) {
        var brojac = 0;
        for (let j = 1; j < i+1; j++) {
            if(i%j==0){
                brojac++;
            };
        };
        if(brojac==2){
        niz.push(i);
        } ;
    };
return "6.We have " + niz.length + " prime numbers " +"up to the given " + x + '. Thay are '+ niz.slice(0, -1)+" and "+niz.pop();
};
console.log(primeNumbers(30));


// 7. Create a function that returns an array that expands by 1 from 1 to the value of the input, and then
// reduces back to 1. Items in the arrays will be the same as the length of the arrays.
// Examples:
// diamondArrays(1) ➞ [1],
// diamondArrays(2) ➞ [1, 2, 2, 1]
// diamondArrays(5) ➞ [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 4, 4, 4, 4, 3, 3, 3, 2, 2, 1]

function diamondArrays(x) {
   var niz=[];
   var niz1=[];
   var niz2=[];
   var niz3=[];
   var niz4=[];
   var h=0;
   var k=0;
    for(var i = 0; i <= x; i++){
        for(var j = 0; j < i; j++){
            niz[j+i]=i;
            niz1[h]=niz[j+i];
            h++;
        }
    }
    for(var n = 0; n < x; n++){
        for(var m = 0; m < n; m++){
            niz2[m+n]=n;
            niz3[k]=niz2[m+n];
            k++;
        }
    }
    niz3.reverse();
    niz4= [...niz1, ...niz3];

return "7.Array in output is: "+"[" + niz4 + "].";
}
console.log(diamondArrays(5));
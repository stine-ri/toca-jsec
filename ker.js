//Write a program that prints number 1 to 100.For multiples of three,print"Fizz", for multiples of five print"Buzz" and multiples of both 3 and 5 print"fizzBizz"//

let number=100;
function multiplesOf3and5(number) {
    for(let i=1; i<number; i++ ){
      if(i % 3 === 0){
         console.log("fizz");
      }else if(i % 5 === 0){
         console.log("Buzz");
      }else if(i % 3 === 0 && i % 5 === 0){
          console.log("FizzBuzz");
      }else{
         console.log("not a multiple of 3 and 5");
      }
      number += i;
    }
   return number;
}
console.log(multiplesOf3and5(100));

//Write a program to generate the fibonacci sequence upto 100//
let f1 = 0,  f2 = 1,nextFibonacci;
console.log("Fibonacci numbers upto 100 term is:")
for(let i = 1; i<=100; i++){
   console.log(fn1);
   nextFibonacci= fn1 + fn2;
   fn1 = fn2;
   fn2 = nextFibonacci;
}

//Write a program that takes an integer as input and returns true if the input is a power of two//
function IsPowerOfTwo(n){
   if(n == 1){
   return true;
   }else (n % 2 != 0 || n == 0)
   return false;
   return IsPowerOfTwo(n / 2);
   
}


// write a program that capitalizes the first letter of each word in a string and returns the result as a string//
function capitalizeFirstLetter(){
   let string = "i love food";
   console.log(string[0].toUpperCase()+ string.slice(1));
}
capitalizeFirstLetter()

//Write a program that accepts a string as input and returns an integer with reversed digit ordering//

 var num1 = 500;
 var result = num1.toString().split('').reverse().join('');
 console.log(result);
 var num2 = -56;
 var result = num2.toString().split('').reverse().join('');
 console.log(result);
 var num3 = -9;
 var result = num3.toString().split('').reverse().join('');
 console.log(result);
 var num4= 91;
 var result = num4.toString().split('').reverse().join('');
 console.log(result);


//write a program that count the number of vowels in a sentence//
function getCount(str){
   var vowelsCount = 0;
   const vowels = ['a','e','i','o','u']
   for(let char of str){
   if(vowels.includes(char)){
      vowelsCount++
   }
   }
   return vowelsCount
}

























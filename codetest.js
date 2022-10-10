/*

Write a function factorial() that takes a number as an argument and returns the factorial of the number.

const  factorial = n => {
    let answer = 1;
    if(n === 0 || n === 1) {
      return answer
    } else {
      for (let i = n; i >= 1; i--) {
        answer = answer * i
  
      } 
      return answer
  
    }
  }
  console.log(factorial(100))
  */




/*
Write a function subLength() that takes 2 parameters, 
a string and a single character. The function should search the 
string for the two occurrences of the character and return the 
length between them including the 2 characters. 
If there are less than 2 or more than 2 occurrences 
of the character the function should return 0.
  

const subLength = (str, char) => {
    let strChars = str.toLowerCase().split(""),
        found = [],
        length = 0;
    
    strChars.forEach((val, index) => {
        if (val === char) {
            found.push(index);
        }
    });

    if (found.length != 2) {
        return length;
    }

   return str.slice(found[0], found[1]).length + 1;
}
console.log(subLength('Saturday', 'a')); // returns 6
console.log(subLength('summer', 'm')); // returns 2
console.log(subLength('digitize', 'i')); // returns 0
console.log(subLength('cheesecake', 'k')); // returns 0
*/

//Write a function groceries() that takes an array of object literals of grocery items.
// The function should return a string with each item separated
// by a comma except the last two items should be separated by the word 'and'. Make sure spaces (' ') 
//are inserted where they are appropriate.

const groceries = arr => {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
      newArr.push(arr[i].item);
    }
    if(newArr.length < 2) {
      return newArr.join('');
    } else {
   let final = newArr.pop(); 
   return newArr.join(', ') + ' and ' + final;
    }
  }
  console.log(groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] ));
  // returns 'Carrots, Hummus, Pesto and Rigatoni'
   
  console.log(groceries( [{item: 'Bread'}, {item: 'Butter'}] ));

 console.log(groceries( [{item: 'Cheese Balls'}] ));
  // returns 'Cheese Balls'

  // card validation
  const validateCred = arr => {
    let total = 0;
    for (let i = arr.length-1; i >= 0; i--) {
    let value = arr[i];
    if (i % 2 === 0) {
    value *= 2
    if (value > 9) {
    value -= 9
    }
    
    }
    total += value
    }
    return total % 10 === 0
    
     }
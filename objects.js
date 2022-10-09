//returns a boolean value based on whether or not every item in the array has entirely plant-based origins.
const isTheDinnerVegan = arr => arr.every(food => food.source === 'plant');

/*
// Alternate solution:
// Using a function declaration, loop, and helper function:
function isTheDinnerVegan(arr) {
      const isVegan = (food) => {
            if (food.source === 'plant') {
                  return true;
            }
            return false;
      }
      for(let i = 0; i<arr.length; i++){
            if (!isVegan(arr[i])){
                  return false 
            }
      }
      return true
}
*/

const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];

console.log(isTheDinnerVegan(dinner))

//sorts the array in ascending order based on the average number of teeth that species possesses (numTeeth) .
const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];

// Write your code here:

const sortSpeciesByTeeth = arr => arr.sort((a, b) => a.numTeeth > b.numTeeth);





// Feel free to comment out the code below when you're ready to test your function!

console.log(sortSpeciesByTeeth(speciesArray))

// Should print:
// [ { speciesName: 'human', numTeeth: 32 },
//   { speciesName: 'dog', numTeeth: 42 },
//   { speciesName: 'shark', numTeeth: 50 },
//   { speciesName: 'alligator', numTeeth: 80 } ]

//return the index at which they can be found. If they’re not in the array, your function should return -1.
const findMyKeys = arr => arr.findIndex(item => item === 'keys')

/*
// Alternate solution:
// As a function declaration using a loop:
function findMyKeys(arr) {
      let index = -1;
      for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 'keys') {
                  index = i
                  break
            }
      }
      return index
}
*/
const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];

console.log(findMyKeys(randomStuff))


//returned object returned with the values of the arguments that were passed in
const dogFactory = (name, breed, weight) => {
  
    return {
        _name: name,
        _breed: breed,
        _weight: weight,
        get name() {
            return this._name;
        },
        
        set name(newName) {
            this._name = newName;
        },
        get breed() {
            return this._breed;
        },
        set breed(newBreed) {
            this._breed = newBreed;
        },
        get weight() {
            return this._weight;
        },
        set weight(newWeight) {
            this._weight = newWeight;
        },
        bark() {
            return 'ruff! ruff!'
        },
        eatTooManyTreats() {
            this._weight++
        }
    }
      }


console.log('Ezra', 'Pitbull', 70);

/*
// Solution to checkpoint 1:
const dogFactory = (name, breed, weight) => {
      return {
            name: name,
            breed: breed,
            weight: weight
      }
}

// Solution to checkpoint 2:
const dogFactory = (name, breed, weight) => {
      return {
            _name: name,
            _breed: breed,
            _weight: weight,
            get name() {
                  return this._name;
            },
            set name(newName) {
                  this._name = newName;
            },
            get breed() {
                  return this._breed;
            },
            set breed(newBreed) {
                  this._breed = newBreed;
            },
            get weight() {
                  return this._weight;
            },
            set weight(newWeight) {
                  this._weight = newWeight;
            }
      }
}

*/
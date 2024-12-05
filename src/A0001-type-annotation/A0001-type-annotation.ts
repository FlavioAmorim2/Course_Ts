/*eslint-disable */
// basic types of data
let namee: String = 'flavio';
let age: Number = 30;
let adult:  Boolean = true;
let simbol: Symbol = Symbol("random");


// array type annotations
let arrayNumbers: Array<number> = [ 1, 2, 3]
let arrayNumbers2: number[] = [ 1, 2, 3]
let arrayString: Array<string> = [ "Chblau"]
let arrayString2: string[] = [ "Chblau"]

// objects use {} for declarete type
let person: {namee: string, age: number, adult?: boolean} = {
  age: 30,
  namee: 'Flavio'

};

// for functions

function sum(x: number, y: number){
  return x + y;
}



// tuple type
const dataClient1: [number, string] = [1, 'Flavio'];
const dataClient2: [number, string, string] = [1, 'Flavio', 'Amorim'];
const dataClient3: [number, string, string?] = [1, 'Flavio'];
const dataClient4: [number, string, ...string[]] = [1, 'Flavio', 'amorim']


// dataClient1[0] = 100;
// dataClient1[1] = 'Flavio';


console.log(dataClient1);
console.log(dataClient2)
console.log(dataClient3)
console.log(dataClient4)

// read only aray type
const array1:  readonly string[] = ['Flavio', 'amorim'];
const array2:  ReadonlyArray<string> = ['Flavio', 'amorim'];

console.log(array1)
console.log(array2)

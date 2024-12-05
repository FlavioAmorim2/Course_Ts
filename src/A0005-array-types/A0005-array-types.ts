// array <T> - T[]
export function multiplicateArgs(...args: Array<number>){
    return args.reduce((ac, valor) => ac * valor, 1)
}

export function concatenatesStrings(...args: string[]){
  return args.reduce((ac, valor) => ac + valor)
}

const result = multiplicateArgs(1,2,3);
const concatenate = concatenatesStrings('a', 'b', 'c');

console.log(result)
console.log(concatenate)

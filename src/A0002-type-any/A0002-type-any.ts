// use "any" only the last case
function showMessage(msg: any){
  return msg;
}
// type "any" makes any type work

console.log(showMessage([1,2,3]))
console.log(showMessage(["hello"]))
console.log(showMessage(1))


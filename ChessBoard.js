const prompt = require("prompt-sync")()

let rows = Number(prompt("Enter a number: "))


for(; rows >= 1; rows --){
console.log(rows % 2 ==0 ? " # # # #"  :    "# # # #")
}

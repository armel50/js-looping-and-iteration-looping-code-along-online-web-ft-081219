// Code your solutions in this file
countDown = function(arg){
    for(let i = 0; i<= arg; i= i+1){
        console.log(i)
    }
}
function writeCards(arg){
    const result = [];
    for(let i = 0; i < arg.length; i++){
       result.push(`Thank you, ${arg[i]}, for the wonderful surprise gift!`)
    }
    return result
}
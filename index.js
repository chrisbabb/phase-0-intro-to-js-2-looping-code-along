// Code your solutions in this file
function writeCards(myArray, message) {
    let returnedArray = [];
    for(let i=0;i<myArray.length;++i){
        returnedArray[i] = `Thank you, ${myArray[i]}, for the wonderful ${message} gift!`
    }
    return returnedArray
}

function countDown(number) {
    for(let i=number;i>-1;--i){
        console.log(i)
    }
}
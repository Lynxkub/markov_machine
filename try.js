const test_phrase = 'the cat in the hat';
const fs = require('fs');

function splitString(phrase) {
    myArray = phrase.split(" ")
    return myArray
}

function wordMap(phrase) {
    let wordArray = splitString(phrase)
    let wordObj = {}
    multipleWordInstance = [];
    finalMultWordInst = []
    for(let i = 0; i < wordArray.length; i++) { 
        if (wordArray.lastIndexOf(wordArray[i]) !== wordArray.indexOf(wordArray[i])){
            for (j of wordArray){
                if (j === wordArray[i]){
                    multipleWordInstance.push(wordArray[i+1])
                }
            }
            for (k of multipleWordInstance){
                if (finalMultWordInst.indexOf(k) === -1) {
                    finalMultWordInst.push(k)
                }
            }
            wordObj[wordArray[i]] = finalMultWordInst
        }else {
        wordObj[wordArray[i]] = wordArray[i+1]
    }
}
    return wordObj
}

function makeText(phrase) {
    let currWordMap = wordMap(phrase);
    let text = ""
    let vals = Object.values(currWordMap)
    while (text.length < 100){
        let picker = Math.floor(Math.random() * vals.length)
        if (vals[picker] instanceof Array) {
            let arrayPick = Math.floor(Math.random() * vals[picker].length)
            text = text + vals[picker][arrayPick] + " "
        }
        if(typeof vals[picker] == "string") {
            text = text +vals[picker] + " "
        }
        if(typeof vals[picker] == 'undefined'){
            break;
        }
    }
    return text
}






module.exports = {makeText , wordMap};

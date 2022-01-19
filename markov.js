/** Textual markov chain generator */


class MarkovMachine {

    /** build markov machine; read in text.*/
  
    constructor(text) {
      let words = text.split(/[ \r\n]+/);
      this.words = words.filter(c => c !== "");
      this.makeChains();
    }
  
    /** set markov chains:
     *
     *  for text of "the cat in the hat", chains will be
     *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */
  
    splitString(text) {
      myArray = text.split(" ")
      return myArray
  }
    makeChains(text) {
   
    
    // function wordMap(phrase) {
        let wordArray = splitString(text)
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
    
  
  
    /** return random text from chains */
  
    makeText(numWords = 100) {
      // TODO
    }
  }
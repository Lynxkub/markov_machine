const { makeText } = require("./try")
const { wordMap } = require("./try")

test('should return a string' , function () {
    let markov = makeText('the cat in the hat')
    
    // expect(markov).toContain(" ");
    expect(markov).toEqual(expect.stringContaining(" "))
})


test('should create word map object' , function () {
    let maps = wordMap('the cat in the hat')
    expect(maps.cat).toBe('in')
})
const programText = '(()(dsf)(sa)adssfds)'


const filterStr = leaveChars => str => leaveChars.flatMap(leaveChar => {
  return str.split('').map((char, index) => ({char, index})).filter(char => char.char === leaveChar)
}).sort((a, b) => a.index - b.index).map(charObj => charObj.char)



const isBracketsPaired = brackets => brackets.map(bracket => bracket === '(' ? 1 : bracket === ')' ? -1 : 0).reduce((acc, cur) => acc + cur) === 0 ? true : false



const filteredStr = filterStr(['(', ')'])(programText)

console.log(filteredStr)
const isPaired = isBracketsPaired(filteredStr)
console.log(isPaired)



const programText = '(()(dsf)(sa)adssfds)'

const countOccurrence = subStr => str => str.split('').map(str => str.includes(subStr)).reduce((acc,cur) => acc + cur)

const filterStr = leaveChars => str => leaveChars.flatMap(leaveChar => {
  return str.split('').map((char, index) => ({char, index})).filter(char => char.char === leaveChar)
}).sort((a, b) => a.index - b.index).map(charObj => charObj.char)

 


const isOpenCloseBracketsCountEqual = str => {
	const openingBrackets = countOccurrence('(')(str)
  const closingBrackets = countOccurrence(')')(str)
  return openingBrackets === closingBrackets
}

const isValueAtCorrectPlace = val => index => arr => arr[index] === val

/* const isBracketsPaired = brackets => {
  console.log(brackets)
  if (brackets.length === 0) {return true}
  if (brackets.length === 1) {return false}
  else {
    if (isValueAtCorrectPlace('(')(0)(brackets) && isValueAtCorrectPlace(')')(brackets.length - 1)(brackets)) {return isBracketsPaired(brackets.slice(1, -1))}
  }
} */

const isBracketsPaired = brackets => brackets.map(bracket => bracket === '(' ? 1 : bracket === ')' ? -1 : 0).reduce((acc, cur) => acc + cur) === 0 ? true : false


console.log(isOpenCloseBracketsCountEqual(programText))

const filteredStr = filterStr(['(', ')'])(programText)

console.log(filteredStr)
const isPaired = isBracketsPaired(filteredStr)
console.log(isPaired)
//console.log(isValueAtCorrectPlace(')')(0)(filteredStr))






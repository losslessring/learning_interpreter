const programText = '1 1 1 + 2 4 5 6 a 3 2'

const global = {
	'+': args => args.reduce((acc, cur) => acc + cur)

}

/* const isAtom = word => {
  const wordValue = isNumber(word) ? {type: 'number', value: Number(word)} : 
                     isString(word) ? {type: 'string', value: word}: undefined
  return wordValue 
}
 */

const isAtom = word => {
	const wordValue =  isFunction(word) ? {type: 'function', value: global[word]} :
  									 isNumber(word) ? {type: 'number', value: Number(word)} : 
  									 isString(word) ? {type: 'string', value: word} : undefined
  return wordValue 
}

const isFunction = word => global[word] !== undefined
 
const isNumber = word => {
  return !isNaN(Number(word)) 
}

const isString = word => isNaN(Number(word))


const parse = str => str.split(' ')

const evaluate = words => words.map(isAtom)


const words = parse(programText)
console.log(words)

const atoms = evaluate(words)
console.log(atoms)





const global = {
	'+': (...args) => args.reduce((acc, cur) => acc + cur)
}



export const isAtom = word => {
	const wordValue =  isFunction(word) ? {type: 'function', value: global[word]} :
  									 isNumber(word) ? {type: 'number', value: Number(word)} : 
  									 isString(word) ? {type: 'string', value: word} : undefined
  return wordValue 
}



export const isFunction = word => global[word] !== undefined
 
const isNumber = word => {
  return !isNaN(Number(word)) 
}

const isString = word => isNaN(Number(word))


const parse = str => str.split(' ')

export const evaluate = words => words.map(isAtom)







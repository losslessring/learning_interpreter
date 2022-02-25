import { evaluate } from './evaluate/evaluate.js'
import stringToTree from './stringToTree/stringToTree.js'


//console.log(stringToTree("((developer or engineer ) or (nurse or doctor)) and manager"))

//console.log(stringToTree("(+ 1 1)(+ 2 3)"))
const node =  stringToTree("(+ 1 1)")[0]
console.log(node)

const result = node.shift()(...node)

console.log(result)
import stringToTree from "./stringToTree/stringToTree.js"
import { evaluate } from './evaluate/evaluate.js'

const tree = stringToTree("(+ 1 1 1 (+ 2 3 (+ 2 2)))")
console.log(tree)
const result = evaluate(tree)
console.log(result)



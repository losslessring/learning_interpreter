// import { evaluate } from "./parse/parse.js"
import stringToTree from "./stringToTree/stringToTree.js"
import { evaluate } from './evaluate/evaluate.js'

//console.log(stringToTree("((developer or engineer ) or (nurse or doctor)) and manager"))

//console.log(stringToTree("(+ 1 1)(+ 2 3)"))
const tree = stringToTree("(+ 1 1 1 (+ 2 3 (+ 2 2)))")

// const node =  stringToTree("(+ 1 1)")[0]
// console.log(node)

// const result = node.shift()(...node)

// console.log(result)

const applyFunction = node => {
    const result = node.shift()(...node)
    return result
}

function walkTree(node) {
    if (Array.isArray(node)) {
        return node.forEach((child, childIndex, arrayOfChildren) => {
            if (Array.isArray(child)) {
                console.log([])
                walkTree(child)
            } else if (child instanceof Function) {
                
                // const result = applyFunction(arrayOfChildren)
                console.log(result)
                return result
            } else {
                return child
            }
        })
    } else {
        return node
    }
}

// const result = walkTree(tree)
//console.log(result)

console.log(tree)
const result = evaluate(tree)
console.log(result)

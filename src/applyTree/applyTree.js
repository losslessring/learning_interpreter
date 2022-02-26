import { isFunction } from '../parse/parse'

const applyFunction = node => {
    //if (Array.isArray(node)) {
        const result = node.shift()(...node)
    //}
}

const applyTree = tree => {
    if (Array.isArray(tree)) {
        const result = node.shift()(...node)
    }
}
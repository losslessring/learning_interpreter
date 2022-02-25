import { isFunction } from '../evaluate/evaluate'

const applyNode = node => {
    if (Array.isArray(node)) {
        node[0](node.shift())
    }
}

const applyTree = tree => {
    
}
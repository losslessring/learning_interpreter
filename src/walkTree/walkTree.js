export function walkTree(node) {
    if (Array.isArray(node)) {
        return node.forEach(child => {
            if (Array.isArray(child)) {
                console.log([])
                walkTree(child)
            }
            else {
                console.log(child)
                return child
            }
        })
    } 
    else {
        return node
    }
    
}


export function evaluate(expressionObj) {
    if (Array.isArray(expressionObj)) {
        if (expressionObj[0].type === 'function') {
            const func = expressionObj[0].value
            expressionObj.shift()
            let args = expressionObj.map(expression => {
                return evaluate(expression)
            })
            return func(...args)
        } else {
            return expressionObj.map(expression => {
                return evaluate(expression)
            })
        }

    } else if (expressionObj.type === 'number'){
      return expressionObj.value
    } else if (expressionObj.type === 'string'){
        return expressionObj.value
    } 
}



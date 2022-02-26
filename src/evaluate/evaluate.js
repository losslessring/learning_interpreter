

export function evaluate(expressionObj) {
    if (Array.isArray(expressionObj)) {
        if (expressionObj[0].type === 'function') {
            const func = expressionObj[0].value
            expressionObj.shift()
            let args = expressionObj.map(expression => {
                return evaluate(expression)
            })
            //console.log('func', func(...args))
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


// def eval(x: Exp, env=global_env) -> Exp:
//     "Evaluate an expression in an environment."
//     if isinstance(x, Symbol):        # variable reference
//         return env[x]
//     elif isinstance(x, Number):      # constant number
//         return x                
//     elif x[0] == 'if':               # conditional
//         (_, test, conseq, alt) = x
//         exp = (conseq if eval(test, env) else alt)
//         return eval(exp, env)
//     elif x[0] == 'define':           # definition
//         (_, symbol, exp) = x
//         env[symbol] = eval(exp, env)
//     else:                            # procedure call
//         proc = eval(x[0], env)
//         args = [eval(arg, env) for arg in x[1:]]
//         return proc(*args)
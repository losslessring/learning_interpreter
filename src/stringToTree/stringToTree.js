import { isAtom } from '../parse/parse.js'


function stringToTree(str) {
  var i = 0
  function parseList() {
    var arr = []
    var startIndex = i
    function addWord() {
      if (i-1 > startIndex) {
        arr.push(isAtom(str.slice(startIndex, i-1)))
      }
    }
    while (i < str.length) {
      switch(str[i++]) {
        case " ":
          addWord()
          startIndex = i
          continue
        case "(":
          arr.push(parseList())
          startIndex = i
          continue
        case ")":
          addWord()
          return arr
      }
    }
    addWord()
    return arr
  }
  return parseList()
}

export default stringToTree








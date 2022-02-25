const programText = '(aaa)'

const getListContent = str => content => {
	if (str.length === 1) {return content}
  if (str[0] === '(') {return getListContent(str.slice(1))(content)}
	else {
  	return getListContent(str.slice(1))([...content, str[0]])
  }
}

const listContent = getListContent(programText)([])
console.log(listContent)









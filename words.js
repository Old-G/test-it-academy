let result = prompt('Введите текст произвольной длины')

function findLongWord(result) {
  let longWord = result.split(' ').sort(function (a, b) {
    return b.length - a.length
  })

  return longWord.slice(0, 3).join('; ')
}

alert(`Три самые длинные слова : ${findLongWord(result)}`)

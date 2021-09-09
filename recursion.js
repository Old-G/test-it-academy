// я не смог осилить рекурсию, этот пример с mdn, вроде мне понятен. Надеюсь на уроке разберем и пойму как написать такую функцию.

const array = [5, 7, [4, [2], 8, [1, 3], 2], [9, []], 1, 8, [[[8, [10, [18]]]]]]

function flatDeep(arr, d = 1) {
  return d > 0
    ? arr.reduce(
        (acc, val) =>
          acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val),
        []
      )
    : arr.slice()
}

flatDeep(array, Infinity)

console.log(flatDeep(array, Infinity).reduce((acc, val) => acc + val, 0))

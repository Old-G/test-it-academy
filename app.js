let n = 1000

simply: for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue simply
  }

  console.log(i)
}

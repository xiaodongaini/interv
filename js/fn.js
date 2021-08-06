function test(n) {
  // 1*2*3

  if (n == 1) {
    return 1
  } else {
    return n*test(n-1)
  }
}
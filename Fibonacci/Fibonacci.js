function fibonacci(n) {
  if (n <= 1) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

const fibonacciValue = fibonacci(10);

console.log(fibonacciValue);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. Map Double each number
const doubled = numbers.map((item) => item * 2);

// 2. filters : Keep only even numbers

const evens = numbers.filter((item) => item % 2 == 0);

// 3. reduce : sum all numbers

const sum = numbers.reduce((sum, current) => sum + current, 0);

// 4. Reduce : Calculate average

const average = numbers.reduce((acc, n, index, arr) => {
  acc += n;
  // On the LAST iteration, divide by total length
  if (index === arr.length - 1) {
    return acc / arr.length;
  }
  return acc;
}, 0);

// 5. Chain methods: Sum of doubled evens
const sumOfDoubledEvens = numbers
  .filter((n) => n % 2 === 0)
  .map((n) => n * 2)
  .reduce((acc, n) => acc + n, 0);

  console.log(sumOfDoubledEvens);

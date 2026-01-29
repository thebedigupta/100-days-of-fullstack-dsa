// Day 1: Prime Check + Complexity Analysis
// Source: javascript.info/loops, variables

/**
 * Check if number is prime
 * Time Complexity: O(√n) - We only check up to square root of n
 *   Explanation: If n has a factor larger than √n, the paired factor
 *   must be smaller than √n. So we only need to check up to √n.
 * Space Complexity: O(1) - Only storing variable 'i', no data structures
 */
function isPrime(n) {
  // Edge cases: 0, 1 are not prime, 2 is prime
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false; // Even numbers > 2 not prime

  // Check odd divisors from 3 up to √n
  // We use i*i <= n instead of Math.sqrt(n) to avoid library dependency
  // and to explicitly see the √n boundary in code
  for (let i = 3; i * i <= n; i += 2) {
    if (n % i === 0) {
      return false; // Found divisor
    }
  }

  return true;
}

// Test the function
console.log('Is 17 prime?', isPrime(17)); // true
console.log('Is 18 prime?', isPrime(18)); // false

// Print all primes 1-100
console.log('\nPrimes from 1-100:');
const primes = [];
for (let num = 1; num <= 100; num++) {
  if (isPrime(num)) {
    primes.push(num);
  }
}
console.log(primes);
console.log(`Total primes found: ${primes.length}`); // Should be 25

/**
 * Complexity Analysis of the 1-100 loop:
 * Time: O(n * √n) = O(100 * 10) effectively O(n√n) for this range
 *   - Outer loop runs n times (100)
 *   - Inner loop runs √n times (worst case ~10)
 * Space: O(k) where k=number of primes (25), for the output array
 *
 * OPTIMIZATION INSIGHT:
 * If we were checking primes up to N, using Sieve of Eratosthenes
 * would be O(N log log N) time, O(N) space - faster for large N.
 * But for interview single-number checks, O(√n) per query is standard.
 */

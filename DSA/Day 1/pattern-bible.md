## Day 1: Basic Iteration + Square Root Optimization

### Pattern: Checking Divisibility Efficiently

When asked to check if n has any divisors:

- **Naive:** Loop 2 to n-1 → O(n) time
- **Optimized:** Loop 2 to √n → O(√n) time
  - Use `i * i &lt;= n` instead of `i &lt;= Math.sqrt(n)` (avoid floating point)
  - Skip even numbers after checking 2 (optimization)

### Big-O Quick Reference

- Single loop through n items: O(n)
- Nested loops (independent): O(n²)
- Loop only up to √n: O(√n)
- Simple variables/counters: O(1) space

### Interview Question Likelihood

- Easy: "Is this number prime?" → Expect O(√n) answer
- Follow-up: "Find all primes up to N" → Expect Sieve of Eratosthenes mention
- Trap: Using O(n) loop when O(√n) is possible = rejection at FANG

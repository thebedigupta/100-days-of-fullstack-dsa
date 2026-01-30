// Day 2: Control Flow + String Concatenation Pattern
// Source: javascript.info/ifelse, logical-operators

/**
 * FizzBuzz - The Interview Gatekeeper
 *
 * Time Complexity: O(n)
 *   Explanation: We must generate n outputs. Even if processing per item was O(1),
 *   the sheer act of producing n strings requires touching n elements.
 *   This is called an "Output Size Lower Bound" - we cannot beat O(n).
 *
 * Space Complexity: O(n) total [O(1) auxiliary]
 *   Explanation: The result array stores n strings (O(n) space).
 *   However, extra variables use O(1) space regardless of n.
 */

function fizzBuzz(n) {
  const output = [];

  for (let i = 1; i <= n; i++) {
    // PATTERN: String concatenation for multiple conditions
    // More elegant than: if (i%3===0 && i%5===0) ...
    let word = '';

    // Modulo operator (%) checks divisibility - O(1) math operation
    if (i % 3 === 0) word += 'Fizz'; // 15 % 3 === 0, so add "Fizz"
    if (i % 5 === 0) word += 'Buzz'; // 15 % 5 === 0, so add "Buzz" → "FizzBuzz"

    // Ternary operator (condition ? yes : no) for concise fallback
    // If word is empty string (falsy), use the number itself
    output.push(word ? word : String(i));

    /* VERBOSE VERSION (for clarity):
    if (word === "") {
      output.push(String(i));
    } else {
      output.push(word);
    }
    */
  }

  return output;
}

// Execution & Testing
console.log('FizzBuzz to 15:');
console.log(fizzBuzz(15));
// Expected: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

/**
 * OPTIMIZATION ANALYSIS:
 *
 * Why not check (i % 15 === 0) first for "FizzBuzz"?
 * → Because string concatenation handles it automatically!
 * 15 % 3 === 0 adds "Fizz", 15 % 5 === 0 adds "Buzz" → "FizzBuzz"
 * This is DRY (Don't Repeat Yourself) - we don't duplicate the "FizzBuzz" check.
 *
 * Why is O(n) the absolute minimum?
 * → We must create an array of n elements.
 * → Ω(n) is the lower bound for any algorithm that outputs n items.
 * Thus, our O(n) algorithm is "optimal" in terms of Big-O.
 */

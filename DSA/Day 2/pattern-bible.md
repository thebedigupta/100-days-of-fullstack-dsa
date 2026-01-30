## Day 2: String Concatenation Pattern + Output Lower Bounds

### Pattern: Building Strings with Multiple Conditions

When multiple conditions add to a result (e.g., Fizz + Buzz):

- **Anti-pattern:** if (cond1 && cond2) ... else if (cond1) ... else if (cond2)
- **Good-pattern:** Start empty string, append if cond1, append if cond2, check if empty at end.

### The Modulo Operator (%)

- `i % k === 0` means "i is divisible by k"
- Use for: "Every kth element", "Grouping items into buckets", "Circular arrays"

### Big-O Insight: Output Constraints

If the problem requires producing N items of output (e.g., array of length n),
the algorithm is automatically **Ω(n)** (Omega n) minimum.

- You cannot sort n items and claim O(log n) - you must touch each item to output it.
- This is why FizzBuzz is fundamentally O(n).

### Logical Operators Short-Circuit (&& and ||)

- `condition && doSomething()` - Only runs if condition is true
- `const value = input || "default"` - Assigns default if input is falsy

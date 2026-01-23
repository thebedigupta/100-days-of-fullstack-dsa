# Learnings – Truthy & Falsy, Validation Patterns

## Truthy & Falsy in JavaScript

JavaScript automatically converts values to `true` or `false` in conditional statements.

### Falsy Values (Only These)
- false
- 0
- -0
- 0n
- "" (empty string)
- null
- undefined
- NaN

Any of these values will behave like `false` inside an `if` statement.

### Truthy Values
Everything else is truthy, including:
- Non-empty strings ("error", "0", "false")
- Arrays ([])
- Objects ({})
- Functions
- Numbers other than 0

Understanding this is critical for writing clean validation logic.

---

## Validation Pattern Using Truthy/Falsy

A common backend pattern:

```js
const error = validateUsername(username);

if (error) {
  return res.status(400).json({ error });
}

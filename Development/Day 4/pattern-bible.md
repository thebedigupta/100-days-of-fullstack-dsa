
# JavaScript Pattern Bible - Day 4

## ✅ Patterns That Work

### Template Literals
```javascript
// CORRECT: Clean, no spacing bugs
const greeting = `Hello, ${name}!`;
```

### Object Methods
```javascript
// CORRECT: Method naming convention
getFullName: function() {
    return `${this.firstName} ${this.lastName}`;
}
```

### Array Iteration
```javascript
// CORRECT: forEach with index
contacts.forEach((person, index) => {
    console.log(`${index + 1}. ${person.getFullName()}`);
});
```

## ❌ Anti-Patterns (Never Again)

### String Concatenation Hell
```javascript
// WRONG: Spacing bugs
const msg = 'Hello' + name + '!' // Results in "HelloAlex!"
```

### Inconsistent Method Naming
```javascript
// WRONG: Case sensitivity nightmare
secondPerson.getfullName()  // ❌ lowercase f
thirdPerson.getFullName()   // ✅ uppercase F
// Result: TypeError: getFullName is not a function
```

### Forgetting 'this'
```javascript
// WRONG: Doesn't access object properties
getFullName: function() {
    return firstName + " " + lastName; // ❌ ReferenceError
}
```

## Day 6: Map, Filter, Reduce

### ✅ Pattern: Chainable Array Methods

```javascript
const result = numbers
  .filter(n =&gt; n &gt; 5)    // Keep 6,7,8,9,10
  .map(n =&gt; n * 2)       // Double to 12,14,16,18,20
  .reduce((a, b) =&gt; a + b, 0); // Sum to 80
```

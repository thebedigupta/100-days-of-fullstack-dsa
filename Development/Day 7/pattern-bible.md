## Day 7: Destructuring + No Loops

### ✅ Pattern: Destructure in Map
```javascript
// Don't repeat product.
shoppingList.map(({ item, quantity }) =&gt; `${item}: ${quantity}`);
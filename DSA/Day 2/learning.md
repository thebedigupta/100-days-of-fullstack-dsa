
# In-Place vs Extra Space & Key DSA Concepts

## 1️⃣ In-Place vs Extra Space

### 🔹 In-Place
**Definition:** A solution modifies the input array itself without creating extra memory that grows with input size.

✅ **Example (In-place)**
```javascript
const reverse = (nums) => {
    let left = 0, right = nums.length - 1;
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
    // Space Complexity → O(1)
};
```

❌ **Not In-place (Extra Space)**
```javascript
const reverse = (nums) => {
    const reversed = new Array(nums.length);
    for (let i = 0; i < nums.length; i++) {
        reversed[i] = nums[nums.length - 1 - i];
    }
    // Space Complexity → O(n)
};
```

---

## 2️⃣ Math Problems vs Placement Problems

### 🔹 Math Problems
You **calculate new values** based on input.

**Example:** Running Sum
```javascript
// nums = [1, 2, 3, 4]
nums[1] += nums[0];  // [1, 3, ...]
nums[2] += nums[1];  // [1, 3, 6, ...]
nums[3] += nums[2];  // [1, 3, 6, 10]
// Values change, positions stay same
```

### 🔹 Placement Problems
You **reuse existing values**, only positions change.

**Example:** Concatenate Array
```javascript
// nums = [1, 2, 3]
// output = [1, 2, 3, 1, 2, 3]
// Same values, repeated at new positions
```

**🔑 Keywords:** concatenate, shuffle, rearrange, permutation, build array

---

## 3️⃣ Input Size vs Output Size

**Critical Insight:** 
```
If output size > input size → NOT in-place
If output size ≤ input size → Might be in-place
```

Example:
```javascript
// Input: [1, 2, 3] (n=3)
// Output: [1, 2, 3, 1, 2, 3] (2n=6)
// ❌ NOT in-place (output > input)
```

---

## 4️⃣ Assignment (=) vs Accumulation (+=)

### 🔹 Assignment `=`
Used when a value is **written once**.
- No dependency on old value
- Each index handled independently

```javascript
output[i] = nums[i];  // Simple copy
```

### 🔹 Accumulation `+=`
Used when a **variable keeps growing**.
- Depends on previous value
- Same variable updated repeatedly

```javascript
sum += nums[i];  // Running total
```

**🔑 Mental Rule:**
- New value once → use `=`
- Growing value → use `+=`

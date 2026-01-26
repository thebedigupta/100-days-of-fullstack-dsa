
# Day 6 Notes

## Why Routes Should Never Be Inside Models/

### Layer Responsibility
- **Route**: HTTP request, response, status codes
- **Model**: Data rules, structure, constraints, DB logic

### What Breaks If Routes Are in Models?
- Models become tightly coupled to Express
- Cannot reuse models in:
    - Background jobs
    - Scripts
    - Tests
- Testing becomes painful
- Code stops scaling

### Industry Rule
Models must work even if Express disappears tomorrow.

---

## MongoDB Connection Failures

### Correct Behavior
The server should **NOT crash** when MongoDB is down.

### Actual Flow
```javascript
try {
    const user = await User.create(...)
} catch (error) {
    res.status(500).json({ error: "Failed to save user" });
}
```

**If server crashes**, it means:
- Error is unhandled, OR
- DB connection logic is wrong

---

## Password Hashing — Best Practice

### ❌ Wrong: Hashing in Routes
- Easy to forget in one route
- Others may bypass it
- Security becomes inconsistent

### ✅ Correct: Mongoose Middleware (Model Layer)
```javascript
userSchema.pre('save', async function(next) {
    this.password = await bcrypt.hash(this.password, 10);
    next();
});
```

**Why?**
- Every `.save()` hashes automatically
- No route can bypass it
- Security is enforced, not optional

### Q. Why is it dangerous if password hashing is optional instead of enforced by the model?

Password hashing must be enforced by the model because security must be guaranteed, not remembered.


## Why Optional Password Hashing is Dangerous

### Human Error
- One route forgets to hash
- One developer skips it
- One refactor breaks it
→ Plain-text passwords enter the DB

### Multiple Entry Points
- Admin scripts
- Seeders
- Background jobs
- Tests

If hashing is in routes, these paths bypass security.

### Security Must Be Invariant
- Routes change
- Models persist
- The model is the last line of defense.

### Damage is Irreversible
- If a plain password is stored even once
- A DB leak = total account compromise
- Hashing later cannot undo the leak

📌 **Core Principle:**
If something must ALWAYS be true about data, it belongs in the model. That’s the answer that signals backend maturity.


# Full Stack Notes — Day 12 & Day 13

These notes are based strictly on the questions you asked and the concepts I clarified while implementing

---

## 1. What `const users = await User.find()` Really Means

* `users` is **NOT a MongoDB field**
* `users` is a **JavaScript variable** that stores the result returned by MongoDB

MongoDB stores documents like:

```
{ username, email, password }
```

But when you write:

```
const users = await User.find()
```

You are saying:

> "Give me all documents from the users collection and store them in a JS variable called `users`"

So `users` becomes:

```
[
    { _id, username, email, password },
    { _id, username, email, password }
]
```

---

## 2. What `.select("-password")` Does

* This is called **projection**
* `-password` means **exclude the password field**

Why this matters:

* Even hashed passwords should **never be sent to the client**
* If data is not sent, it **cannot leak**

Security rule:

> Frontend should receive only what it absolutely needs.

---

## 3. What `await` Means (Very Important)

MongoDB operations are **asynchronous**.

Without `await`:

```javascript
const users = User.find();
```

* `users` is a **Promise**, not actual data
* Promise means: "Result will come later"

With `await`:

```javascript
const users = await User.find();
```

* JS waits until MongoDB responds
* `users` becomes real data (array)

Rule:

> Any DB call must be awaited before using its result.

---

## 4. What Happens If MongoDB Is Down

* Server should **NOT crash**
* Error is thrown during DB call
* `catch` block handles it
* Server continues running

Correct behavior:

```javascript
try { 
    // DB call 
}
catch { 
    return 500 
}
```

Crash = unhandled error (bug)

---

## 5. Why Empty Array (`[]`) Is Success, Not Error

* `User.find()` always returns an array
* If no documents exist → `[]`

Why this is correct:

* Query worked
* Data just doesn't exist yet

If it returned `null`, that would be a **bug**.

---

## 6. Why We Send `count` Along With Data

Example response:

```json
{
    "count": 2,
    "users": [...]
}
```

Reasons:

* Pagination support ("Showing 1–10 of 100 users")
* UI does not need to calculate
* Backend owns DB truth

Even if pagination is not implemented yet, API is **future-proofed**.

---

## 7. Why We Fetch Data in Two Places (API vs Dashboard)

### API Route (`/api/users`)

* Returns **JSON**
* Used by frontend JS, React, mobile apps

### Page Route (`/dashboard`)

* Returns **HTML (EJS)**
* Used by browser directly

Even though both fetch users, they serve **different consumers**.

---

## 8. Why `/dashboard` Should NOT Call `/api/users`

Calling API from server-side page causes:

* Unnecessary HTTP call to itself
* Slower execution
* Tight coupling
* More failure points

Bad flow:

```
dashboard → HTTP → api → DB
```

Good flow:

```
dashboard → DB
api → DB
```

Later improvement:

```
route → service → DB
```

---

## 9. What Tight Coupling Means

Tight coupling means:

> One part of the code depends heavily on another part's internal details.

Problems:

* Small change breaks many places
* Hard to refactor
* Hard to scale

Loose coupling means:

* Minimal assumptions
* Independent changes
* Easier maintenance

---

## 10. Why Password Hashing Must Be Enforced by the Model

Hashing must NOT be optional.

If hashing is done in routes:

* One route may forget
* Admin scripts may bypass
* Plain passwords can enter DB

If hashing is enforced in the model:

* Every save is secure
* No bypass possible
* Security is guaranteed

Rule:

> If something must ALWAYS be true about data, enforce it in the model.


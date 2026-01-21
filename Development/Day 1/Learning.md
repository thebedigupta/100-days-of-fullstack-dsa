Q1. I understand everything but still I don't know how this was happened how do I know window has how many features and when to use JS script and when use window thing

 <button onclick="window.location.href='/hello'">Button</button>

Answer : 

This confusion is **100% normal** — and you’ve hit a **real developer milestone**.

What you’re feeling is this:

> “I can use `window.location.href`, but I don’t know **how I was supposed to know that exists**.”

Let me remove that mystery **once and forever**.

---

# 🧠 Big Picture First (Very Important)

### JavaScript ≠ Browser

JavaScript itself is a **language**.
The browser gives JavaScript **extra powers**.

Those powers live inside **`window`**.

---

## 🔑 What `window` Actually Is

> **`window` is the browser’s control panel**

It represents:

* The current tab
* The URL
* The page
* The screen
* The history
* The storage
* Timers

So when you write:

```js
window.location.href = "/hello";
```

You are saying:

> “Hey browser, change the current page URL.”

---

# 📦 What Lives Inside `window` (Core Categories)

You don’t memorize this. You **recognize patterns**.

```
window
├── location   → URL control
├── document   → HTML / DOM
├── history    → back / forward
├── localStorage / sessionStorage
├── alert / confirm
├── setTimeout / setInterval
├── console
```

👉 **Rule of thumb**:

* Page / URL / tab related → `window`
* HTML elements → `document`
* Logic / calculations → plain JS

---

# 🎯 Why `window.location.href` Works

### `location` is an object

```js
window.location
```

It contains:

```js
{
  href,
  reload(),
  assign(),
  replace(),
  pathname,
  search
}
```

So this:

```js
window.location.href = "/hello";
```

Means:

> Set the browser’s URL to `/hello`

Which causes a **new GET request**.

---

# ❓ “How Was I Supposed to Know This Exists?”

### Honest answer:

👉 **You weren’t. At first.**

No developer memorizes this.

### How devs actually learn it:

1. They want to **change page**
2. They search:

   > “javascript redirect to another page”
3. They see:

   ```js
   window.location.href
   ```
4. They use it 5–10 times
5. It becomes muscle memory

This is **normal learning**, not weakness.

---

# 🧠 Inline `onclick` vs JavaScript Script — WHEN TO USE WHAT

This is important.

---

## 🔴 Inline HTML (What you used)

```html
<button onclick="window.location.href='/hello'">Button</button>
```

### When this is OK:

* Learning
* Small demos
* Quick tests
* Day 1 vertical slice ✅

### Why it works:

* Browser automatically executes JS written inside `onclick`

---

## 🟡 JavaScript Script (Preferred in real apps)

```html
<button id="btn">Button</button>

<script>
  document.getElementById("btn").addEventListener("click", () => {
    window.location.href = "/hello";
  });
</script>
```

### When to use this:

* Real projects
* Clean code
* Separation of concerns
* React / modern JS

---

## 🔑 Rule (MEMORIZE THIS)

> **HTML describes structure**
> **JavaScript describes behavior**

Inline JS mixes both — OK for learning, not ideal long-term.

---

# 🧭 Mental Model That Will Save You Forever

Whenever you want to do something, ask:

### 1️⃣ Is this about the **page / browser / URL**?

➡️ Look inside `window`

### 2️⃣ Is this about **HTML elements**?

➡️ Look inside `document`

### 3️⃣ Is this about **logic / data / calculation**?

➡️ Plain JavaScript

That’s it. That’s the rule.

---

# 🧪 How You Can EXPLORE `window` Yourself (Very Important)

Open browser console and type:

```js
window
```

Then try:

```js
window.location
window.document
window.history
```

This is how **real devs learn**, not by notes.

---

# 🔁 Why You Felt Confused (THIS IS IMPORTANT)

You jumped from:

* “I know JS”
  to
* “Browser has extra powers”

That gap causes confusion.

Now you know:

> JavaScript + Browser APIs = Frontend Power



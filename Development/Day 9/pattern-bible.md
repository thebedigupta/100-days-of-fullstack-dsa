## Code Example: Creating a Promise from setTimeout

```javascript
// Convert setTimeout to a Promise
function delay(message, ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(message);
            resolve(); // Promise is fulfilled
        }, ms);
    });
}

// Test it
delay("Hello from Promise", 1000)
    .then(() => console.log("Promise resolved!"));
```

**What happens here:**
1. `delay()` returns a new Promise
2. Inside, `setTimeout` waits for `ms` milliseconds
3. When time's up, it logs the message and calls `resolve()`
4. The `.then()` callback fires immediately after `resolve()` is called
5. Output: First "Hello from Promise", then "Promise resolved!"


# Promise Wrapper Pattern: setTimeout Explained

## 1. What is `resolve()` Doing?

`resolve()` is the **"I'm Done!" Button** that bridges the gap between `setTimeout` and Promises.

- `setTimeout` just waits—it doesn't signal completion
- `resolve()` is the messenger that tells the Promise "we're finished"
- Without `resolve()`, the Promise stays in "Pending" mode forever and `.then()` never runs

## 2. How the Code Works (The Relay Race)

| Stage | Action |
|-------|--------|
| **Start** | Call `delay("Hello", 1000)` |
| **Promise Created** | A "Receipt" is generated |
| **Timer Starts** | `setTimeout` counts down |
| **Return Immediately** | Promise object returned; timer ticks in background |
| **Countdown Ends** | After 1 second, `console.log("Hello...")` runs |
| **resolve() Called** | Signal that the Promise is complete |
| **Then Fires** | `.then()` callback executes |

## 3. Promises vs. Callbacks

### The Old Way (Callbacks)
```javascript
function oldDelay(msg, ms, callback) {
    setTimeout(() => {
        console.log(msg);
        callback(); // Must call manually
    }, ms);
}

oldDelay("Hello", 1000, () => console.log("Done!"));
```

### The New Way (Promises)
```javascript
delay("Hello", 1000).then(() => console.log("Done!"));
```

## 4. The Problem It Solves: "Callback Hell"

### Without Promises (Pyramid of Doom)
```javascript
setTimeout(() => {
    console.log("1");
    setTimeout(() => {
        console.log("2");
        setTimeout(() => {
            console.log("3");
        }, 3000);
    }, 2000);
}, 1000);
```

### With Promises (Clean & Flat)
```javascript
delay("1", 1000)
    .then(() => delay("2", 2000))
    .then(() => delay("3", 3000));
```

## Summary

Promises eliminate callback nesting by transforming deeply indented "pyramid" code into a readable, linear chain of `.then()` calls.

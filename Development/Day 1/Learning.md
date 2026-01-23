# Day 1 – Learnings, Why Things Work, and Mental Models

## 1. HTTP Status Codes vs JSON Response Body

I learned that HTTP responses have TWO layers:
1. Status code → for machines (frontend logic, browser, tools)
2. Response body (JSON) → for humans (messages, data)

Sending only JSON without status codes is wrong because:
- The frontend cannot reliably detect failure
- `res.ok` depends on status code, not JSON content

Correct approach:
- Use 4xx status codes for client errors
- Use 2xx status codes for success
- Always pair status with meaningful JSON message

---

## 2. Why We Avoid Page Reloads (AJAX)

Page reload:
- Destroys entire UI
- Loses state (input, scroll, JS memory)
- Feels slow and outdated

AJAX:
- Sends only data, not the whole page
- Updates only what is needed
- Creates smooth, modern user experience

Modern apps (Gmail, WhatsApp Web, dashboards) rely on this model.

---

## 3. Why `event.preventDefault()` Is Critical

Forms have default browser behavior:
- Submit request
- Reload page

Using `preventDefault()`:
- Stops browser control
- Gives full control to JavaScript
- Enables AJAX-based workflows

Without this line, AJAX responses are lost due to reload.

---

## 4. How Frontend and Backend “Agree” on Data Format

Frontend and backend must speak the same language.

For JSON:
- Frontend must send:
  - `Content-Type: application/json`
  - JSON string body
- Backend must use:
  - `express.json()` middleware

If either side is missing, `req.body` becomes undefined.

---

## 5. Understanding `async` / `await`

Network requests take time.
JavaScript does not wait by default.

- `fetch()` returns a Promise
- `await` pauses execution until response arrives
- Any function using `await` must be marked `async`

Rule:
If an operation depends on external systems (network, DB, file system), it is asynchronous.

---

## 6. Understanding `res` in Different Contexts

`res` is just a variable name, but its meaning depends on context:

Backend (`server.js`):
- `res` = response object used to SEND data to client

Frontend (`fetch`):
- `res` = response object RECEIVED from server

They are different objects living in different environments.
The name is just a convention.

---

## 7. Why Validation Belongs in Backend

Frontend validation improves UX but:
- It can be bypassed
- It cannot be trusted

Backend validation is mandatory because:
- Backend is the final authority
- Protects data integrity
- Prevents bad or malicious input

---

## Reflection

I restarted 100 Days of Code with a new mindset:
- Focus on understanding, not speed
- Build vertical slices, not isolated topics
- Document WHY things work, not just WHAT I did

Consistency and clarity matter more than intensity.


# Day 5–Day 7 – Validation, Forms, CSS Basics & Project Structure

## Day 5 – Validation & Error Handling

- Validation must exist at three levels:
  - HTML validation (`required`, `minlength`) for basic UX
  - JavaScript validation for custom control and messages
  - Backend validation as the final authority (cannot be skipped)

- Frontend validation improves user experience but cannot be trusted.
- Backend validation is mandatory because requests can bypass frontend.

- HTTP responses have two parts:
  - Status code → for machines (`res.ok`)
  - JSON body → for humans (message / error)

- Sending errors with status `200` is incorrect.
- Client errors should use `4xx` status codes.

- `res.ok` is a built-in Fetch API property.
  - It becomes `true` only for `2xx` responses.

- Used early return pattern in backend:
  ```js
  if (error) return res.status(400).json(...)

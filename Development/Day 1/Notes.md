# Day 1 – Restarting 100 Days of Code (Full Stack)

## Goal of the Day
Build a modern full-stack flow where:
- User submits data from frontend
- Data is sent using AJAX (fetch)
- Backend validates input
- Backend responds with proper HTTP status + JSON
- Frontend updates UI without page reload

---

## Frontend Work

### Form Handling
- Created an HTML form with input field and submit button
- Used `submit` event instead of `click` to support:
  - Mouse click
  - Enter key press
- Prevented default browser behavior using `event.preventDefault()`

### AJAX Request
- Used `fetch()` to send POST request
- Sent data as JSON using:
  - `JSON.stringify()`
  - `Content-Type: application/json` header
- Used `async/await` to handle asynchronous network request

### UI Update
- Parsed JSON response from backend
- Displayed success or error message dynamically
- No page reload occurred (single-page behavior)

---

## Backend Work

### Server Setup
- Used Express.js for backend server
- Added `express.json()` middleware to parse JSON request body

### API Route
- Created POST route `/api/hello`
- Read data using `req.body.username`

### Validation Logic
- Checked for missing username
- Returned error response early using `return`

### HTTP Response
- Sent proper HTTP status codes:
  - `400` for client error (invalid input)
  - `200` for successful request
- Sent JSON responses using `res.json()`

---

## HTTP & Web Concepts Used
- Difference between GET and POST
- Difference between form submit and AJAX
- HTTP status codes (2xx vs 4xx)
- Request–response lifecycle
- Client vs server responsibility

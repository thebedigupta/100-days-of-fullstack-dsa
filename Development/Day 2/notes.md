# Day 2

# Validation, Multi-Input Forms & Basic UI

## Overview
In this phase, I focused on making the application more realistic by:
- Validating user input properly
- Handling multiple fields together
- Improving UI usability with basic CSS
- Setting correct project structure for static assets

This moved the app from “working demo” to “usable application”.

---

## Validation & Error Handling

### Frontend
- Used HTML validation attributes:
  - required
  - minlength
- Added JavaScript validation for:
  - Empty input
  - Minimum length
- Prevented form submission using `event.preventDefault()`
- Displayed clear error messages without page reload

### Backend
- Implemented server-side validation (final authority)
- Used early return pattern for errors
- Sent proper HTTP status codes (400 for client errors)
- Returned consistent JSON responses

### Key Pattern
Frontend validation = UX  
Backend validation = correctness & security

---

## Handling Multiple Inputs

### Frontend
- Created a form with multiple inputs:
  - username
  - email
  - password
- Grouped inputs into a single object before sending
- Sent structured JSON using fetch
- Validated fields individually

### Backend
- Destructured request body
- Validated each field independently
- Ensured consistent request shape between frontend and backend

### Key Pattern
Think in objects, not individual variables.
This directly prepares for database and authentication work.

---

## Basic Layout & CSS

### UI Improvements
- Wrapped UI inside a `.container`
- Centered layout using margin auto
- Added spacing with padding
- Improved readability and visual hierarchy
- Added subtle box-shadow for depth

### CSS Concepts Used
- Box model (margin vs padding)
- max-width for responsive layouts
- box-shadow for elevation
- Flexbox for vertical alignment

### Static Files Setup
- Created `public/css/style.css`
- Used `express.static(path.join(__dirname, "public"))`
- Linked CSS in EJS using `/css/style.css`

### Result
The app now looks clean, readable, and usable without changing core logic.

---

## Files & Structure
- views/ → EJS templates
- public/ → static assets (CSS)
- Backend logic kept separate from UI styling

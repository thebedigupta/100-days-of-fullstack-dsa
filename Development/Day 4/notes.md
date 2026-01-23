# Day 4 Modular Routes, Refactoring & Mini Project v1

## Modular Routes

### Backend Structure
- Created `routes/` folder
- Moved API routes out of `server.js`
- Used `express.Router()` for modular routing
- Mounted routes using `app.use("/api", apiRoutes)`

### Routing Logic
- Route prefixing:
  - `app.use("/api", apiRoutes)`
  - `router.post("/hello")`
  - Final route → `/api/hello`

### Static Files
- Served static assets using:
  ```js
  app.use(express.static(path.join(__dirname, "public")));

## Truthy & Falsy (JavaScript)

Falsy values (only these):
- false
- 0, -0, 0n
- ""
- null
- undefined
- NaN

Everything else is truthy:
- non-empty strings
- arrays
- objects
- functions
- numbers other than 0

Truthy/falsy behavior is used in validation patterns like:
if (error) return res.status(400).json({ error });

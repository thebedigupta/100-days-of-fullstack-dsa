# Day 5 – MongoDB & Mongoose Integration

## Goal
Persist user data so it survives server restarts and page refreshes.

## What Was Built
- Connected MongoDB to Express app
- Created User schema using Mongoose
- Saved form data to database
- Verified data in MongoDB Atlas

## Key Steps
- Installed mongoose
- Created `config/db.js` for DB connection
- Connected DB before `app.listen()`
- Created `models/User.js`
- Used `User.create()` to store data

## Result
Application now persists data in MongoDB instead of memory.

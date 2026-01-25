# Day 5 – Learnings

## Stateless vs Stateful
- Stateless: server does not remember data between requests
- Stateful: data persists using a database

## Database Connection Order
- Database must connect before server listens
- Prevents accepting requests the app cannot handle

## Mongoose Basics
- Mongoose is a bridge between JavaScript and MongoDB
- Schema defines data shape and constraints
- Model provides methods to interact with database

## Async Database Operations
- DB operations take time and can fail
- Use async/await with try/catch for safety

## MongoDB Behavior
- Databases and collections are created only after first insert
- Atlas UI shows nothing until data exists

## Engineering Practice
- Scope was frozen to focus on persistence only
- Avoided adding auth, hashing, or extra features
- One concept mastered before moving on

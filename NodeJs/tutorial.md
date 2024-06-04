## Server Start Configuration option in package.json

"start": "npm server.js", // If any change occurs manual restart is needed.
"start": "nodemon server.js", // Tracks changes automatically
"start": "nodemon --env-file=.env server.js", // Allow access of things in .env file

### Error

"start": "nodemon --env-file =.env server.js", // Allow access of things in .env file
"start": "nodemon --env-file= .env server.js", // Allow access of things in .env file

**Note:** Don't put space between "--env-file=.env"

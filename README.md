# NodeProject4
---
## File Structure

<pre>
  db
    |----db.js                  function which connect MongoDB
  models
        |----user.model.js      create user Model
        |----note.model.js      create note Model
  routes
        |----note.route.js      for creating routing of notes
        |----user.route.js      for crearting route of users 
  app.js                        
  server.js
  
</pre>
---
### Create Node Project
<pre>
   npm init -y
</pre>

### Installs Dependencies
<pre>
  npm install bcryptjs
  npm install cors
  npm install dotenv
  npm install express
  npm install jsonwebtoken
  npm install mongoose
  npm install morgan
  npm install nodemon
  
</pre>
---
## All Types of Routing
###  user register
<pre>
   POST https://nodeproject4.onrender.com/api/users/register
</pre>

### user login
<pre>
  POST  https://nodeproject4.onrender.com/api/users/login
</pre>

### Create a Note
<pre>
  POST https://nodeproject4.onrender.com/api/notes/
</pre>
### get all notes with a specific user
<pre>
  GET https://nodeproject4.onrender.com/api/notes/
</pre>
###  update note
<pre>
  PUT https://nodeproject4.onrender.com/api/notes/:id
</pre>
### delete a Node
<pre>
  DELETE https://nodeproject4.onrender.com/api/notes/:id
</pre>










  

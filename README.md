# CommentSection

In order to run the app, initially start the mongodb Server, then follow the following steps

<ol>
<li> cd to CommentSection Folder
<li> on CMD, type<b> npm install</b> in order to install all the modules and their dependency.
<li> run the project by typing <b>node app.js</b>
</ol>

The following app allow user to simply post the comment and upvotes and downvotes the particular comments.

<b>The directory description is as follow:</b>

routes--> inside routes folder we have routes.js file, which include all the routes

models--->Inside the models folder we have database.js file, in which we define the schema of the collection using mongoose.

public---> For static files.


<b>The following routes are implemented:</b>

<ol>
<li>get('/comment')--->Inorder to get all the comment
<li>post('/comment')---->In order to insert the comment along with upvotes and downvotes
<li>put('/comment/upvotes/:id')--->In order to Increase the value of upvotes by one
<li>put('/comment/downvotes/:id')--?in order to increase the value of downvotes by 1
</ol>

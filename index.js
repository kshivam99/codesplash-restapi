const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');
const port = process.env.PORT || 3000;


//models
//Courses
//Playlist
//Bookmarks

//USER


//middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//import routes
const coursesRoute = require('./routes/courses');
const playListRoute = require('./routes/playListRoute');
const authRoute = require('./routes/auth');
const bookmarkRoute = require('./routes/bookmark');
const notesRoute = require('./routes/notes');
const historyRoute = require('./routes/history');

app.use('/courses', coursesRoute);
app.use('/playlist', playListRoute);
app.use('/bookmark', bookmarkRoute);
app.use('/auth', authRoute);
app.use('/notes', notesRoute);
app.use('/history', historyRoute);




//Routes
app.get('/', (req, res) => {
    res.send("We are on home")
})


//connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, ()=>console.log("Connected to DB"))

//Listening to the server
app.listen(port, ()=>console.log(`Server started at http://localhost:${port}/`));


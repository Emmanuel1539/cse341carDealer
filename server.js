const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const passport = require('passport');
const session = require('express-session');
const GitHubStrategy = require('passport-github2').Strategy;
const cors = require('cors');


const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app
  .use(express.json())
  // This is the basic express session({..}) initialization
  .use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
  }))
  .use(passport.initialize())
  // initialize passport on every route call
  .use(passport.session())
  // allow passport to use "express-sesion"
  
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      "Access-Control-Allow-Headers", 
      "Origin, X-Request-With, Content-Type, Accept, Z-key"
    )
    res.setHeader(
      'Access-Control-Allow-Methods', 
      'GET, POST, PUT, DELETE, OPTIONS'
    );
    next();
    })
  .use(cors({method: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']}))
  .use(cors({origin: "*"}))
// Use routes
  .use('/', require('./routes/index.js'));

passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: process.env.CALLBACK_URL
},
function(accessToken, refreshToken, profile, done){
  // User.findOneCreate({githubId: profile.id}, function(err, user) {
  return done(null, profile);
// }))
}
));

passport.serializeUser((user, done) => {
  done(null, user)
});
passport.deserializeUser((user, done) =>{
  done(null, user);
});

app.get('/', (req, res) => {
  res.send(req.session.user !== undefined ? `Logged in as ${req.session.user.displayName}` : `Logged Out`
)});
// github callback added.
app.get('/github/callback', passport.authenticate('github', {
  failureRedirect: '/api-docs', session: false
}),
(req, res) => {
  req.session.user = req.user;
  res.redirect('/')
}
)

// MongoDB connection
mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
const passport = require('passport');

const router = require('express').Router();



// Apply the customer-specific routes using middleware
router.use('/', require('./swagger'))

router.use('/customers', require('./customerRoute'));
router.use('/vehicles', require('./vehicleRoute'));

// router.get('/', (req, res) => {
//     // #swagger-tags-['Hello world']
//     res.send('Hello customers');})

// // Apply the customer-specific routes using middleware
// router.use('/vehicles', (req, res) => {
//     // #swagger-tags-['Hello world']
//      res.send('Hello vehicles'); 
// });

router.get('/login', passport.authenticate('github'),(req, res) => {});

router.get('/logout', function(req, res, next){
    req.logout(function(err){
        if(err){return next(err);}
        res.redirect('/');
        });
    
    });


module.exports = router;
const express = require('express');
const morgan = require('morgan')
const mongoose = require('mongoose');
const Userinfo = require('./database');
const { noConflict } = require('lodash');
const { localsName } = require('ejs');

// express app
const app = express();

const dbURI = 'mongodb+srv://AgencyEnterprises:SLzH0hiaQzlO4w4T@cluster0.bordm4p.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));


// register view engine
app.set('view engine', 'ejs')

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// app.get('/createnewacc', (req, res) => {
//     const userinfo = new Userinfo({
//         username: 'agency',
//         password: 'password',
//     });

//     userinfo.save()
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// })

app.locals.ainfo = null;
app.locals.loginbool = null;
app.post('/createnewacc', (req, res) => {
    const temp = req.body;
    console.log(temp)
    const username = temp.username
    const password = temp.password
    const redgameswon = 0
    const bluegameswon = 0
    const gamesplayed = 0
    const userinfo = new Userinfo({username: username, password: password, redgameswon: redgameswon, bluegameswon: bluegameswon, gamesplayed: gamesplayed});

    userinfo.save()
        .then(() => {
            Userinfo.findOne({username: username}, function(err, allinfo) {
                if (err) {
                    console.log(err);
                } else {
                    app.locals.ainfo = allinfo;
                    res.render("home");
                }
            })
        })
        .catch((err) => {
            console.log("err")
        })
})

app.post('/loginaction', (req, res) => {
    app.locals.loginbool = true
    const temp = req.body;
    const username = temp.username;
    const password = temp.password;

    Userinfo.findOne({username: username, password: password}, function(err, allinfo) {
        if (!allinfo) {
            app.locals.loginbool = false;
            console.log("user was not found");
            res.render("login");
        } else {
            app.locals.ainfo = allinfo;
            res.render("home");
        }
    })
})

app.get('/', (req, res) => {

    res.render('home');

});

app.get('/createacc', (req, res) => {
    if (app.locals.loginbool != null) {
        res.render('home');
    }
    else {
        res.render('createacc');
    }

});

app.get('/about', (req, res) => {
 
    res.render('about', { info: null});


});


app.get('/connect4', (req, res) => {

    
    res.render('connect4');

});

app.get('/login', (req, res) => {
    if (app.locals.loginbool != null) {
        res.render('home');
    }
    else {
        res.render('login');
    }

})

app.get('/logout', (req, res) => {
    if (app.locals.loginbool != null) {
        app.locals.ainfo = null;
        app.locals.loginbool = null;
    }
    res.render('home')
})

app.get('/profile', (req, res) => {
    if (app.locals.ainfo != null) {
        res.render('profile');
    }
    else {
        res.render('home');
    }

})

app.get('/all-userinfo', (req, res) => {
    Userinfo.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log("error")
        })
})

app.use((req, res) => {
    res.status(404).render('404');
});

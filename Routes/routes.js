const express = require('express');
const router = express.Router();
const Subscriber = require('./models/subscribers');
const bcrypt = require('bcrypt');
const AppError = require('../AppError');
const flash = require('connect-flash');


// router.use((err, req, res, next)=>{
//     const {message = "Something Went wrong", status = 500} = err;
//     if(status === 401){
//         // res.redirect("/login");
//         console.log(res);
//         res.render("login",{e : 1});
//     }else{
//         res.render("error",{message, status});
//     }
// });


router.get("/home", async(req, res) => {
    if(req.session.login){
        const ob = await Subscriber.findById(req.session.login);
        res.render("app.ejs", {login : 1, user : ob});
    }else{
        res.render("app.ejs", {login : 0});
    }
});

// router.get("/login", (req, res) => {
//     res.render("login.ejs",{e : 0});
// });

const wrapperFunc = (fn)=>{
    
}

// router.post("/home", (req, res, next) => {
//     Subscriber.findOne({Email : req.body.Email})
//         .then((ob)=>{
//             console.log(ob);
//             if(req.body.Password == ob.Password){
//                 res.render("app",{login : 1});
//             }else{
//                 next(new AppError("Wrong EmailID or Password", 401));
//             }
//         })
//         .catch((err)=>{
//             console.log(err);
//             next(new AppError("Wrong EmailID or Password", 401));
//         })
// });
router.use(flash());
router.get("/register",(req, res)=>{
    res.render("register.ejs");
});

router.post("/postRegister", (req, res, next)=>{
    Subscriber.find({Email : req.body.email})
    .then(async(ob)=>{
        if(ob[0] == undefined){
            req.body.Password = await bcrypt.hash(req.body.Password, 12);
            new Subscriber(req.body).save()
            .then(()=>{
                res.redirect("/login");
            })
            .catch((err)=>{
                next(new AppError("Please Try again", 500));
            })
            }else{
                res.redirect("/login");
            }
    })
    .catch(()=>{
        next(new AppError("Server Side Fault", 500));
    })
});

router.get("/CreateLedge",(req, res)=>{
    if(req.session.login){
        res.render("CreateLedge");
    }else{
        req.flash("info","Please Login to continue");
        res.redirect("/login");
    }
});


router.get("/logout",(req, res)=>{
    req.session.login = false;
    res.redirect("/home");
});

module.exports = router;
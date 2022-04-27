const express = require('express');
const router = express.Router();
const Subscriber = require('./models/subscribers');
const bcrypt = require('bcrypt');
const flash = require('connect-flash');
// const AppError = require('../AppError');

router.use(flash());
router.get("/", (req, res) => {
    res.render("login.ejs",{messages : req.flash("info")});
    
});

router.post("/", (req, res, next) => {
    Subscriber.findOne({Email : req.body.Email})
        .then(async(ob)=>{
            const check = await bcrypt.compare(req.body.Password, ob.Password);
            if(check){
                req.session.login = ob._id;
                res.redirect("/home");
            }else{
                req.flash("info","Email or Password is wrong, try again");
                res.redirect("/login");
            }
        })
        .catch((err)=>{
            req.flash("info","Email or Password is wrong, try again");
            res.redirect("/login");
        })
});

module.exports = router;
const express = require('express');
const app = express();
// const AppError = require('./AppError');
const routes = require('./Routes/routes');
const session = require('express-session');
const loginRoute = require('./Routes/Login');
// const Subscriber = require('./models/subscribers');

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/Ledge')
    .then(() => {
        console.log("Connected")
    })
    .catch(err =>{
        console.log("Connection failed")
    })




app.listen(1892);

app.set("view engine", "ejs");

app.use(express.static("static"));
app.use(express.urlencoded({extended : true}));

const sessionOptions = {
    secret : "HelloIamSecret", 
    resave : false,
    saveUnintialized : false,
    cookie : {
        expires : (60000 * 15)
    }
}
app.use(session(sessionOptions));

app.use("/", routes);
app.use("/login", loginRoute);

app.use((err, req, res, next)=>{
    const {message = "Something Went wrong", status = 500} = err;
    if(status === 401){
        // res.redirect("/login");
        console.log(res);
        res.render("login",{e : 1});
    }else{
        res.render("error",{message, status});
    }
});


// app.get("/home", (req, res) => {
//     res.render("app.ejs", {login : 0});
// });

// app.get("/login", (req, res) => {
//     res.render("login.ejs",{e : 0});
// });

// app.post("/home", (req, res, next) => {
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

// app.get("/register",(req, res)=>{
//     res.render("register.ejs");
// });



// app.post("/postRegister", (req, res, next)=>{
//     console.log(req.body);
//     new Subscriber(req.body).save()
//         .then(()=>{
//             res.send("Added to DB")
//         })
//         .catch((err)=>{
//             next(new AppError("Please Try again", 500));
//         })
// });

// app.get("/CreateLedge",(req, res)=>{
//     res.render("CreateLedge");
// });

// app.use((err, req, res, next)=>{
//     const {message = "Something Went wrong", status = 500} = err;
//     if(status === 401){
//         // res.redirect("/login");
//         console.log(res);
//         res.render("login",{e : 1});
//     }else{
//         res.render("error",{message, status});
//     }
// });
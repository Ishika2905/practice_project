const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middlewares/errorHandler");
const cors= require("cors");
const hbs = require("hbs");
const path = require("path");
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });

const users = [
    { name: "Harman Dhiman", age: 20 },
    { name: "Hindveer", age: 19 },
    { name: "Jaikirat", age: 20 },
];
const app = express();
const port = process.env.PORT || 5000;
const dotenv = require("dotenv");
 dotenv.config();
 connectDb();
app.use(express.json());
app.use(cors());
app.get('/' , (req , res)=>{
    res.send("working");
})
app.set('view engine' , 'hbs');
app.set('views', path.join(__dirname, 'views'));

hbs.registerPartials(path.join(__dirname, 'views/partials'));
app.get("/home",(req , res)=>{
    res.render("home" , {
       username:" Harman Dhiman",
       posts : " time pass"
    })
})
app.get("/alluser", (req, res) => {
    res.render("alluser", {
        users: users, 
    });
});
//register route
app.use("/api/register" , require("./Routes/userroutes"));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/tmp/my-uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
  const uploads = multer({ storage: storage });
app.post('/profile', upload.single('avatar'), function (req, res, next) {
    console.log(req.body);
    console.log(req.file);
    return res.redirect("/home");
  })
app.listen(port , ()=>{
    console.log(`server running on http://localhost:${port}`);
})
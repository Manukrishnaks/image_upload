// app.get("/",(req,res)=>{
//   res.render("user");
// });

const express = require("express");
const path = require("path");
const router = require("./router/router");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(express.static(path.join(__dirname, "style")));

app.use("/", router);
app.listen(5555, (req, res) => {
  console.log("server connected");
});



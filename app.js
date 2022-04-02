const express = require("express");

const app = express();

const dashboardRoutes = require("./routes/dashboard");

const bodyParser = require("body-parser");

require("dotenv").config();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(dashboardRoutes);

//404 routes
app.use((req, res, next) => res.render("404"))

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT || 5000}`);
});

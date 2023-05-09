const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGO_URL;

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const SouvenirRouter = require("./routes/souvenirRoute.js");
const UserRouter = require("./routes/UserRoutes.js");
const tourspotRoute = require("./routes/tourspotRoute.js");
const tourspotorderRoute = require("./routes/tourspotorderroute.js");
const tourspotpayment = require("./routes/tourspotpaymentRoute.js");
app.use("/souvenir", SouvenirRouter);
app.use("/users", UserRouter);
app.use("/tourspot", tourspotRoute);
app.use("/tourspotorder", tourspotorderRoute);
app.use("/tourspotpayment", tourspotpayment);

app.listen(PORT, () => {
    console.log(`Server is up and running on port number: ${PORT}`);
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Mongodb Connection success!");
});
require('dotenv').config();
const express = require("express");
const app = express();
const authRoute = require("./route/auth-route");
const contactRoute = require("./route/contact-route");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use(errorMiddleware);

const PORT = 5000;

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running at Port: ${PORT}`);
    });
});
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());


const CONNECTION_URL = "mongodb+srv://Bhavya:Bhavya123@cluster0.jfzox.mongodb.net/?retryWrites=true&w=majority";
const POST = process.env.PORT || 5000;

// not necessary but might get warnings in the console
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`)
        }
        )
    .catch((error) => {
        console.log(error.message)
    })
    })

// To avoid any warnings in the console
mongoose.set('useFindAndModify', false);
// https://www.mongodb.com/cloud/atlas
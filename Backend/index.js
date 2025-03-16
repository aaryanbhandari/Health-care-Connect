import express from 'express'
import { configDotenv } from 'dotenv';
configDotenv();
const app = express();
const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.json({ msg: "Hello World" })
})

app.listen(PORT);

// import dotenv from 'dotenv';
// dotenv.config({path: __dirname + '../.env'}); /// load from './.env' file

import  express from "express";
import './config/mongo.js'
import routes from "./routes/index.js";
import cors from 'cors'
import morgan from 'morgan'
import errorhandler from 'errorhandler'
import session from 'express-session'

const app = express();

app.use(cors())
app.use(errorhandler())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'placki keyboard cat',
  resave: false,
  saveUninitialized: true, 
  cookie: { secure: true }
}))


// Forms
app.use(express.urlencoded())
// JSON
app.use(express.json())


app.get('/',(req,res)=>{
  res.send('Hello world!')
})

app.use('/api/',routes)


const PORT = process.env.PORT;
const HOST = process.env.HOST;

app.listen(PORT, HOST, () => {
  console.log(`Listening on http://${HOST}:${PORT}/`);
});


export default routes
require('dotenv').config()
const express = require('express')
const cors = require('cors');
const app = express()
const cookieParser = require('cookie-parser');
const bodyParser = require("body-parser")


// const connectDB = require('./db/connect')

//routers
const test = require('./routes/test')
const auth = require('./routes/auth')
const league = require('./routes/league')
const userpicks = require('./routes/userPicks')
const users = require('./routes/users')
const lisitng = require('./routes/listing')


//middleware
const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')


//adding cors
const corsConfig = {
    credentials: true,
    origin: true,
};
app.use(cors(corsConfig));
// app.use(cors());
// app.use(cors({credentials: true, origin: 'http://localhost:3001'}));
// app.use((req,res,next)=>{
//     res.header('Access-Control-Allow-Headers, http://localhost:3001, Access-Control-Allow-Origin', 'Origin, X-Requested-with, Content_Type,Accept,Authorization','http://localhost:3001');
//     if(req.method === 'OPTIONS') {
//         res.header('Access-Control-Allow-Methods','PUT,POST,PATCH,DELETE,GET');
//         return res.status(200).json({});
//     }
//     next();
// });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));

///app.use(morgan('tiny'))

// app.use(express.static(__dirname + '/frontend'))


// app.get('/*', (req, res) => {
//     res.sendFile(__dirname + `${req && req.url && req.url.includes('api') ? "" : "/frontend/index.html"}`);
//     return;
// })

// app.get('/', (req, res) => {
//     res.send('hello zombie app is running')
//     res.send('hello')
// })


//controllers
app.use('/api/v1', test)
app.use('/api/v1/auth', auth)
app.use('/api/v1', league)
app.use('/api/v1', userpicks)
app.use('/api/v1', users)
app.use('/api/v1/listing', lisitng)


app.use(notFoundMiddleware)
app.use(errorMiddleware)

// app.use(function(err,req,res,next){
//     res.status(500).send({msg:'something went wrong'})
// })

const port = 3000 || process.env.PORT;

const start = async () => {
    try {
        app.listen(port, () => {
            console.log(`Server is listening to the ${port}`)
        })
        // return;

    } catch (error) {
        console.log(`app.js --> ${error}`)
        // return;
    }
}

start();
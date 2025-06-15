const dotenv=require("dotenv")
dotenv.config()

const express=require("express")
const morgan=require("morgan")
const {dbConnect}=require("./db/db")
const cors=require("cors")
const userRouter=require("./routes/user.route")
const noteRouter=require("./routes/note.route")

//connect database

dbConnect()

app=express()
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Backend is Running')
})

app.use('/api/users',userRouter)

app.use('/api/notes',noteRouter)

module.exports={app}
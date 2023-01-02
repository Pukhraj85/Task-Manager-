
const express = require('express')
const app = express()
const tasks=require('./routes/tasks')

const connecDB=require('./db/connect')
require('dotenv').config()
const notFound=require('./middleware/not_found')
const errorHandllerMiddleware=require('./middleware/error_handler')


app.use(express.static('./public'))
app.use(express.json())


app.use('/api/v1/tasks',tasks)
app.use(notFound)
app.use(errorHandllerMiddleware)


const port = process.env.PORT  || 5000

const start = async () =>{
    try{
        await connecDB(process.env.MONGO_URI)
        app.listen(port,console.log(`server is listening on port ${port}...`))
    } 
    catch (error){
        console.log(error)
    }
}

start() 







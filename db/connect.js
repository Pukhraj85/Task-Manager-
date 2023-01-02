const mongoose = require('mongoose')

const connecDB = (url)=>{
    return mongoose.connect(url,{
        useNewUrlParser:true,
        useCreateIndex:true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
}   
module.exports = connecDB

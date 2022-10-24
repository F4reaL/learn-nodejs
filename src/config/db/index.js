const mongoose = require('mongoose')

async function connect(){
    try {
        await mongoose.connect('mongodb://localhost:27017/jwt_auth_dev',{
            // useNewUrlParser: true,
            // useUnifiedTopology:true,
        })
        console.log('Connect Successful !!')
    } catch (error) {
        console.log('Connect Failure !!')
        
    }
}

module.exports = {connect}
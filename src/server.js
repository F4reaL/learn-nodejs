const express = require('express')
const handlebars = require('express-handlebars')
const path = require('path')
const methodOverride = require('method-override')

const route = require('./routes')
const db = require('./config/db')

//connect DB
db.connect()

const app = express()

app.engine('hbs', handlebars.engine({
    extname:'hbs',
    helpers:{
        sum : (a, b) => a+b
    }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resources','views'))
app.use(express.urlencoded())
app.use(express.json())
app.use(methodOverride('_method'))

route(app)




const PORT = process.env.PORT || 4000

app.listen(PORT,  ()=> console.log(`Server started on port ${PORT}`))
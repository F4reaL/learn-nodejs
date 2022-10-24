const meRouter = require('./me')
const newsRouter = require('./news')
const usersRouter = require('./users')
const commonSiteRouter = require('./commonsite')

function route(app){

    app.use('/me', meRouter)
    app.use('/news', newsRouter)
    app.use('/users', usersRouter)
    app.use('/', commonSiteRouter)
}

module.exports = route

const meRouter = require('./me');
const coursesRouter = require('./courses');
const HomeRouter = require('./home');


function route(app) {

    app.use('/me', meRouter)
    app.use('/courses', coursesRouter)
    app.use('/', HomeRouter)
}
module.exports = route;
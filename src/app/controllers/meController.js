
const course = require('../modules/course');
const { mutipleMongooseToObject } = require('../../util/mongoose')

class meController {

    storedCourses(req, res, next) {

        Promise.all([
            course.find({}).sortable(req, res),
            course.countDocumentsDeleted()]
        )
            .then(([courses, deleteCount]) =>
                res.render('me/stored-courses', {
                    deleteCount,
                    courses: mutipleMongooseToObject(courses),
                })
            )
            .catch(next)
    }

    trashCourses(req, res, next) {
        course.findDeleted({})
            .then(courses => res.render('me/trash-courses', {
                courses: mutipleMongooseToObject(courses)
            }))
            .catch(next)
    }

}


module.exports = new meController;
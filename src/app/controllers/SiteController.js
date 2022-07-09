const course = require('../modules/course');

const {mutipleMongooseToObject} = require('../../util/mongoose');

class SiteController {
    index(req, res, next){
       course.find({})
        .then(courses => {
            res.render('home', {
                courses: mutipleMongooseToObject(courses)
            });
        })
        .catch(next);

       
    }
}

module.exports = new SiteController;
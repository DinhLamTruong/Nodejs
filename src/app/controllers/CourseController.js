
const Course = require('../modules/course');
const { MongooseToObject } = require('../../util/mongoose');

class CourseController {
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(course => {
                res.render('courses/show', { course: MongooseToObject(course) })
            }
            )
            .catch(next);
    }
    //GET /courses/create
    create(req, res, next) {
        res.render('courses/create')
    }
    //POST /courses/store
    store(req, res, next) {
        const formData = { ...req.body };
        formData.image = `https://files.fullstack.edu.vn/f8-prod/courses/3.png`
        const course = new Course(formData)
        course.save()
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next)
    }
    //GET /courses/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then(course => res.render('courses/edit', {
                course: MongooseToObject(course)
            }))
            .catch(next)

    }
    //PUT /courses/:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next)
    }
    //DELETE /courses/:id
    delete(req, res, next) {
        Course.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }
    //DELETE /courses/:id/force
    detroy(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }
    //PATCH /courses/:id/restore
    restore(req, res, next) {
        Course.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }

    handleForm(req, res, next) {
        switch (req.body.action) {
            case 'delete':
                Course.delete({ _id: { $in: req.body.checkboxIds } })
                    .then(() => res.redirect('back'))
                    .catch(next)
                break;

            default:
                break;
        }

    }


}

module.exports = new CourseController;
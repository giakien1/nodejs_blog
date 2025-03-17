const Course = require('../models/Courses');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    //[GET] /home
    async index(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();

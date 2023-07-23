const Project = require('../models/project.model');
const Post = require('../models/post.model');
const Tag = require('../models/tag.model');
const Category = require('../models/category.model');
class SiteController {
    //[GET] /index
    async index(req, res, next) {
        try {
            const projects = await Project.find({})
            .skip(0)
            .limit(6);
            const posts = await Post.find({})
            .populate('tags')
            .skip(0)
            .limit(2);
            res.render('index', {
                projects: projects,
                posts: posts,
            });
        } catch (error) {
            
        }
    }
    //[Get] /about-us
    getAboutUs(req, res, next) {
        res.render('about-us');
    }
    //[GET] /contact-us
    getContactUs(req, res, next) {
        res.render('contact-us');
    }
    //[GET] /news-list
    getNewsList(req, res, next) {
        res.render('news-list');
    }
    //[GET] /news-detail
    getNewsDetail(req, res, next) {
        res.render('news-detail');
    }
    //[GET] /price
    getPrice(req, res, next) {
        res.render('price');
    }
    //[GET] /project-list
    async getProjectList(req, res, next) {
        try {
            const category = req.query.category;
            const projects = await Project.find({})
                .populate('categoryId');
            const prods = projects
            .filter(project => project.categoryId?.name === 'thiet ke')
            .slice(0, 9);
            res.render('project-list', {
                projects: prods,
                category: category,
                path: '/project-list'
            });
        } catch (error) {
            
        }
    }
    //[GET] /project-detail
    getProjectDetail(req, res, next) {
        res.render('project-detail');
    }
    //[GET] /recruitment-list
    getRecruitmentList(req, res, next) {
        res.render('recruitment-list');
    }
    //[GET] /recruitment-detail
    getRecruitmentDetail(req, res, next) {
        res.render('recruitment-detail');
    }

}
module.exports = new SiteController;
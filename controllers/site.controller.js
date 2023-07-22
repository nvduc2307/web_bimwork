class SiteController {
    //[GET] /index
    index(req, res, next) {
        res.render('index');
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
    getProjectList(req, res, next) {
        res.render('project-list');
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
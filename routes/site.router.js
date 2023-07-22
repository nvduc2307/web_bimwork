const express = require('express');
const router = express.Router();
const SiteController = require('../controllers/site.controller');
const siteController = require('../controllers/site.controller');

router.get('/recruitment-detail', siteController.getRecruitmentDetail);
router.get('/recruitment-list', siteController.getRecruitmentList);
router.get('/project-detail', siteController.getProjectDetail);
router.get('/project-list', siteController.getProjectList);
router.get('/price', siteController.getPrice);
router.get('/news-detail', siteController.getNewsDetail);
router.get('/news-list', siteController.getNewsList);
router.get('/contact-us', siteController.getContactUs);
router.get('/about-us', siteController.getAboutUs);
router.get('/index', siteController.index);
router.get('/', siteController.index);

module.exports = router;

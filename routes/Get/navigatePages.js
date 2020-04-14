const { Router } = require('express');

const router = Router();

router.get('/',(req,res) => {
    res.render('index')
})

router.get('/contact',(req,res) => {
    res.render('contact')
})

router.get('/courses',(req,res) => {
    res.render('courses')
})

router.get('/elements',(req,res) => {
    res.render('elements')
})

router.get('/news_post',(req,res) => {
    res.render('news_post')
})

router.get('/news',(req,res) => {
    res.render('news')
})

router.get('/teachers',(req,res) => {
    res.render('teachers')
})


module.exports =  router;
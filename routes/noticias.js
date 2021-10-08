var express = require('express');
var router = express.Router();

/* GET home page. */ /*PARA TELA INICIAL */
router.get('/', function(req, res, next) {
  res.render('noticias/index', { title: 'Express' });
});

/*PARA MOSTRAR A PRIMEIRA NOTICIA */
router.get('/01', function(req, res, next) {
  res.render('noticias/noticia01', { title: 'Express' });
});

/*PARA MOSTRAR A SEGUNDA NOTICIA */
router.get('/01', function(req, res, next) {
  res.render('noticias/noticia01', { title: 'Express' });
});

/*PARA MOSTRAR A TERCEIRA NOTICIA */
router.get('/01', function(req, res, next) {
  res.render('noticias/noticia01', { title: 'Express' });
});

module.exports = router;
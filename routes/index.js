const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  res.render('index', {title: 'Home'});
});


router.get('/about', (rew, res) => {
  res.render('about', {title: 'About' });
});


router.get('/contact', (req, res) => {
  res.render('contact', {title: 'Contact' });
});


router.post('/contact', (req, res) => {
  const {name, email, message } = req.body;

  res.render('contact', {
    title: 'Contact',
    success : 'Thank you, ${name}! Your message has been sent.',
  });
});

module.exports = router;
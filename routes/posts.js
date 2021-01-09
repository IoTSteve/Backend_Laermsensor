const express = require('express');
const router = express.Router();
const Post = require('../models/post');


router.get('/', (req, res) => {
  res.send('We are on posts');
});

//router.get('/specific', (req,res) => {
//res.send('specific posts');
//});

router.post('/', (req, res) => {
  //console.log(req.body);
  const post = new Post({
    title: req.body.title,
    description: req.body.description

  });
  //console.log(post)
  post.save()
    .then(data => {
      console.log(data)
      res.status(200).json(data);
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        message: err
      });
    
    });


});

module.exports = router;
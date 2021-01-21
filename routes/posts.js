const express = require('express');
const router = express.Router();
const Post = require('../models/post');
const dbhandler = require('../databasehandler');

router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({
      message: err
    });

  }

});

//router.get('/specific', (req,res) => {
//res.send('specific posts');
//});

router.post('/', async (req, res) => {
  //console.log(req.body);
  dbhandler.savedb({
      app_id: req.body.app_id,
      dev_id: req.body.dev_id,
      payload_fields: req.body.payload_fields,
      metadata: req.body.metadata
    })
    .then((res) => res.json(res)).catch((err) => res.json({
      message: err
    }));
});

module.exports = router;
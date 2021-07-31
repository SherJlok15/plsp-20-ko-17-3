const router = require('express').Router();
const News = require('../models/news.model');

router.route('/').get((req, res) => {
  News.find()
    .then(news => res.json(news))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
  const news = req.body.news;

  const newNews = new News({
    news
  });

  newNews.save()
    .then((news) => {
      res.json(news._id)
    }
    )
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/delete/:id').delete((req, res) => {
  News.findByIdAndDelete(req.params.id)
    .then(() => res.json('News deleted'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;

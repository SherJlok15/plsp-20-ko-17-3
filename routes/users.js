const router = require('express').Router();
const Users = require('../models/users.model');

router.route('/').get((req, res) => {
  Users.find()
    .then(users => res.json(users[0].users))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add/').post((req, res) => {
  const user = req.body;
  Users.find()
    .then(users => {
      users[0].users.push(user);
      users[0].save()
        .then(() => res.json('User added'))
        .catch(err => res.status(400).json('Error: ' + err))
    })
    .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/delete/').post((req, res) => {
  Users.find()
    .then(users => {
      const user = req.body;
      users[0].users = users[0].users.filter(item => JSON.stringify(item) !== JSON.stringify(user));
      users[0].save()
        .then(() => res.json('User deleted'))
        .catch(err => res.status(400).json('Error: ' + err))
    })
    .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/post-edited-user/').post((req, res) => {
  Users.find()
    .then(users => {
      const prevUserInfo = req.body.prevUserInfo;
      const newUserInfo = req.body.newUserInfo;

      users[0].users = users[0].users.map(item => {
        if (JSON.stringify(item) === JSON.stringify(prevUserInfo)) {
          return newUserInfo
        } else {
          return item
        }
      })

      users[0].save()
        .then(() => res.json('User edited'))
        .catch(err => res.status(400).json('Error: ' + err))
    })
    .catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router;

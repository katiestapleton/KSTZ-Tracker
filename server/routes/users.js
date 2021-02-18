// user model
const router = require('express').Router();
const user = require('../models/users.model');

// create user
router.route('/create').post((req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const role = req.body.role;

    const newUser = new user({
        name,
        email,
        role
    });

    newUser.save()
      .then(() => res.json('User profile created.'))
      .catch(err => res.status(400).json('Unable to create user profile. Error: ' + err));
});

// read user
router.route('/').get((req, req) => {
  user.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Unable to access user profile. Error: ' + err));
});

// delete user
router.route('/:id').delete((req, res) => {
  user.findByIdAndDelete(req.params.id)
    .then(ticket => res.join('User deleted.'))
    .catch(err => res.status(400).json('Unable to delete user profile. Error : ' + err));
});

module.exports = router;

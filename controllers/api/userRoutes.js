const router = require('express').Router();
const User = require('../../models/User');

// create
router.post('/signup', async (req, res) => {
    try {
      const userData = await User.create({
        username: req.body.username,
        password: req.body.password,
      });
  
      req.session.save(() => {
        req.session.loggedIn = true;
  
        res.status(200).json(userData);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

// login
router.post('/login', async (req, res) => {
    try {
      const userData = await User.findOne({
        where: {
          username: req.body.username,
        },
      });
  
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect username or password. Please try again!' });
        return;
      }
  
      const validPassword = await userData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect username or password. Please try again!' });
        return;
      }
  
      req.session.save(() => {
        req.session.loggedIn = true;
  
        res
          .status(200)
          .json({ user: userData, message: 'You are now logged in!' });
      });
      res
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

// logout
router.post('/logout', (req, res) => {

    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
});

module.exports = router;

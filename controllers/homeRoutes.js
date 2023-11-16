const router = require("express").Router();
const { User, Post } = require('../models');

router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
       raw: true
    });
    res.render("home", { postData, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  try {
    if (req.session.loggedIn) {
      res.redirect("/dashboard");
      return;
    }
    res.render("login");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/signup", (req, res) => {
  try {
    if (req.session.loggedIn) {
      res.redirect("/dashboard");
      return;
    }
    res.render("signup");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/dashboard", async (req, res) => {
  try {
    const postData = await Post.findAll({
      raw: true,
   });
    res.render("dashboard", { postData, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;

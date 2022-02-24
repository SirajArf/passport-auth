const express = require("express");
//const passport = require("../config/passport");
const passport = require("passport");
const router = express.Router();

//router.use(express.static("public"));

router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", {failureRedirect: "/"}),
  (req, res) => {
    res.redirect("/dashboard");
  }
);

module.exports = router;

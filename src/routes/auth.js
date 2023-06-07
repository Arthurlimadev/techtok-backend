const router = require("express").Router();
const passport = require("passport");

// Rota de autenticação
router.get("/", passport.authenticate("discord"));

// router.get("/redirect", passport.authenticate("discord", {}));

// Rota de callback após o login
router.get(
  "/redirect",
  passport.authenticate("discord", {
    failureRedirect: "/forbidden",
  }),
  (req, res) => {
    res.redirect("/profile");
  }
);

router.get("/suceess", (req, res) => {
  res.json({ message: "You are logged in!" });
});

module.exports = router;

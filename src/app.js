require("dotenv").config();
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const discordStrategy = require("./strategies/discordstrategy.js");
const port = process.env.PORT || 4000;

// Configuração do Express
const app = express();

// Rotas
const authRoute = require("./routes/auth.js");

// Middlewares
app.use("/auth", authRoute);

app.use(
  session({
    secret: "YOUR_SESSION_SECRET",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60000 * 60 * 24,
    },
  })
);

// Passport
app.use(passport.initialize());
app.use(passport.session());

// Rotas
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Rota de perfil (exemplo)
app.get("/profile", (req, res) => {
  if (req.isAuthenticated()) {
    // O usuário está autenticado
    // Aqui você pode exibir informações do perfil do usuário ou redirecioná-lo para outras páginas
    res.send("Welcome to your profile!");
  } else {
    // O usuário não está autenticado
    res.redirect("/auth/discord");
  }
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

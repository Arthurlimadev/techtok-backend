const DiscordStrategy = require("passport-discord").Strategy;
const passport = require("passport");

// Configuração do Passport.js
passport.use(
  new DiscordStrategy(
    {
      clientID: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_SECRET_ID,
      callbackURL: process.env.CLIENT_REDIRECT,
      scope: ["identify", "email", "guilds", "connections"],
    },
    (accessToken, refreshToken, profile, done) => {
      // Função de verificação do usuário
      console.log("Access Token: " + accessToken);
      // Aqui você pode tratar os dados do usuário retornado pelo Discord e fazer a verificação/autenticação necessária
      console.log("refreshToken: " + refreshToken);
      // O perfil do usuário estará disponível na variável 'profile'
      console.log("Profile id : " + profile.id);
      console.log("Profile Username: " + profile.username);
      console.log("Profile email: " + profile.email);
      console.log("Profile avatar: " + profile.avatar);
      console.log("Profile Servers: " + profile.guilds.length);
      // A função 'done' deve ser chamada com os parâmetros 'error' (caso ocorra algum erro) e 'user' (usuário autenticado)
      console.log("Done: " + done(null, profile));
    }
  )
);

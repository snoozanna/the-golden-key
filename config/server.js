module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  admin: {
    auth: {
      secret: env(
        "ADMIN_JWT_SECRET",
        "aIALNPnlOU071oUw81yyXufn+bi265zif7LvF/vCR2A="
      ),
    },
  },
  app: {
    keys: env.array("APP_KEYS", "b9lknCVC69yFWLZA/Wq0hpAQ1/QCnsjFMl5dRCAMPiU="),
  },
});
// module.exports = ({ env }) => ({
//   host: env("APP_HOST", "0.0.0.0"),
//   port: env.int("NODE_PORT", 1337),
// });

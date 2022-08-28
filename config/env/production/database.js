// const parse = require("pg-connection-string").parse;
// const config = parse(process.env.DATABASE_URL);

// console.log(DATABASE_URL);
// module.exports = ({ env }) => ({
//   connection: {
//     client: "postgres",
//     connection: {
//       host: config.host,
//       port: config.port,
//       database: config.database,
//       user: config.user,
//       password: config.password,
//       ssl: {
//         rejectUnauthorized: false,
//       },
//     },
//     debug: false,
//   },
// });

module.exports = ({ env }) => {
  console.log(
    "env",
    env("DATABASE_HOST"),
    env("DATABASE_PORT"),
    env("DATABASE_NAME"),
    env("USERNAME"),
    env("PASSWORD")
  );
  return {
    connection: {
      client: "postgres",
      connection: {
        host: env("DATABASE_HOST"),
        port: env("DATABASE_PORT"),
        database: env("DATABASE_NAME"),
        user: env("USERNAME"),
        password: env("PASSWORD"),
        ssl: {
          rejectUnauthorized: false,
        },
      },
      debug: false,
    },
  };
};

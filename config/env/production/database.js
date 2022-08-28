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

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: config.DATABASE_HOST,
      port: config.DATABASE_PORT,
      database: config.DATABASE_NAME,
      user: config.USERNAME,
      password: config.PASSWORD,
      ssl: {
        rejectUnauthorized: false,
      },
    },
    debug: false,
  },
});

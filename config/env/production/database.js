const DATABASE_URL =
  "postgres://pfsqopewlozwvt:cad7dcafe6d2185f6180f0c5de7b2538b7f8b32816d4fe4ec394400ff577d72c@ec2-54-228-125-183.eu-west-1.compute.amazonaws.com:5432/ddfjobo1mdn69u";
const parse = require("pg-connection-string").parse;
// const config = parse(process.env.DATABASE_URL);
const config = parse(DATABASE_URL);
console.log(DATABASE_URL);
module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: config.host,
      port: config.port,
      database: config.database,
      user: config.user,
      password: config.password,
      ssl: {
        rejectUnauthorized: false,
      },
    },
    debug: false,
  },
});

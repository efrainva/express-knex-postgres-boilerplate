require("dotenv").config();
const pg = require("pg");
// pg.defaults.ssl = true;


// host: process.env.POSTGRES_DEV_HOST,
// port: process.env.POSTGRES_DEV_PORT,
// user: process.env.POSTGRES_DEV_USER,
// password: process.env.POSTGRES_DEV_PASSWORD,
// database: process.env.POSTGRES_DEV_DATABASE

module.exports = {
  development: {
    client: "pg",
    useNullAsDefault: true,
    connection: {
      host:"localhost",
      port:"5432",
      user:"efrain",
      password:"pass",
      database:"room",
    },
    migrations: {
      directory: "./database/migrations"
    },
    seeds: {
      directory: "./database/seeds"
    }
  },

  testing: {
    client: "pg",
    connection: {
      host: process.env.POSTGRES_TEST_HOST,
      port: process.env.POSTGRES_TEST_PORT,
      user: process.env.POSTGRES_TEST_USER,
      password: process.env.POSTGRES_TEST_PASSWORD,
      database: process.env.POSTGRES_TEST_DATABASE
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./database/migrations"
    },
    seeds: {
      directory: "./database/seeds"
    }
  },

  production: {
    client: "pg",
    useNullAsDefault: true,

    connection: process.env.DATABASE_URL,

    migrations: {
      directory: "./database/migrations"
    },
    seeds: {
      directory: "./database/seeds"
    }
  }
};

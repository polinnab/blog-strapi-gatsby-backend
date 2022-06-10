const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
      connection: {
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'gatsby-blog'),
        user: env('DATABASE_USERNAME', 'postgres'),
        password: env('DATABASE_PASSWORD', 'Postgres74'),
        schema: env('DATABASE_SCHEMA', 'public'), // Not required
        ssl: false
      },
    // client: 'sqlite',
    // connection: {
    //   filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
    // },
    useNullAsDefault: true,
  },
});

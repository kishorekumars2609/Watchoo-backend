// const { Pool } = require("pg");

// const pool = new Pool();
// module.exports = {
//   query: (text, params) => pool.query(text, params),
// };



const { Pool } = require("pg");
const PgPool = require("pg-pool");
const pool = new PgPool({
    connectionString: "postgres://kishore:hlN0p34lAUAFcxA9lRapoOcxktsg8UBQ@dpg-cg4pd2o2qv287cqdl4g0-a.singapore-postgres.render.com/yelp_7jc6",
    ssl: {
        rejectUnauthorized: false, // Set to true in production
    },
});

module.exports = pool;
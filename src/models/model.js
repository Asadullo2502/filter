const {
   Pool
} = require('pg');

const config = {
   user: "postgres",
   password: 'fariks_online_2002',
   database: "filters",
   host: "localhost",
   port: 5432
}

const pool = new Pool(config);

const fetch = async (query) => {
   const client = await pool.connect()
   try {
      let data = await client.query(query)
      return data.rows
   } catch (error) {
      console.log(error);
   } finally {
      client.release()
   }
}



module.exports = { fetch }


const fetchAll = (query, params) => {
   const client = pool.connect();
   try{
      let {rows} = await client.query(query, params);
      return rows;
   }finally {
      await client.release()
   }
}

module.exports = {fetchAll}


const {fetchAll, fetch} = require('modules')
// get
// let query - 'select * from users';
// (async () => {
//    let users = await fetchAll(query);
// })()


// post
// let query - 'insert into users (user_name, age') values ($1, $2);
// (async () => {
//    let users = await fetch(query);
// })()



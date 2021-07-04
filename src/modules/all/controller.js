const {users, books, films} = require('./model')

const fetchAll = async (req, res) => {
   if(req.headers.chek1 == 'users' && req.headers.chek2 == 'books' && req.headers.chek3 == 'films') {
      let user = await users(req.headers.search) ? await users(req.headers.search) : ({})
      let book = await books(req.headers.search) ? await books(req.headers.search) : ({})
      let film = await films(req.headers.search) ? await films(req.headers.search) : ({})
      res.send([...user, ...book, ...film]);
   } else if (req.headers.chek1 == 'users' && req.headers.chek2 == 'books') {
      let user = await users(req.headers.search) ? await users(req.headers.search) : ({})
      let book = await books(req.headers.search) ? await books(req.headers.search) : ({})
      res.send([...book, ...user]);
   }else if(req.headers.chek1 == 'users' && req.headers.chek3 == 'films') {
      let user = await users(req.headers.search) ? await users(req.headers.search) : ({})
      let film = await films(req.headers.search) ? await films(req.headers.search) : ({})
      res.send([...user, ...film]);
   }
   else if(req.headers.chek2 == 'books' && req.headers.chek3 == 'films') {
      let book = await books(req.headers.search) ? await books(req.headers.search) : ({})
      let film = await films(req.headers.search) ? await films(req.headers.search) : ({})
      res.send([...book, ...film]);
   }
   else if(req.headers.chek1 == 'users') {
      let user = await users(req.headers.search) ? await users(req.headers.search) : ({})
      res.send([...user]);
   }
   else if(req.headers.chek2 == 'books') {
      let book = await books(req.headers.search) ? await books(req.headers.search) : ({})
      res.send([...book]);
   }
   else if(req.headers.chek3 == 'films') {
      let film = await films(req.headers.search) ? await films(req.headers.search) : ({})
      res.send([...film]);
   }else {
      
   }
}

module.exports = {fetchAll}
const path = require('path')

const homeHtml = (req, res) => {
   res.sendFile(path.join(process.cwd(), "src", "views", "index.html"))
}


module.exports = {homeHtml}
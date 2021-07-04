const express = require('express');
const app = express();
const {host, PORT} = require('./config');
const homeHtml = require('./modules/home');
const path = require('path')
const all = require('./modules/all')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))


app.use(homeHtml)
app.use(all)



app.listen(PORT, (req, res) => console.log(host+":"+PORT))
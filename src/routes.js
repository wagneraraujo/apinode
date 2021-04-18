
const {Router } = require('express')
const UserControler = require('./app/Controllers/UserController')

const routes = new Router()

routes.post("/user", UserControler.index)
routes.get("/user", UserControler.show)
module.exports = routes

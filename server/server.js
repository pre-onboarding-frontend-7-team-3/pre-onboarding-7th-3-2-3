// @ts-ignore
const jsonServer = require('json-server')
const cors = require('cors')
const auth = require('json-server-auth')
const express = require('express')
const path = require('path')

const server = express();
const router = jsonServer.router('db.json')

server.use( cors({
  origin: '*',
}),)

server.db = router.db
const rules = auth.rewriter({
  users: 660,
  userSetting: 660,
  accounts: 660,
})

server.use(rules)
server.use(auth)
server.use('/api', router)

server.use(express.static("build"))

server.get('/', (req, res) => {
  res.sendFile('/build/index.html')
})

server.listen(4000, () => {
  console.log('JSON Server is running...')
})

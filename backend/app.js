const express = require('express')
const app     = express()
const server  = require('http').createServer(app)

const PORT = 3000

server.listen(PORT, () => console.log("Server listening on port", PORT))

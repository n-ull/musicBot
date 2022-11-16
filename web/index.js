const start_server = function () {
    const path = require("path")
    const express = require("express")

    const app = express()

    app.use('', express.static(path.join(__dirname, 'public')))
    app.get('/', (req, res) => {
        return res.sendFile('index.html', { root: '.' })
    })
    app.get('/auth/discord', (req, res) => {
        return res.sendFile('player.html', { root: '.' })
    })

    const port = '3000'
    app.listen(port, () => {
        console.log(`web app desplegada en http://localhost:${port}`)
    })
}

module.exports = {
    start_server
}
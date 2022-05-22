const http = require ('http')

const server = http.createServer((req, res) => { 
if (req.url === '/') {
res.end ('Welcome to our home page')
}
if (req.url === '/about') {
    res.end('Here is more info about us')
}
res.end(`
    <h1> Oops!</h1>
    <p>Soory! We can't find the page you are looking for</p>
    <a href="/">Back to Home  </a>
    `)
})

server.listen(5000)
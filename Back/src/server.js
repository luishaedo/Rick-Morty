const http = require('http');
var characters = require('./utils/data.js')

const PORT = 3001;

http.createServer(function(req, res){
   
    res.setHeader('Access-Control-Allow-Origin', '*');

    if(req.url.includes('rickandmorty/')){
        let id = req.url.split('/').pop();        
        let character = characters.find((e)=>{e.id === Number(id)})

        res.writeHead(200,{'Content-Type': 'application/json'})
        res.end(JSON.stringify(character))
    }

}).listen(3001, "localhost")

module.exports = PORT;
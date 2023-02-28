import data from './utils/data'

const http = require('http');

const PORT = 3001;

http.createServer(function(req, res){
   
    res.setHeader('Access-Control-Allow-Origin', '*');

    if(req.url.includes('rickandmorty/character')){
        let id = req.url.split(':');
        
       idInfo = data.filter(function (id){
        return data.id === id[1]
       })

        res.writeHead(200,{'Content-Type': 'application/json'})
        res.end(infoId)

    }


}).listen(3001, "localhost")

module.exports = PORT;
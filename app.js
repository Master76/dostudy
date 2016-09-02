var WebSocketServer = require('ws').Server,
    http = require('http'),
    express = require('express'),
    main = require('./main.js');

const app = express();
const port = require('./config/settings.js').port;

const Color = require('isomer').Color;

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/res'));

const server = http.createServer(app);
server.listen(8080);

const wss = new WebSocketServer({ server: server });

wss.on('connection', function(ws) {
    var color1;
    var color2;
    var counter = 0;
    const filename = 'export.png';
    const filepath = 'res/' + filename;

    const id = setInterval(function() {
        
        var tmp = Math.abs(counter - 60);
        color1 = new Color(60 - tmp, 60 - tmp, 240 - tmp * 4);
        color2 = new Color(0 + tmp * 4, tmp, tmp);
        counter = (counter + 1) % 120;
        main(filepath);

        const jobj = process.memoryUsage();
        jobj.imgsrc = filename + '?=' + Date.now();
        ws.send(JSON.stringify(jobj), function () { /* ignore errors */ });
        
    }, 40);

    console.log('started client interval');

    ws.on('close', function() {
        console.log('stopping client interval');
        clearInterval(id);
    });
});

console.log('listenning on ' + port);

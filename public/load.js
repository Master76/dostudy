var animate;

window.onload = function() {
    
    animate = document.getElementById('animate');

    var host = window.document.location.host.replace(/:.*/, '');
    var ws = new WebSocket('ws://' + host + ':8080');

    ws.onmessage = function (event) {

        // var start;
        // var end;

        // start = new Date();
        var data = JSON.parse(event.data);
        // end = new Date();
        // timeElasped(start, end, 'parseJson');

        // start = new Date();
        updateStats(data);
        // end = new Date();
        // timeElasped(start, end, 'updateStats');
    };
}

function updateStats(memuse) {
    var now = new Date();
    var sent = memuse.sent;
    timeElasped(sent, now, 'WebSocket send');
    animate.src = memuse.imgsrc;
}

function timeElasped(start, end, name) {
    var elasped = end - start;
    console.log(name + ": " + elasped);
}

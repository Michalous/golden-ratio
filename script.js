document.addEventListener('DOMContentLoaded', function() {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');

    var plotX = []
    var plotY = []
    var SIZE = 300

    const PHI = (1 + 5**0.5) / 2
    var angle = PHI
    
    for (var i = 0; i < SIZE; i++) {
        plotX.push(300 + 450*(Math.cos((2 * Math.PI) * angle) * i/500))
        plotY.push(300 + 450*(Math.sin((2 * Math.PI) * angle) * i/500))
    
        angle += PHI
    }
    
    console.log(plotX)
    console.log(Math.cos((2 * Math.PI)))

    for (var i = 0; i < SIZE; i++) {
        (function(i) {
            setTimeout(function() {
                drawDot(plotX[i], plotY[i], 2)
                document.getElementById('iteration').innerHTML = i + 1
            }, i * 100); // Delay each dot's drawing by i * 5000 milliseconds
        })(i);
    }

    function drawDot(x, y, r) {
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.fillStyle = 'white';
        ctx.fill();
    }
});

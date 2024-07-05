document.addEventListener('DOMContentLoaded', function() {
    var canvas = document.getElementById('myCanvas')
    var ctx = canvas.getContext('2d')

    var angleCanvas = document.getElementById('angleCanvas')
    var angleCtx = angleCanvas.getContext('2d')
    var inputValue
    
    goldenRatio()

    document.getElementById('angleForm').addEventListener('submit', function(event) {
        event.preventDefault()
        inputValue = document.getElementById('angleInput').value
        angleFunc(inputValue)
    })


    function goldenRatio() {
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
    
    for (var i = 0; i < SIZE; i++) {
        (function(i) {
            setTimeout(function() {
                drawDot(plotX[i], plotY[i], 2)
                document.getElementById('iteration').innerHTML = i + 1
            }, i * 100)
        })(i)
    }
    }

    function drawDot(x, y, r) {
        ctx.beginPath()
        ctx.arc(x, y, r, 0, 2 * Math.PI)
        ctx.fillStyle = 'white'
        ctx.fill()
    }

    function drawAngleDot(x, y, r) {
        angleCtx.beginPath()
        angleCtx.arc(x, y, r, 0, 2 * Math.PI)
        angleCtx.fillStyle = 'yellow'
        angleCtx.fill()
    }

    function angleFunc(angleValue) {
        var plotAngleX = []
        var plotAngleY = []
        var SIZE = 300
       
        let angle = parseFloat(angleValue)
        if (isNaN(angle)) {
            angle = 1.1
        } 
        console.log(isNaN(1))
        var angleToDraw = angle
    
        for (var i = 0; i < SIZE; i++) {
            plotAngleX.push(300 + 450*(Math.cos((2 * Math.PI) * angleToDraw) * i/500))
            plotAngleY.push(300 + 450*(Math.sin((2 * Math.PI) * angleToDraw) * i/500))
        
            angleToDraw += angle
        }
        
        for (var i = 0; i < SIZE; i++) {
            (function(i) {
                setTimeout(function() {
                    drawAngleDot(plotAngleX[i], plotAngleY[i], 2)
                    document.getElementById('angleIteration').innerHTML = i + 1
                }, i * 100)
            })(i)
        }
    }
})

export function initPaint (){

    const canvas = document.getElementById('canvas');
    const cxt = canvas.getContext('2d');
    const saveimg = document.getElementById('saveimg');
    const clearimg = document.getElementById('clearimg');
    const Brush = document.getElementById('means_brush');
    const Eraser = document.getElementById('means_eraser');
    const Paint = document.getElementById('means_paint');
    const Straw = document.getElementById('means_straw');
    const text = document.getElementById('means_text');
    const Magnifier = document.getElementById('means_magnifier');
    const line = document.getElementById('means_line');
    const arc = document.getElementById('means_arc');
    const rect = document.getElementById('means_rect');
    const poly = document.getElementById('means_poly');
    const vertLine = document.getElementById('vertLine');
    const arcfill = document.getElementById('means_arcfill');
    const rectfill = document.getElementById('means_rectfill');
    const actions = [Brush, Eraser, Paint, Straw, text, Magnifier, line, arc, rect, poly, arcfill, rectfill, vertLine];
    const line_1 = document.getElementById('width_1');
    const line_3 = document.getElementById('width_3');
    const line_5 = document.getElementById('width_5');
    const line_7 = document.getElementById('width_7');
    const widthLine = [line_1, line_3, line_5, line_7];
    const redColor = document.getElementById('red');
    const greenColor = document.getElementById('green');
    const blueColor = document.getElementById('blue');
    const yellowColor = document.getElementById('yellow');
    const whiteColor = document.getElementById('white');
    const blackColor = document.getElementById('black');
    const pinkColor = document.getElementById('pink');
    const purpleColor = document.getElementById('purple');
    const orangeColor = document.getElementById('orange');
    const grayColor = document.getElementById('gray');
    const navyColor = document.getElementById('navy');
    const maroonColor = document.getElementById('maroon');
    const colors = [redColor, greenColor, blueColor, yellowColor, whiteColor, blackColor, pinkColor, purpleColor, orangeColor, grayColor, navyColor, maroonColor];
    let curTool = 7,
        curColor = 'black',
        curLineWidth = '1';
    drawImg(curTool, curLineWidth, curColor);
    var accord = [];
    saveimg.addEventListener('click', function () {
        let imgdata = canvas.toDataURL();
        let b64 = imgdata.substring(22);
        let myform = document.getElementById('myform');
        let data = document.getElementById('imgsave');
        data.value = b64;
        myform.submit();
    }, false)

    clearimg.addEventListener('click', function () {
        cxt.clearRect(0, 0, 880, 400);
    }, false)
    for (let i = 0; i < actions.length; i++) {
        actions[i].index = i;
        actions[i].onclick = function (e) {
            for (let i = 0; i < actions.length; i++) {
                if (i === this.index) {
                    actions[i].style.background = "yellow";
                } else {
                    actions[i].style.background = "#ccc";
                }
            }
            curTool = this.index;
            drawImg(curTool, curLineWidth, curColor);
        }
    }
    Straw.addEventListener('click',function(){
        window.location.reload();
    },false);
    for (let i = 0; i < widthLine.length; i++) {
        widthLine[i].index = i;
        widthLine[i].onclick = function () {
            for (let i = 0; i < widthLine.length; i++) {
                if (i === this.index) {
                    widthLine[i].style.background = "yellow";
                } else {
                    widthLine[i].style.background = "#ccc";
                }
            }
            curLineWidth = 2 * this.index + 1;
            drawImg(curTool, curLineWidth, curColor);

        }
    }
    for (let i = 0; i < colors.length; i++) {
        colors[i].index = i;
        colors[i].onclick = function (e) {
            for (let i = 0; i < colors.length; i++) {
                if (i === this.index) {
                    colors[i].style.border = '3px solid crimson ';
                } else {
                    colors[i].style.border = '3px solid #fff ';
                }
            }
            curColor = this.id;
            drawImg(curTool, curLineWidth, curColor);
        }
    }
    let draw = {
        'drawLine': function (startX, startY, moveX, moveY, lineWidths, col) {
            cxt.save();
            cxt.beginPath();
            cxt.moveTo(startX, startY);
            cxt.lineTo(moveX, moveY);
            cxt.closePath();
            cxt.lineWidth = lineWidths;
            cxt.strokeStyle = col;
            cxt.stroke();
            cxt.restore();
        },
        'drawCircle': function (startX, startY, moveX, moveY, lineWidths, col) {
            cxt.save();
            cxt.beginPath();
            let a = moveX - startX;
            let b = moveY - startY;
            let c = Math.sqrt(a * a + b * b);
            cxt.arc(startX, startY, c, 0, 2 * Math.PI, false);
            cxt.closePath();
            cxt.lineWidth = lineWidths;
            cxt.strokeStyle = col;
            cxt.stroke();
            cxt.restore();
        },
        'fillCircle': function (startX, startY, moveX, moveY, lineWidths, col) {
            cxt.save();
            cxt.beginPath();
            let a = moveX - startX;
            let b = moveY - startY;
            let c = Math.sqrt(a * a + b * b);
            cxt.arc(startX, startY, c, 0, 2 * Math.PI, false);
            cxt.closePath();
            cxt.lineWidth = lineWidths;
            cxt.fillStyle = col;
            cxt.fill();
            cxt.restore();
        },
        'drawRect': function (startX, startY, moveX, moveY, lineWidths, col) {
            cxt.save();
            cxt.lineWidth = lineWidths;
            cxt.strokeStyle = col;
            let a = Math.abs(moveX - startX);
            let b = Math.abs(moveY - startY);
            if (moveX > startX && moveY > startY) {
                cxt.strokeRect(startX, startY, a, b);
            } else if (moveX > startX && moveY < startY) {
                cxt.strokeRect(startX, startY - b, a, b);
            } else if (moveX < startX && moveY < startY) {
                cxt.strokeRect(moveX, moveY, a, b);
            } else {
                cxt.strokeRect(moveX, moveY - b, a, b);
            }
            cxt.restore();
        },
        'fillRect': function (startX, startY, moveX, moveY, lineWidths, col) {
            cxt.save();
            cxt.lineWidth = lineWidths;
            cxt.fillStyle = col;
            let a = Math.abs(moveX - startX);
            let b = Math.abs(moveY - startY);
            if (moveX > startX && moveY > startY) {
                cxt.fillRect(startX, startY, a, b);
            } else if (moveX > startX && moveY < startY) {
                cxt.fillRect(startX, startY - b, a, b);
            } else if (moveX < startX && moveY < startY) {
                cxt.fillRect(moveX, moveY, a, b);
            } else {
                cxt.fillRect(moveX, moveY - b, a, b);
            }
            cxt.restore();
        },
        'drawGorline': function (startX, startY, moveX, moveY, lineWidths, col) {
            cxt.save();
            cxt.beginPath();
            cxt.moveTo(0, startY);
            cxt.lineTo(1000, startY);
            cxt.closePath();
            cxt.lineWidth = lineWidths;
            cxt.strokeStyle = col;
            cxt.stroke();
            cxt.restore();
        },
        'drawVertline': function (startX, startY, moveX, moveY, lineWidths, col) {
            cxt.save();
            cxt.beginPath();
            cxt.moveTo(startX, 0);
            cxt.lineTo(startX, 500);
            cxt.closePath();
            cxt.lineWidth = lineWidths;
            cxt.strokeStyle = col;
            cxt.stroke();
            cxt.restore();
        },
        'drawText': function (startX, startY, col, text) {
            cxt.save();
            cxt.font = "bold 14px Arial";
            cxt.textAlign = 'center';
            cxt.textBaseline = 'middle';
            cxt.fillStyle = col;
            cxt.fillText(text, startX, startY);
            cxt.restore();
        }
    }
    var accord = [];
    function againDraw(storData) {
        for (let i = 0; i < storData.length; i++) {
            switch (storData[i].type) {
                case 0:
                    cxt.save();
                    cxt.beginPath();
                    cxt.moveTo(storData[i].down[0], storData[i].down[1]);
                    for (let j = 0; j < storData[i].move.length; j++) {
                        cxt.lineTo(storData[i].move[j][0], storData[i].move[j][1]);
                    }
                    cxt.lineWidth = storData[i].line;
                    cxt.strokeStyle = storData[i].colors;
                    cxt.stroke();
                    cxt.restore();
                    break;
                case 1:
                    cxt.save();
                    cxt.beginPath();
                    cxt.moveTo(storData[i].down[0], storData[i].down[1]);
                    for (let j = 0; j < storData[i].move.length; j++) {
                        cxt.lineTo(storData[i].move[j][0], storData[i].move[j][1]);
                    }
                    cxt.lineWidth = storData[i].line;
                    cxt.strokeStyle = '#fff';
                    cxt.stroke();
                    cxt.restore();
                    break;
                case 2:
                    cxt.fillStyle = storData[i].colors;
                    cxt.fillRect(0, 0, 880, 400);
                case 4:
                    draw.drawText(storData[i].down[0], storData[i].down[1], storData[i].colors, storData[i].text[0]);
                    break;
                case 6:
                    draw.drawLine(storData[i].down[0], storData[i].down[1], storData[i].up[0], storData[i].up[1], storData[i].line, storData[i].colors);
                    break;
                case 7:
                    draw.drawCircle(storData[i].down[0], storData[i].down[1], storData[i].up[0], storData[i].up[1], storData[i].line, storData[i].colors);
                    break;
                case 8:
                    draw.drawRect(storData[i].down[0], storData[i].down[1], storData[i].up[0], storData[i].up[1], storData[i].line, storData[i].colors);
                    break;
                case 9:
                    draw.drawGorline(storData[i].down[0], storData[i].down[1], storData[i].up[0], storData[i].up[1], storData[i].line, storData[i].colors);
                    break;
                case 10:
                    draw.fillCircle(storData[i].down[0], storData[i].down[1], storData[i].up[0], storData[i].up[1], storData[i].line, storData[i].colors);
                    break;
                case 11:
                    draw.fillRect(storData[i].down[0], storData[i].down[1], storData[i].up[0], storData[i].up[1], storData[i].line, storData[i].colors);
                    break;
                case 12:
                    draw.drawVertline(storData[i].down[0], storData[i].down[1], storData[i].up[0], storData[i].up[1], storData[i].line, storData[i].colors);
                    break;
            }
        }
    }
    function drawImg(tools, lineWidths, col) {
        let startX, startY,
            moveX, moveY,
            upX, upY;
        let temp = {
            'type': tools,
            'line': lineWidths,
            'colors': col,
            'down': [],
            'move': [],
            'up': [],
            'text': []
        };
        let flag = 0;
        canvas.onmousedown = function (e) {
            e = window.event || e;
            flag = 1;
            startX = e.pageX - this.offsetLeft;
            startY = e.pageY - this.offsetTop;
            temp.down.push(startX, startY);
            switch (tools) {
                case 0:
                    cxt.save();
                    cxt.beginPath();
                    cxt.moveTo(startX, startY);
                    break;
                case 1:
                    cxt.save();
                    cxt.beginPath();
                    cxt.moveTo(startX, startY);
                    break;
                case 2:
                    cxt.fillStyle = col;
                    cxt.fillRect(0, 0, 880, 400);
                    break;
                case 3:
                    var obj = cxt.getImageData(moveX, moveX, 1, 1);
                    alert('Color：rgba(' + obj.data + ')');
                    break;
                case 9:
                    cxt.clearRect(0, 0, 880, 400);
                    againDraw(accord);
                    draw.drawGorline(startX, startY, moveX, moveY, lineWidths, col);
                    break;
                case 12:
                    cxt.clearRect(0, 0, 880, 400);
                    againDraw(accord);
                    draw.drawVertline(startX, startY, moveX, moveY, lineWidths, col);
                    break;
            }
        }
        canvas.onmousemove = function (e) {
            e = window.event || e;
            moveX = e.pageX - this.offsetLeft;
            moveY = e.pageY - this.offsetTop;
            if (flag) {
                temp.move.push([moveX, moveY]);
                switch (tools) {
                    case 0:
                        cxt.lineTo(moveX, moveY);
                        cxt.lineWidth = lineWidths;
                        cxt.strokeStyle = col;
                        cxt.stroke();
                        cxt.restore();
                        break;
                    case 1:
                        cxt.lineTo(moveX, moveY);
                        cxt.lineWidth = lineWidths;
                        cxt.strokeStyle = "#fff";
                        cxt.stroke();
                        cxt.restore();
                        break;
                    case 6:
                        cxt.clearRect(0, 0, 880, 400);
                        againDraw(accord);
                        draw.drawLine(startX, startY, moveX, moveY, lineWidths, col);
                        break;
                    case 7:
                        cxt.clearRect(0, 0, 880, 400);
                        againDraw(accord);
                        draw.drawCircle(startX, startY, moveX, moveY, lineWidths, col);
                        break;
                    case 8:
                        cxt.clearRect(0, 0, 880, 400);
                        againDraw(accord);
                        draw.drawRect(startX, startY, moveX, moveY, lineWidths, col);
                        break;
                    case 10:
                        cxt.clearRect(0, 0, 880, 400);
                        againDraw(accord);
                        draw.fillCircle(startX, startY, moveX, moveY, lineWidths, col);
                        break;
                    case 11:
                        cxt.clearRect(0, 0, 880, 400);
                        againDraw(accord);
                        draw.fillRect(startX, startY, moveX, moveY, lineWidths, col);
                        break;
                }
            }
        }
        canvas.onmouseup = function () {
            let e = window.event || e;
            flag = 0;
            upX = e.pageX - this.offsetLeft;
            upY = e.pageY - this.offsetTop;
            temp.up.push(upX, upY);
            if (tools === 4) {
                let textValue = window.prompt('');
                textValue = textValue === null ? '' : textValue;
                temp.text.push(textValue);
                draw.drawText(startX, startY, col, textValue);
            }
            accord.push(temp);
            temp = {
                'type': tools,
                'line': lineWidths,
                'colors': col,
                'down': [],
                'move': [],
                'up': [],
                'text': []
            };
        }
        canvas.onmouseout = function (e) {
            flag = 0;
        }
    }
};


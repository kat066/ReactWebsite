import React from 'react';
window.requestAnimFrame = (function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function ( /* function */ callback, /* DOMElement */ element) {
        window.setTimeout(callback, 1000 / 60);
    };
})();
class Hexatagon extends React.Component {
    constructor(props) {
        super(props);
        this.handleScroll=this.handleScroll.bind(this);
    }
    handleScroll() {
        clearTimeout(this.f);
        this.f = setTimeout(this.Draw.bind(this), 100);
    }
    ratioDraw(points, ratio, borderLength) {
        var canvas = document.getElementById("myCanvas");
        if (canvas != null) {
            var i;
            var ctx = canvas.getContext("2d");
            var xCenter = (borderLength + 50) / 2;
            var yCenter = borderLength / 2;
            ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo((xCenter - ((xCenter - points[0].x) * ratio)), (yCenter - ((yCenter - points[0].y) * ratio)));
            for (i = 1; i < points.length; i++) {
                ctx.lineTo((xCenter - ((xCenter - points[i].x) * ratio)), (yCenter - ((yCenter - points[i].y) * ratio)));
            }
            ctx.closePath();
            ctx.stroke();
        }
        
        


    }
    animateDraw(points, borderLength,ratio) {
        ratio = ratio || 0;
        this.ratioDraw(points, ratio, borderLength);
        if (ratio < 1) {
            window.requestAnimationFrame((() => this.animateDraw(points, borderLength, ratio + 0.005)));
        }

    }
    DrawStrength(borderLength, strength) {
        var unit = borderLength / 20;
        var xCenter = (borderLength + 50) / 2;
        var length = (borderLength - (6 * unit)) / 2;
        var halfLength = length / 2;
        var x = (borderLength - length) / 2 + 25;
        var yLength = Math.sqrt(Math.pow(length, 2) - Math.pow((halfLength), 2));
        var y = (borderLength - yLength * 2) / 2;
        var points=[];

        points.push({x:(x + (halfLength * (1 - strength.c))),y: (y + (yLength * (1 - strength.c)))});
        x += length;

        points.push({ x: (x - (halfLength * (1 - strength.python))), y: (y + (yLength * (1 - strength.python))) });
        x += halfLength;
        y += yLength;

        points.push({ x: ((x - ((x - xCenter) * (1 - strength.java)))), y: y });
        x -= halfLength;
        y += yLength;

        points.push({ x: (x - (halfLength * (1 - strength.verilog))), y: (y - (yLength * (1 - strength.verilog))) });
        x -= length;

        points.push({ x: (x + (halfLength * (1 - strength.js))), y: (y - (yLength * (1 - strength.js))) });
        x -= halfLength;
        y -= yLength;

        points.push({ x: (x + ((xCenter - x) * (1 - strength.others))), y: y });
        x += halfLength;
        y -= yLength;

        points.push({ x: (x + (halfLength * (1 - strength.c))), y: (y + (yLength * (1 - strength.c))) });

        this.animateDraw(points, borderLength);
    }
    DrawHexagon(borderLength) {
        var unit = borderLength / 20;
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        var length = (borderLength - (6 * unit))/2;
        var halfLength = length / 2;
        var x = (borderLength - length) / 2+25;
        var yLength = Math.sqrt(Math.pow(length, 2) - Math.pow((halfLength), 2));
        var y = (borderLength - yLength * 2) / 2;
        var i;

        ctx.strokeStyle = "#000000";
        ctx.lineWidth = 0.1;
        ctx.font = "13px Georgia";
        
        for (i = 0; i < 4; i++) {
            ctx.beginPath();
            ctx.moveTo(x, y);
            if (i === 0) {
                ctx.fillStyle = "#ffffff";
                ctx.fillText("C/C++", (x - (2*unit)), (y - unit));
            }
            x += length;
            ctx.lineTo(x, y);
            if (i === 0) {
                ctx.fillStyle = "#ffffff";
                ctx.fillText("Python", (x - (2 * unit)), (y - unit));
            }
            x += halfLength;
            y += yLength;
            ctx.lineTo(x, y);
            if (i === 0) {
                ctx.fillStyle = "#ffffff";
                ctx.fillText("Java", (x+unit), (y + (unit / 2)));
            }
            x -= halfLength;
            y += yLength;
            ctx.lineTo(x, y);
            if (i === 0) {
                ctx.fillStyle = "#ffffff";
                ctx.fillText("Verilog", x, (y + (2 * unit)));
            }
            x -= length;
            ctx.lineTo(x, y);
            if (i === 0) {
                ctx.fillStyle = "#ffffff";
                ctx.fillText("JS/CSS/HTML", (0+unit), (y + (2 * unit)));
            }
            x -= halfLength;
            y -= yLength;
            ctx.lineTo(x, y);
            if (i === 0) {
                ctx.fillStyle = "#ffffff";
                ctx.fillText("Others", unit, (y + (unit/2)));
            }
            x += halfLength;
            y -= yLength;
            ctx.lineTo(x, y);
            ctx.closePath();
            if (i === 0) {
                ctx.fillStyle = "#546e7a";
                
            } else if (i === 1) {
                ctx.fillStyle = "#455a64";
                
            } else if (i === 2) {
                ctx.fillStyle = "#37474f";
                
            } else if (i === 3) {
                ctx.fillStyle = "#263238";
                
            }
            ctx.fill();
            ctx.stroke();
            length -= (2*unit);
            halfLength = length / 2;
            x = (borderLength - length) / 2+25;
            yLength = Math.sqrt(Math.pow(length, 2) - Math.pow((halfLength), 2));
            y = (borderLength - yLength * 2) / 2;           
        }
        
    }
    Draw() {

        var canvas = document.getElementById("myCanvas");
        if (canvas != null) {
            let shownOffset = canvas.offsetTop - document.getElementById("navBar").offsetHeight - window.innerHeight + canvas.offsetHeight;
            if (!this.drawn && window.pageYOffset >= shownOffset) {
                this.DrawStrength(200, this.props.strength);
                this.drawn = 1;
                window.removeEventListener("scroll", this.handleScroll);
            }
        } else {
            window.removeEventListener("scroll", this.handleScroll);
        }
        
        
    }
    componentDidMount() {
        this.DrawHexagon(200);
        window.addEventListener("scroll", this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }
    drawn = false;
    render() {
        const style = {
 /*           border: "1px solid #ffffff",*/
        };
        
        return (
            <canvas id="myCanvas" width="250" height="200" style={style} ></canvas>
            );
    }
}
Hexatagon.defaultProps = { strength: { c: 1, python: 1, java: 1, verilog: 1, js: 1, others: 1 } };
export default Hexatagon;
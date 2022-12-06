/**
 * @author pkjana, IIT Kharagpur
 * @returns {undefined}
 * Copyright 2014, IIT Kharagpur
 * 
 */

var canvas2d = {
    container: null,
    containerWidth: null,
    containerHeight: null,
    CylinderL6: null,
    ctx: null,
    init: function() { // Initialization

        this.container = document.getElementById("graph-view");
        this.containerWidth = this.container.clientWidth;
        this.containerHeight = this.container.clientHeight;

        this.CylinderL6 = document.createElement('canvas');
        this.CylinderL6.id = ('canvas-2d');
        this.CylinderL6.width = this.containerWidth;
        this.CylinderL6.height = this.containerHeight;

        this.container.appendChild(this.CylinderL6);

        this.ctx = this.CylinderL6.getContext("2d");

        this.ctx.font = "10px Arial";
//        this.ctx.fillText("-360", 0 + 5, this.CylinderL6.height / 2 - 5);
//        this.ctx.fillText("+360", this.CylinderL6.width - 30, this.CylinderL6.height / 2 - 5);
//        this.ctx.fillText("-360", this.CylinderL6.width / 2 + 5, this.CylinderL6.height - 5);
//        this.ctx.fillText("+360", this.CylinderL6.width / 2 + 5, 0 + 10);

        var centerX = this.CylinderL6.width / 2;
        var centerY = this.CylinderL6.height / 2;
        this.ctx.translate(centerX, centerY);

        var radius = 10;
        this.ctx.beginPath();
        this.ctx.arc(0, 0, radius, 0, 2 * Math.PI, false);

        //X axis
        this.ctx.moveTo(-this.CylinderL6.width / 2, 0);
        this.ctx.lineTo(this.CylinderL6.width / 2, 0);
        //Y axis
        this.ctx.moveTo(0, -this.CylinderL6.width / 2);
        this.ctx.lineTo(0, this.CylinderL6.width / 2);
        this.ctx.moveTo(-this.CylinderL6.width / 2, this.CylinderL6.width / 4);
        this.ctx.lineTo(this.CylinderL6.width / 2, this.CylinderL6.width / 4);
        this.ctx.moveTo(-this.CylinderL6.width / 2, -this.CylinderL6.width / 4);
        this.ctx.lineTo(this.CylinderL6.width / 2, -this.CylinderL6.width / 4);
        this.ctx.moveTo(this.CylinderL6.width / 4, -this.CylinderL6.width / 2);
        this.ctx.lineTo(this.CylinderL6.width / 4, this.CylinderL6.width / 2);
        this.ctx.moveTo(-this.CylinderL6.width / 4, -this.CylinderL6.width / 2);
        this.ctx.lineTo(-this.CylinderL6.width / 4, this.CylinderL6.width / 2);
        this.ctx.lineWidth = 0.5;

        // set line color
        this.ctx.strokeStyle = '#0000ff';
        this.ctx.stroke();
    }
};


// Initialize cylinderScene on page load
function initializeCanvas2D() {
    canvas2d.init();
}

if (window.addEventListener) {
    window.addEventListener('load', initializeCanvas2D, false);
	//window.addEventListener('resize', onWindow`, false);
} else if (window.attachEvent) {
    window.attachEvent('onload', initializeCanvas2D);
} else {
    window.onload = initializeCanvas2D;
}

/*
 canvas2d.CylinderL6.mouseover = function(mouseData) {   
 console.log("MOUSE OVER!");
 };
 
 canvas2d.CylinderL6.mouseout = function(mouseData) {
 console.log("MOUSE OUT!");
 };
 
 canvas2d.CylinderL6.mousedown = function(mouseData) {
 console.log("MOUSE DOWN!");
 };
 
 canvas2d.CylinderL6.mouseup = function(mouseData) {
 console.log("MOUSE UP!");
 };
 
 canvas2d.CylinderL6.click = function(mouseData) {
 console.log("CLICK!");
 };
 
 canvas2d.CylinderL6.touchstart = function(touchData) {
 console.log("TOUCH START!");
 };
 
 canvas2d.CylinderL6.touchend = function(touchData) {
 console.log("TOUCH END!");
 };
 
 canvas2d.CylinderL6.tap = function(touchData) {
 console.log("TAP!");
 };
 */


var Cricle = function () {
	this.init = function (level1) {
	    ctx.restore();
	    ctx.save();
	    ctx.beginPath();
	    ctx.arc(level1.x1 + level1.w/2, level1.y1 + 20, level1.w/2, 0, 2*Math.PI);
	    ctx.strokeStyle = '#f00';
	    ctx.stroke();
	    ctx.beginPath();
	    ctx.arc(level1.x1 + level1.w/2, level1.y1_1 + 20, level1.w/2, 0, 2*Math.PI);
	    ctx.strokeStyle = '#f00';
	    ctx.stroke();
	}
}
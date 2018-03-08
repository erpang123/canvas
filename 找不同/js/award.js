var Award = function () {
	var imgIcon = new ImgIcon();
	var bgImg = imgIcon.bgImg;
	var tableImg = imgIcon.tableImg;
	var arrowImg = imgIcon.arrowImg;
	var awardImg0 = imgIcon.awardImg0;
	var awardImg1 = imgIcon.awardImg1;
	var awardImg2 = imgIcon.awardImg2;
	var awardImg3 = imgIcon.awardImg3;
	var awardImg4 = imgIcon.awardImg4;
	var awardImg5 = imgIcon.awardImg5;
	this.arrarc = 0;
	this.maxArc = 0;
	this.speed = 0;
	this.speedIndex = 0;
	this.ArcFirst = 0;
	this.init = function () {
    clearTimeout(canvasTime);
		ctx.restore();
		ctx.save();
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height);
		ctx.drawImage(tableImg, canvas.width/2 - 150, canvas.height/2 - 150, 300, 300);
		ctx.drawImage(arrowImg, canvas.width/2 - 15, canvas.height/2 - 20, 30, 40);
	};
  this.stopAnimate = function () {
    var minArc = this.arrarc%360;
    if (minArc >= 0 && minArc < 45) {
      ctx.drawImage(awardImg5, canvas.width/2 - 150, canvas.height/2 - 195, 300, 390);
    } else if (minArc >= 45 && minArc < 90 || (minArc >= 180 && minArc < 225) || (minArc >= 270 && minArc < 315)) {
      ctx.drawImage(awardImg0, canvas.width/2 - 150, canvas.height/2 - 195, 300, 390);
    } else if (minArc >= 90 && minArc < 135) {
      ctx.drawImage(awardImg4, canvas.width/2 - 150, canvas.height/2 - 195, 300, 390);
    } else if (minArc >= 135 && minArc < 180) {
      ctx.drawImage(awardImg3, canvas.width/2 - 150, canvas.height/2 - 195, 300, 390);
    } else if (minArc >= 225 && minArc < 270) {
      ctx.drawImage(awardImg2, canvas.width/2 - 150, canvas.height/2 - 195, 300, 390);
    } else if (minArc >= 315 && minArc < 360) {
      ctx.drawImage(awardImg1, canvas.width/2 - 150, canvas.height/2 - 195, 300, 390);
    }
  };
	this.animate = function () {
		ctx.restore();
		ctx.save();
		this.arrarc += parseInt(this.speed); 							//旋转的角度
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height);
		ctx.translate(canvas.width/2, canvas.height/2);
		ctx.rotate(this.arrarc*Math.PI/180);
		ctx.drawImage(tableImg, -150, -150, 300, 300);
		ctx.restore();
		ctx.save();
		ctx.drawImage(arrowImg, canvas.width/2 - 15, canvas.height/2 - 20, 30, 40);
		if (this.ArcFirst) {										//第一次进入的时候不执行下面的部分
			return;
		}
		this.speed = (this.maxArc - this.speedIndex)/10;					//线性方程改变速度
		this.speedIndex++;										//线性方程的x轴，斜率是-1
		if (this.speed <= 0) {
			this.stopAnimate();
			return;
		}
		setTimeout((function () {
			this.animate()
		}).bind(this), 20);
	}
}

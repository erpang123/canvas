var Level = function () {
	var imgIcon = new ImgIcon();
  	var bgImg = imgIcon.bgImg;
  	var levelPic1 = imgIcon.levelPic1;
  	var levelPic2 = imgIcon.levelPic2;
  	var levelPic3 = imgIcon.levelPic3;
  	var levelPic4 = imgIcon.levelPic4;
  	var levelPic5 = imgIcon.levelPic5;
  	var levelPic6 = imgIcon.levelPic6;
	this.level1 = function () {
		ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height);
    	ctx.drawImage(levelPic1, 0, 0, canvas.width, canvas.height);
	}
	this.level2 = function () {
		ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height);
    	ctx.drawImage(levelPic2, 0, 0, canvas.width, canvas.height);
	}
	this.level3 = function () {
		ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height);
    	ctx.drawImage(levelPic3, 0, 0, canvas.width, canvas.height);
	}
	this.level4 = function () {
		ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height);
    	ctx.drawImage(levelPic4, 0, 0, canvas.width, canvas.height);
	}
	this.level5 = function () {
		ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height);
    	ctx.drawImage(levelPic5, 0, 0, canvas.width, canvas.height);
	}
	this.level6 = function () {
		ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height);
    	ctx.drawImage(levelPic6, 0, 0, canvas.width, canvas.height);
	}
}
var Success = function () {
	var imgIcon = new ImgIcon();
  var bgImg = imgIcon.bgImg;
  var passImg = imgIcon.passImg;
  var nextBtnImg = imgIcon.nextBtnImg;
	this.init = function () {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height);
		ctx.drawImage(passImg, canvas.width/2 - 150, canvas.height/2 - 195, 300, 390);
		ctx.drawImage(nextBtnImg, canvas.width/2-56, canvas.height/2 + 130, 112, 35);
	}
}
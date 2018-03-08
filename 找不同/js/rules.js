var Rules = function () {
  var imgIcon = new ImgIcon();
  var rules = imgIcon.rules;
  var playBtn = imgIcon.playBtn;
	this.init = function () {
		ctx.restore();
    ctx.save();
    ctx.drawImage(rules, canvas.width/2 - 150, canvas.height/2 - 185, 300, 370);
    ctx.drawImage(playBtn, canvas.width/2-56, canvas.height/2 + 120, 112, 40);
    btnBool = false;
	};
}
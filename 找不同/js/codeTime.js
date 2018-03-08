var CodeTime = function () {
  var imgIcon = new ImgIcon();
  var bgImg = imgIcon.bgImg;
  var failImg = imgIcon.failImg;
  var againBtnImg = imgIcon.againBtnImg;
  var level = new Level();

	this.adminTime = '00:05';
  this.point = 1;
	this.init = function () {
    ctx.restore();
    ctx.save();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = '48px serif';
    level['level' + this.point]();
    ctx.fillText(this.adminTime, 220, 80);
    var h = parseInt(this.adminTime.split(':')[0]);
    var m = parseInt(this.adminTime.split(':')[1]);
    if (h > 0) {
      if (m == 0) {
        h--;
        if (h < 10) {
          h = "0" + h;
        }
        m = 60;
      } else {
        m--;
        if (h < 10) {
          h = "0" + h;
        }
        if (m <10 ) {
          m = "0" + m;
        }
      }
    } else {
      if (m == 0) {
        ctx.restore();
        ctx.save();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(failImg, canvas.width/2 - 150, canvas.height/2 - 195, 300, 390);
        ctx.drawImage(againBtnImg, canvas.width/2-56, canvas.height/2 + 120, 112, 35);
        againBool = true;
        level1Bool = true;
        return;
      } else {
        m--;
        if (h < 10) {
          h = "0" + h;
        }
        if (m <10 ) {
          m = "0" + m;
        }
      }
    };
    this.adminTime = h + ':' + m;
    levelTime = setTimeout ((function () {
      this.init();
    }).bind(this), 1000);
  }
}
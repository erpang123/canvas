var Screen = function () {
  var imgIcon = new ImgIcon();
  var bgImg = imgIcon.bgImg;
  var titleImg = imgIcon.titleImg;
  var domImg1 = imgIcon.domImg1;
  var startBtn = imgIcon.startBtn;
  var awardBtnImg = imgIcon.awardBtnImg;
  var musicIcon = imgIcon.musicIcon;
  this.init = function () {
    musicIcon.onload = function () {
      rotate(60);
    };
    function moveImg (t) {
     ctx.restore();
     ctx.save();
     ctx.clearRect(0, 0, canvas.width, canvas.height);
     ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height);
     ctx.drawImage(titleImg, 5*t-60, 50, 300, 118);
     ctx.drawImage(domImg1, 50, 10*t, 303, 300);
     if (t == 20) {
       ctx.drawImage(startBtn, canvas.width/2-56, canvas.height - 130, 112, 40);
       ctx.drawImage(awardBtnImg, canvas.width/2-56, canvas.height - 80, 112, 40);
     }
    };
    function rotate (t) {
     ctx.restore();
     ctx.save();
     if(t >= 20) {
       moveImg(t);
     }
     ctx.translate(335,30)
     ctx.rotate((60-t)*Math.PI/90);
     ctx.drawImage(musicIcon, -15, -15, 30, 30);
     t--;
     canvasTime = setTimeout(function () {
       rotate(t);
     }, 20);
    };
  };
}

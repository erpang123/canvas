canvas.addEventListener('touchstart', function (event) {
	var e = {
		origin : {
			x: event.touches[0].clientX,
			y: event.touches[0].clientY
		}
	}
  console.log(e)
	startGame(e);
});

var musicBool = false;  //背景音乐的开关
var btnBool = true;     //开始游戏是否可以点击
var startBool = false;  //开始挑战关闭
var level1Bool = false; //第一关是否开始
var againBool = false;  //再次游戏是否开启
var nextBool = false;   //下一关是否开始

var award = new Award();  //抽奖模块
var cool = new Cool();    //canvas中元素的坐标系
var rules = new Rules();  //游戏规则
var codeTime = new CodeTime();//倒计时
var successImg = new Success();//成功界面
var cricle = new Cricle();  //绘制选中

function startGame (e) {
  //开始游戏按钮坐标
  var btn = cool.btn;
  //开始挑战按钮坐标
  var playBtnCool = cool.playBtnCool;
  //背景音乐按钮坐标
  var musicBtn = cool.musicBtn;
  //再次挑战按钮坐标
  var againBtn = cool.againBtn;
  //下一关按钮坐标
  var nextBtn =  cool.nextBtn;
  //抽奖按钮坐标
  var awardBtn = cool.awardBtn;
  //抽奖箭头
  var arrowIcon = cool.arrowIcon;
  //第一关不同点的坐标
  var level1 = cool.level1;
  //抽奖按钮点击
  if (e.origin.x > awardBtn.x && e.origin.x < awardBtn.x + awardBtn.w && e.origin.y > awardBtn.y && e.origin.y < awardBtn.y + awardBtn.h){
    award.init();
  }
  //点击抽奖箭头旋转
  if (e.origin.x > arrowIcon.x && e.origin.x < arrowIcon.x + arrowIcon.w && e.origin.y > arrowIcon.y && e.origin.y < arrowIcon.y + arrowIcon.h){
    award.maxArc = award.maxArc + parseInt(Math.random()*100+100);
    award.ArcFirst = false;
    award.animate();
  }
  //绘制游戏规则
  if (e.origin.x > btn.x && e.origin.x < btn.x + btn.w && e.origin.y > btn.y && e.origin.y < btn.y + btn.h && btnBool) {
    rules.init();
  };
  //开关背景音乐
  if (e.origin.x > musicBtn.x && e.origin.x < musicBtn.x + musicBtn.w && e.origin.y > musicBtn.y && e.origin.y < musicBtn.y + musicBtn.h) {
    if (musicBool) {
      musicBool = false;
      alert('关闭音乐');
    } else {
      musicBool = true;
      alert('开启音乐');
    }
  };
  //开始挑战游戏
  if (e.origin.x > playBtnCool.x && e.origin.x < playBtnCool.x + playBtnCool.w && e.origin.y > playBtnCool.y && e.origin.y < playBtnCool.y + playBtnCool.h && !startBool) {
    clearTimeout(canvasTime);
    codeTime.point = 1;
    codeTime.init();
    startBool = true;
  };
  //第一关不同点startBool
  if (!level1Bool && startBool && e.origin.x > level1.x1 && e.origin.x < level1.x1 + level1.w && ((e.origin.y > level1.y1 && e.origin.y < level1.y1 + level1.h) || (e.origin.y > level1.y1_1 && e.origin.y < level1.y1_1 + level1.h))) {
    level1Bool = true;
    clearTimeout(levelTime);
    cricle.init(level1);
    setTimeout(function() {
      successImg.init();
    },1000);
  };
  //再次挑战游戏
  if (e.origin.x > againBtn.x && e.origin.x < againBtn.x + againBtn.w && e.origin.y > againBtn.y && e.origin.y < againBtn.y + againBtn.h && againBool && level1Bool) {
    codeTime.adminTime = '00:10';
    codeTime.point = 1;
    codeTime.init();
    level1Bool = false;
    againBool = false;
  };
  //下一关
  if (e.origin.x > nextBtn.x && e.origin.x < nextBtn.x + nextBtn.w && e.origin.y > nextBtn.y && e.origin.y < nextBtn.y + nextBtn.h && level1Bool && !nextBool) {
    nextBool = true;
    codeTime.adminTime = '00:10';
    codeTime.point = codeTime.point + 1;
    codeTime.init();
  }
}
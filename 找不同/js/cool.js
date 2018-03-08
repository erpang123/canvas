var Cool = function () {
  //开始游戏按钮坐标
  this.btn = {
    w: 112,
    h: 40,
    x: canvas.width/2-56,
    y: canvas.height - 130
  };
  //开始挑战按钮坐标
  this.playBtnCool = {
    w: 112,
    h: 40,
    x: canvas.width/2-56,
    y: canvas.height/2 + 120
  };
  //背景音乐按钮坐标
  this.musicBtn = {
    w: 30,
    h: 30,
    x: 320,
    y: 15
  };
  //再次挑战按钮坐标
  this.againBtn = {
    w: 112,
    h: 40,
    x: canvas.width/2-56,
    y: canvas.height/2 + 120
  };
  //下一关按钮坐标
  this.nextBtn =  {
    w: 112,
    h: 40,
    x: canvas.width/2-56,
    y: canvas.height/2 + 120
  }
  //抽奖按钮坐标
  this.awardBtn = {
    w: 112,
    h: 40,
    x: canvas.width/2-56,
    y: canvas.height - 80
  }
  //抽奖箭头
  this.arrowIcon = {
    w: 30,
    h: 40,
    x: canvas.width/2 - 15,
    y: canvas.height/2 - 22
  }
  //第一关不同点的坐标
  this.level1 = {
    w: 60,
    h: 60,
    x1: 130,
    y1: 340,
    y1_1: 510
  };
  //第二关不同点的坐标
  this.level2 = [{
    w: 60,
    h: 60,
    x1: 121,
    y1: 457
  },{
    w: 60,
    h: 60,
    x2: 68,
    y2: 368
  }];
  //第三关不同点的坐标
  this.level3 = [{
    w: 60,
    h: 60,
  },{
    w: 60,
    h: 60,
  },{
    w: 60,
    h: 60,
  }];
  //第四关不同点的坐标
  this.level4 = [{
    w: 60,
    h: 60,
  },{
    w: 60,
    h: 60,
  },{
    w: 60,
    h: 60,
  },{
    w: 60,
    h: 60,
  }];
  //第五关不同点的坐标
  this.level5 = [{
    w: 60,
    h: 60,
  },{
    w: 60,
    h: 60,
  },{
    w: 60,
    h: 60,
  },{
    w: 60,
    h: 60,
  },{
    w: 60,
    h: 60,
  }];
  //第六关不同点的坐标
  this.level6 = [{
    w: 60,
    h: 60,
  },{
    w: 60,
    h: 60,
  },{
    w: 60,
    h: 60,
  },{
    w: 60,
    h: 60,
  },{
    w: 60,
    h: 60,
  },{
    w: 60,
    h: 60,
  }];
}
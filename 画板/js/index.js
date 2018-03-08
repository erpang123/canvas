var RangeText = document.getElementById("RangeText");
var bgList = document.getElementById('bg-list');
var range = document.getElementById('range-cricle');
var canvasShow = document.getElementById('canvas-show');
var downbtn = document.getElementById('downbtn');
var pdfBtn = document.getElementById('downPdf');
var canvas = document.getElementById('ctx');
canvas.width = 500;
canvas.height = 500;

var startX = 0, startY = 0, moveX = 0, moveY = 0, startBool = false;
canvas.addEventListener('mousedown', function (event) {
  startX = event.clientX;
  startY = event.clientY;
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  startBool = true;
});

canvas.addEventListener('mousemove', function (event) {
  if (!startBool) {
    return;
  }
  moveX = event.clientX;
  moveY = event.clientY;
  ctx.lineTo(moveX, moveY);
  ctx.stroke();
});

canvas.addEventListener('mouseup', function (event) {
  startBool = false;
})

var ctx = canvas.getContext('2d');
ctx.strokeStyle = '#f44336';
ctx.lineWidth = 1;

function getRange (_this) {
  range.style.left = 13.2*(_this.value - 1) + 'px';
  RangeText.innerHTML = _this.value;
  ctx.lineWidth = _this.value;
}

function saveImg (event) {
  var dataURL = canvas.toDataURL('image/png', 1.0);
  canvasShow.src = dataURL;
  canvasShow.style.display = 'block';
  downbtn.href = dataURL;
  pdfBtn.setAttribute('data-url', dataURL)
}

function changeName (_this) {
  var name = _this.value;
  if (name == '') {
    name = 'img';
  }
  downbtn.download = name;
}

function downImg (event)　{
  if (downbtn.download == ''){
    alert('请输入你要保存的图片名称')
    event.preventDefault();
  }
}

function downPdf (event) {
  var name = downbtn.download || 'img'
  var dataURL = event.target.getAttribute('data-url');
  var doc = new jsPDF('landscape','pt',[205, 115])
  doc.addImage(dataURL, 'PNG', 0, 0, 205, 115);
  doc.save(name +'.pdf');
}

function resetCanvas () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  canvasShow.src = '';
  canvasShow.style.display = 'none';
  downbtn.href = '';
  downbtn.download = '';
}

function selectColor (_this) {
  var colorLists = bgList.getElementsByTagName('a');
  for (var i = 0; i < colorLists.length; i++) {
    colorLists[i].classList.remove('selectDiv')
  }
  _this.classList.add('selectDiv');
  var color = _this.getAttribute('data-color');
  ctx.strokeStyle = color;
}

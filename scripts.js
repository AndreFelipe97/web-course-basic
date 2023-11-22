

var count = 0;
var totalContent = document.getElementById('total');

if (count <= 0) document.getElementById('sub-btn').disabled = true;

function add() {
  count++;
  if (count > 0) document.getElementById('sub-btn').disabled = false;
  totalContent.innerHTML = count;
};

function sub() {
  if (count <= 0) return
  count--;
  if (count <= 0) document.getElementById('sub-btn').disabled = true;
  totalContent.innerHTML = count;
};

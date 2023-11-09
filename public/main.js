var toggle = document.getElementById("toggle");
var active = document.getElementById("active");

toggle.onclick = function(){
	active.className.toggle('containernav');
}

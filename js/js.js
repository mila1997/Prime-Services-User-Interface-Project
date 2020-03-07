var myScrollFunc = function() {
  var y = window.scrollY;
  
  if (y <100){
	document.getElementById("back-to-top").classList.add("hide");
	document.getElementById("back-to-top").classList.remove("show");
  }
  if (y >= 100) {
	document.getElementById("back-to-top").classList.remove("hide");
    document.getElementById("back-to-top").classList.add("show");
  } 
};

window.addEventListener("scroll", myScrollFunc);
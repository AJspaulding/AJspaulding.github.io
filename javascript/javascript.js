var imgs = document.querySelectorAll("img");


var modal = document.getElementById("modal");
var modal_img = modal.children[0];

for (var i = 0; i < imgs.length; i++) {
  imgs[i].onclick = function() {
    modal_img.src = this.src;
    modal.classList.add("show");
  }
}

// Close when clicking anywhere on modal not on img
modal.onclick = function(e) {
  if (e.target !== this)
    return;
    
  modal.classList.remove("show");
}
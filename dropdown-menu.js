function dropdown() {
  var navElement =$("a");
  var element = $(".drop-element-i")

  navElement.click(function() {

     element.toggleClass();
  });
}






function init() {

dropdown();
}
$(document).ready(init);

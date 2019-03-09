function hiddedMenu() {

  var subElement = $(".nav-element .drop-container-i");
  subElement.slideUp();

}




function elementClick(){

var navElement = $(".nav-element");

navElement.click(function() {

  hiddedMenu();
  var me = $(this);

  me.children(".drop-container-i").slideToggle();
});
}

function elementHover() {

  var dropElement = $(".drop-element-i");

  dropElement.hover(function() {

    var me  = $(this);
    me.children(".drop-container-ii").slideToggle();
  }, function() {

    var me  = $(this);
    me.children(".drop-container-ii").slideToggle();
  });
}

function init() {
  elementHover();
  elementClick();
}

$(document).ready(init);

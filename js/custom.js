//* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

$("#nav-button").click(function(){
  $("#header_nav").toggleClass("header-hide");
  $("#header_nav2").toggleClass("header-hide");
});

$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  3000);

var gifSource1 = $('#mikelogo').attr('src'); //get the source in the var
$('#mikelogo').attr('src', ""); //erase the source     
$('#mikelogo').attr('src', gifSource1+"?"+new Date().getTime());

var gifSource2 = $('#mlogo').attr('src'); //get the source in the var
$('#mlogo').attr('src', ""); //erase the source     
$('#mlogo').attr('src', gifSource2+"?"+new Date().getTime());
$(document).ready(function() {
    $(".navbar-container").load("Navbar.html", function(response, status) {
        console.log(status);
    });
});

$(document).ready(function() {
    $(".footer").load("footer.html", function(response, status) {
        console.log(status);
    });
});

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopNav");
  x.classList.toggle("responsive");
}

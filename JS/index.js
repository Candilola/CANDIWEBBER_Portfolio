 /* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
 function myFunction() {
  var mobileLinks = document.getElementById("mobLinks")
  var burger = document.getElementById("burger")

  if (mobileLinks.style.display == "none") {
      mobileLinks.style.display = "block"
      burger.src = "./icon_x.png"
  } else {
      mobileLinks.style.display = "none"
      burger.src = "./icon_burger.png"
  }
}

$(document).ready(function(){
    var btt = $(".back-to-top")

    btt.on("click", function(e){
        $("html, body").animate({
            scrollTop: 0
        }, 500);

        e.preventDefault();
    });

    $(window).on("scroll", function(){
        var self = $(this),
        height = self.height(),
        top = self.scrollTop();

        if(top > height){
            if(!btt.is(":visible")){
                btt.show();
            }
        } else {
            btt.hide();
        }

        console.log(height);
    });
});


// function myFunction() {
//     var x = document.getElementById("myLinks");
//     var y = document.getElementsByClassName("button-nav")
//     console.log(y)
//     if (x.style.display === "block") {
//       x.style.display = "none";
//       y[0].style.display = "none";
//       y[1].style.display = "none";
//       y[2].style.display = "none";
//       y[3].style.display = "none";
//     } else {
//       x.style.display = "block";
//       y[0].style.display = "block";
//       y[1].style.display = "block";
//       y[2].style.display = "block";
//       y[3].style.display = "block";
//     }
//   }

function myFunction() {
    var x = document.getElementById("myLinks");
    var y = document.getElementsByClassName("button-nav")
    console.log(y)
    if (x.style.display === "block") {
      x.style.display = "none";
      y[0].style.display = "none";
      y[1].style.display = "none";
      y[2].style.display = "none";
      y[3].style.display = "none";
    } else {
      x.style.display = "block";
      y[0].style.display = "block";
      y[1].style.display = "block";
      y[2].style.display = "block";
      y[3].style.display = "block";
    }
  }
  jQuery(".leadpic").fadeOut(2000);
//   setTimeout(fadeOut, 12000);

// function fade(){
//     $(".leadpic").fadeOut("slow");
// }
// setTimeout(fadeOut, 2000);
// console.log("test");

// setTimeout(function(){ alert("Hello"); }, 3000);
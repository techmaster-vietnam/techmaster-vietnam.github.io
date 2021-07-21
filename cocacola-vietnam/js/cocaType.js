$(document).ready(function () {
 $(".multiple-items").slick({
   dots: false,
   infinite: true,
   speed: 300,
   slidesToShow: 3,
   slidesToScroll: 1,
   arrows: true,
   prevArrow: ".prevArrow",
   nextArrow: ".nextArrow",
   centerMode: true,
   centerPadding: "0px",
   responsive: [
     {
       breakpoint: 1024,
       settings: {
         slidesToShow: 3,
         slidesToScroll: 3,
         infinite: true,
       },
     },
     {
       breakpoint: 795,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
         centerMode: false,
       },
     },
   ],
 });
});


function open_nutri() {
  document.getElementById("test").style.color = "red";
  document.getElementsByClassName("thirdBanner-des-right-title")[0].style.visibility = "visible";
  document.getElementsByClassName(
    "thirdBanner-des-right-title"
  )[1].style.visibility = "hidden";
}

function open_ingre(){document.getElementsByClassName(
  "thirdBanner-des-right-title"
)[0].style.visibility = "hidden";
document.getElementsByClassName(
  "thirdBanner-des-right-title"
)[1].style.visibility = "visible";
}

var i =0;

function change_bg_next() {
  if(i==3)
    i = 0;
  else
  i++;
  document.getElementsByClassName("main--container-thirdBanner")[i].style.display = "unset";
  for (a = 0; a <= 3; a++)
  {
    if (a != i)
    {
      document.getElementsByClassName("main--container-thirdBanner")[a].style.display="none";
      }
    }
}

function change_bg_prev() {
  if (i == 0)
    i = 3;
  else
    i--;
  
  document.getElementsByClassName("main--container-thirdBanner")[
    i
  ].style.display = "unset";

   for (a = 3; a >= 0; a--) {
     if (a != i) {
       document.getElementsByClassName("main--container-thirdBanner")[
         a
       ].style.display = "none";
     }
   }
}

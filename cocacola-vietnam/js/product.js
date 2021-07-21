var x = 1;

$(".slider-for").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: ".prevArrow",
  nextArrow: ".nextArrow",
});

function checkmarkblue() {
  var color = document.getElementsByClassName("checkmark")[0];
  color.style.opacity = "1";
  for (i = 0; i < 3; i++)
    if(i!=0)
    document.getElementsByClassName("checkmark")[i].style.opacity="0";
}

function checkmarkred() {
  var color = document.getElementsByClassName("checkmark")[1];
  color.style.opacity = "1";
  for (i = 0; i < 3; i++)
    if (i != 1)
      document.getElementsByClassName("checkmark")[i].style.opacity = "0";
}

function checkmarkgrey() {
  var color = document.getElementsByClassName("checkmark")[2];
  color.style.opacity = "1";
  for (i = 0; i < 3; i++)
    if (i != 2)
      document.getElementsByClassName("checkmark")[i].style.opacity = "0";
}


function sizeS() {
  document.getElementsByClassName("size-block")[0].style.border =
    "1px solid #000000";
  for (i = 0; i < 4; i++)
    if (i != 0)
      document.getElementsByClassName("size-block")[i].style.border = "unset";
}

function sizeM() {
  document.getElementsByClassName("size-block")[1].style.border =
    "1px solid #000000";
  for (i = 0; i < 4; i++)
    if (i != 1)
      document.getElementsByClassName("size-block")[i].style.border = "unset";
}

function sizeL() {
  document.getElementsByClassName("size-block")[2].style.border =
    "1px solid #000000";
  for (i = 0; i < 4; i++)
    if (i != 2)
      document.getElementsByClassName("size-block")[i].style.border = "unset";
}

function sizeXL() {
  document.getElementsByClassName("size-block")[3].style.border =
    "1px solid #000000";
  for (i = 0; i < 4; i++)
    if (i != 3)
      document.getElementsByClassName("size-block")[i].style.border = "unset";
}




function nextNav() {
  var navcolorB = document.getElementById("navColorBlue");
  var navcolorR = document.getElementById("navColorRed");
  var navcolorG = document.getElementById("navColorGrey");
  x++;
  if (x == 4)
    x = 1;
  switch (x) {
    case 1:
      navcolorB.style.scale ="1.1";
       navcolorB.style.transition = "all 0.3s ease-in-out";
      navcolorB.style.filter = "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))";
      navcolorB.style.border = "1px solid #ff0000";
      navcolorR.style.border = "unset";
      navcolorR.style.filter = "unset";
      navcolorR.style.transition = "unset";
      navcolorR.style.scale="unset";
      navcolorG.style.border = "unset";
      navcolorG.style.filter = "unset";
      navcolorG.style.transition = "unset";
      navcolorG.style.scale = "unset";
      break;
    case 2:
      navcolorB.style.border = "unset";
      navcolorB.style.filter = "unset";
      navcolorB.style.transition = "unset";
      navcolorB.style.scale = "unset";
      navcolorR.style.border = "1px solid #ff0000";
      navcolorR.style.scale = "1.1";
      navcolorR.style.transition = "all 0.3s ease-in-out";
      navcolorR.style.filter = "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))";
      navcolorG.style.border = "unset";
      navcolorG.style.filter = "unset";
      navcolorG.style.transition = "unset";
      navcolorG.style.scale = "unset";
      break;
    case 3:
      navcolorB.style.border = "unset";
        navcolorB.style.filter = "unset";
        navcolorB.style.transition = "unset";
        navcolorB.style.scale = "unset";
      navcolorR.style.border = "unset";
      navcolorR.style.filter = "unset";
      navcolorR.style.transition = "unset";
      navcolorR.style.scale = "unset";
      navcolorG.style.border = "1px solid #ff0000";
      navcolorG.style.scale = "1.1";
      navcolorG.style.transition = "all 0.3s ease-in-out";
      navcolorG.style.filter = "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))";
      break;
  }
}


function prevNav() {
  var navcolorB = document.getElementById("navColorBlue");
  var navcolorR = document.getElementById("navColorRed");
  var navcolorG = document.getElementById("navColorGrey");
  x--;
  if (x == 0)
    x = 3;
  
  switch (x) {
    case 1:
      navcolorB.style.scale = "1.1";
      navcolorB.style.transition = "all 0.3s ease-in-out";
      navcolorB.style.filter = "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))";
      navcolorB.style.border = "1px solid #ff0000";
      navcolorR.style.border = "unset";
      navcolorR.style.filter = "unset";
      navcolorR.style.transition = "unset";
      navcolorR.style.scale = "unset";
      navcolorG.style.border = "unset";
      navcolorG.style.filter = "unset";
      navcolorG.style.transition = "unset";
      navcolorG.style.scale = "unset";
      break;
    case 2:
      navcolorB.style.border = "unset";
      navcolorB.style.filter = "unset";
      navcolorB.style.transition = "unset";
      navcolorB.style.scale = "unset";
      navcolorR.style.border = "1px solid #ff0000";
      navcolorR.style.scale = "1.1";
      navcolorR.style.transition = "all 0.3s ease-in-out";
      navcolorR.style.filter = "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))";
      navcolorG.style.border = "unset";
      navcolorG.style.filter = "unset";
      navcolorG.style.transition = "unset";
      navcolorG.style.scale = "unset";
      break;
    case 3:
      navcolorB.style.border = "unset";
      navcolorB.style.filter = "unset";
      navcolorB.style.transition = "unset";
      navcolorB.style.scale = "unset";
      navcolorR.style.border = "unset";
      navcolorR.style.filter = "unset";
      navcolorR.style.transition = "unset";
      navcolorR.style.scale = "unset";
      navcolorG.style.border = "1px solid #ff0000";
      navcolorG.style.scale = "1.1";
      navcolorG.style.transition = "all 0.3s ease-in-out";
      navcolorG.style.filter = "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))";
      break;
  }
}


var DownLi = 0;

function dropDownLi() {
  var firstLi = document.getElementById("firstLi");
  firstLi.classList.add("dropLi");
  if (DownLi % 2 != 1) {
    document.getElementsByClassName("li-wrapper")[0].style.display = "block";
    document.getElementsByClassName("li-wrapper")[0].transition =
      "all 0.3s ease-in-out";
  }
  else {
    firstLi.classList.remove("dropLi");
    document.getElementsByClassName("li-wrapper")[0].style.display = "none";
  }
  DownLi++;
}

var DownLiTop = 0;

function dropDownLiTop() {
  var firstLiTop = document.getElementById("firstLiTop");
  firstLiTop.classList.add("dropLiTop");
  if (DownLiTop % 2 != 1) {
    document.getElementsByClassName("liTop-wrapper")[0].style.display = "block";
    document.getElementsByClassName("liTop-wrapper")[0].transition =
      "all 0.3s ease-in-out";
  } else {
    firstLiTop.classList.remove("dropLiTop");
    document.getElementsByClassName("liTop-wrapper")[0].style.display = "none";
  }
  DownLiTop++;
}
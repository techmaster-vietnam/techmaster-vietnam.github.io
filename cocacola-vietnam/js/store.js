function checkmarkgrey() {
    document.getElementsByClassName("checkmark")[0].style.visibility = "visible";
    for (i = 1; i < 4; i++)
    {
        document.getElementsByClassName("checkmark")[i].style.visibility =
          "hidden";
        }
}

function checkmarkwhite() {
  document.getElementsByClassName("checkmark")[1].style.visibility = "visible";
    for (i = 0; i < 4; i++) {
      if(i !== 1)
    document.getElementsByClassName("checkmark")[i].style.visibility = "hidden";
  }
}

function checkmarkred() {
  document.getElementsByClassName("checkmark")[2].style.visibility = "visible";
  for (i = 0; i < 4; i++) {
    if (i !== 2)
      document.getElementsByClassName("checkmark")[i].style.visibility =
        "hidden";
  }
}
function checkmarkblack() {
  document.getElementsByClassName("checkmark")[3].style.visibility = "visible";
  for (i = 0; i < 4; i++) {
    if (i !== 3)
      document.getElementsByClassName("checkmark")[i].style.visibility =
        "hidden";
  }
}

// function dropDown() {
//   document.getElementsByClassName("dropDown")[0].style.display="block";
// }

document.addEventListener("mouseup", function (e) {
  var container = document.getElementsByClassName("filter-size")[0];
  var wrapper = document.getElementsByClassName("dropDown")[0];
  if (!container.contains(e.target)) {
    wrapper.style.display = "none";
  }
});


var x;

function pageColor1() {
  x = 1;
  var page = document.getElementsByClassName("page")[1];
  page.style.color = "black";
  for (i = 0; i < 6; i++) {
    if(i!=1)
    document.getElementsByClassName("page")[i].style.color = "#8A8A8A";
   }
}


function pageColor2() {
  x = 2;
  var page = document.getElementsByClassName("page")[2];
  page.style.color = "black";
  for (i = 0; i < 6; i++) {
    if (i != 2)
      document.getElementsByClassName("page")[i].style.color = "#8A8A8A";
  }
}

function pageColor3() {
  x = 3;
  var page = document.getElementsByClassName("page")[3];
  page.style.color = "black";
  for (i = 0; i < 6; i++) {
    if (i != 3)
      document.getElementsByClassName("page")[i].style.color = "#8A8A8A";
  }
}

function pageColor4() {
  x = 4;
  var page = document.getElementsByClassName("page")[4];
  page.style.color = "black";
  for (i = 0; i < 6; i++) {
    if (i != 4)
      document.getElementsByClassName("page")[i].style.color = "#8A8A8A";
  }
}

function pageColor5() {
  x = 5;
  var page = document.getElementsByClassName("page")[5];
  page.style.color = "black";
  for (i = 0; i < 6; i++) {
    if (i != 5)
      document.getElementsByClassName("page")[i].style.color = "#8A8A8A";
  }
}

function prevPage() {
  switch (x) {
    case 5:
      pageColor4();
      break;
    case 4:
      pageColor3();
      break;
    case 3:
      pageColor2()
      break;
    case 2:
      pageColor1();
      break;
  }
}

function nextPage() {
  switch (x) {
    case 4:
      pageColor5();
      break;
    case 3:
      pageColor4();
      break;
    case 2:
      pageColor3();
      break;
    case 1:
      pageColor2();
      break;
  }
}

//open filter
$("#filter-drp").click(function () {
  $(".order-drop").slideDown(500);
  $("#filter-chevron").css({
    transform: "rotate(180deg)",
    transition: "all 0.3s ease-in -out",
  });
});

//close filter
$(".drop-item").click(function () {
  let filter = $("#filter-drp").text();
  $("#filter-drp").text( $(this).text());
  $(this).text(filter);
  $(".order-drop").slideUp(500);
  $("#filter-chevron").css({
    transform: "rotate(360deg)",
    transition: "all 0.3s ease-in -out",
  });
});

// open sizefilter
$("#dropButton").click(function () {
  $(".size-block-drop").slideDown(500);
  $("#size-chevron").css({
    transform: "rotate(180deg)",
    transition: "all 0.3s ease-in -out",
  });
});

//close size filter
$(".size-item").click(function () {
  var text = $(this).text();
  $(this).text($("#dropButton-text").text());
  $("#dropButton-text").text(text);
  $(".size-block-drop").slideUp(500);
  $("#size-chevron").css({
    transform: "rotate(360deg)",
    transition: "all 0.3s ease-in -out",
  });
});

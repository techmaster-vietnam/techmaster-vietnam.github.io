
$(window).on('load', function() {
  if (sessionStorage.getItem("updates") != "off") {
    $('#updates').modal('show');
  }
  sessionStorage.setItem("updates", "off");
});


/* 
-----------------------------------
 loading screen
-----------------------------------
*/
//counter

let loading =  document.getElementById("loading");
let counter =  document.getElementById("counter__num");

let loadingCounter = setInterval(() => {
  counter.innerHTML = parseInt(counter.innerHTML) + 1
  }, 30)

setTimeout(() => {
  clearTimeout(loadingCounter);
  loading.style.visibility = "hidden";
  loading.style.opacity = "0";
  if (sessionStorage.getItem("loading") == null) {
    sessionStorage.setItem("loading", "done")
  }
}, 3000)

/* 
-----------------------------------
 hết loading screen
-----------------------------------
*/
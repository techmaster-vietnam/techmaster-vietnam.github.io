let galleryFilter = (e) => {
  let filterItems = document.getElementsByClassName("gallery-image");
    // console.log(filterItems);
  if (e == "all") e = "";
  for ( let i =0; i < filterItems.length; i++) {
      removeClass(filterItems[i], "show-gallery");
      if (filterItems[i].className.indexOf(e) > -1) addClass(filterItems[i], "show-gallery")
  }
};
galleryFilter("all");

  function addClass(ele, name) {
    var i, arr1, arr2;
    arr1 = ele.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {
        ele.className += " " + arr2[i];
      }
    }
  }

// Hide elements that are not selected
  function removeClass(ele, name) {
    var i, arr1, arr2;
    arr1 = ele.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    ele.className = arr1.join(" ");
  }

let filterButtons = document.getElementsByClassName("filter-btn");
for (let i = 0; i < filterButtons.length; i++) {
//   console.log(filterButtons[i]);
  filterButtons[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

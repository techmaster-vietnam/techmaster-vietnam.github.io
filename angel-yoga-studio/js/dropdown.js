let prev;
let menuItems = document.querySelector(".menu");
menuItems.addEventListener("click", (e) => {
  let li = e.target.closest(".menu-items");
  prev &&
    prev != li &&
    prev.querySelector(".sub-menu").classList.remove("show");

  prev &&
    prev != li &&
    prev.querySelector(".bi-chevron-compact-down").classList.remove("d-none");

  prev &&
    prev != li &&
    prev.querySelector(".bi-chevron-compact-up").classList.add("d-none");
    
  prev = li;
  li.querySelector(".sub-menu").classList.toggle("show");
  li.querySelector(".bi-chevron-compact-down").classList.toggle("d-none");
  li.querySelector(".bi-chevron-compact-up").classList.toggle("d-none");
});

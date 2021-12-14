const endpoint = "https://cdn.rawgit.com/minhthuy30197/minhthuy30197.github.io/25b87e86/icecream_shop/json/icecreams.json";
var infos = [];
fetch(endpoint) 
.then(obj => obj.json())
.then(data => infos.push(...data));

window.onload = function() {
	getList(infos);
}

function showFilter(button) {
	if (button.innerHTML === "Hide filter") {
		document.querySelector('.filter').style.display = "none";
		button.innerHTML = '<i class="fas fa-filter"></i> Filter products';
	} else {
		document.querySelector('.filter').style.display = "block";
		button.innerHTML = "Hide filter";
	}
}
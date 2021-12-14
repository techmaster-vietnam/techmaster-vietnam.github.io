// Truy cập vào phần tử DOM
const resultEl = document.querySelector(".result");
const btnRemoveFilter = document.querySelector(".btn-remove-filter");
const inputsAll = document.querySelectorAll(".input-all");
const inputItemsAll = document.querySelectorAll(".input-item");

// Khai báo biến
// Danh sách bộ lọc hiện có
let filter = {
    brand: [],
    trademark: [],
    need: [],
};

// Render filter item
function renderFilter(filterObj) {
    // Trước khi render filter tag thì clear hết filter tag hiện có
    resultEl.innerHTML = "";

    // Ẩn hiện nút "Xóa bộ lọc"
    displayBtnRemoveFilter(filterObj);

    // Duyệt qua object filter
    for (const key in filterObj) {
        // Truy cập vào nút "Tất cả" của từng key
        const inputAll = document.querySelector(
            `.${key} .input-all[category="${key}"]`
        );

        // Truy cập vào các nút input còn lại của từng key
        const inputItems = document.querySelectorAll(
            `.${key} .input-item[category="${key}"]`
        );

        // Nếu không có filterItem nào trong key
        if (filterObj[key].length == 0) {
            // Nút "Tất cả" sẽ được checked
            // inputAll.checked = true;

            // Các nút "input còn lại sẽ được unchecked"
            Array.from(inputItems).map((input) => (input.checked = false));
        } else {
            // Nút "Tất cả" sẽ được unchecked
            // inputAll.checked = false;

            // Các nút "input còn lại sẽ được checked nếu nằm trong key"
            Array.from(inputItems).map((input) => {
                let title = input.value;
                if (filterObj[key].includes(title)) {
                    input.checked = true;
                } else {
                    input.checked = false;
                }
            });

            // Tạo filterItem trên giao diện
            createFilter(key, filterObj[key]);
        }
    }
}

// Tạo filter tag
function createFilter(key, obj) {
    obj.forEach((ele) => {
        resultEl.insertAdjacentHTML(
            "beforeend",
            `
            <li class="result-item">
                <span>${ele}</span>
                <button 
                    class="btn-remove"
                    onclick="removeFilterItemAndRender('${key}', '${ele}')"
                ><i class="fas fa-times"></i>
                </button>
            </li>
        `
        );
    });
}

function removeFilterItemAndRender(key, ele) {
    removeFilterItem(key, ele);
    renderFilter(filter);
}

// Remove filter tag
function removeFilterItem(key, ele) {
    for (let i = 0; i < filter[key].length; i++) {
        const item = filter[key][i];
        if (item == ele) {
            filter[key].splice(i, 1);
        }
    }
}

// Remove all filter tag
btnRemoveFilter.addEventListener("click", function () {
    for (const key in filter) {
        filter[key] = [];
    }
    renderFilter(filter);
});

// Ấn vào nút "Tất cả"
Array.from(inputsAll).map((input) => {
    input.addEventListener("change", function () {
        if (!input.checked) {
            return;
        }
        let filterKey = input.getAttribute("category");
        input.checked = true;
        filter[filterKey] = [];
        renderFilter(filter);
    });
});

// Ấn vào nút "input" khác
Array.from(inputItemsAll).map((input) => {
    input.addEventListener("change", function () {
        let filterKey = input.getAttribute("category");
        if (input.checked) {
            filter[filterKey].push(input.value);
        } else {
            removeFilterItem(filterKey, input.value);
        }
        renderFilter(filter);
    });
});

// Hiển thị nút "xóa bộ lọc"
function displayBtnRemoveFilter(filterObj) {
    for (const key in filterObj) {
        if (filterObj[key].length != 0) {
            btnRemoveFilter.classList.remove("hide");
            return;
        }
        btnRemoveFilter.classList.add("hide");
    }
}

window.onload = renderFilter(filter);

let touchForm = document.getElementById("get-touch");
let getName = document.getElementById("get-name");

touchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert(`Cảm ơn ${getName.value} đã gửi thông tin. Angel sẽ liên hệ lại bạn trong thời gian sớm nhất.`);
})


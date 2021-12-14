// save acc info

$(".button-red").click(function () {
    let checkaccinput = $("#checkaccountname").val();
    let checkfullnameinput = $("#fullname").val();
    let checkphone = $("#checkphone").val();
    let checkdob = $("#dob").val();
    localStorage.setItem("id", JSON.stringify(checkaccinput));
    localStorage.setItem("fullname", JSON.stringify(checkfullnameinput));
    localStorage.setItem("phone", JSON.stringify(checkphone));
    localStorage.setItem("dob", JSON.stringify(checkdob));
    alert("lưu thông tin thành công ");
});
 

function loadAcc() {
    $("#checkaccountname").val(JSON.parse(localStorage.getItem("id")));
    $("#fullname").val(JSON.parse(localStorage.getItem("fullname")));
    $("#checkphone").val(JSON.parse(localStorage.getItem("phone")));
    $("#dob").val(JSON.parse(localStorage.getItem("dob")));
}

loadAcc();
// console.log("validation");
const classModal = document.getElementById("eventModal");
const formSchedule = document.getElementById("form-schedule");
const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phone-number");
const myModal = new bootstrap.Modal(classModal, {
    keyboard: false
  })
// console.log(formSchedule);

let checkName = () => {
    let nameContent = fullName.value.trim(); 

    if (nameContent.length > 0 ) {
        return true;
    };

    return false;
}

let checkPhone = () => {
    let phoneContent = phoneNumber.value.trim(); 

    if (!isNaN(phoneContent) && phoneContent != "") {
        return true;
    };

    return false;
}

let checkEmail = () => {
    let emailContent = email.value.trim().toLowerCase();
    let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(emailContent)) {
        return true;
    };

    return false
}


formSchedule.addEventListener("submit" , (e) => {
    e.preventDefault();

    let flag = true;

    if ( checkName()) {
        // console.log("Right !");
        fullName.classList.add("is-valid");
        fullName.classList.remove("is-invalid")
    } else {
        // console.log("Wrong");
        fullName.classList.add("is-invalid");
        fullName.classList.remove("is-valid");
        flag = false;
    }

    if ( checkPhone()) {
        // console.log("Right Phone !");
        phoneNumber.classList.add("is-valid");
        phoneNumber.classList.remove("is-invalid")
    } else {
        // console.log("Wrong Phone!");
        phoneNumber.classList.add("is-invalid");
        phoneNumber.classList.remove("is-valid")
        flag = false;
    }

    if (checkEmail()) {
        // console.log("Right Email !");
        email.classList.add("is-valid");
        email.classList.remove("is-invalid");
    } else {
        email.classList.add("is-invalid");
        email.classList.remove("is-valid");
        // console.log(("Wrond Email!"));
        flag = false
    }

    if (flag) {
        myModal.hide();
        alert("Cảm ơn bạn đã gửi thông tin. AngelStudio sẽ sớm liên hệ tới bạn !")
    }
})
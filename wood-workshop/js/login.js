
let form = document.querySelector(".needs-validation");
let username = form.elements.username;
let password = form.elements.password;

form.addEventListener('submit',function(ev){
    let {value : user} = username;
    let {value : pass} = password;

    
    let isValid = true;
    
    if(/^[a-zA-Z0-9]{6,12}$/.test(user)){
        username.classList.remove('is-invalid');
    }else{
        username.classList.add('is-invalid');
        isValid = false;
    }

    if(pass.length < 6 || pass.length > 20){
        password.classList.add('is-invalid');
        isValid = false;
    }else{
        password.classList.remove('is-invalid'); 
    }

    if(!isValid){
        ev.preventDefault();
        ev.stopPropagation();
    
    }else{
        alert('Đăng nhập thành công')
    }
})
    

    
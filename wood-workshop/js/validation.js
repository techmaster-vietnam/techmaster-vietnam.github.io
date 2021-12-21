// Validation cho đăng nhập
let username = document.querySelector('.user-name');
let password = document.querySelector('.pass');
document.querySelector('.login').addEventListener('click',()=>{
    
    let {value : user} = username;
    let {value : pass} = password;
        //Kiểm tra username
        let isValid = true;
        if(/^[a-zA-Z0-9]{6,12}$/.test(user)){
        document.querySelector('.wrong-user').classList.add('is-invalid');
        console.log(123);
        }else{
        document.querySelector('.wrong-user').classList.remove('is-invalid');
        isValid = false;
        
        document.querySelector('.user-name').style.marginBottom = '5px';
        }

        //Kiểm tra password
        if(pass.length < 6 || pass.length > 20){
        document.querySelector('.wrong-pass').classList.remove('is-invalid');
        isValid = false;
        document.querySelector('.pass').style.marginBottom = '5px';
        }else{
        console.log(3456);
        document.querySelector('.wrong-pass').classList.add('is-invalid'); 
    }

        if(!isValid){
        ev.preventDefault();
        ev.stopPropagation();
    
        }else{
        alert('Đăng nhập thành công')
        username.value = '';
        password.value = '';
    }
})
// Validation cho đăng kí
document.querySelector('.register-button').addEventListener('click',()=>{
    let username = document.querySelector('.regis .user-name');
    let password = document.querySelector('.regis .pass');
    let again = document.querySelector('.regis .again');
    let {value : user} = username;
    let {value : pass} = password;
    let {value : againpass} = again;
        //Kiểm tra username
        let isValid = true;
        if(/^[a-zA-Z0-9]{6,12}$/.test(user)){
        document.querySelector('.regis .wrong-user').classList.add('is-invalid');
        console.log(123);
        }else{
        document.querySelector('.regis .wrong-user').classList.remove('is-invalid');
        document.querySelector('.regis .user-name').style.marginBottom = '5px';
        isValid = false;
        }

        //Kiểm tra password
        if(pass.length < 6 || pass.length > 20){
        document.querySelector('.regis .wrong-pass').classList.remove('is-invalid');
        document.querySelector('.regis .pass').style.marginBottom = '5px';
        isValid = false;
        }else{
        document.querySelector('.regis .wrong-pass').classList.add('is-invalid'); 
        }

        if(againpass.length < 6 || againpass.length > 20){
            document.querySelector('.regis .wrong-again').classList.remove('is-invalid');
            document.querySelector('.again').style.marginBottom = '5px';
            isValid = false;
            }else{
            document.querySelector('.regis .wrong-again').classList.add('is-invalid'); 
        }
        if(!isValid){
        ev.preventDefault();
        ev.stopPropagation();
    
        }else{
        alert('Đăng kí thành công')
        username.value = '';
        password.value = '';
    }
})
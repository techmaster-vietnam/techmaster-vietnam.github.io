export default function validLogin(valueEmail,valuePass,nodeEmail,nodePass){
  let regexEmail1 = /[a-z]+[0-9]+@[a-z]+.[a-z]{2,}$/;
  let regexEmail2 = /[a-z]+@[a-z]+.[a-z]{2,}$/;
  let regexPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/; //8 ký tư tói thiểu 1 số 1 chữ
  if((valueEmail == "" || valueEmail == null) && (valuePass == "" || valuePass == null)){
      nodePass.text("Không được để trống trường này!")
      nodeEmail.text("Không được để trống trường này!")
  }else if((regexEmail1.test(valueEmail)) || (regexEmail2.test(valueEmail)) || (regexPass.test(valuePass))){
      window.location.reload()
  }else{
    nodePass.text("Thông tin tài khoản không đúng!")
    nodeEmail.text("Thông tin tài khoản không đúng!")
  }
  setTimeout(()=>{
    nodePass.text(" ")
    nodeEmail.text(" ")
  },2000)
}
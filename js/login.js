function validate(){
  var nameEle=document.getElementById("uname"); 
  var pwdEle=document.getElementById("pwd");
    
    var name=nameEle.value;
    var pwd=pwdEle.value;
    if(name.trim() == ""){
        document.getElementById("erroruname").innerHTML="User name can't be Blank";
        nameEle.style.border = "1px solid red";
        return false;
    }
    if(pwd.trim() == ""){
        document.getElementById("errorpwd").innerHTML= "Password can't be Blank";
        pwdEle.style.border = "1px solid red";
        return false;
    }
}
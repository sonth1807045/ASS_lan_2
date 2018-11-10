var REGISTER_API = 'https://2-dot-backup-server-003.appspot.com/_api/v2/members/authentication';
var btnSubmit = document.forms['login-form']['btn-submit'];
if (btnSubmit != null) {
    btnSubmit.onclick = function () {
        var txtEmail = document.forms['login-form']['email'];
        var msgEmail = txtEmail.nextElementSibling;
        if (msgEmail == null || txtEmail.value.length == 0) {
            msgEmail.innerHTML = "* Vui lòng nhập đại chỉ email.";
            msgEmail.classList.remove("hidden-text");
        }else {
            msgEmail.innerHTML = "* Tên bài hát hợp lệ.";
            msgEmail.classList.remove("hidden-text");
            msgEmail.classList.remove("danger-text");
            msgEmail.classList.add("success-text");
        }
        var pwdPassword = document.forms['login-form']['password'];
        var msgPassword = pwdPassword.nextElementSibling;
        if (msgPassword == null || pwdPassword.value.length == 0) {
            msgPassword.innerHTML = "* Vui lòng nhập mật khẩu.";
            msgPassword.classList.remove("hidden-text");
        }else {
            msgPassword.innerHTML = "* Tên bài hát hợp lệ.";
            msgPassword.classList.remove("hidden-text");
            msgPassword.classList.remove("danger-text");
            msgPassword.classList.add("success-text");
        }
        var jsmember = {
            password: pwdPassword.value,
            email: txtEmail.value
        };
        var jsonData = JSON.stringify(jsmember);
        console.log(jsonData);
        postRegisterData(jsonData);
    };
}
function postRegisterData(jsonData) {
    var xhlHttpRequest = new XMLHttpRequest();
    xhlHttpRequest.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 201) {
            var member = JSON.parse(this.responseText);
            alert(member.token);
            localStorage.setItem('token', member.token);
        }
    };
    xhlHttpRequest.open('POST', REGISTER_API, true);
    xhlHttpRequest.setRequestHeader("Content-type", "application/json");
    xhlHttpRequest.send(jsonData);
}
var btn = document.forms['login-form']['reset'];
btn.onclick = function (){
    var txtEmail = document.forms['login-form']['email'];
    var msgEmail = txtEmail.nextElementSibling;
    msgEmail.classList.add("hidden-text");
    var pwdPassword = document.forms['login-form']['password'];
    var msgPassword = pwdPassword.nextElementSibling;
    msgPassword.classList.add("hidden-text");
}
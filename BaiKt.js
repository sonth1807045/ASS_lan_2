var btnSubmit = document.forms['register-form']['btn-submit'];
if (btnSubmit != null) {
    btnSubmit.onclick = function () {
        var txtFirstName = document.forms['register-form']['firstName'];
        var msgFirstName = txtFirstName.nextElementSibling;
        if (txtFirstName == null || txtFirstName.value.length == 0) {
            msgFirstName.innerHTML = "* Vui lòng nhập tên người dùng.";
            msgFirstName.classList.remove("hidden-text");
        } else {
            msgFirstName.innerHTML = "* Tên bài hát hợp lệ.";
            msgFirstName.classList.remove("hidden-text");
            msgFirstName.classList.remove("danger-text");
            msgFirstName.classList.add("success-text");
        }
        var txtEmail = document.forms['register-form']['Email'];
        var msgEmail = txtEmail.nextElementSibling;
        if (msgEmail == null || txtEmail.value.length == 0) {
            msgEmail.innerHTML = "* Vui lòng nhập đại chỉ email.";
            msgEmail.classList.remove("hidden-text");
        } else {
            msgEmail.innerHTML = "* Tên bài hát hợp lệ.";
            msgEmail.classList.remove("hidden-text");
            msgEmail.classList.remove("danger-text");
            msgEmail.classList.add("success-text");
        }
        var txtPhone = document.forms['register-form']['phone'];
        var msgPhone = txtPhone.nextElementSibling;
        if (msgPhone == null || txtPhone.value.length == 0) {
            msgPhone.innerHTML = "* Vui lòng nhập số điện thoại.";
            msgPhone.classList.remove("hidden-text");
        } else {
            msgPhone.innerHTML = "* Tên bài hát hợp lệ.";
            msgPhone.classList.remove("hidden-text");
            msgPhone.classList.remove("danger-text");
            msgPhone.classList.add("success-text");
        }
    }

}
var btn = document.forms['register-form']['reset'];
btn.onclick = function () {
    var txtFirstName = document.forms['register-form']['firstName'];
    var msgFirstName = txtFirstName.nextElementSibling;
    msgFirstName.classList.add("hidden-text");
    var txtEmail = document.forms['register-form']['Email'];
    var msgEmail = txtEmail.nextElementSibling;
    msgEmail.classList.add("hidden-text");
    var txtPhone = document.forms['register-form']['phone'];
    var msgPhone = txtPhone.nextElementSibling;
    msgPhone.classList.add("hidden-text");
}
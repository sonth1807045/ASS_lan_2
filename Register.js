var REGISTER_API = 'https://2-dot-backup-server-003.appspot.com/_api/v2/members';
var btnSubmit = document.forms['register-form']['btn-submit'];
if (btnSubmit != null) {
    btnSubmit.onclick = function () {
        var txtFirstName = document.forms['register-form']['firstName'];
        var msgFirstName = txtFirstName.nextElementSibling;
        if (txtFirstName == null || txtFirstName.value.length == 0) {
            msgFirstName.innerHTML = "* Vui lòng nhập tên người dùng.";
            msgFirstName.classList.remove("hidden-text");
        }else {
            msgFirstName.innerHTML = "* Tên bài hát hợp lệ.";
            msgFirstName.classList.remove("hidden-text");
            msgFirstName.classList.remove("danger-text");
            msgFirstName.classList.add("success-text");
        }
        var txtLastName = document.forms['register-form']['lastName'];
        var msgLastName = txtLastName.nextElementSibling;
        if (msgLastName == null || txtLastName.value.length == 0) {
            msgLastName.innerHTML = "* Vui lòng nhập tên người dùng.";
            msgLastName.classList.remove("hidden-text");
        }else {
            msgLastName.innerHTML = "* Tên bài hát hợp lệ.";
            msgLastName.classList.remove("hidden-text");
            msgLastName.classList.remove("danger-text");
            msgLastName.classList.add("success-text");
        }
        var pwdPassword = document.forms['register-form']['password'];
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
        var txtAddress = document.forms['register-form']['address'];
        var msgAddress = txtAddress.nextElementSibling;
        if (msgAddress == null || txtAddress.value.length == 0) {
            msgAddress.innerHTML = "* Vui lòng nhập địa chỉ.";
            msgAddress.classList.remove("hidden-text");
        }else {
            msgAddress.innerHTML = "* Tên bài hát hợp lệ.";
            msgAddress.classList.remove("hidden-text");
            msgAddress.classList.remove("danger-text");
            msgAddress.classList.add("success-text");
        }
        var txtPhone = document.forms['register-form']['phone'];
        var msgPhone = txtPhone.nextElementSibling;
        if (msgPhone == null || txtPhone.value.length == 0) {
            msgPhone.innerHTML = "* Vui lòng nhập số điện thoại.";
            msgPhone.classList.remove("hidden-text");
        }else {
            msgPhone.innerHTML = "* Tên bài hát hợp lệ.";
            msgPhone.classList.remove("hidden-text");
            msgPhone.classList.remove("danger-text");
            msgPhone.classList.add("success-text");
        }
        var txtAvatar = document.forms['register-form']['avatar'];
        var msgAvatar = txtAvatar.nextElementSibling;
        if (msgAvatar == null || txtAvatar.value.length == 0) {
            msgAvatar.innerHTML = "* Vui lòng nhập ảnh đại diện.";
            msgAvatar.classList.remove("hidden-text");
        }else {
            msgAvatar.innerHTML = "* Tên bài hát hợp lệ.";
            msgAvatar.classList.remove("hidden-text");
            msgAvatar.classList.remove("danger-text");
            msgAvatar.classList.add("success-text");
        }
        var selectGender = document.forms['register-form']['gender'];
        var txtEmail = document.forms['register-form']['email'];
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
        var dateBirthday = document.forms['register-form']['birthday'];
        var d = new Date(dateBirthday.value);
        var myDate = d.getFullYear() + '-' + (d.getMonth() + 1) + '-'
            + (d.getDate() < 10 ? '0' + d.getDate() : d.getDate());
        if (txtFirstName != null && txtLastName != null) {
            var firstName = txtFirstName.value;
            var lastName = txtLastName.value;
            var password = pwdPassword.value;
            var address = txtAddress.value;
            var phone = txtPhone.value;
            var avatar = txtAvatar.value;
            var gender = selectGender.value;
            var email = txtEmail.value;
            var birthday = dateBirthday.value;
            var jsMember = {
                firstName: firstName,
                lastName: lastName,
                password: password,
                address: address,
                phone: phone,
                avatar: avatar,
                gender: gender,
                email: email,
                birthday: birthday,
            }
            var jsonData = JSON.stringify(jsMember);
            postRegisterData(jsonData);
        }
    }
}

function postRegisterData(jsonData) {
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 201) {
            var member = JSON.parse(this.responseText);
            alert(member.id + '-' + member.firstName);
        }
    }
    xmlHttpRequest.open('POST', REGISTER_API, true);
    xmlHttpRequest.setRequestHeader("Content-type", "application/json");
    xmlHttpRequest.send(jsonData);
}
var btn = document.forms['register-form']['reset'];
btn.onclick = function () {
    var txtFirstName = document.forms['register-form']['firstName'];
    var msgFirstName = txtFirstName.nextElementSibling;
    msgFirstName.classList.add("hidden-text");
    var txtLastName = document.forms['register-form']['lastName'];
    var msgLastName = txtLastName.nextElementSibling;
    msgLastName.classList.add("hidden-text");
    var pwdPassword = document.forms['register-form']['password'];
    var msgPassword = pwdPassword.nextElementSibling;
    msgPassword.classList.add("hidden-text");
    var txtAddress = document.forms['register-form']['address'];
    var msgAddress = txtAddress.nextElementSibling;
    msgAddress.classList.add("hidden-text");
    var txtPhone = document.forms['register-form']['phone'];
    var msgPhone = txtPhone.nextElementSibling;
    msgPhone.classList.add("hidden-text");
    var txtEmail = document.forms['register-form']['email'];
    var msgEmail = txtEmail.nextElementSibling;
    msgEmail.classList.add("hidden-text");
    var txtAvatar = document.forms['register-form']['avatar'];
    var msgAvatar = txtAvatar.nextElementSibling;
    msgAvatar.classList.add("hidden-text");
}
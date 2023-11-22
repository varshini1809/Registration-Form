function validation() {
    if (document.FormFill.username.value == "") {
        document.getElementById("result").innerHTML = "Enter username*";
        return false;
    }
    else if (document.FormFill.username.value.length < 6) {
        document.getElementById("result").innerHTML = "atleast 6 characters required for username*";
        return false;
    }

    else if (document.FormFill.Email.value == "") {
        document.getElementById("result").innerHTML = "Enter email address*";
        return false;
    }

    else if (document.FormFill.password.value == "") {
        document.getElementById("result").innerHTML = "Enter password*";
        return false;
    }

    else if (document.FormFill.cpassword.value == "") {
        document.getElementById("result").innerHTML = "Enter confirm password*";
        return false;
    }

    else if (document.FormFill.password.value !== document.FormFill.cpassword.value) {
        document.getElementById("result").innerHTML = "Password doesn't match*";
        return false;
    }

    else if (document.FormFill.password.value.length < 6) {
        document.getElementById("result").innerHTML = "atleast 6 characters required for password*";
        return false;
    }

    else if (document.FormFill.password.value == document.FormFill.cpassword.value) {
        popup.classList.add("open-slide");
        return false;
    }
}

var popup = document.getElementById('popup');

function closeSlide() {
    popup.classList.remove('open-slide');
}

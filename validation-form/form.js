function sub() {
    let username = document.getElementById("username").value;

    if (username == "") {
        document.getElementById("icon2").style.visibility = "visible";
        document.getElementById("icon").style.visibility = "hidden";
        document.getElementById("usernameerr").innerHTML = "* please enter ur name";
        document.getElementById("username").style.borderColor = "red";
    }
    else if (username.length <= 5) {
        document.getElementById("icon2").style.visibility = "visible";
        document.getElementById("icon").style.visibility = "hidden";
        document.getElementById("usernameerr").innerHTML = "* invalid user name";
        document.getElementById("username").style.borderColor = "red";
    }
    else if (username.length >= 15) {
        document.getElementById("icon2").style.visibility = "visible";
        document.getElementById("icon").style.visibility = "hidden";
        document.getElementById("usernameerr").innerHTML = " * username must be in 15 character";
        document.getElementById("username").style.borderColor = "red";
    }
    else {
        document.getElementById("icon2").style.visibility = "hidden";
        document.getElementById("icon").style.visibility = "visible";
        document.getElementById("usernameerr").style.visibility = "hidden";
        document.getElementById("username").style.borderColor = "green";
    }

    let phonenumber = document.getElementById("phonenumber").value;
    let Error = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phonenumber);

    if (phonenumber === "") {
        document.getElementById("icon4").style.visibility = "visible";
        document.getElementById("icon3").style.visibility = "hidden";
        document.getElementById("phonenumbererr").innerHTML = " *please enter your number";
        document.getElementById("phonenumber").style.borderColor = "red";
    }
    else if (!Error) {
        document.getElementById("icon4").style.visibility = "visible";
        document.getElementById("icon3").style.visibility = "hidden";
        document.getElementById("phonenumbererr").innerHTML = " *invalid number";
        document.getElementById("phonenumber").style.borderColor = "red";

    }
    else {
        document.getElementById("icon4").style.visibility = "hidden";
        document.getElementById("icon3").style.visibility = "visible";
        document.getElementById("phonenumbererr").style.visibility = "hidden";
        document.getElementById("phonenumber").style.borderColor = "green";
    }
    let email = document.getElementById("email").value;
    let emailerror = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    if (email === "") {
        document.getElementById("icon6").style.visibility = "visible";
        document.getElementById("icon5").style.visibility = "hidden";
        document.getElementById("emailerr").innerHTML = "* please enter your email";
        document.getElementById("email").style.borderColor = "red";
    }
    else if (!emailerror) {
        document.getElementById("icon6").style.visibility = "visible";
        document.getElementById("icon5").style.visibility = "hidden";
        document.getElementById("emailerr").innerHTML = "* invalid email";
        document.getElementById("email").style.borderColor = "red";
    }
    else {
        document.getElementById("icon6").style.visibility = "hidden";
        document.getElementById("icon5").style.visibility = "visible";
        document.getElementById("emailerr").style.visibility = "hidden";
        document.getElementById("email").style.borderColor = "green";
    }
    let password = document.getElementById("password").value;
    let passworderror = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(password);
    if (password === "") {
        document.getElementById("icon8").style.visibility = "visible";
        document.getElementById("icon7").style.visibility = "hidden";
        document.getElementById("passworderr").innerHTML = "* please enter your password";
        document.getElementById("password").style.borderColor = "red";
    }
    else if (!passworderror) {
        document.getElementById("icon8").style.visibility = "visible";
        document.getElementById("icon7").style.visibility = "hidden";
        document.getElementById("passworderr").innerHTML = "* invalid password";
        document.getElementById("password").style.borderColor = "red";
    }
    else {
        document.getElementById("icon8").style.visibility = "hidden";
        document.getElementById("icon7").style.visibility = "visible";
        document.getElementById("passworderr").style.visibility = "hidden";
        document.getElementById("password").style.bordercolor = "green";
    }
    let confirmpassword = document.getElementById("confirmpassword").value;
    let confirmpassworderror = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(confirmpassword);
    if (confirmpassword === "") {
        document.getElementById("icon10").style.visibility = "visible";
        document.getElementById("icon9").style.visibility = "hidden";
        document.getElementById("confirmpassworderr").innerHTML = " * please enter your confirmpassword";
        document.getElementById("confirmpassword").style.borderColor = "red";

    }
    else if (!confirmpassword == password) {
        document.getElementById("icon10").style.visibility = "visible";
        document.getElementById("icon9").style.visibility = "hidden";
        document.getElementById("confirmpassworderr").innerHTML = " *confirmpassword does not match";
        document.getElementById("confirmpassword").style.bordercolor = "red";

    }
    else {
        document.getElementById("icon10").style.visibility = "hidden";
        document.getElementById("icon9").style.visibility = "visible";
        document.getElementById("confirmpassworderr").style.visibility = "hidden";
        document.getElementById("confirmpassword").style.bordercolor = "green";
    }

    let dob = document.getElementById("dob").value;

    if (dob === "" || dob === "null") {
        document.getElementById("icon12").style.visibility = "visible";
        document.getElementById("icon11").style.visibility = "hidden";
        document.getElementById("doberr").innerHTML = "* please fill the date";
        document.getElementById("dob").style.border = "red";

    }
    else {
        document.getElementById("icon12").style.visibility = "hidden";
        document.getElementById("icon11").style.visibility = "visible";
        document.getElementById("doberr").style.visibility = "hidden";
        document.getElementById("dob").style.bordercolor = "green";
    }


}
function checkPassword() {
    var password = document.getElementById("passwordBox");
    var passwordText = password.value;
    if(passwordText == "testcode") {
     return true;
    }
    alert("Access denied! Incorrect password!");
    return false;
    }
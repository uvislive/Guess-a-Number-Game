function validateForm() {
    var username = document.getElementById("uname");
    var password = document.getElementById("pass");

    if (username.value == "" || password.value == "") {

        Swal.fire({
            icon: 'error',
            title: 'NO blank Values are Allowed',
            text: 'please enter right information!',
            footer: '<a href="https://google.com">How Can You Win?</a>'
        })
        return false

    }
    else {
        true;

    }
}

console.log("working")
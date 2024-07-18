function validate() {
            let username = document.getElementById("username").value;
            let email = document.getElementById("email").value;
            let password = document.getElementById("password").value;
            let cpassword = document.getElementById("cpassword").value;

            let isValid = true;

            isValid = checkUsername(username) && isValid;
            isValid = checkEmail(email) && isValid;
            isValid = checkPassword(password) && isValid;
            isValid = checkPasswordMatch(password, cpassword) && isValid;

            return isValid;
        }

        function checkUsername(username) {
            let usernameError = document.getElementById("usernameError");
            if (username.length < 8) {
                usernameError.textContent = "Username must be at least 8 characters long.";
                return false;
            } else {
                usernameError.textContent = "";
                return true;
            }
        }

        function checkEmail(email) {
            let emailError = document.getElementById("emailError");
            let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            if (!emailPattern.test(email)) {
                emailError.textContent = "Please enter a valid email address.";
                return false;
            } else {
                emailError.textContent = "";
                return true;
            }
        }

        function checkPassword(password) {
            let passwordError = document.getElementById("passwordError");
            if (password.length < 6) {
                passwordError.textContent = "Password must be at least 6 characters long.";
                return false;
            } else {
                passwordError.textContent = "";
                return true;
            }
        }

        function checkPasswordMatch(password, cpassword) {
            let cpasswordError = document.getElementById("cpasswordError");
            if (password !== cpassword) {
                cpasswordError.textContent = "Passwords do not match.";
                return false;
            } else {
                cpasswordError.textContent = "";
                return true;
            }
        }
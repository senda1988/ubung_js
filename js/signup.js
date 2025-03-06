function onsignup() {
    const fnameC = document.getElementById("fname").value;
    const lnameC = document.getElementById("lname").value;
    const emailC = document.getElementById("emailti").value;
    const passC = document.getElementById("passwordti").value;
    const rpassC = document.getElementById("reppasswordti").value;

    if (!fnameC || !lnameC || !emailC || !passC || !rpassC) {
        alert("Error: All fields must be filled out!");
    }
    if (fnameC && lnameC && emailC && passC && rpassC) {
        if (passC === rpassC && emailC.length > 3) {
            alert("signup success!")

        } else if (passC !== rpassC) {
            alert("Error: Passwords do not match.");
        } else if (emailC.length <= 3) {
            alert("Error: Email must be longer than 3 characters.");
        } else {
            alert("Error: Problem with registration.");
        }


    }

}
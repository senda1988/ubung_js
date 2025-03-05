function onlogin() {
    const emailC = document.getElementById("emailti").value;
    const passC = document.getElementById("passwordti").value;
    if (emailC && passC) {
        alert(`Email: ${emailC} and Password: ${passC}`);
    } else {
        alert(`email and pasword incorrect!`);
    }
}
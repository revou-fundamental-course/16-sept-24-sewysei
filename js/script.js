function setSenderUI(nama, tanggallahir, gender, messages) {
    document.getElementById("sender-full-name").innerHTML = nama;
    document.getElementById("sender-birth-date").innerHTML = tanggallahir;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;

    const currentTime = new Date();
    const datetime = currentTime.toString(); // Formats date to "Fri Jun 17 2022 11:27:28 GMT +0100"
    
    document.getElementById("sender-current-time").innerHTML = datetime;
}

function validateForm() {
    const nama = document.forms["message-form"]["nama"].value;
    const tanggallahir = document.forms["message-form"]["tanggal-lahir"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const messages = document.forms["message-form"]["messages"].value;
    
    if (nama === "" || tanggallahir === "" || gender === "" || messages === "") {
        alert("Tidak boleh ada yang kosong");
        return false;
    }

    setSenderUI(nama, tanggallahir, gender, messages);

    return false;
}


    let nameUser = prompt("Masukkan nama Anda");
    document.getElementById("name-top").innerHTML = nameUser;

function setSenderUI(nama, tanggallahir, gender, messages) {
    document.getElementById("sender-full-name").innerHTML = nama;
    document.getElementById("sender-birth-date").innerHTML = tanggallahir;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;

    const currentTime = new Date();
    const datetime = currentTime.toString(); 
    
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
    else {
        alert("Sukses Mengisi Form")
    }

    setSenderUI(nama, tanggallahir, gender, messages);

    return false;
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("photo-banner");
    if (n > x.length) {slideIndex = 1};
    if (n < 1) {slideIndex = x.length};
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "block"; 
}

setInterval(() => plusDivs(1), 2000);
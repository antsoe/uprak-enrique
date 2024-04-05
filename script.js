
function LoginVer(){
    let username = document.getElementById("Username").value;
    let password = document.getElementById("Password").value;
    if (username == "" || password == ""){
        window.alert("Masukkan Email Atau password");
    }
    else{
        window.location="participant.html";
    }
}

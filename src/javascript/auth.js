function login(){

    const email = document.getElementById("Email").value
   
    window.location = '../../index.html?user='+btoa(email);
}
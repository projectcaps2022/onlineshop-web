let search = window.location.search
console.log(search)

if(!search){
 window.location = "../html/login.html";
}else{
  var email = atob(search.split("=")[1])
  localStorage.setItem('user',email) 
}
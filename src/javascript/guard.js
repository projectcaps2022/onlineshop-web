let search = window.location.search
//console.log(search)

if(!search){
 window.location = "./src/html/login.html";
}else{
  var email = atob(search.split("=")[1])
  localStorage.removeItem('user') 
  localStorage.setItem('user',email) 
}


function getItemsCart () {
 
 
  // const prodmod = document.getElementById('loadingprods')
  // const modalp = new mdb.Modal(prodmod)
  // modalp.show()
   
    let users = localStorage.getItem('user')
    var badge = document.getElementById('badgecart');
    ////console.log(users);
   let url = "https://script.google.com/macros/s/AKfycbxvQT_14qkxm2eZt7Y6qtn_r5klZrbhIBfgyKr9sbqxGswvpBsCMjmj4bqbwBxUrRygaA/exec"
 
   var a ;  
   fetch(url, {
       method: 'GET'
     })
     .then((response) => {
 
         a = response.clone();
 
 
         var text = ''
           a.json().then((data) => {
                 //  //console.log(data)
                   var cart = []

                   for (let index = 0; index < data.row.length; index++) {
                     const element = data.row[index];
                    if(element[4]=== users && element[1]==="Pending"){
                    
                      cart.push(element)

                    }
                   }
                   localStorage.setItem('usercart', JSON.stringify(cart))
                   badge.innerHTML = cart.length
              }
           )
         
     
       
     });
 }
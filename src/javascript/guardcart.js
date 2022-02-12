let search = window.location.search
//console.log(search)

if(!search){
 window.location = "../html/login.html";
}else{
  var email = atob(search.split("=")[1])
  localStorage.removeItem('user') 
  localStorage.setItem('user',email) 
}


function getItemsCart (isenabled=false) {
 
  
  const prodmod = document.getElementById('loadingprods')
  const modalp = new mdb.Modal(prodmod)
  modalp.show()
   
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
                   localStorage.removeItem('usercart')
                   localStorage.setItem('usercart', JSON.stringify(cart))
                   badge.innerHTML = cart.length
                   if(isenabled){
                    buildProds()
                   }
                   modalp.hide()
              }
           )
         
     
       
     });
 }

 function getItemsCart2 (isenabled=false) {
 
  
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
                   localStorage.removeItem('usercart')
                   localStorage.setItem('usercart', JSON.stringify(cart))
                   badge.innerHTML = cart.length
                  //  if(isenabled){
                  //   buildProds()
                  //  }
                  //  modalp.hide()
              }
           )
         
     
       
     });
 }



 function buildProds(){

 var text = ''
  var items = JSON.parse(localStorage.getItem('usercart'))
  var total = 0;
  //console.log(items);
  var cuant = []
  if(!items.length){
    text = 'No items in the cart yet'
  }
  for (let index = 0; index < items.length; index++) {
    const element = items[index];
    localStorage.setItem(element[0], JSON.stringify(element))
  text+='  <div class="row">'+
  '<div class="col-lg-3 col-md-12 mb-4 mb-lg-0">'+
    '<!-- Image -->'+
    '<div class="bg-image hover-overlay hover-zoom ripple rounded text-center" data-mdb-ripple-color="light">'+
      '<img src="'+ element[16] +'"'+
        'class="w-75 h-75" />'+
      '<a href="#!">'+
        '<div class="mask" style="background-color: rgba(251, 251, 251, 0.2)"></div>'+
     ' </a>'+
    '</div>'+
   ' <!-- Image -->'+
 ' </div>'+
  '<div class="col-lg-5 col-md-6 mb-4 mb-lg-0">'+
   ' <!-- Data -->'+
   ' <p><strong>'+element[6]+'</strong></p>'+
   ' <p>Color: '+element[10]+'</p>'+
   ' <p>Size: '+element[3]+'</p>'+
     ' <button type="button" onclick="removeitem('+element[0]+')" class="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip"'+
     ' title="Remove item">'+
     ' <i class="fas fa-trash"></i>'+
    '</button>'+
   ' <!-- Data -->'+
  '</div>'+
  '<div class="col-lg-4 col-md-6 mb-4 mb-lg-0">'+
   ' <!-- Quantity -->'+
   ' <div class="d-flex mb-4" style="max-width: 300px">'+
    '  <button class="btn btn-primary px-3 me-2"'+
     '   onclick="this.parentNode.querySelector(\'input[type=number]\').stepDown(); countprice()">'+
      '  <i class="fas fa-minus"></i>'+
      '</button>'+
     ' <div class="form-outline">'+
      '  <input id="form1" min="0" name="quantity" value="'+element[2]+'" type="number" class="form-control multipliers" onchange="countprice()" />'+
    // '   <label class="form-label" for="form1">Quantity</label>'+
     ' </div>'+
     ' <button class="btn btn-primary px-3 ms-2"'+
     '   onclick="this.parentNode.querySelector(\'input[type=number]\').stepUp(); countprice()">'+
       ' <i class="fas fa-plus"></i>'+
     ' </button>'+
   ' </div>'+
   ' <!-- Quantity -->'+

   ' <!-- Price -->'+
   ' <p class="text-start text-md-center">'+
    '  <strong class="prices">$'+Number.parseFloat(element[13]).toFixed(2)+'</strong>'+
    '</p>'+
   ' <!-- Price -->'+
 ' </div>'+
' </div>'+
'<hr class="my-2" />'
    //cuant[index] = [Number.parseFloat(element[13]).toFixed(2),element[2]]
    total += element[2]*element[13]
  }

   // //console.log(text);
    
    var divproduct = document.getElementById('itembody')
    divproduct.style.opacity = 0;
    setTimeout(function(){ 
      // Load new content
      // Fade in
      divproduct.innerHTML = text
      divproduct.style.opacity = 1;
     
   },500);
                     
                   
    document.getElementById('pricestd').innerHTML = '$'+Number.parseFloat(total).toFixed(2)
    document.getElementById('pricetotal').innerHTML = '$'+Number.parseFloat(total).toFixed(2)
    updateprice()
 }


 function updateprice(){
     var doc =   document.getElementById('pricestd');
     //console.log(doc);
 }

 function countprice(item=null) {
   var strongs =  document.getElementsByClassName('prices')

   var inputs = document.getElementsByClassName('multipliers')
    total = 0;
   for (let index = 0; index < strongs.length; index++) {
     
    var strNotParsed = strongs[index].innerText;
   // //console.log();
    // //console.log(parseFloat(inputs[index].value));
     total+= parseFloat(strNotParsed.replace('$','')) * parseFloat(inputs[index].value)
   }
   ////console.log(total);
   document.getElementById('pricetotal').innerHTML = '$'+Number.parseFloat(total).toFixed(2)

  // //console.log(inputs);
 }

 function removeitem(item) {
  
  var data = JSON.parse(localStorage.getItem(item))
  var form = new FormData();

  const prodmoda = document.getElementById('deleting')
  const modalpa = new mdb.Modal(prodmoda)
  modalpa.show()

    form.append('Id_prod', parseInt(data[0]))
    form.append('Confirmed', "Canceled")
    form.append('Quantity', data[2])
    form.append('Size', data[3])
    form.append('action', 'delete')
    form.append('User', data[4])
    form.append('Name', data[6])
    form.append('Category', data[7])
    form.append('Type', data[8])
    form.append('Description', data[9])
    form.append('Color', data[10])
    form.append('Image', data[11])
    form.append('Rating', data[12])
    form.append('prize', '$'+data[13])
    form.append('Id_Producto', data[14])
    form.append('Part', data[15])
    form.append('imageB64', data[16])

    let url = "https://script.google.com/macros/s/AKfycbyKboNwxr9qCHLnbMXzxjs6SOc1vNZXf-9W9Z2CzVN1_eNKefyOMbRUNRA__7Y0naiHZw/exec"
    //const form = document.getElementById('form-register');
    var a = null
    
           fetch(url, {
            method: 'POST',
            body: form
          }).then((response) => {
            a = response.clone()
            ////console.log(a);
            a.json().then((data)=>{
                //console.log('data', data)
                getItemsCart(true)
                modalpa.hide()
            })
          })
  ////console.log()
  //getItemsCart(true)
 
  
}


function checkout() {

 var itemstocheck =  JSON.parse(localStorage.getItem('usercart'));

 var strongs =  document.getElementsByClassName('prices')
 var inputs = document.getElementsByClassName('multipliers')
  var form = new FormData()
  var items = []
  const prodmodae = document.getElementById('checkout')
  const itembod = document.getElementById('divbodyconf')
  const modalpae = new mdb.Modal(prodmodae)
  modalpae.show()
 for (let index = 0; index < itemstocheck.length; index++) {
   
   
   var arr = []
   
   
  //   form.append('Id_prod', parseInt(data[0]))
  //   form.append('Confirmed', "Canceled")
  //   form.append('Quantity', data[2])
  //   form.append('Size', data[3])
  //   form.append('action', 'delete')
  //   form.append('User', data[4])
  //   form.append('Name', data[6])
  //   form.append('Category', data[7])
  //   form.append('Type', data[8])
  //   form.append('Description', data[9])
  //   form.append('Color', data[10])
  //   form.append('Image', data[11])
  //   form.append('Rating', data[12])
  //   form.append('prize', '$'+data[13])
  //   form.append('Id_Producto', data[14])
  //   form.append('Part', data[15])
  //   form.append('imageB64', data[16])
  arr[0] = parseInt(itemstocheck[index][0])
  arr[1]= "Confirmed"
  arr[2]=inputs[index].value
  arr[3] = itemstocheck[index][3]
  arr[4] = itemstocheck[index][4]
  arr[5] = itemstocheck[index][6]
  arr[6] = itemstocheck[index][7]
  arr[7] = itemstocheck[index][8]
  arr[8] = itemstocheck[index][9]
  arr[9] = itemstocheck[index][10]
  arr[10] = itemstocheck[index][11]
  arr[11] = itemstocheck[index][12]
  arr[12] = '$'+itemstocheck[index][13]
  arr[13]= itemstocheck[index][14]
  arr[14] = itemstocheck[index][15]
  arr[15] = itemstocheck[index][16]

  items.push(arr);
}
//console.log(JSON.stringify(items))
form.append('action', 'update')
form.append('data', JSON.stringify(items))



    let url = "https://script.google.com/macros/s/AKfycbyKboNwxr9qCHLnbMXzxjs6SOc1vNZXf-9W9Z2CzVN1_eNKefyOMbRUNRA__7Y0naiHZw/exec"
    //const form = document.getElementById('form-register');
    var a = null
    
           fetch(url, {
            method: 'POST',
            body: form
          }).then((response) => {
            a = response.clone()
            ////console.log(a);
            a.json().then((data)=>{
                //console.log('data', data)
                itembod.innerHTML = '<p style="color: green;"> All products are payed succefully. See My Order for more info </p>'
                setTimeout(function(){ 
                  modalpae.hide()
                  getItemsCart(true)
                  
               },2000);

            //    modalpa.hide()
            })
          })
 
  
}




let search = window.location.search
console.log(search)

if(!search){
 window.location = "../html/login.html";
}else{
  var email = atob(search.split("=")[1])
  localStorage.setItem('user',email) 
}


function getItemsCart () {
 
 
  // const prodmod = document.getElementById('loadingprods')
  // const modalp = new mdb.Modal(prodmod)
  // modalp.show()
   
    let users = localStorage.getItem('user')
    var badge = document.getElementById('badgecart');
    //console.log(users);
   let url = "https://script.google.com/macros/s/AKfycbxJRAMrxsQXgFSIaC9p-IdXXPAuxaUdOMzclqRscTCIH3v-BcgmELEULPf7-LdzCDNzCA/exec"
 
   var a ;  
   fetch(url, {
       method: 'GET'
     })
     .then((response) => {
 
         a = response.clone();
 
 
         var text = ''
           a.json().then((data) => {
                 //  console.log(data)
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


 function buildProds(){

 var text = ''
  var items = JSON.parse(localStorage.getItem('usercart'))
  var total = 0;
  console.log(items);
  var cuant = []

  for (let index = 0; index < items.length; index++) {
    const element = items[index];
    
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
   ' <p><strong>Red hoodie</strong></p>'+
   ' <p>Color: '+element[10]+'</p>'+
   ' <p>Size: '+element[3]+'</p>'+
     ' <button type="button" class="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip"'+
     ' title="Remove item">'+
     ' <i class="fas fa-trash"></i>'+
    '</button>'+
   ' <!-- Data -->'+
  '</div>'+
  '<div class="col-lg-4 col-md-6 mb-4 mb-lg-0">'+
   ' <!-- Quantity -->'+
   ' <div class="d-flex mb-4" style="max-width: 300px">'+
    '  <button class="btn btn-primary px-3 me-2"'+
     '   onclick="this.parentNode.querySelector(\'input[type=number]\').stepDown()">'+
      '  <i class="fas fa-minus"></i>'+
      '</button>'+
     ' <div class="form-outline">'+
      '  <input id="form1" min="0" name="quantity" value="'+element[2]+'" type="number" class="form-control" />'+
     '   <label class="form-label" for="form1">Quantity</label>'+
     ' </div>'+
     ' <button class="btn btn-primary px-3 ms-2"'+
     '   onclick="this.parentNode.querySelector(\'input[type=number]\').stepUp()">'+
       ' <i class="fas fa-plus"></i>'+
     ' </button>'+
   ' </div>'+
   ' <!-- Quantity -->'+

   ' <!-- Price -->'+
   ' <p class="text-start text-md-center">'+
    '  <strong>$'+Number.parseFloat(element[13]).toFixed(2)+'</strong>'+
    '</p>'+
   ' <!-- Price -->'+
 ' </div>'+
' </div>'+
'<hr class="my-4" />'
    //cuant[index] = [Number.parseFloat(element[13]).toFixed(2),element[2]]
    total += element[2]*element[13]
  }

   // console.log(text);
    
    var divproduct = document.getElementById('itembody')
    divproduct.style.opacity = 0;
                      divproduct.innerHTML = text
                      divproduct.style.opacity = 1;
                     
                   
    document.getElementById('pricestd').innerHTML = '$'+Number.parseFloat(total).toFixed(2)
    document.getElementById('pricetotal').innerHTML = '$'+Number.parseFloat(total).toFixed(2)
    updateprice()
 }


 function updateprice(){
     var doc =   document.getElementById('pricestd');
     console.log(doc);
 }
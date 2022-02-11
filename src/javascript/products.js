//https://script.google.com/macros/s/AKfycbykIiDHELoKG7uGBrcRboxo9JodDV7KR9MRO_HufNr3J61Vy3AObD7ZNfIO3KrzzAtz/exec


function getproducts(){
    	
    const prodmod = document.getElementById('loadingprods')
    const modalp = new mdb.Modal(prodmod)
    modalp.show()

    let url = "https://script.google.com/macros/s/AKfycbx2Zgas4M3oAfB9NYEXZaSBLU0EN8_QZZwRSwsV7nu0HQxZWZnYKZ8a57HmLTYwZ5UUuw/exec"
  
    var a ;  
    fetch(url, {
        method: 'GET'
      })
      .then((response) => {

          a = response.clone();


          var text = ''
            a.json().then((data) => {
                    console.log(data)
                    //var products = []
                    var texthtmlprod = ''
                    const divproduct = document.getElementById("productlist")
                    var rating ='<ul class="rating" data-mdb-toggle="rating" data-mdb-readonly="true" data-mdb-value="3"> '+
                    '<li> '+
                    '     <i class="fa-star fa-sm text-primary fas active"></i> '+
                    '  </li> '+
                    '   <li> '
                    ' <i class="fa-star fa-sm text-primary fas active"></i> '+
                    ' </li> '+
                    '  <li> '+
                    '  <i class="fa-star fa-sm text-primary fas active"></i> '+
                    '</li> '+
                    '  <li> '+
                    '    <i class="far fa-star fa-sm text-primary"></i> '+
                    '  </li> '+
                    '  <li> '+
                    ' <i class="far fa-star fa-sm text-primary"></i> '+
                    ' </li> '+
                    '</ul>'
                    localStorage.setItem('products', JSON.stringify(data.row))

                    localStorage.setItem('tipe', "A")
                    
                    for (let index = 1; index < data.row.length; index++) {
                       const element = data.row[index];
                       var strArray = element[5].split("/");
                       localStorage.setItem(element[8], JSON.stringify(element))
                       texthtmlprod+= '<div class="col"><div class="card text-black h-100"><img src="'+''+element[10]+'" class="card-img-top hover-shadow" alt="..." onclick="showdetails('+element[8]+',true)" /> <div class="card-body"> <div class="text-center">'+
                       '<h5 class="card-title">'+element[0]+'</h5>'+
                       '<p class="text-muted mb-4">'+element[3]+'</p>'
                     +'</div>'+
                      ' </div>'+
                      '</div>'+
                      '</div>'
                       
                        
                    }
                         modalp.hide()

                         divproduct.style.opacity = 0;

                         setTimeout(function(){ 
                            // Load new content
                            // Fade in
                            divproduct.innerHTML = texthtmlprod
                            divproduct.style.opacity = 1;
                           
                         },500);
               }
            )
          
      
        
      });
}


function filterBy(object,type){

   document.getElementById('btnlist').innerHTML = `<button id="dress1" data-mdb-ripple-color="primary" type="button" class="btn btn-light mb-3" onclick="filterBy('dress1','all')">Primary</button>`+
   `<button id="dress2" data-mdb-ripple-color="secondary" type="button" class="btn btn-light mb-3" onclick="filterBy('dress2','all')" >Secondary</button>`+
   `<button id="dress3" data-mdb-ripple-color="success" type="button" class="btn btn-light mb-3" onclick="filterBy('dress3','all')">Success</button>`+
   `<button id="dress4" data-mdb-ripple-color="danger" type="button" class="btn btn-light mb-3" onclick="filterBy('dress4','all')">Danger</button>'`
   if(type==='all'){
      var idobj = document.getElementById(object)

      idobj.className += ' gradient-custom-2';
   }
}


function showdetails(element,fromtop=false){
   var tocart = element
   var element = JSON.parse(localStorage.getItem(element))
   console.log(element);

   var strArray = element[5].split("/");
  
   if(fromtop){
    strArray =   '../images/'+strArray[strArray.length-1]
   }else{
      strArray = element[5]
   }

  var text = '<div class="col">'+
   '<div class="card text-black">'+
   '<img src="'+element[10]+'" class="card-img-top" alt="..."/> '+
   '<div class="card-body"> <div class="text-center">'+
         '<h5 class="card-title">'+element[0]+'</h5>'+
         '<p class="text-muted mb-4">'+element[3]+'</p>'
       +'</div>'+
       '<div>'+
         '<div class="d-flex justify-content-between">'+
          ' <span>Category</span><span>'+element[1]+'</span>'+
         '</div>'+
        ' <div class="d-flex justify-content-between">'+
           '<span>Color</span><span>'+element[4]+'</span>'+
        ' </div>'+
        ' <div class="d-flex justify-content-between">'+
           '<span>Dress</span><span>'+element[2]+'</span>'+
        ' </div>'+
        ' <div class="d-flex justify-content-between">'+
           '<span>Rating</span>'+'<i class="fa-star fa-sm fas active" style="color: #FBD20E;">'+element[6]+'</i>'+
        ' </div>'+
        ' <div class="d-flex justify-content-between">'+
        '<span>Quantity</span><span><div style="border: 1; !important">'+
        '<input type="number" id="typeNumber" class="form-control" value="1" min="1" max="99" style= "width: 6vh;" onchange="setvalueP('+Number.parseFloat(element[7]).toFixed(2)+')"/>'+
      '</div></span>'+
     ' </div>'+
     '<div class="d-flex justify-content-between">'+
        '<span>Size</span><span>'+
     '<select id="sizeselect" class="browser-default custom-select form-control" style="width: 6vh;">'+
     '<option value="XS" selected>XS</option>'+
     ' <option value="S">S</option>'+
     '<option value="M">M</option>'+
     ' <option value="L">L</option>'+
     '</select>'+
        '</div>'+
        '</div>'+
        ' <div class="d-flex justify-content-between total font-weight-bold mt-4">'+
        ' <span>Price</span><span id="priceh" >$'+Number.parseFloat(element[7]).toFixed(2)+'</span>'+
        '</div>'+
        ' </div>'+
        '<div class="card-footer text-center">'+
        ' <button type="button" class="btn btn-outline-primary" data-mdb-dismiss="modal" data-mdb-ripple-color="dark" style="border-color: #dd3675; color: #dd3675;" onclick="showcart('+tocart+')">Add to Cart</button>'+
        ' <button type="button" class="btn btn-outline-secondary" data-mdb-ripple-color="dark" data-mdb-dismiss="modal">Back</button>'+

        ' </div>'+
        '</div>'+
        '</div>'
   var div = document.getElementById('carddetail')
   div.innerHTML = text
   const details = document.getElementById('prodid')
   const modaldetail = new mdb.Modal(details)
   modaldetail.show()
}

function hidemodal() {
   const detailsa = document.getElementById('prodid')
   const modaldetaila = new mdb.Modal(detailsa)
   console.log(modaldetaila)
   modaldetaila.hide()
   console.log(modaldetaila)

}

function setvalueP(price){

   var inputq = document.getElementById('typeNumber').value
   console.log(price*inputq)
   var pricech = document.getElementById("priceh").innerHTML = "$"+Number.parseFloat(price*inputq).toFixed(2)

}

function getproductsMain(){
    	
   const prodmod = document.getElementById('loadingprods')
   const modalp = new mdb.Modal(prodmod)
   modalp.show()
   

   let url = "https://script.google.com/macros/s/AKfycbx2Zgas4M3oAfB9NYEXZaSBLU0EN8_QZZwRSwsV7nu0HQxZWZnYKZ8a57HmLTYwZ5UUuw/exec"
 
   var a ;  
   fetch(url, {
       method: 'GET'
     })
     .then((response) => {

         a = response.clone();


         var text = ''
           a.json().then((data) => {
                   console.log(data)
                   //var products = []
                   var texthtmlprod = ''
                   const divproduct = document.getElementById("productlist")
                  var listtoorder = []
                  for (let index = 1; index < data.row.length; index++) {
                     listtoorder.push(index)
                  }

                  listtoorder.sort(() => Math.random() > 0.5 ? 1 : -1);

                  const listed = listtoorder.slice(0, 5);

                  localStorage.setItem('productsmain', JSON.stringify(data.row))

                   for (let index = 1; index < listed.length; index++) {
                       var indexed = listed[index];
                       const element = data.row[indexed];
                      
                       localStorage.setItem(element[8], JSON.stringify(element))

                       texthtmlprod+= '<div class="col"><div class="card text-black h-100"><img src="'+element[10]+'" class="card-img-top hover-shadow" alt="..." onclick="showdetails('+element[8]+')" /> <div class="card-body"> <div class="text-center">'+
                             '<h5 class="card-title">'+element[0]+'</h5>'+
                             '<p class="text-muted mb-4">'+element[3]+'</p>'
                           +'</div>'+
                            ' </div>'+
                            '</div>'+
                            '</div>'
                      
                       
                   }
                        modalp.hide()

                        divproduct.style.opacity = 0;

                        setTimeout(function(){ 
                           // Load new content
                           // Fade in
                           divproduct.innerHTML = texthtmlprod
                           divproduct.style.opacity = 1;
                          
                        },500);
              }
           )
         
     
       
     });
}

function showProdTopAndAddtoPath(type='all'){
   var breadcumb = document.getElementById('addtolist')
   var text = ' <li class="breadcrumb-item active"><a href="#">Top</a></li>'
   breadcumb.insertAdjacentHTML('beforeend',text)
   changeType('TOP')
   var texthtmlprod = ''
   const divproduct = document.getElementById("productlist")
   var localdata = JSON.parse(localStorage.getItem('products'))

  
   for (let index = 1; index < localdata.length; index++) {
      const element = localdata[index];
     if(element[9]==='Top'){
      var strArray = element[5].split("/");
     
      //localStorage.setItem(element[8], JSON.stringify(element))
     
      texthtmlprod+= '<div class="col"><div class="card text-black h-100"><img src="'+''+element[10]+'" class="card-img-top hover-shadow" alt="..." onclick="showdetails('+element[8]+',true)" /> <div class="card-body"> <div class="text-center">'+
      '<h5 class="card-title">'+element[0]+'</h5>'+
      '<p class="text-muted mb-4">'+element[3]+'</p>'
    +'</div>'+
     ' </div>'+
     '</div>'+
     '</div>'
      
     }
   }
       divproduct.style.opacity = 0;

   setTimeout(function(){ 
      // Load new content
      // Fade in
      divproduct.innerHTML = texthtmlprod
      divproduct.style.opacity = 1;
     
   },500);
  
}
function showProdBottomAndAddtoPath(){
   var breadcumb = document.getElementById('addtolist')
   var text = ' <li class="breadcrumb-item active"><a  role="button">Bottom</a></li>'
   breadcumb.insertAdjacentHTML('beforeend',text)
   changeType('BOTTOM')
   var texthtmlprod = ''
   const divproduct = document.getElementById("productlist")

   var localdata = JSON.parse(localStorage.getItem('products'))


   for (let index = 1; index < localdata.length; index++) {
      const element = localdata[index];
     if(element[9]==='Bottom'){
      var strArray = element[5].split("/");
     
   //   localStorage.setItem(element[8], JSON.stringify(element))
     
      texthtmlprod+= '<div class="col"><div class="card text-black h-100"><img src="'+''+element[10]+'" class="card-img-top hover-shadow" alt="..." onclick="showdetails('+element[8]+',true)" /> <div class="card-body"> <div class="text-center">'+
      '<h5 class="card-title">'+element[0]+'</h5>'+
      '<p class="text-muted mb-4">'+element[3]+'</p>'
    +'</div>'+
     ' </div>'+
     '</div>'+
     '</div>'
      
     }
   }
   divproduct.style.opacity = 0;

   setTimeout(function(){ 
      // Load new content
      // Fade in
      divproduct.innerHTML = texthtmlprod
      divproduct.style.opacity = 1;
     
   },500);

}

function showProdShirtAndAddtoPath(){
//    var breadcumb = document.getElementById('addtolist')
//   // var text = ' <li class="breadcrumb-item active"><a  role="button">Bottom</a></li>'
//    breadcumb.insertAdjacentHTML('beforeend',text)
 //  changeType('BOTTOM')
   var texthtmlprod = ''
   const divproduct = document.getElementById("productlist")

   var localdata = JSON.parse(localStorage.getItem('products'))


   for (let index = 1; index < localdata.length; index++) {
      const element = localdata[index];
     if(element[2]==='Shirts'){
      var strArray = element[5].split("/");
     
   //   localStorage.setItem(element[8], JSON.stringify(element))
     
      texthtmlprod+= '<div class="col"><div class="card text-black h-100"><img src="'+''+element[10]+'" class="card-img-top hover-shadow" alt="..." onclick="showdetails('+element[8]+',true)" /> <div class="card-body"> <div class="text-center">'+
      '<h5 class="card-title">'+element[0]+'</h5>'+
      '<p class="text-muted mb-4">'+element[3]+'</p>'
    +'</div>'+
     ' </div>'+
     '</div>'+
     '</div>'
      
     }
   }
   divproduct.style.opacity = 0;

   setTimeout(function(){ 
      // Load new content
      // Fade in
      divproduct.innerHTML = texthtmlprod
      divproduct.style.opacity = 1;
     
   },500);

}
function showProdPantAndAddtoPath(){
   //    var breadcumb = document.getElementById('addtolist')
   //   // var text = ' <li class="breadcrumb-item active"><a  role="button">Bottom</a></li>'
   //    breadcumb.insertAdjacentHTML('beforeend',text)
    //  changeType('BOTTOM')
      var texthtmlprod = ''
      const divproduct = document.getElementById("productlist")
   
      var localdata = JSON.parse(localStorage.getItem('products'))
   
   
      for (let index = 1; index < localdata.length; index++) {
         const element = localdata[index];
        if(element[2]==='Pants'){
         var strArray = element[5].split("/");
        
      //   localStorage.setItem(element[8], JSON.stringify(element))
        
         texthtmlprod+= '<div class="col"><div class="card text-black h-100"><img src="'+''+element[10]+'" class="card-img-top hover-shadow" alt="..." onclick="showdetails('+element[8]+',true)" /> <div class="card-body"> <div class="text-center">'+
         '<h5 class="card-title">'+element[0]+'</h5>'+
         '<p class="text-muted mb-4">'+element[3]+'</p>'
       +'</div>'+
        ' </div>'+
        '</div>'+
        '</div>'
         
        }
      }
      divproduct.style.opacity = 0;
   
      setTimeout(function(){ 
         // Load new content
         // Fade in
         divproduct.innerHTML = texthtmlprod
         divproduct.style.opacity = 1;
        
      },500);
   
   }

   function showProdSweatersAndAddtoPath(){
      //    var breadcumb = document.getElementById('addtolist')
      //   // var text = ' <li class="breadcrumb-item active"><a  role="button">Bottom</a></li>'
      //    breadcumb.insertAdjacentHTML('beforeend',text)
       //  changeType('BOTTOM')
         var texthtmlprod = ''
         const divproduct = document.getElementById("productlist")
      
         var localdata = JSON.parse(localStorage.getItem('products'))
      
      
         for (let index = 1; index < localdata.length; index++) {
            const element = localdata[index];
           if(element[2]==='Sweaters'){
            var strArray = element[5].split("/");
           
         //   localStorage.setItem(element[8], JSON.stringify(element))
           
            texthtmlprod+= '<div class="col"><div class="card text-black h-100"><img src="'+''+element[10]+'" class="card-img-top hover-shadow" alt="..." onclick="showdetails('+element[8]+',true)" /> <div class="card-body"> <div class="text-center">'+
            '<h5 class="card-title">'+element[0]+'</h5>'+
            '<p class="text-muted mb-4">'+element[3]+'</p>'
          +'</div>'+
           ' </div>'+
           '</div>'+
           '</div>'
            
           }
         }
         divproduct.style.opacity = 0;
      
         setTimeout(function(){ 
            // Load new content
            // Fade in
            divproduct.innerHTML = texthtmlprod
            divproduct.style.opacity = 1;
           
         },500);
      
      }

      function showProdShortAndAddtoPath(){
         //    var breadcumb = document.getElementById('addtolist')
         //   // var text = ' <li class="breadcrumb-item active"><a  role="button">Bottom</a></li>'
         //    breadcumb.insertAdjacentHTML('beforeend',text)
          //  changeType('BOTTOM')
            var texthtmlprod = ''
            const divproduct = document.getElementById("productlist")
         
            var localdata = JSON.parse(localStorage.getItem('products'))
         
         
            for (let index = 1; index < localdata.length; index++) {
               const element = localdata[index];
              if(element[2]==='Shorts'){
               var strArray = element[5].split("/");
              
            //   localStorage.setItem(element[8], JSON.stringify(element))
              
               texthtmlprod+= '<div class="col"><div class="card text-black h-100"><img src="'+''+element[10]+'" class="card-img-top hover-shadow" alt="..." onclick="showdetails('+element[8]+',true)" /> <div class="card-body"> <div class="text-center">'+
               '<h5 class="card-title">'+element[0]+'</h5>'+
               '<p class="text-muted mb-4">'+element[3]+'</p>'
             +'</div>'+
              ' </div>'+
              '</div>'+
              '</div>'
               
              }
            }
            divproduct.style.opacity = 0;
         
            setTimeout(function(){ 
               // Load new content
               // Fade in
               divproduct.innerHTML = texthtmlprod
               divproduct.style.opacity = 1;
              
            },500);
         
         }

function changeType(type){

   var imgtopShirt = ''
   var imgbotOant = ''
   var imgtopSweater = ''
   var imgbotShort  = ''
  switch (localStorage.getItem('tipe')) {
     case 'M':
       imgtopShirt = 'PingSpencerParent-Max-Quality.jpg'
       imgbotOant = '7661491305ff244ef53eb8861d7f1f09cb-lounge-pants-15.2x.rsquare.w600.webp'
       imgtopSweater = 'sweaters-2021-lead-1631199556.jpg'
       imgbotShort  = '20190812-165630-500x500.jpg'
        break;
     case 'W':
       imgtopShirt = 'Hot-Sale-Floral-Print-Blouses-Shirts-Smocking-Tops-Women-Shirts-Fitted-Long-Sleeve-Shirts-for-Ladies-Women-Tops-Girls-Blouse-Adult-Clothing-Apparel-Garments.jpg'
       imgbotOant = 'NaranjaSabor-2020-Autumn-Winter-Women-s-Pants-Warm-Fleece-Casual-Thermal-Pant-Waterproof-Female-Thick-Trousers.webp'
      imgtopSweater = 'item-image-0.jpg'
       imgbotShort  = 'images.jpg'
        break;
     default:
       imgtopShirt = 'imagesunix.jpg'
       imgbotOant = '3aa4a2d1bbfaab80e47fb509f3e644b8.jpg'
       imgtopSweater = '719L8L90edL._AC_UX342_.jpg'
       imgbotShort  = 'mens-printed-sport-shorts-250x250.jpg'
        break;
  }
   var method1 = type==='TOP' ? "showProdShirtAndAddtoPath()" : "showProdPantAndAddtoPath()"
   var method2 = type==='TOP' ? "showProdSweatersAndAddtoPath()" : "showProdShortAndAddtoPath()"
   var img1 = type==='TOP' ? imgtopShirt :  imgbotOant
   var img2 = type==='TOP' ? imgtopSweater : imgbotShort
   var name1 = type==='TOP' ? "Shirt" : "Pant"
   var name2 = type==='TOP' ? "Sweaters" : "Shorts"
   
  var text = '<div class="col text-center" >'+
  '<div>'+
 ' <a'+
  'id="toman"'+
  ' role="button"'+
  'onclick="'+method1+'"'+
  '>'+
  '<img'+
  '  src="../images/'+img1+'"'+
  ' class="rounded-circle hover-shadow rezizebpp"'+
  ' height="250"'+
  'width="250"'+

  ' alt="Black and White Portrait of a Man"'+
  ' loading="lazy"'+
  ' />'+
  ' </a>'+
  '</div>'+
  '<div>'+
  '<h4 class="text-dark mb-5">'+name1+'</h4>'+
  '</div>  '+
  '</div>'+
  '<div class="col text-center" >'+
  ' <div>'+
  ' <a'+
  ' id="towoman"'+
  ' role="button"'+
  ' onclick="'+method2+'"'+
  ' >'+
  ' <img'+
  '   src="../images/'+img2+'"'+
  '   class="rounded-circle hover-shadow rezizebpp"'+
  '   height="250"'+
  '   width="250"'+
  '   alt="Black and White Portrait of a Man"'+
  '   loading="lazy"'+
  ' />'+
  ' </a>'+
  ' </div>'+
  ' <div>'+
  ' <h4 class="text-dark">'+name2+'</h4>'+
  '</div>  '+
  '</div> '
  document.getElementById("changeType").style.opacity = 0;

  setTimeout(function(){ 
   // Load new content
   // Fade in
   document.getElementById("changeType").innerHTML = text
   document.getElementById("changeType").style.opacity = 1;
},500);
}

function back() {

}
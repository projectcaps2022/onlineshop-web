function getproductsWoman(){

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
                  localStorage.removeItem('products')
                  localStorage.setItem('tipe', "W")
                  var prodwom = []

                    for (let index = 1; index < data.row.length; index++) {
                        const element = data.row[index];

                        localStorage.setItem(element[8], JSON.stringify(element))

                        if(element[1]==="Woman"){
                          prodwom.push(element)
                            var strArray = element[5].split("/");
                            texthtmlprod+= '<div class="col"><div class="card text-black h-100"><img src="'+''+element[10]+'" class="card-img-top hover-shadow" alt="..." style="height: 415px" onclick="showdetails('+element[8]+',true)" /> <div class="card-body"> <div class="text-center">'+
                            '<h5 class="card-title">'+element[0]+'</h5>'+
                            '<p class="text-muted mb-4">'+element[3]+'</p>'
                            +'</div>'+
                           ' </div>'+
                           '</div>'+
                           '</div>'
                        }
                        
                    }
                    localStorage.setItem('products', JSON.stringify(prodwom))
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

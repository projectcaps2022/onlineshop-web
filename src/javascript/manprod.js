function getproductsMEn(){

    const prodmod = document.getElementById('loadingprods')
    const modalp = new mdb.Modal(prodmod)
    modalp.show()
    // <ul class="rating" data-mdb-toggle="rating" data-mdb-readonly="true" data-mdb-value="3">
    //     <li>
    //       <i class="fa-star fa-sm text-primary fas active"></i>
    //     </li>
    //     <li>
    //       <i class="fa-star fa-sm text-primary fas active"></i>
    //     </li>
    //     <li>
    //       <i class="fa-star fa-sm text-primary fas active"></i>
    //     </li>
    //     <li>
    //       <i class="far fa-star fa-sm text-primary"></i>
    //     </li>
    //     <li>
    //       <i class="far fa-star fa-sm text-primary"></i>
    //     </li>
    //   </ul>



    let url = "https://script.google.com/macros/s/AKfycbz8OORg1A70boTo59HWIWYcgc_9S9Pf32_6OxnlaBNsKtgk91v3d4nQH8EFg3-pOCl9/exec"
  
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

                    for (let index = 1; index < data.row.length; index++) {
                        const element = data.row[index];
                        if(element[1]==="Men"){

                            var strArray = element[5].split("/");
                        texthtmlprod+= '<div class="col"><div class="card text-black"><img src="'+'../images/'+strArray[strArray.length-1]+'" class="card-img-top" alt="..."/> <div class="card-body"> <div class="text-center">'+
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
                             '</div>'+
                             ' <div class="d-flex justify-content-between total font-weight-bold mt-4">'+
                             ' <span>Price</span><span>$'+Number.parseFloat(element[7]).toFixed(2)+'</span>'+
                             '</div>'+
                             ' </div>'+
                             '<div class="card-footer text-center">'+
                             ' <button type="button" class="btn btn-outline-primary" data-mdb-ripple-color="dark" style="border-color: #dd3675; color: #dd3675;" onclick="showcart()">Add to Cart</button>'+
                
                             ' </div>'+
                             '</div>'+
                             '</div>'
                        }
                        
                    }
                    modalp.hide()

                    divproduct.innerHTML = texthtmlprod
               }
            )
          
      
        
      });
}

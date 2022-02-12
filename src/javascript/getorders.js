

function getOrders (isenabled=false) {
 
  
    const loadord = document.getElementById('ordersl')
   const modalord = new mdb.Modal(loadord)
   modalord.show()
     
      let users = localStorage.getItem('user')
     
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
                      if(element[4]=== users && element[1]==="Confirmed"){
                      
                        cart.push(element)
                        
                      }
                     }
                     var array_tot = [];
                     var temp_arr = [];
                   
                         var elemnetdif = cart[0];
                         //console.log(cart);
                     for (let split = 0; split < cart.length; split++) {
                         
                         var element = cart[split];
                         if(element[17]===elemnetdif[17]){
                             temp_arr.push(element);
                            }else{
                                array_tot.push(temp_arr)
                                elemnetdif= element
                                temp_arr = [] 
                                temp_arr.push(element);
                            }
                            
                     }
                    array_tot.push(temp_arr)
                    var totaltext = '';
                    var textcard = '';
                    var totalcart = 0;
                   for (let rec = 0; rec < array_tot.length; rec++) {
                        textcard=''
                        var total = 0;
                        //var date = 
                       for (let index = 0; index < array_tot[rec].length; index++) {
                           const elements = array_tot[rec][index];
                           textcard+=
                           '<div class="card shadow-0 border mb-4">'+
                           '<div class="card-body">'+
                              ' <div class="row">'+
                                   '<div class="col-md-2 text-center">'+
                                       '<img src="'+elements[16]+'" class="img-fluid w-50 text-center" alt="Phone">'+
                                   '</div>'+
                                   '<div class="col-md-2 text-center d-flex justify-content-center align-items-center">'+
                                       '<p class="text-muted mb-0">'+elements[6]+'</p>'+
                                  ' </div>'+
                                   '<div class="col-md-2 text-center d-flex justify-content-center align-items-center">'+
                                       '<p class="text-muted mb-0 small">'+elements[10]+'</p>'+
                                   '</div>'+
                                  ' <div class="col-md-2 text-center d-flex justify-content-center align-items-center">'+
                                      ' <p class="text-muted mb-0 small">Size: '+elements[3]+'</p>'+
                                  ' </div>'+
                                  ' <div class="col-md-2 text-center d-flex justify-content-center align-items-center">'+
                                       '<p class="text-muted mb-0 small">Qty: '+elements[2]+'</p>'+
                                   '</div>'+
                                   '<div class="col-md-2 text-center d-flex justify-content-center align-items-center">'+
                                       '<p class="text-muted mb-0 small">$'+elements[13]+'</p>'+
                                   '</div>'+
                               '</div>'+
                               '<hr class="mb-4" style="background-color: #e0e0e0; opacity: 1;">'+
                               '<div class="row d-flex align-items-center">'+
                                   '<div class="col-md-2">'+
                                       '<p class="text-muted mb-0 small">Track Order</p>'+
                                  ' </div>'+
                                   '<div class="col-md-10">'+
                                      ' <div class="progress" style="height: 6px; border-radius: 16px;">'+
                                           '<div class="progress-bar gradient-custom-2" role="progressbar" style="width: 65%; border-radius: 16px;" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">'+
                                           '</div>'+
                                       '</div>'+
                                      ' <div class="d-flex justify-content-around mb-1">'+
                                          ' <p class="text-muted mt-1 mb-0 small ms-xl-5">Out for delivary</p>'+
                                         '  <p class="text-muted mt-1 mb-0 small ms-xl-5">Delivered</p>'+
                                      ' </div>'+
                                  ' </div>'+
                            '   </div>'+
                          ' </div>'+
                      ' </div>'
                      total+= elements[2]*elements[13]
                       }
                       var date = new Date(array_tot[rec][0][5]);
                       totalcart+=total
                       //console.log(textcard);
                       totaltext+= 
                       '<div id="orders" class="card-body p-4">'+
                           '<div class="d-flex justify-content-between align-items-center mb-4">'+
                              ' <p class="lead fw-normal mb-0" style="color: #da5645;">Receipt Cart: '+(rec+1)+'</p>'+
                               '<p class="small text-muted mb-0">Receipt Voucher : 1KAU9-84UIL</p>'+
                           '</div>'+
                           '<div id="fill">'+
                           textcard+
                           '</div>'+
                         '  <div class="d-flex justify-content-between pt-2">'+
                             '  <p class="fw-bold mb-0">Order Details</p>'+
                               '<p class="text-muted mb-0"><span class="fw-bold me-4">Total</span> $'+parseFloat(total).toFixed(2)+'</p>'+
                           '</div>'+
                       
                           '<div class="d-flex justify-content-between pt-2">'+
                              ' <p class="text-muted mb-0">Invoice Number : 788152</p>'+
                               '<p class="text-muted mb-0"><span class="fw-bold me-4">Discount</span> $00.00</p>'+
                         '  </div>'+
                       
                           '<div class="d-flex justify-content-between">'+
                              ' <p class="text-muted mb-0">Invoice Date : '+date.toDateString()+'</p>'+
                         '  </div>'+
                       
                          ' <div class="d-flex justify-content-between mb-5">'+
                              ' <p class="text-muted mb-0">Recepits Voucher : 18KU-62IIK</p>'+
                               '<p class="text-muted mb-0"><span class="fw-bold me-4">Delivery Charges</span> Free</p>'+
                         '  </div>'+
                         '  <hr class="my-2" />'+
                       '</div>'
                       

                   }

                        var textfull = '<div class="card" style="border-radius: 10px;">'+
                        '<div class="card-header px-4 py-5">'+
                            '<h5 class="text-muted mb-0">Thanks for your Order, <span id="users" style="color: #a8729a;">'+localStorage.getItem('user')+'</span>!</h5>'+
                        '</div>'+totaltext+
                        '<div class="card-footer border-0 px-4 py-5 gradient-custom-2"'+
                          ' style=" border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;">'+
                          ' <h5 class="d-flex align-items-center justify-content-end text-white text-uppercase mb-0">'+
                             '  Total paid: <span id="totalp" class="h2 mb-0 ms-2">$'+parseFloat(totalcart).toFixed(2)+'</span></h5>'+
                       '</div>'+
                       '</div>'
                     ////console.log(array_tot);
                       modalord.hide()

                     document.getElementById('fill').style.opacity = 0
                     setTimeout(function(){ 
                        // Load new content
                        // Fade in
                        
                        document.getElementById('fill').innerHTML = textfull
                        document.getElementById('fill').style.opacity = 1
                       
                     },500);
                      //  document.getElementById('totalp').innerHTML = '$'+totalcart
                     localStorage.removeItem('orders')
                     localStorage.setItem('orders', JSON.stringify(cart))
                }
             )
           
       
         
       });
   }
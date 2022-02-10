function showcart(product=null){

    var element = JSON.parse(localStorage.getItem(product))

    var form = new FormData();

    var quantity = document.getElementById('typeNumber').value

    var select = document.getElementById('sizeselect').value

    //console.log(quantity);

    form.append('Confirmed', "Pending")
    form.append('Quantity', quantity)
    form.append('Size', select)
    form.append('action', 'insert')
    form.append('User', localStorage.getItem('user'))
    form.append('Name', element[0])
    form.append('Category', element[1])
    form.append('Type', element[2])
    form.append('Description', element[3])
    form.append('Color', element[4])
    form.append('Image', element[5])
    form.append('Rating', element[6])
    form.append('prize', '$'+element[7])
    form.append('Id_Producto', element[8])
    form.append('Part', element[9])
    form.append('imageB64', element[10])

    let url = "https://script.google.com/macros/s/AKfycbyhOVFLwVHcHIKH8fsJoSmfqKYGmGHTzf1M3stb1MVnXNelEdL6TWOGkeEPJMgt3g0A9A/exec"
    //const form = document.getElementById('form-register');
    var a = null
    
           fetch(url, {
            method: 'POST',
            body: form
          }).then((response) => {
            a = response.clone()
            console.log(a);
            a.json().then((data)=>{
                console.log('data', data)
                getItemsCart()
                const modalCaartContent = document.getElementById('exampleSideModal1')
          const modalCart = new mdb.Modal(modalCaartContent)
          modalCart.show()
            })
          })
         
}
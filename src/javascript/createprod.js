// let arr = 
// [e.parameter['Name'],
// e.parameter['Category'],
// e.parameter['Type'],
// e.parameter['Description'],
// e.parameter['Color'],
// e.parameter['Image'],
// e.parameter['Rating'],
// e.parameter['prize'],
// id_prod,
// e.parameter['Part'],
// e.parameter['imageB64']
// ]

function getBaseUrl ()  {
    var file = document.getElementById('customFile').files[0];
    var reader = new FileReader();
    var baseString;
    reader.onloadend = function () {
        baseString = reader.result;
        localStorage.setItem('img', baseString)
        
    };
    reader.readAsDataURL(file);
}


function insertprod(){
    
    //exampleModal

    var form = document.getElementById("formprod");
    
    var formData = new FormData(form);
    var Name = document.getElementById("Name").value;
    var Description = document.getElementById("Description").value;
    var Type = document.getElementById("Type").value;
    
    var fem = document.getElementById("femaleGender").checked;
    var mal = document.getElementById("maleGender").checked;
    
    var Category = fem ? 'Woman' : 'Men'
    var Color = document.getElementById("Color").value;
    var Rating = document.getElementById("Rating").value;
    var Prize = document.getElementById("Prize").value;
    var Part = document.getElementById("Part").value;
    
    var Image = document.getElementById("customFile").value;
    
    
    var ImagenB64 = localStorage.getItem('img')
    //formData.append('uploadedFile[]', fileElements);
   
// let arr = 
formData.append('Name', Name);
formData.append('Category', Category);
formData.append('Type', Type);
formData.append('Description', Description);
formData.append('Color', Color);
formData.append('Image', Image);
formData.append('Rating', Rating);
formData.append('prize', Prize);
formData.append('Part', Part);
formData.append('imageB64', ImagenB64);
// ]
  

    let url = "https://script.google.com/macros/s/AKfycbw3eRk4kB37DUvE9ePn636vThg2vEiLOITPYi-tAouGTLxPvtBb4o4BtTiaUZtUgY1SoQ/exec"
    //const form = document.getElementById('form-register');
    
    
            console.log(formData);
           fetch(url, {
            method: 'POST',
            body: formData,
            mode: 'no-cors',
            header: {
             'Access-Control-Allow-Origin':'*',
            }
          })
          .then((response) => {
            a = response.clone()
            a.json().then((data)=>{

                console.log('data', data)
                
            })
          })
}


function login(){
    let url = "https://script.google.com/macros/s/AKfycbxob0Jli4eELhxxcU8KCrOYFzN81_FI6zm74hRbcTCAUfHPOU1jpQWI45eHFY_jL5Ge/exec"

    const myModalEl = document.getElementById('modallog')
    const modal = new mdb.Modal(myModalEl)
    text = '<div class="d-flex justify-content-center"><div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div></div>'
    document.getElementById("divbody").innerHTML =text
    modal.show()

    
    var a ;  
    fetch(url, {
        method: 'GET'
      })
      .then((response) => {

          a = response.clone();


          var text = ''
            a.json().then((data) => {
                    console.log(data)
                    let username = document.getElementById("LogEmail").value
                    let password = document.getElementById("LogPassword").value

                    for (let index = 0; index < data.row.length; index++) {
                        const element = data.row[index];
                        
                        if(element[2]===username && element[4]===password){
                            console.log('same')
                            
                            window.location = '../../index.html?user='+btoa(username);
                            
                            modal.hide()
                            return 0
                        }
                       
                        
                    }
                    console.log('unsame')
                    document.getElementById("divbody").innerHTML = '<p class="text-center" style="color: #E20A0A;">Wrong username or password! Please retry.</p>'
                    console.log(username,password)

               }
            )
          
      
        
      });
   // const email = document.getElementById("Email").value
   
 //  window.location = '../../index.html?user='+btoa(email);
}

function register(){
    let url = "https://script.google.com/macros/s/AKfycbyBkAeX1EZSS7NKaHS_k0NuwHZ5-5DyB1PEd25vnP5eIKjSflbc7Wh0uYJmfwdcLjQI/exec"
    const form = document.getElementById('form-register');
    const data = new FormData(form);
    
    const myModalEl = document.getElementById('modalreg')
    const modal = new mdb.Modal(myModalEl)
    text = '<div class="d-flex justify-content-center"><div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div></div>'
    document.getElementById("divbodyreg").innerHTML =text
    var a;
    modal.show()
            console.log(data);
           fetch(url, {
            method: 'POST',
            body: data,
          })
          .then((response) => {
            a = response.clone()
            a.json().then((data)=>{

                console.log('data', data)
                if(data.result==='success'){
                    text = '<p class="text-center" style="color: #068D05;">Successfully registered user!! </p>'
                    document.getElementById("divbodyreg").innerHTML =text
                }else{
                    text = '<p class="text-center" style="color: #E50E2A;">the user already exists!! </p>'
                    document.getElementById("divbodyreg").innerHTML =text
                }
            })
          })
}
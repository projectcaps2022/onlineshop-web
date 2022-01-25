

function gettest(){
    try{
var connection = new ActiveXObject("ADODB.Connection") ;
}catch(err){
    alert('Unsuported browser');
}
var connectionstring="Data Source=onlineshops.database.windows.net;Initial Catalog=onlineshopdb;User ID=sqldeveloper;Password=ThisIsMyPassword97;Provider=SQLOLEDB";
    
connection.Open(connectionstring);
try{
var rs = new ActiveXObject("ADODB.Recordset");
}catch(err){
    alert('Unsuported browser');

}
rs.Open("SELECT * FROM test_azure", connection);

console.log(rs);

rs.MoveFirst;
var text = '';
while(!rs.eof)
{
    text+='<p> id: '+ rs.fields(0)+' , created_at: '+ rs.fields(1)+' updated_at: '+rs.fields(2)+' </p> <input type="button" value="deltete item: '+rs.fields(0)+'" onclick="deletetest('+rs.fields(0)+')" text="delete item">';
    rs.movenext;
}
document.getElementById('result').innerHTML = (text);

rs.close;
connection.close; 
}

function settest(id,created_at,updated_at){
    try{
    var connection = new ActiveXObject("ADODB.Connection") ;
}catch(err){
    alert('Unsuported browser');

}
    id = document.getElementById(id).value;
    created_at = document.getElementById(created_at).value;
    updated_at = document.getElementById(updated_at).value;
    console.log(id,created_at,updated_at);
    var connectionstring="Data Source=onlineshops.database.windows.net;Initial Catalog=onlineshopdb;User ID=sqldeveloper;Password=ThisIsMyPassword97;Provider=SQLOLEDB";
        
    connection.Open(connectionstring);
    try{
    var rs = new ActiveXObject("ADODB.Recordset");
    }catch(err){
        alert('Unsuported browser');
    
    }
    try{
        var query = "Insert into test_azure(id,created_at,updated_at) values ("+id+",'"+created_at+"','"+updated_at+"')"
        console.log(query)
    rs.Open(query, connection);
    }catch(err){
        alert(err.message);
    }
    console.log(rs);

    //rs.close;
    connection.close;
    gettest() 
}

function deletetestd(id){
    try{
    var connection = new ActiveXObject("ADODB.Connection") ;
}catch(err){
    alert('Unsuported browser');

}
    var connectionstring="Data Source=onlineshops.database.windows.net;Initial Catalog=onlineshopdb;User ID=sqldeveloper;Password=ThisIsMyPassword97;Provider=SQLOLEDB";
        
    connection.Open(connectionstring);
    try{
    var rs = new ActiveXObject("ADODB.Recordset");
    }catch(err){
        alert('Unsuported browser');
    
    }
    try{
    rs.Open("DELETE from test_azure where id = "+id, connection);
    }catch(err){
        document.getElementById("result").innerHTML = err.message;
    }
    console.log(rs);

  //  rs.close;
    connection.close; 
    gettest()
}

function testSQLJS() {
    var db = new SQL.Database();
    // Run a query without reading the results
    db.run("CREATE TABLE test (col1, col2);");
    // Insert two rows: (1,111) and (2,222)
    db.run("INSERT INTO test VALUES (?,?), (?,?)", [1,111,2,222]);

    // Prepare a statement
    var stmt = db.prepare("SELECT * FROM test WHERE col1 BETWEEN $start AND $end");
    stmt.getAsObject({$start:1, $end:1}); // {col1:1, col2:111}

    // Bind new values
    stmt.bind({$start:1, $end:2});
    while(stmt.step()) { //
        var row = stmt.getAsObject();
        // [...] do something with the row of result
    }


}
function testXMLREQUEST(){
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://texteditor.co/61e30f55-298e-42e1-a056-75a8c7da2441", true);
    
    xhr.setRequestHeader('Content-Type', "text/plain");
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhr.setRequestHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE');
    xhr.setRequestHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept, Authorization, X-Request-With');
    xhr.send()
    

    xhr.onload = function() {
        
        console.log(xhr.response);
    document.getElementById('result').innerHTML = (xhr.response);

      };
      
      xhr.onerror = function() { // only triggers if the request couldn't be made at all
        alert(`Network Error`);
      };
      
      xhr.onprogress = function(event) { // triggers periodically
        // event.loaded - how many bytes downloaded
        // event.lengthComputable = true if the server sent Content-Length header
        // event.total - total number of bytes (if lengthComputable)
        alert(`Received ${event.loaded} of ${event.total}`);
      };


      
}

function getData() {
    var a ;  
    fetch('https://script.google.com/macros/s/AKfycbyE6RT2t_A84NuOvaVTxLmP46hJjMu86VSqlU6kXvcC41oCYzcd5h9GmWCfhN_Ottwg/exec', {
        method: 'GET'
      })
      .then((response) => {

          a = response.clone();
          alert("Response!");

          var text = ''
            a.json().then((data) => {
                    console.log(data)
                for (let index = 1; index < data.row.length; index++) {
                    const element = data.row[index];
                    text+='<p> Date: '+ element[0]+' , Email: '+ element[1]+' Name: '+element[2]+' </p> <input type="button" value="deltete item: '+element[2]+'" onclick="deletetest('+"'"+element[1]+"'"+')" text="delete item">';
              
                      }
          
          
                      document.getElementById('result').innerHTML = (text);
                      return 0;
            }
            )
          
      
        
      });

     

}

function deletetest(email) {
    text= '<input name="email" type="text" placeholder="email" value="'+email+'" style="display: none" required>';
    const form = document.getElementById('my-form');

    form.insertAdjacentHTML( 'beforeend', text );


        const data = new FormData(form);
          console.log(data);
          const action = 'https://script.google.com/macros/s/AKfycbwo5ox7DOnJ-61N10M0TWPxbp4zPYZDoYuwTDdjTcYqiRYKFNs_MlqNmt97p8fR87Z5/exec';
           fetch(action, {
            method: 'POST',
            body: data,
          })
          .then((response) => {
            console.log(response.text())
            alert("Success!");
            getData()
            document.getElementsByName('email').setAttribute("name","insert");
            return 0;
          })

}
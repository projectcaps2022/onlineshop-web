

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

function deletetest(id){
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
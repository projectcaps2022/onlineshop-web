Sub Button1_OnClick()
Dim Connection
Dim ConnString
Dim Recordset

Set connection=CreateObject("ADODB.Connection")
Set Recordset=CreateObject("ADODB.Recordset")
ConnString="DRIVER={SQL Server};SERVER=onlineshops.database.windows.net;UID=sqldeveloper;PWD=ThisIsMyPassword97;DATABASE=onlineshopdb"
Connection.Open ConnString

dim form1
Set form1 = document.Register

Name1 = form1.Name.value
Age1 = form1.Age.Value
Add1 = form1.address.value

connection.execute("Insert into test_azure(id,created_at,updated_at) values  ('"&Name1 &"'," &Age1 &",'"&Add1 &"')")

End Sub

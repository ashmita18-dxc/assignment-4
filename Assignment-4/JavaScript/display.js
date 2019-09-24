function display(){
    var table=document.getElementById("table");
    var a=document.getElementById("item").value;
    var b=document.getElementById("qty").value;
    var c=document.getElementById("rate").value;
    var d=parseInt(b)*parseInt(c);
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = a;
    cell2.innerHTML = b;
    cell3.innerHTML = c;
    cell4.innerHTML = d;
}
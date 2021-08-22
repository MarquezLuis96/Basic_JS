var username = "Luis";
var surname = "Marquez";
var cart = ["Laptop Computer","Xiaomi Phone","Elementis 256 SSD","Cheese","Bread","5L Water","Blueberries Jam"];

var consult  = document.getElementById("consult-btn");
consult.onclick = function(event) {
    document.getElementById("name").innerHTML = username + " "+ surname;
}

var send = document.getElementById("send-btn");
send.onclick = function(event) {
    username = document.getElementById("form-name").value;
    surname = document.getElementById("form-surname").value;
    document.getElementById("form-name").value = "";
    document.getElementById("form-surname").value = "";
    document.getElementById("name").innerHTML = "";
}
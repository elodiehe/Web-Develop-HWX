function shout(){
    var beatles = Array("John", "Paul", "George", "Ringo");
    for (var count = 0 ; count < beatles.length; count++){
        alert(beatles[count]);
    }
}
shout();
function square(num){
    total = num *num;
    return total;
}
var total = 50;
var number = square(20);
alert(total);

function square(num){
    var total = num * num;
    return total;
}
var num = 7.561;
var num = Math.round(num);
alert(num);

document.getElementById("purchases")

var items = document.getElementsByTagName("li");
for (var i=0; i<items.length; i++){
    alert(typeof items[i]);
}
var paras = document.getElementsByTagName("p");
for (var i=0; i < paras.length; i++){
    alert(paras[i].getAttribute("title"));
}
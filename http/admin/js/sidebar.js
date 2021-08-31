
console.log(document.getElementById("sidebar"));

console.log($('#sidebar'));

$('#sidebar').html("");

	
console.log(document.getElementById("tabletochange"));

$('#sidebar').html("");


$.get( "http://10.80.11.121:5000/getinfo/", function( data ) {
  $( ".result" ).html( data );


var row = "";

var uniq =[];
var newButton = document.createElement("button")


const obj = JSON.parse(data)




function Function(name) {
    for (let i = 0; i < obj.length; i++) {
        row = "";
        if (obj[i][5] = name) {
        row+=("<tr>");
        for(let x = 0; x < 6; x++){
        row+=("<td>");
        row+=(obj[i][x]);
        row+=("</td>");
        }
        row+=("</tr>");
        }
    }
    $('#tabletochange').html(row);
}















console.log(document.getElementById("sidebar"));

console.log($('#sidebar'));

//$('#sidebar').html("");

	
console.log(document.getElementById("tabletochange"));

//$('#sidebar').html("");


$.get( "http://10.80.11.121:5000/getinfo/", function( data ) {
  $( ".result" ).html( data );


var row = "";
var irt;
var uniq =[];
var newButton = document.createElement("button")


const obj = JSON.parse(data)

for (let i = 0; i < obj.length; i++) {
if (obj[i][5]!=null){
row+=("<tr>");
for(let x = 0; x < 6; x++){
row+=("<td>");
row+=(obj[i][x]);
row+=("</td>");
}
row+=("</tr>");
uniq.push(obj[i][5])
}
}

$('#tabletochange').html(row);


function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}



function Function3(name) {
        row = "";
    for (let i = 0; i < obj.length; i++) {
        
        if (obj[i][5] == name) {
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






unique = uniq.filter(onlyUnique);

//var a = "";
//a +=('<ul class="list-reset flex flex-col">');
//for (let i = 0; i < unique.length; i++) {
//a +=("<li>");
//
//a +=("<button id="+unique[i]+" onclick = Function('"+unique[i]+"') >");
//a+=(unique[i]);
//a +=("</button>")
//a +=("</li>");
//}
//a +=("</ul>");
//$('#sidebar').html(a); Function(unique[i])



for (irt = 0; irt < unique.length & unique[irt] !=null; irt++) {
createButton(sidebar2, unique[irt])

}


function createButton(context, name) {
    var button = document.createElement("input");
    button.type = "button";
    button.onclick = function() {Function3(name);};
    button.value = name+"\n";
    context.appendChild(button);
}






//Function('verser2')
//obj.forEach(myFunction);
//Function("+unique[i]+")
//
//
//



//for (let i = 0; i < obj.length; i++) {
//var row = document.createElement("tr");
//
//for(let x = 0; x < 4; x++){
//var cell = document.createElement("td");
//var cellText = document.createTextNode(obj[i][x]);
//cell.appendChild(cellText);
//row.appendChild(cell);
//}
//tbl.appendChild(tblBody);
//}








    // creates a <table> element and a <tbody> element
//  var tbl = document.createElement("table");
//  var tblBody = document.createElement("tbody");
//
//for (var i = 0; i < 2; i++) {
//    // creates a table row
//    var row = document.createElement("tr");
//
//    for (var j = 0; j < 2; j++) {
//      // Create a <td> element and a text node, make the text
//      // node the contents of the <td>, and put the <td> at
//      // the end of the table row
//      var cell = document.createElement("td");
//      var cellText = document.createTextNode("cell in row "+i+", column "+j);
//      cell.appendChild(cellText);
//      row.appendChild(cell);
//    }
//
//    // add the row to the end of the table body
//    tblBody.appendChild(row);
//  }
//
//  // put the <tbody> in the <table>
//  tbl.appendChild(tblBody);
//  // appends <table> into <body>
//  body.appendChild(tbl);
//  // sets the border attribute of tbl to 2;
//  tbl.setAttribute("border", "2");
//



});























//legacy code
var sidebar = document.getElementById('sidebar');

function sidebarToggle() {
    if (sidebar.style.display === "none") {
        sidebar.style.display = "block";
    } else {
        sidebar.style.display = "none";
    }
}

var profileDropdown = document.getElementById('ProfileDropDown');

function profileToggle() {
    if (profileDropdown.style.display === "none") {
        profileDropdown.style.display = "block";
    } else {
        profileDropdown.style.display = "none";
    }
}


/**
 * ### Modals ###
 */

function toggleModal(action, elem_trigger)
{
    elem_trigger.addEventListener('click', function () {
        if (action == 'add') {
            let modal_id = this.dataset.modal;
            document.getElementById(`${modal_id}`).classList.add('modal-is-open');
        } else {
            // Automaticlly get the opned modal ID
            let modal_id = elem_trigger.closest('.modal-wrapper').getAttribute('id');
            document.getElementById(`${modal_id}`).classList.remove('modal-is-open');
        }
    });
}


// Check if there is modals on the page
if (document.querySelector('.modal-wrapper'))
{
    // Open the modal
    document.querySelectorAll('.modal-trigger').forEach(btn => {
        toggleModal('add', btn);
    });
    
    // close the modal
    document.querySelectorAll('.close-modal').forEach(btn => {
        toggleModal('remove', btn);
    });
}

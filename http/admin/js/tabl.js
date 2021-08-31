$(document).ready(function(){
var pgsql = ign.pgsql();
var driver = pgsql.driver("postgresql","peserta.sqlite");
var qry = sql.query("select * from info");

if(driver){
    //$(".json").html(JSON.stringify(qry));
    var query = qry;
    var html = "";

    $("p").html("Status Database Connection : "+query.status);
    if(query.status){

         $.each(query.content,function(data){
            html += "<td>"+this.hostname+"</td>";
            html += "<td>"+this.filepath+"</td>";
            html += "<td>"+this.date+"</td>";
            html += "<td>"+this.filesize+"</td>";
            html += "<td>"+this.server+"</td>";
        });
    }

    $(".data").html(html);
}
https://stackoverflow.com/questions/26946099/how-to-display-database-with-javascript-in-the-form-of-a-table

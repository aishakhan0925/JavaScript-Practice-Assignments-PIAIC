//---------------------form 1 ------------------------//


/*var fname = document.getElementById("fname").value;
var lname = document.getElementById ("lname").value;
var email = document.getElementById ("email").value;
var con_email = document.getElementById ("con_email").value;
var password = document.getElementById ("password").value;
var con_password = document.getElementById ("con_password").value;

//---------------------- form 2 ----------------------------//

var moreDetails = document.getElementById("details");
    var address = document.getElementById("add");
    var address2 = document.getElementById("add_2");
    var city = document.getElementById("city");
    var state = document.getElementById("state");
    var country = document.getElementById("country");
    var postCode = document.getElementById("postCode");
    var phone = document.getElementById("phone");
    var mobPhone = document.getElementById("mobPhone");

    //----------------------- form 3 ----------------------------//

    var cate = document.getElementById ("cate").value;
    var jobtit = document.getElementById ("jobtit").value;
    var state = document.getElementById("state").value;
    var yearofexp = document.getElementById ("yearofexp").value;
    var count = document.getElementById ("count").value;
    var web = document.getElementById ("web").value;
    var act_age = document.getElementById ("act_age").value;
    var text = document.getElementById ("text").value;*/
    
    //----------------------- function ----------------------------//
    
    function display()
    { 
var fname = document.getElementById("fname").value;
var lname = document.getElementById ("lname").value;
var email = document.getElementById ("email").value;
var address = document.getElementById("add");
//
var city = document.getElementById("city");
//var state = document.getElementById("state");
//var country = document.getElementById("country");
var postCode = document.getElementById("postCode");
var phone = document.getElementById("phone");
var mobPhone = document.getElementById("mobPhone");
var jobtit = document.getElementById ("jobtit").value;
//var yearofexp = document.getElementById ("yearofexp").value;
var web = document.getElementById ("web").value;


document.write("Name: " +fname +" " +lname);
document.write("Email Adress: " +email);
document.write("Phone# " +phone);
document.write("Mobile Phone: " +mobPhone);
document.write("Websie : " +web);
document.write("Job Title: " +jobtit);
//document.write("Years Of Experience: " +yearofexp);
//document.write("Country: " +country);
//document.write("State: " +state);
//document.write("City: " +city);
document.write("Adress: " +address);
document.write("Post Code: " +postCode);

}
   
   

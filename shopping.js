// JS for Assignment 4 shopping cart

// Sets the date for the form

function date(){
  var date = new Date();
  var month = date.getMonth();
  var day = date.getDate();
  var year = date.getFullYear();
  document.getElementById("date").innerHTML = String(month+1 + "/" + day + "/" + year);
  document.getElementById("fullname").focus();
  }



// Calculates product total and tax
function subtotal(){
  var product = document.getElementById("product");
  var choice = product.options[product.selectedIndex].text;
  var quantity1 = document.getElementById("quantity");
  var quantity2 = quantity1.options[quantity1.selectedIndex].text;
  var quantity3 = Number(quantity2);
    if (choice==="Dancers ($400ea)"){
      document.getElementById("producttotal").value = (400 * quantity3).toFixed(2);
    }

    else if (choice==="Flower ($300ea)"){
      document.getElementById("producttotal").value = (300 * quantity3).toFixed(2);
    }

    else if (choice==="Building ($250ea)"){
      document.getElementById("producttotal").value = (250 * quantity3).toFixed(2);
    }

    else if (choice==="Bird ($100ea)"){
      document.getElementById("producttotal").value = (100 * quantity3).toFixed(2);
    }

    else if (choice==="Statue ($150ea)"){
      document.getElementById("producttotal").value = (150 * quantity3).toFixed(2);
    }

    else if (choice==="Shadow ($175ea)"){
      document.getElementById("producttotal").value = (175 * quantity3).toFixed(2);
    }

  var initialtotal = document.getElementById("producttotal").value;
  var producttotal = Number(initialtotal);
  var tax = (producttotal * .04).toFixed(2);
  document.getElementById("tax").value = tax;
  document.getElementById("tax").select();

  console.log("subtotal done");
}




// Calculates total based on product cost, tax, and shipping
function calctotal(){
  var producttotal = document.getElementById("producttotal").value;
  var tax = document.getElementById("tax").value;


  if(document.getElementById("standard").checked){
      shipcost = 7.95;
  }
  else if(document.getElementById("express").checked){
      shipcost = 9.95;
  }
  else if(document.getElementById("nextDay").checked){
      shipcost = 12.95;
  }

  document.getElementById("total").value = "$" + (shipcost + Number(producttotal) + Number(tax)).toFixed(2);
}





// Displays a picture based on product selection
function picture(){

  var product = document.getElementById("product");
  var choice = product.options[product.selectedIndex].text;

  if (choice==="Dancers ($400ea)"){
    document.getElementById("photo").innerHTML = '<img src="images/dancers.jpg" width=100 height=auto>';
  }

  else if (choice==="Bird ($100ea)"){
    document.getElementById("photo").innerHTML = '<img src="images/bird.jpg" width=100 height=auto>';
  }

  else{
    document.getElementById("photo").innerHTML = "Image not currently available.";
  }

}


// Identifies payment method so I can use it in the receipt
function choosePay(){
  if(document.getElementById("mastercard").checked){
      paymeth = "Mastercard";
  }
  else if(document.getElementById("visa").checked){
      paymeth = "Visa";
  }
  else if(document.getElementById("aex").checked){
      paymeth = "American Express";
  }
  else if(document.getElementById("discover").checked){
      paymeth = "Discover";
  }
  else{
      alert("Please choose a method of payment;")
  }

  console.log("payment chosen.");

}


// Validates full name in the form
function validateName(){
  var fname = document.getElementById("fullname").value;
    if (fname == null || fname == "") {
        alert("Full name must be filled out");
        return false;}
}



// Validates given email
function validateEmail() {
  var email = document.getElementById("email").value;
  if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
    return true;
    }
  else {
    alert("You have entered an invalid email address!");
    return false; }
  }


// Validates given zip code
function validateZip()
{
    var zip = document.getElementById("zip").value;
    var isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zip);

    if (isValidZip == false){
      alert("You have entered an invalid zip code!");
    }
    console.log(isValidZip);
}




function receipt(){
  var product = document.getElementById("product");
  var choice = product.options[product.selectedIndex].text;
  var quantity1 = document.getElementById("quantity");
  var quantity2 = quantity1.options[quantity1.selectedIndex].text;
  var quantity3 = Number(quantity2);
  var fullname = document.getElementById("fullname").value;
  var address = document.getElementById("address").value;
  var city = document.getElementById("city").value;
  var state = document.getElementById("state").value;
  var zip = document.getElementById("zip").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var tax = document.getElementById("tax").value;
  var total = document.getElementById("producttotal").value;
  var comments = document.getElementById("comments").value;
  var receiptpage = window.open("", "Your Receipt", "width=500, height=700");

  receiptpage.document.write("<h2>Order Confirmation</h2>");
  receiptpage.document.write("<h3>Customer Information</h3>");
  receiptpage.document.write(new Date());
  receiptpage.document.write("<p>Full Name: " + fullname + "</p>");
  receiptpage.document.write("<p>Address: " + address + "</p>");
  receiptpage.document.write("<p>City: " + city + "</p>");
  receiptpage.document.write("<p>State: " + state + "</p>");
  receiptpage.document.write("<p>Zip: " + zip + "</p>");
  receiptpage.document.write("<p>Email: " + email + "</p>");
  receiptpage.document.write("<p>Phone: " + phone + "</p>");
  receiptpage.document.write("<h3>Product Details</h3>");
  receiptpage.document.write("<p>Product: " + choice + "</p>");
  receiptpage.document.write("<p>Quantity: " + Number(quantity3) + "</p>");
  receiptpage.document.write("<p>Tax: $" + tax + "</p>");
  receiptpage.document.write("<p>Shipping Cost: $" + shipcost + "</p>");
  receiptpage.document.write("<p>Your Total: $" + total + "</p>");
  receiptpage.document.write("<p>Your Payment Method: " + paymeth + "</p><Br>");
  receiptpage.document.write("<h3>Miscellaneous</h3>");
  receiptpage.document.write("<p>Your Comments: " + comments + "</p><Br>");
  receiptpage.document.write("<h2>Thanks for your order!</h2>");
}



// Cookie functions, help from W3 Schools
function setCookie(fname,fvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = fname+"="+fvalue+"; "+expires;
    console.log("cookie recorded");
}

function getCookie(fname) {
    var name = fname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


function welcomeCookie() {
    var user=getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
       user = prompt("Please enter your name:","");
       if (user != "" && user != null) {
           setCookie("username", user, 30);
       }
    }
}

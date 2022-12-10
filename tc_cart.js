"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Hesbon Osoro
   Date: 12/10/22
   
   Filename: tc_cart.js
	
*/

var orderTotal = 0; // var with 0 value

var itemCost = 0; //item cost

var cartHTML =
  "<table border='1'> <tr><th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th></tr>"; // puts header line to table

var images = ["tc_10582.png", "tc_23015.png", "tc_41807.png", "tc_10041.png"];

for (var i = 0; i < item.length; i++) {
  //looping through loop for 0 till length

  itemCost = itemPrice[i] * itemQty[i]; //item cost for each item

  orderTotal += itemCost; //add to total order

  cartHTML +=
    " <tr><td><img src=" +
    images[i] +
    " alt=" +
    item[i] +
    "></td><td>" +
    itemDescription[i] +
    "</td><td>" +
    "$" +
    itemPrice[i] +
    "</td><td>" +
    itemQty[i] +
    "</td><td>" +
    "$" +
    itemCost +
    "</td></tr>";
} // getting value from each array

cartHTML +=
  "<tr><td colspan = '4' > Subtotal</td> <td>" +
  "$" +
  orderTotal +
  "</td></tr></table>"; // the order total

var elem = document.getElementById("cart");

elem.innerHTML = cartHTML; //.+ orderTotal;
//assign value

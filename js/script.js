// Copyright (c) 2022 Brayden MacMillan All rights reserved
//
// Created by: Brayden MacMillan
// Created on: May 2022
// This file contains the JS functions for index.html

"use strict"

function displayCost() {
    // display constants
    // constant tax price
    const HST = 0.13;
    // constant topping price
    const TOPPING_PRICE = 0.50;
    // costs for each combination of pizza size and crust type
    const SMALL_FLATBREAD = 7.79;
    const SMALL_STUFFED = 10.79;
    const MED_FLATBREAD = 14.25;
    const MED_STUFFED = 17.25;
    const LARGE_FLATBREAD = 19.87;
    const LARGE_STUFFED = 22.87;

    //get user input for pizza size and crust type
   let pizzaSize = document.getElementById('size').value;
   let crustType = document.getElementById('crust').value;

  // initializing variable for pizza
   let baseCost = 0;

   //initializing variable for extra side of wine 
  let wineCost = 0;

  // finding the cost of size and type of crust for the pizza before toppings and side of wine
    if ((pizzaSize == "small") && (crustType == "flatbread")) {
      baseCost = SMALL_FLATBREAD;
    }
    else if ((pizzaSize == "small") && (crustType == "stuffed")) {
      baseCost = SMALL_STUFFED;
    }
    else if ((pizzaSize == "medium") && (crustType == "flatbread")) {
      baseCost = MED_FLATBREAD;
    }
    else if ((pizzaSize == "medium") && (crustType == "stuffed")) {
      baseCost = MED_STUFFED;
    }
    else if ((pizzaSize == "large") && (crustType == "flatbread")) {
      baseCost = LARGE_FLATBREAD;
    }
    else if ((pizzaSize == "large") && (crustType == "stuffed")) {
      baseCost = LARGE_STUFFED;
    }
  
  // check all checkboxes to see how many there are, from https://www.techiedelight.com/count-number-check-boxes-javascript/
 
    let numberOfCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');

  let numberOfToppings = numberOfCheckboxes.length

  let toppingCost = numberOfToppings * TOPPING_PRICE

  // if statement to see what radio button was clicked and to find cost of wine
  if(document.getElementById('option-1').checked) {
  //No thank you radio button is clicked
    wineCost = 0;
  }
  else if(document.getElementById('option-2').checked) {
  //Yes please radio button is clicked
    wineCost = 27.00;
}

  // calculate subtotal, tax and total
  let subTotal = baseCost + toppingCost + wineCost
  let tax = subTotal * HST 
  let total = subTotal + tax

// display results back to user
  document.getElementById('display-results').innerHTML = "Your subtotal is " + "$" + subTotal.toFixed(2) + "<br> Your tax amount is " + "$" + tax.toFixed(2) + " <br> Your total is " + "$" + total.toFixed(2) + "<br> Thank you for ordering from us! We hope to see you again soon :)";
}
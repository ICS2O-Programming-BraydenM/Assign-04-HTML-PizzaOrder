// Copyright (c) 2022 Brayden MacMillan All rights reserved
//
// Created by: Brayden MacMillan
// Created on: May 2022
// This file contains the JS functions for index.html

"use strict"

function displayCost() {
    // display constants
    const HST = 0.13;
    const TOPPING_PRICE = 0.50;

    //get user input
   let pizzaSize = document.getElementById('size').value
   let crustType = document.getElemetById('crust').value

  // initializing variable for pizza
   let baseCost = 0

  // finding the cost and size of the pizza size before toppings and side of wine
  if ((pizzaSize == "small") && (crustType == "flatbread")) {
    baseCost = 7.79;
  }
  else if ((pizzaSize == "small") && (crustType == "stuffed")) {
    baseCost = 10.79;
  }
  else if ((pizzaSize == "medium") && (crustType == "flatbread")) {
    baseCost = 14.25;
  }
  else if ((pizzaSize == "medium") && (crustType == "stuffed")) {
    baseCost = 17.25;
  }
  else if ((pizzaSize == "large") && (crustType == "flatbread")) {
    baseCost = 19.87;
  }
  else if ((pizzaSize == "large") && (crustType == "stuffed")) {
    baseCost = 22.87;
  }

  // check all check boxes to see how many there are, from https://www.techiedelight.com/count-number-check-boxes-javascript/
 
    let numberOfCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');

  let numberOfToppings = numberOfCheckboxes.length

  let toppingCost = numberOfToppings * TOPPING_PRICE

  //initializing variables
  let wineCost = 0;
    
  // if statement to see what radio button was clicked and to find cost of wine
  if(document.getElementById('option-1').checked) {
  //No thank you radio button is clicked
    wineCost = 0;
  }else if(document.getElementById('option-2').checked) {
  //Yes please radio button is clicked
    wineCost = 27;
}

  // calculate subtotal
  let subTotal = baseCost + toppingCost + wineCost
  let tax = subTotal * HST 
  let total = subTotal + tax

  // display results back to user
  document.getElementById('display-results').innerHTMl = subTotal
}
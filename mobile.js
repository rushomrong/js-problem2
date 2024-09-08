// let's find the total quantity price value of the product
function mobileQuantity(samsung, iphone, oppo, techno) {
  // declare the price of the items
  const perSamsungPrice = 25000;
  const perIphonePrice = 150000;
  const perOppoPrice = 30000;
  const perTechnoPrice = 22000;

  // now multiply the value with the quantity of the items
  const totalSamsungQty = samsung * perSamsungPrice;
  const totalIphoneQty = iphone * perIphonePrice;
  const totalOppoQty = oppo * perOppoPrice;
  const totalTechnoQty = techno * perTechnoPrice;

  // now let's calculate the total price value of the items
  const totalQuantity =
    perSamsungPrice + perIphonePrice + perOppoPrice + perTechnoPrice;

  //return the price value
  return totalQuantity;
}

//call the function to set the per items quantity you need
const quantity = mobileQuantity(2, 1, 0, 1); // set the value qty for 4 items using comma separation
console.log("Total product quantity purchase price is: ", quantity + "tk.");

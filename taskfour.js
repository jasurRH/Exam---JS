


function maxPrice(array) {
  let maxPriceSum = 0;
  let maxPriceName = '';
  for (let i = 0; i < array.length; i++) {
    if (array[i].price > maxPriceSum) {
      maxPriceSum = array[i].price;
      maxPriceName = array[i].name;
    }
  }
  return maxPriceName;
}

console.log(maxPrice([
  {name:"Ali",price:900},
  {name:"Umid",price:300},
  {name:"Sardor",price:300},
]));
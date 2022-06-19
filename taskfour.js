function maxPrice(arr){
  arr.sort(function (x, y) {
      return y.price-x.price ;
    });
    return arr[0].name
}

console.log(maxPrice([
  {name:"Ali",price:900},
  {name:"Umid",price:300},
  {name:"Sardor",price:300},
]));

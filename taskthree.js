var array = [1 ,2 ,3,4,5,-6,-7,1];

function numbers(addition){
  var count = 0;
  for(var i=0; i < addition.length; i++){
    if(addition[i] >= 0){
      count += addition[i];
    }
  }
  return count;
}
console.log(numbers(array));


var numbers = [1, 3, 0, 5, 0, 7, 0];
var x = '';
var y = '';
function zero(array){
  for(var i = 0; i < array.length; i++){
    if(array[i] == 0){
      y = y + array[i];
    }
    
    else {
      x = x + array[i];
    }
  }
  return x + y;
}



console.log(zero(numbers));



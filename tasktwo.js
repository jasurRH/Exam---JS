var info = [true,false,true,false,false,false];

function countTrue(array){
  var count = 0;
  for(var i = 0; i < array.length; i++){
    if(array[i] == true){
      count = count + 1;
    }
  }
  return count;
};

console.log(countTrue(info));



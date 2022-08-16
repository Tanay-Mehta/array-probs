function maxIndex(array){
  let i;
  let max = 0;
  let index = 0;
  for(i=0;i<array.length;i++){
    if (max<array[i]){
      max = array[i];
      index = i;
    }
  }
  return index;
}
var arr = [1,2,3,7,5,6];
console.log(maxIndex(arr));

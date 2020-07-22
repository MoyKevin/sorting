// function swap(array,index){
//   const element = array[index];
//   array[index]=array[index+1];
//   array[index+1] = element;
// }
function swap(array,index){
  const element = array[index];
  array[index]=array[index+1];
  array[index+1] = element;
}

function bubbleSort(array) {
  /* your code here */
  // let sorted = false;
  // while(!sorted){
  //   sorted = true;
  //   count = 0;
  //   for(let i = 0;i<array.length-count;i++){

  //   }
  //   count++;
  // }

  for(let i = 0;i<array.length;i++){
    for(let j =0;j<array.length-1;j++){
      if(array[j]>array[j+1]){
        swap(array,j);
      }
    }
  }
  return array;
}

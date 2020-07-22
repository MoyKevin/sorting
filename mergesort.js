function split(wholeArray) {

  /* your code here to define the firstHalf and secondHalf arrays */
  const splitIdx = Math.round(wholeArray.length/2);
  const firstHalf = wholeArray.slice(0,splitIdx);
  const secondHalf = wholeArray.slice(splitIdx);

  return [firstHalf, secondHalf];
}

function merge(sorted1,sorted2){
  const answerArray = [];
  let idx1 =0;
  let idx2 =0;
  while(answerArray.length < (sorted1.length+sorted2.length)){
    if(sorted1[idx1]<sorted2[idx2]||sorted2[idx2]===undefined){
      answerArray.push(sorted1[idx1])
      idx1++;
    } else {
      answerArray.push(sorted2[idx2])
      idx2++;
    }
  }
  return answerArray;
}

function mergeSort(array) {
  /* your code here */
  if(array.length===1) return array;
  const [front,end] = split(array);
  return merge(mergeSort(front),mergeSort(end));
}

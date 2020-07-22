describe('Split Array function', function() {
  const testArray = [1,2,3,4,5,6];
  it('is able to split an array into two halves', function() {
    // your code here
    expect(split(testArray)).toEqual([[1,2,3],[4,5,6]]);
  });
});
describe('Merge function', function(){
  const sorted2 = [1,3,5,7];
  const sorted1 = [2,4,6,8];
  it('is able to merge two sorted arrays into one sorted array', function(){
    // test the merging algorithm
    expect(merge(sorted1,sorted2)).toEqual([1,2,3,4,5,6,7,8]);
  });
});
describe('MergeSort', function(){
  const unsorted = [6,1,5,2,4,3];
  it('is able sort an unsorted array', function(){
    // test the merging algorithm
    expect(mergeSort(unsorted)).toEqual([1,2,3,4,5,6])
  });
});

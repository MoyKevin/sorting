describe('Bubble Sort', function(){
  // beforeAll(function () {
  //   spyOn(bubbleSort, 'swap').and.callThrough(); // replace existing `tootsiepop['lick']` method
  // });

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('handles an empty array', function(){
    expect( bubbleSort([1]) ).toEqual( [1] );
  });
  it('handles an empty array', function(){
    expect( bubbleSort([3,4,5,2,1]) ).toEqual( [1,2,3,4,5] );
  });
});

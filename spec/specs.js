describe('findAndReplace', function() {
  it('accepts a string and two words and returns the string with the word apple replaced by the predefined word pumpkin', function() {
      expect(findAndReplace("apple", "pumpkin", "Let's have some apple pie.")).to.equal("Let's have some pumpkin pie.");
  });

  it('accepts a string and two words and returns the string with the word replaced by the second word', function(){
    expect(findAndReplace("pumpkin", "apple", "Let's have some pumpkin pie.")).to.equal("Let's have some apple pie.");
  });


  it('accepts a string and two words and returns the string with all instances of the word replaced by the second word', function(){
    expect(findAndReplace("pumpkin", "apple", "Hey pumpkin let's have some pumpkin pie.")).to.equal("Hey apple let's have some apple pie.");
  });

});

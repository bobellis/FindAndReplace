var findAndReplace = function(textToReplace, replacementText, message){
  var wordArray = message.split(" ")
  for(var i = 0; i <= wordArray.length; i++){
    if(wordArray[i] === "apple"){
      wordArray[i] = "pumpkin";
    };
  }
    return wordArray.join(" ")
};

module.exports = {
  words: function (str){
    var result = {};
    var count = 0;
    var temp_i = 0;
    
    arr_of_words = str.replace(/[\r\n\s\t]/g, " ").replace("  ", " ").split(" ");
    //console.log(arr_of_words);
    
    for(var i=0; i<arr_of_words.length; i++){
      var checkword = arr_of_words[i];
      count = 0;
      for(var j=0; j<arr_of_words.length; j++){
        if(checkword === arr_of_words[j]){
          count++;
        }
      }
      result[checkword] = count;
    }
    return result;
  }

}
var words = ["ground", "control", "to", "major", "tom"];

var x = map(words, function(word) {
  return word.length;
});

console.log(x);

var y = map(words, function(word) {
  return word.toUpperCase();
});

console.log(y);


var z = map(words, function(word) {
  return word.split('').reverse().join('');
});

console.log(z);

function map(array, mapFunction){
  var mapped = [];
  for(var element in array){
    mapped.push(mapFunction(array[element]));
  }
  return mapped;
}
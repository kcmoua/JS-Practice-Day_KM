var animals = ["dog","cat","bird","shark"];
function capitalize(arr){
    var x = arr.map(function(array){
        return array.toUpperCase();
    })
    return x;
}
console.log(capitalize(animals));
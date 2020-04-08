var pizzaToppings = ["cheese", "pepperoni", "italian sausage", "pineapple", "ham"];
function pizza(arr){
    return "A delicious pizza with " + arr.join(" and ") + ".";
}
console.log(pizza(pizzaToppings));
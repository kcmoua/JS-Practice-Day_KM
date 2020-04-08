function sandwichCalculator(slicesOfBread, slicesOfCheese){
    
    var sandwiches = Math.floor(slicesOfBread / 2);
    if((slicesOfBread > 1) && (slicesOfCheese > 0) && (slicesOfCheese < sandwiches)){
        sandwiches = slicesOfCheese;
        console.log(sandwiches);
        return sandwiches;
    }else if((slicesofCheese >= sandwiches) && (slicesOfBread > 1)){
        console.log(sandwiches);
        return sandwiches;
    }else if((slicesOfCheese = 0) || (slicesOfBread < 2)){
        console.log("No sandwiches for you");
        return 0;
    }
    }
console.log(sandwichCalculator(18, 5));
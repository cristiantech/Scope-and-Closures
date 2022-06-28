function fruits() {
    if (true) {
        var fruitOne = "Apple";
        let fruitTwo = "kwi" // block scope
        const fruitThree = "banana" // block
        console.log(fruitTwo);
        console.log(fruitThree);
    }
    console.log(fruitOne);
  
}
fruits()
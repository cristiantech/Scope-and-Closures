// function greeting() {
//     let useName = "cristian";
//     function displayUserName() {
//         return `Hello ${useName}!`;
//     }
//     return displayUserName
// }

// const g = greeting();
// console.log(g);
// console.log(g());

// function moneyBox(coins) {
//     let saveCoins = 0;
//     saveCoins += coins;
//     console.log(`my money box ${saveCoins}`);
// }

// moneyBox(5);
// moneyBox(5);

function myMoneyBox() {
    let saveCoins = 0;
    function counCoint(coins){
        saveCoins += coins
        console.log(`my mony saved is ${saveCoins}`);
    }
    return counCoint
}
const money = myMoneyBox();
money(5);
money(5);
money(5);
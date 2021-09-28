const initialPrice = document.querySelector(".initial-price");
const currentPrice = document.querySelector(".current-price");
const quantity = document.querySelector(".quantity");
const checkButton = document.querySelector(".btn-check");
const output = document.querySelector(".result");

checkButton.addEventListener("click", checkStonks);

function checkStonks() {
    var initial = Number(initialPrice.value);
    var curr = Number(currentPrice.value);
    var qty = Number(quantity.value);
    if (initial && curr && qty) {
        if (initial > 0 && curr > 0 && qty > 0) {
            checkProfitOrLoss(initial, curr, qty);
        } else {
            output.innerText = "Invalid values";
        }
    } else {
        output.innerText = "Please Enter all the values";
    }
}

function checkProfitOrLoss(initial, curr, qty) {

    if (initial > curr) {
        var loss = (initial - curr) * qty;
        var lossPercent = (loss / (initial * qty)) * 100;
        lossPercent = lossPercent.toFixed(2);
        output.innerText = "OOPS! That's a loss of " + loss + " bucks, your stock is down by " + lossPercent + "%";

    } else if (curr > initial) {
        var profit = (curr - initial) * qty;
        var profitPercent = (profit / (initial * qty)) * 100;
        profitPercent = profitPercent.toFixed(2);
        output.innerText = "YAY! That's a profit of " + profit + " bucks, your stock is up by " + profitPercent + "%";

    } else {
        output.innerText = "Neither Profit Nor Loss";
    }

}
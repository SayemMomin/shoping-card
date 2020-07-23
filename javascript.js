
//pluse button
function updateByPlus(plusId, inputId, priceId){
    var currentPrice = parseFloat(document.getElementById(priceId).innerText)
    const plusBtn = document.getElementById(plusId);
    plusBtn.addEventListener('click', function(){
        var input = parseFloat(document.getElementById(inputId));
        if(input>=0){
            input++;
        }
        document.getElementById(inputId).value = input;
        document.getElementById(priceId).innerText = currentPrice * input;
        summary();
    })
}

// Minus button

function updateByMinus(minusId, inputId, priceId){
    var currentPrice = parseFloat(document.getElementById(priceId).innerText)
    const minusBtn = document.getElementById(minusId);
    minusBtn.addEventListener('click', function(){
        var input = parseFloat(document.getElementById(inputId));
        if(input>0){
            input--;
        }
        document.getElementById(inputId).value = input;
        document.getElementById(priceId).innerText = currentPrice * input;
        summary();
    })
}

// function create for both

function summary(){
    const phonePrice = parseFloat(document.getElementById('phn-price').innerText);
    const casePrice = parseFloat(document.getElementById('case-price').innerText);

    const tax = parseFloat(document.getElementById('tax-price').innerText);
    document.getElementById('sub-total').innerText = phonePrice + casePrice;
    document.getElementById('total').innerText = phonePrice + casePrice + tax;

    
}

// call function

updateByPlus("phn-plus", "phn-input", "phn-price");
updateByMinus("phn-minus","phn-input", "phn-price");
updateByPlus("case-plus", "case-input", "case-price");
updateByMinus("case-minus", "case-input", "case-price");
































// var removeCartBtn = document.getElementsByClassName('remove-item');
// console.log(removeCartBtn)
// for (let i = 0; i < removeCartBtn.length; i++) {
//     const   button = removeCartBtn[i];;
//     button.addEventListener('click', function(){
//         var buttonClicked = event.target

//     })
    
// }

// function updateCartTotal(){
//     var cartItem = document.getElementsByClassName
// }



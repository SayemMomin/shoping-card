// // Phone Plus button handler

// let plusBtn = document.getElementById("phn-plus");
// plusBtn.addEventListener("click", function(){
//      let plusAmount = document.getElementById("phn-input").value;
//      let inputNumber = parseFloat(plusAmount);
//     inputNumber++
// //     if(inputNumber >= 0){
// //         inputNumber++;
// //     }
//      //let inputValue = inputNumber + 1;

//     document.getElementById("phn-input").value = inputNumber;
     
//      let currentPhonePrice = document.getElementById("phn-price").innerText;
//      //let phonePrice = parseFloat(currentPhonePrice);
//      let totalPhonePrice = inputNumber * 1200;

//      document.getElementById("phn-price").innerText = totalPhonePrice;
//      //document.getElementById("phn-minus").disabled = false;
//      summary()
// })


          plusBtnFact("phn-plus", "phn-input", "phn-price")
   
function plusBtnFact(phonPlus, inputPlus, pricePlus){
     let plusBtn = document.getElementById(phonPlus);
     plusBtn.addEventListener("click", function(){
          let plusAmount = document.getElementById(inputPlus).value;
     let inputNumber = parseFloat(plusAmount);
          inputNumber++

    document.getElementById(inputPlus).value = inputNumber;
     
     let currentPhonePrice = document.getElementById(pricePlus).innerText;
     let phonePrice = parseFloat(currentPhonePrice);
     let totalPhonePrice = inputNumber * 1200;

     document.getElementById(pricePlus).innerText = totalPhonePrice;
     summary()

     })
}

// Phone Minus button handler

let minusBtn = document.getElementById("phn-minus");
minusBtn.addEventListener("click", function(){
     let minusAmount = document.getElementById("phn-input").value;
     let inputNumber = parseFloat(minusAmount);
     inputNumber--
     // if(inputNumber > 0){
     //     inputNumber--;
     // }
     document.getElementById("phn-input").value = inputNumber;
     
     let currentPhonePrice = document.getElementById("phn-price").innerText;
     //let phonePrice = parseFloat(currentPhonePrice);
     let totalPhonePrice = inputNumber * 1200;

     document.getElementById("phn-price").innerText = totalPhonePrice;
     summary()
     
})


// // case Plus button handler

let casePlusBtn = document.getElementById("case-plus");
casePlusBtn.addEventListener("click", function(){
     let plusAmount = document.getElementById("case-input").value;
     let inputNumber = parseFloat(plusAmount);
    inputNumber++

    document.getElementById("case-input").value = inputNumber;
     
     let currentCasePrice = document.getElementById("case-price").innerText;
     //let phonePrice = parseFloat(currentCasePrice);
     let totalCasePrice = inputNumber * 50;

     document.getElementById("case-price").innerText = totalCasePrice;
     document.getElementById("case-minus").disabled = false;
     summary()
})

// Case Minus button handler

let caseMinusBtn = document.getElementById("case-minus");
caseMinusBtn.addEventListener("click", function(){
     let minusAmount = document.getElementById("case-input").value;
     let inputNumber = parseFloat(minusAmount);
     inputNumber--
    
     document.getElementById("case-input").value = inputNumber;
     
     let currentCasePrice = document.getElementById("case-price").innerText;
     //let phonePrice = parseFloat(currentCasePrice);
     let totalCasePrice = inputNumber * 50;

     document.getElementById("case-price").innerText = totalCasePrice;

     summary()
})

// Subtital, Tax, Total Amount handler

function summary(){
     const phonePrice = parseFloat(document.getElementById('phn-price').innerText);
     const casePrice = parseFloat(document.getElementById('case-price').innerText);
 
     let subTotal = phonePrice + casePrice;
     document.getElementById('sub-total').innerText = subTotal;

     const tax = parseFloat(document.getElementById('tax-price').innerText);
     
     let totalTax = subTotal/100 * 7;
     document.getElementById('tax-price').innerText = totalTax;

     let total = phonePrice + casePrice + totalTax;
     document.getElementById('total').innerText = total;
     return Total;
 }
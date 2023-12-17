console.log("hi there");
let btn = document.getElementById("submit-btn");
btn.addEventListener("click", (e)=>{
e.preventDefault();
})

var cleave_cnumber = new Cleave('.card-number', {
    creditCard: true,
    onCreditCardTypeChanged: function (type) {
        // update UI ...
    }
});
var cleave_cdate = new Cleave('.expiry-date', {
    date: true,
    delimiter: '-',
    datePattern: ['d' , 'm' , "Y"],
    numeralIntegerScale: 8
});
var cleave_cvv = new Cleave('.cvv-number-date', {
    numeral: true,
    numeralIntegerScale: 3
});
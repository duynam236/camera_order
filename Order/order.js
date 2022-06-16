var table = document.getElementById('displayTable');
var rowCount = table.rows.length;

//Function quantity--
function minusOne() {
    var str = document.querySelector('.value1').textContent;
    var quantity = Number(str);
    if (quantity > 0) {
        quantity--;
    }
    document.querySelector('.value1').textContent = quantity;
    setTable();
}

//Function quantity++
function plusOne() {
    var str = document.querySelector('.value1').textContent;
    var quantity = Number(str);
    quantity++;
    document.querySelector('.value1').textContent = quantity;
    setTable();
}

function removeOne(e) {
    let product = e.parentNode.parentNode.parentNode;
    product.removeChild();
    setTable();
}

function minusTwo() {
    var str = document.querySelector('.value2').textContent;
    var quantity = Number(str);
    if (quantity > 0) {
        quantity--;
    }
    document.querySelector('.value2').textContent = quantity;
    setTable();
}

//Function quantity++
function plusTwo() {
    var str = document.querySelector('.value2').textContent;
    var quantity = Number(str);
    quantity++;
    document.querySelector('.value2').textContent = quantity;
    setTable();
}

function minusThree() {
    var str = document.querySelector('.value3').textContent;
    var quantity = Number(str);
    if (quantity > 0) {
        quantity--;
    }
    document.querySelector('.value3').textContent = quantity;
    setTable();
}

//Function quantity++
function plusThree() {
    var str = document.querySelector('.value3').textContent;
    var quantity = Number(str);
    quantity++;
    document.querySelector('.value3').textContent = quantity;
    setTable();
}

//Each row of table
function setTable() {
    
    
    var sum = [0, 0, 0];    
    for (var i = 1; i < rowCount - 3; i++) {
        var cells = table.rows.item(i).cells;
        var cellCount = cells.length;
    
        //Get price of row[i]
        var price = cells.item(3).textContent;
        strPrice = price.trim();
        strPrice = strPrice.slice(1);
        numberPrice = Number(strPrice);
    
        //Get quantiry of row[i]
        var quantity = cells.item(2).textContent;
        numberQuantity = Number(quantity);
    
        //Set tax of row[i]
        var tax = numberQuantity * numberPrice * 0.125;
        tax = Math.floor(tax);
        cells.item(5).innerHTML = '$' + tax + '.00';
    
        //Get discount of row[i]
        var discount = cells.item(4).textContent;
        strDiscount = discount.trim();
        strDiscount = strDiscount.slice(1);
        numberDiscount = Number(strDiscount);
    
        //Set total of row[i];
        var total;
        //Function check isNaN
        var isNaN = (maybeNaN) => maybeNaN!=maybeNaN;
        if (!isNaN(numberDiscount)) {
            total = numberQuantity * numberPrice - numberDiscount + tax;
        } else {
            total = numberQuantity * numberPrice + tax;
        }
        if (total <=0) {
            total = 0;
        }
        cells.item(6).innerHTML = '$' + total + '.00';
    
        sum[0] += total;
        sum[2] += tax;
        if (!isNaN(numberDiscount)) {
            sum[1] += numberDiscount;
        }
    }
    
    for (var i = 4; i < rowCount; i++) {
        var cells = table.rows.item(i).cells;
        var cellCount = cells.length;
    
        cells.item(1).innerHTML = '$' + sum[i - 4] + '.00';
    }
}


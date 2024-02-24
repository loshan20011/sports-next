let editBtn = document.getElementsByClassName('edit1');
let editForm = document.getElementsByClassName('edit-form')[0];
let editFormSubmit = document.getElementById('submit-edit-btn');

if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready)
}
else {
    ready();
}

function ready(){
    // opens the edit form 
    for (let i = 0; i < editBtn.length; i++) {
        var editButton = editBtn[i];
        editButton.onclick = () => {
            editForm.classList.add("active");
            return false;
        }
    }

    // close and submit edit form
    editFormSubmit.onclick = () => {
    editForm.classList.remove("active");
    return false;
    }
    updateTotal();

    var emailID = document.getElementById("email-id");
    emailID.addEventListener('change', emailIDcheck);       

    var fname = document.getElementsByClassName('name1')[0];
    fname.addEventListener('change', checkString);

    var lname = document.getElementsByClassName('name2')[0];
    lname.addEventListener('change', checkString);

    var expiryM = document.getElementById('expiry-m');
    expiryM.addEventListener('change', validateMonth);

    var expiryY = document.getElementById('expiry-y');
    expiryY.addEventListener('change', validateYear);

    var code = document.getElementById('cvn');
    code.addEventListener('change', validateCode);

    var holder = document.getElementById('holder');
    holder.addEventListener('change', validateCardHolder);

    var cardNumber = document.getElementById('card-no');
    cardNumber.addEventListener('change', validateCardNumber);

    var cardNumber = document.getElementById('mobile-no');
    cardNumber.addEventListener('change', validateMobileNumber);

    var couponCode = document.getElementById('coupon-enter');
    couponCode.addEventListener('click', addDiscount);

    var address1 = document.getElementById('address1');
    address1.addEventListener('change', updateAddress1);

    var address2 = document.getElementById('address2');
    address2.addEventListener('change', updateAddress2);

    var address3 = document.getElementById('address3');
    address3.addEventListener('change', updateAddress3);

    var proceedBtn = document.getElementById('proceed-btn');
    proceedBtn.addEventListener('click', buyProducts);
}

function emailIDcheck(event) {
    var values = event.target;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.value)){
        values.style.border = '1.8px solid green';
        values.style.color = 'black'
        document.getElementsByClassName('emailCondition')[0].classList.remove('active1');
    } else {
        values.style.border = '1.8px solid red';
        values.style.color = 'red'
        document.getElementsByClassName('emailCondition')[0].classList.add('active1');
    }
}

function checkString(event){
    var name = event.target;
    if (isNaN(name.value) && /^[a-zA-Z]*$/.test(name.value)){
        name.style.border = '1.8px solid green';
        name.style.color = 'black'
        document.getElementsByClassName('nameCondition')[0].classList.remove('active1');
    } else {
        name.style.border = '1.8px solid red';
        name.style.color = 'red'
        document.getElementsByClassName('nameCondition')[0].classList.add('active1');
    }
}

function validateMonth(event){
    var month = event.target;
    if (1 <= month.value && month.value <= 12){
        month.style.border = '1.8px solid green';
        document.getElementById('calenderM').innerText = month.value;
        month.style.color = 'black'
        return;
    } else {
        month.style.border = '1.8px solid red';
        document.getElementById('calenderM').innerText = 'MM';
        month.style.color = 'red'
    }
}

function validateYear(event){
    var year = event.target;
    if (year.value >= 23 && year.value <= 99){
        year.style.border = '1.8px solid green';
        document.getElementById('calenderY').innerText = year.value;
        year.style.color = 'black'
        document.getElementsByClassName('yearCondition')[0].classList.remove('active2');
    } else {
        year.style.color = 'red'
        document.getElementById('calenderY').innerText = 'YY *';
        year.style.border = '1.8px solid red';
        document.getElementsByClassName('yearCondition')[0].classList.add('active2');
    }
}

function validateCode(event){
    var code = event.target;
    if (1000 <= code.value && code.value <= 9999){
        code.style.border = '1.8px solid green';
        document.getElementById('code').innerText = code.value;
        code.style.color = 'black'
        document.getElementsByClassName('codeCondition')[0].classList.remove('active2');
    } else {
        code.style.color = 'red'
        code.style.border = '1.8px solid red';
        document.getElementById('code').innerText = 'Code';
        document.getElementsByClassName('codeCondition')[0].classList.add('active2');
    }
}

function validateCardHolder(event){
    var holder = event.target;
    for (var i = 0; i < holder.value.length; i++){
        if (isNaN(holder.value[i])){
            holder.style.border = '1.8px solid green';
            document.getElementById('card-holder').innerText = holder.value;
            holder.style.color = 'black'
            document.getElementsByClassName('holderCondition')[0].classList.remove('active2');
        } else {
            holder.style.color = 'red'
            holder.style.border = '1.8px solid red';
            holder.placeholder = 'Ex: John';
            document.getElementById('card-holder').innerText = 'Card Holder *';
            document.getElementsByClassName('holderCondition')[0].classList.add('active2');
        }
    }
}

function validateCardNumber(event){
    var card = event.target;
    var cardNumber = card.value.replaceAll("-","");         
    if ((!isNaN(cardNumber)) && (1000000000000000 <= cardNumber && cardNumber <= 9999999999999999)){
        card.style.border = '1.8px solid green';
        document.getElementById('card-number').innerText = cardNumber;
        card.style.color = 'black';
        document.getElementsByClassName('cardCondition')[0].classList.remove('active2');
    } else {
        card.style.color = 'red'
        card.style.border = '1.8px solid red';
        document.getElementById('card-number').innerText = 'Card Number *';
        document.getElementsByClassName('cardCondition')[0].classList.add('active2');
    }
}

function validateMobileNumber(event){
    var mobileNumber = event.target;
    if ((!isNaN(mobileNumber.value)) && (100000000 <= mobileNumber.value && mobileNumber.value <= 9999999999)){
        mobileNumber.style.border = '1.8px solid green';
        mobileNumber.style.color = 'black';
        document.getElementsByClassName('mobileCondition')[0].classList.remove('active2');
    } else {
        mobileNumber.style.color = 'red';
        mobileNumber.style.border = '1.8px solid red';
        document.getElementsByClassName('mobileCondition')[0].classList.add('active2');
    }
}

function addDiscount(event){
    var discount = document.getElementById('coupon-code').value;
    var discountElement = document.getElementById('discountAmount');
    var totalElement = document.getElementById('total');

    if (discount == 'viva100'){
        discountElement.innerText = '-$ 10';
        var couponCode = document.getElementById('coupon-enter');
        couponCode.classList.add('discountBtnHide');
    } 
    else {
        if (discount === '') {
            alert ('No code entered !!');
        } else {
        alert('Wrong coupon code !!');
        }
        discountElement.innerText = '$ 0';
    }
    var discountValue = parseFloat(discountElement.innerText.replace("$", "").replace('-',""));

    var total = parseFloat(totalElement.innerText.replace("$", ""));
    total -= discountValue;
    totalElement.innerText = '$ '+total;
}

function updateAddress3(event){
    var addressText = event.target;
    if (addressText.value === 'none' || addressText.value === '') {
        addressText.style.border = '1.8px solid red';
    } else {
        addressText.style.border = '1.8px solid green';
    }
    updateAddress();
}

function updateAddress2(event){
    var address2 = event.target;
    var address1 = document.getElementById('address1');
    if (address1.value === '') {
        address1.style.border = '1.8px solid red';
        address1.placeholder = 'Enter address here (Ex: No.123, main road, colombo.)';
        address1.classList.add('placeHolderColor');
    } else {
        address2.style.border = '1.8px solid green';
    }
    updateAddress();
}

function updateAddress1(event){
    var address1 = event.target;
    if (address1.value == '') {
        address1.style.border = '1.8px solid red'
        address1.placeholder = 'Enter address here (Ex: No.123, main road, colombo.)';
        address1.classList.add('placeHolderColor');
    } else {
        address1.style.border = '1.8px solid green';
    }
    updateAddress();
}

function updateAddress(addressText){
    var address1 = document.getElementById('address1').value;
    var address2 = document.getElementById('address2').value;
    var address3 = document.getElementById('address3').value;

    if (address3 === 'none' || address3 === '') {
        address3 = ''; address1 = ''; address2 = '';
        document.getElementById('address3').style.border = '1.8px  solid  red';
    } else {
        if (address1 === '') {
            address2 = ''; address3 = '';
            document.getElementById('address1').style.border = '1.8px  solid  red';
        }
    }

    var address = address1 + ' ' + address2 + ' ' + address3;

    var addressArea = document.getElementsByClassName('address')[0];
    if (address === '  ') {
        addressArea.innerText = 'Address *';
    } else {
        addressArea.innerText = address;
    }
}

function updateTotal(){
    // retrieving the total from shop
    var totalText = document.getElementById('total').innerText;
    totalText = localStorage.getItem('total');

    var total = parseFloat(totalText.replace("$", ""));

    if (total > 100){
        var shippingElement = document.getElementById('shipping-amount').innerText;
        var shipping = parseFloat(shippingElement.replace("$",""));
        total -= shipping;
        document.getElementById('shipping-amount').innerText = '-$ 20';
    }
    document.getElementById('total').innerText = '$ '+total;
}

function buyProducts(event){
    var emailID = document.getElementById('email-id').value;
    var fname = document.getElementsByClassName('name1')[0].value;
    var lname = document.getElementsByClassName('name2')[0].value;
    var holder = document.getElementById('card-holder').innerText;
    var cardNumber = document.getElementById('card-number').innerText;
    var expiryM = document.getElementById('calenderM').innerText;
    var expiryY = document.getElementById('calenderY').innerText;
    var code = document.getElementById('code').innerText;
    var address = document.getElementsByClassName('address')[0].innerText;
    var conditions = document.getElementById('conditions');

    if (conditions.checked === false){
        document.getElementById('term').style.color = 'red';        
    } else {
        document.getElementById('term').style.color = 'black';
    }
    if (holder === 'Card Holder *' || cardNumber === 'Card Number *' || expiryM === 'MM' || expiryY === 'YY *' || 
    code === 'Code *' || address === 'Address *' || !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailID))
    || !isNaN(fname) || !(/^[a-zA-Z]*$/.test(fname)) || !(/^[a-zA-Z]*$/.test(lname)) || !isNaN(lname) || conditions.checked === false){
        alert('Fill Required Fields !');
    } else {
        alert('Successfully purchased. Thank you come again.');
        window.location.assign('cw-home.html');
    }
}
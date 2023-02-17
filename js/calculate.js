function getFieldElementById(elementId){
    const getElementById = document.getElementById(elementId);
    const getElementString = getElementById.value;
    const getElement = parseFloat(getElementString);
    return getElement;
}

function setTextElementById(elementId, value){
    const getElementById = document.getElementById(elementId);
    getElementById.innerText = value;
}

document.getElementById('btn-calculate').addEventListener('click', function(){
    const foodCost = getFieldElementById('food-cost-field');
    const rentCost = getFieldElementById('rent-cost-field');
    const clothesCost = getFieldElementById('clothes-cost-field');
    const totalCost = foodCost + rentCost + clothesCost;
    
    
    const totalExpense = setTextElementById('total-expenses', totalCost);
    
    const totalIncome = getFieldElementById('income-field');

    
    const remainingBalanceTotal = totalIncome - totalCost;
    
    const balanceTotal = setTextElementById('balance-total', remainingBalanceTotal);
    if(foodCost < 0 || rentCost < 0 || clothesCost < 0){
        alert('Please enter valid cost')
        document.getElementById('total-expenses').innerText = '00';
        document.getElementById('balance-total').innerText = '00';
    }

    if(totalCost > totalIncome){
        alert('eto taka khoroch korte parben na vai');
        document.getElementById('total-expenses').innerText = '00';
        document.getElementById('balance-total').innerText = '00';
    }
})

document.getElementById('btn-save').addEventListener('click', function(){
    const savingPercentageElement = document.getElementById('saving-percentage');
    const savingPercentageString = savingPercentageElement.value;
    const savingPercentage = parseFloat(savingPercentageString);

    const totalIncome = getFieldElementById('income-field');

    const savingAmountValue = totalIncome * savingPercentage/100;
    const savingAmount = setTextElementById('saving-amount', savingAmountValue);

    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotal = balanceTotalElement.innerText;
    

    const remainingBalanceValue = balanceTotal - savingAmountValue;
    
    const remainingBalance = setTextElementById('remaining-balance', remainingBalanceValue);
    if(savingAmountValue > balanceTotal){
        alert('eto taka save korte parben na vai');
        document.getElementById('saving-amount').innerText = '00';
        document.getElementById('remaining-balance').innerText = '00';
    }
})
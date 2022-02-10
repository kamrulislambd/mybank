document.getElementById('deposit-btn').addEventListener('click', function(){
    const inputField = document.getElementById('input-field');
    const depositText = inputField.value;
    const newDepositAmount = parseFloat(depositText);

    const depositAmount = document.getElementById('deposit-amount');
    const depositAmountText = depositAmount.innerText;
    const previousDepositAmount = parseFloat(depositAmountText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositAmount.innerText = newDepositTotal;

    inputField.value = '';

    //Total Balance Section

    const totalBalance = document.getElementById('total-balance');
    const totalBalanceText = totalBalance.innerText;
    const newTotalBalance = parseFloat(totalBalanceText);

    const totalDepositBalance = newTotalBalance + newDepositAmount;
    totalBalance.innerText = totalDepositBalance;
})

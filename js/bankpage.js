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
});

//withdraw balance
document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawValue = document.getElementById('withdraw-amount').value;
    const withdrawTotalAmount = parseFloat(withdrawValue);
    
    //withdraw balance
    const withdrawBalance = document.getElementById('withdraw-balance');
    const withdrawTotalText = withdrawBalance.innerText;
    const withdrawAmount = parseFloat(withdrawTotalText);
    const newTotalWithdraw = withdrawAmount + withdrawTotalAmount;
    
    withdrawBalance.innerText = newTotalWithdraw;
    document.getElementById('withdraw-amount').value = '';

    //Withdraw Total Balance Update

    const totalWithdrawBalance = document.getElementById('total-balance').innerText;
    const totalWithdrawTextBalance = parseFloat(totalWithdrawBalance);
    const newTotalWithdrawAmount = totalWithdrawTextBalance - withdrawTotalAmount;

    document.getElementById('total-balance').innerText = newTotalWithdrawAmount;

})

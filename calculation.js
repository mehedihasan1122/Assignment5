document.getElementById('button-calculate').addEventListener('click', function() {
    const perPlayerInput = document.getElementById('per-player');
    const perPlayerString = perPlayerInput.innerText;
    const perPlayerAmount = parseInt(perPlayerString);


    const list = document.querySelectorAll('#player-list li');

    const totalPlayerNumber = list.length;

    const playerAmount = perPlayerAmount * totalPlayerNumber;



    const expense = document.getElementById('player-expense');
    const expenseString = expense.innerText;
    const totalExpense = parseInt(expenseString);

    expense.innerText = playerAmount;




});




document.getElementById('final-calculation').addEventListener('click', function() {

    const managerPayment = document.getElementById('manager-payment');
    const managerPaymentString = managerPayment.value;
    const managerTotalAmount = parseInt(managerPaymentString);


    const coachPayment = document.getElementById('coach-payment');
    const coachPaymentString = coachPayment.value;
    const coachTotalAmount = parseInt(coachPaymentString);


    const playerAmount = document.getElementById('player-expense');
    const playerAmountString = playerAmount.innerText;
    const playerAmountTotal = parseInt(playerAmountString);






    const finalAmount = document.getElementById('final-amount');
    const finalAmountString = finalAmount.innerText;
    const finalAmountPlace = parseInt(finalAmountString);










    const totalPayment = managerTotalAmount + coachTotalAmount + playerAmountTotal;

    finalAmount.innerText = totalPayment;














})
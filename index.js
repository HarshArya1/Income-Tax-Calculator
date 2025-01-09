const form = document.getElementById("tax-form");

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const income = document.getElementById("income").value;
    const monthlyIncome = parseFloat(income);
    const age = document.getElementById("age").value;
    const yourAge = parseInt(age);
    let tax = 0;
    let yearIncome = monthlyIncome * 12;

    if (yourAge <= 60) {
        if (yearIncome <= 250000 && yearIncome >= 1000) {
            tax = 0;
        } else if (yearIncome <= 500000 && yearIncome > 250000) {
            tax = (yearIncome - 250000) * 0.05;
        } else if (yearIncome <= 1000000 && yearIncome > 500000) {
            tax = 12500 + (yearIncome - 500000) * 0.2;
        } else {
            tax = 112500 + (yearIncome - 1000000) * 0.3;
        }
    } else {
        if (yearIncome <= 300000 && yearIncome >= 1000) {
            tax = 0;
        } else if (yearIncome <= 500000 && yearIncome > 300000) {
            tax = (yearIncome - 300000) * 0.05;
        } else if (yearIncome <= 1000000 && yearIncome > 500000) {
            tax = 10000 + (yearIncome - 500000) * 0.2;
        } else {
            tax = 110000 + (yearIncome - 1000000) * 0.3;
        }
    }

    const cess = tax * 0.04;
    const totalTax = (tax + cess).toFixed(2);
    const result = document.getElementById('result');
    result.innerText = `You need to pay ₹${totalTax}`;
});

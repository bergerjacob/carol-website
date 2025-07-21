document.addEventListener('DOMContentLoaded', () => {
    const calculateBtn = document.getElementById('calculateBtn');

    calculateBtn.addEventListener('click', () => {
        // Get input values
        const salePrice = parseFloat(document.getElementById('salePrice').value) || 0;
        const commissionRate = parseFloat(document.getElementById('commissionRate').value) || 0;
        const closingCosts = parseFloat(document.getElementById('closingCosts').value) || 0;

        // Basic validation
        if (salePrice <= 0) {
            alert('Please enter a valid sale price.');
            return;
        }

        // Calculations
        const commissionAmount = salePrice * (commissionRate / 100);
        const totalSellerCosts = commissionAmount + closingCosts;
        const netProceeds = salePrice - totalSellerCosts;

        // Format numbers to currency
        const toCurrency = (num) => {
            return num.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD'
            });
        };

        // Display results
        document.getElementById('totalCommission').textContent = toCurrency(commissionAmount);
        document.getElementById('totalCosts').textContent = toCurrency(totalSellerCosts);
        document.getElementById('netProceeds').textContent = toCurrency(netProceeds);

        // Show the results container
        document.getElementById('results').style.display = 'block';
    });
});

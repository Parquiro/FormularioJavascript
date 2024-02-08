document.getElementById('packageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var clownWeight = parseFloat(document.getElementById('clownWeight').value);
    var dollWeight = parseFloat(document.getElementById('dollWeight').value);
    var clownQuantity = parseInt(document.getElementById('clownQuantity').value);
    var dollQuantity = parseInt(document.getElementById('dollQuantity').value);
    var pricePerGram = parseFloat(document.getElementById('pricePerGram').value);

    var totalClownWeight = clownWeight * clownQuantity;
    var totalDollWeight = dollWeight * dollQuantity;
    var totalWeight = totalClownWeight + totalDollWeight;
    var totalPrice = totalWeight * pricePerGram;

    var order = {
        clownWeight: clownWeight,
        dollWeight: dollWeight,
        clownQuantity: clownQuantity,
        dollQuantity: dollQuantity,
        totalClownWeight: totalClownWeight,
        totalDollWeight: totalDollWeight,
        totalWeight: totalWeight,
        totalPrice: totalPrice
    };

    var orders = JSON.parse(localStorage.getItem('orders')) || [];

    orders.push(order);

    localStorage.setItem('orders', JSON.stringify(orders));

    document.getElementById('packageForm').reset();

    alert('Pedido registrado con éxito');
});

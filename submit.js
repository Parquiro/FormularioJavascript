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

    // Obtener la lista de pedidos almacenados o crear una nueva lista si no hay ninguna
    var orders = JSON.parse(localStorage.getItem('orders')) || [];

    // Agregar el nuevo pedido a la lista
    orders.push(order);

    // Guardar la lista actualizada en el almacenamiento local
    localStorage.setItem('orders', JSON.stringify(orders));

    // Reiniciar el formulario
    document.getElementById('packageForm').reset();

    // Mostrar un mensaje de confirmación
    alert('Pedido registrado con éxito');
});

document.getElementById('recordForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var dob = document.getElementById('dob').value;
    var gender = document.getElementById('gender').value;

    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden');
        return;
    }

    var user = {
        firstName: firstName,
        lastName: lastName,
        username: username,
        email: email,
        password: password,
        dob: dob,
        gender: gender
    };


    var users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

    document.getElementById('recordForm').reset();

    alert('Usuario registrado con éxito');
});

// Usuarios Almacenados
document.getElementById('showUsersButton').addEventListener('click', function() {
    var users = JSON.parse(localStorage.getItem('users'));

    if (users && users.length > 0) {
        var message = 'Usuarios Almacenados:\n';
        users.forEach(function(user, index) {
            message += '\nUsuario ' + (index + 1) + ':\n';
            message += 'Nombre: ' + user.firstName + ' ' + user.lastName + '\n';
            message += 'Nombre de Usuario: ' + user.username + '\n';
            message += 'Correo Electrónico: ' + user.email + '\n';
            message += 'Fecha de Nacimiento: ' + user.dob + '\n';
            message += 'Género: ' + user.gender + '\n';
        });

        alert(message);
    } else {
        alert('No hay usuarios almacenados');
    }
});

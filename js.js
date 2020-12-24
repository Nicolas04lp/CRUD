const       cars = [
    {
        id: 1,
        marca: 'Renault',
        modelo: 'Sandero',
        año: 2019,
        color: 'Red',
        precio: '35.000.000'
    },
    {
        id: 2,
        marca: 'Chevrolet',
        modelo: 'Camaro',
        año: 2020,
        color: 'Blue',
        precio: '85.000.000'
    },
    {
        id: 3,
        marca: 'Ford',
        modelo: 'Titanium',
        año: 2020,
        color: 'BLack',
        precio: '73.000.000'
    },
    {
        id: 4,
        marca: 'Bmw',
        modelo: 'i35',
        año: 19,
        color: 'White',
        precio: '87.000.000'
    },
    {
        id: 5,
        marca: 'Mitsubishi',
        modelo: 'Lancer',
        año: 2010,
        color: 'White',
        precio: '57.000.000'
    }
];
let editingUSer = false;

function printUsers() {

    const tableBody = document.getElementById('cars-table-body')
    tableBody.innerHTML = ''
    cars.forEach((user) => {
        const td = `<tr>
                        <td>
                            ${user.marca}
                        </td>
                        <td>
                            ${user.modelo}
                        </td>
                        <td>
                            ${user.año}
                        </td>
                        <td>
                            ${user.color}
                        </td>
                        <td>
                            ${user.precio}
                        </td>
                        <td>
                            <button class="btn btn-danger" onclick="removeUser(${user.id})">
                                Eliminar
                            </button>
                        </td>
                        <td>
                            <button class="btn btn-success" onclick="editUserButton(${user.id})">
                                Editar
                            </button>
                        </td>
                    </tr>`
        tableBody.innerHTML += td;
    })
}


function submitUser() {
    console.log(editingUSer)
    if(editingUSer) {
        editUser();
    } else {
        addUser();
    }
}
function editUser() {
    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const año = document.getElementById('año').value;
    const color = document.getElementById('color').value;
    const precio = document.getElementById('precio').value;
    editingUSer.marca = marca
    editingUSer.modelo = modelo
    editingUSer.año = año
    editingUSer.color = color
    editingUSer.precio = precio
    printUsers();
    editingUSer = false;
    document.getElementById('marca').value = ''
    document.getElementById('modelo').value = ''
    document.getElementById('año').value = ''
    document.getElementById('color').value = ''
    document.getElementById('precio').value = ''

}

function editUserButton(id) {
    const user = cars.find((user) => user.id === id);
    // const user = users[position];
    document.getElementById('marca').value = user.marca;
    document.getElementById('modelo').value = user.modelo;
    document.getElementById('año').value = user.año;
    document.getElementById('color').value = user.color;
    document.getElementById('precio').value = user.precio;
    editingUSer = user;
    // console.log(user);
}

// nuevo usu
function addUser() {
    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const año = document.getElementById('año').value;
    const color = document.getElementById('color').value;
    const precio = document.getElementById('precio').value;
    const newUser = {
        id: cars.length + 1,
        marca: marca,
        modelo: modelo,
        año: año,
        color: color,
        precio: precio,
    }
    cars.push(newUser);
    printUsers();

}


// Eliminar ususarios
function removeUser(id) {
    const position = cars.findIndex((user) => user.id === id);
    cars.splice(position, 1);
    printUsers();
}


//Imprimir ususarios 
printUsers(); 
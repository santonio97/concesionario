window.addEventListener('load', function () {
    // Inicialización ...

    // Establecemos los escuchadores de eventos
    document.getElementById('menu-inicio').addEventListener('click', function (e) {
       // ...
    });

    document.getElementById('menu-articulos').addEventListener('click', function (e) {
       // ...
    });

    document.getElementById('menu-clientes').addEventListener('click', function (e) {
       // ...
    });
})

function insertar(coleccion, objeto) {
    if (Object.values(objeto).every(x => (x !== null && x !== ''))) {

        fetch(`/api/${coleccion}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(objeto)
            })
            .then(res => res.json())
            .then(data => {
               // ...
            })
            .catch(err => {
               // ...
            });

    }
}

function verDocumentos(coleccion) {
    fetch(`/api/${coleccion}`,
        {
            method: 'GET'
        })
        .then(res => res.json())
        .then(data => {
            document.getElementById(`${coleccion}`).innerHTML
                = json2table(coleccion, data, "table-responsive-full sort-table")
        })
}

function modificar(coleccion, id, objeto) {
    // let objeto = { nombre: campo1, precio: campo2 };

    fetch(`/api/${coleccion}/${id}`,
        {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(objeto)
        })
        .then(res => res.json())
        .then(data => {
               // ...
        })
        .catch(err => {
               // ...
        });

}

function eliminar(coleccion, id) {
    // if (confirm("El documento para " + documento.nombre + " va a ser eliminado. ¿Está seguro?")) {
    fetch(`/api/${coleccion}/${id}`,
        {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
               // ...
        })
        .catch(err => {
               // ...
        });
    // }
}
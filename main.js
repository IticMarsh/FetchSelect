document.addEventListener('DOMContentLoaded', function() {
    const categoria = document.querySelector("#categoria");
    const subcategoria = document.querySelector("#subcategoria");

    // Función para crear opciones HTML
    function createOptionsHTML(data) {
        return data.map(item => `<option value='${item.id}'>${item.name}</option>`).join('');
    }

    // Función para manejar cambios en la categoría seleccionada
    function handleCategoriaChange(event) {
        const selectedCategoryId = event.target.value;

        // Crear FormData y agregar el valor seleccionado
        const formData = new FormData();
        formData.append("cat1", selectedCategoryId);

        // Configurar opciones para la solicitud fetch
        const options = {
            method: 'POST',
            body: formData
        };

        // Realizar la solicitud fetch al archivo getSubCats.php
        fetch("getSubCats.php", options)
            .then(response => response.json())
            .then(data => {
                // Crear opciones HTML para las subcategorías y actualizar el selector
                subcategoria.innerHTML = createOptionsHTML(data);
            })
            .catch(error => {
                // Manejar errores de la solicitud fetch
                console.error('Error en la solicitud fetch:', error);
            });
    }

    // Agregar evento de cambio a la categoría
    categoria.addEventListener('change', handleCategoriaChange);

    // Obtener y cargar las categorías al cargar la página
    fetch('getCategorias.php')
        .then(response => response.json())
        .then(data => {
            // Crear opciones HTML para las categorías y actualizar el selector
            categoria.innerHTML = createOptionsHTML(data);
        })
        .catch(error => {
            // Manejar errores de la solicitud fetch
            console.error('Error en la solicitud fetch:', error);
        });
});



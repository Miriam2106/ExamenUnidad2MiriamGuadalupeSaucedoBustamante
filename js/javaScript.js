const alertSearch = () => {
    let search = document.getElementById("search").value;
    if (search != '') {
        Swal.fire({
            icon: 'error',
            title: `La busqueda con nombre ${search}`,
            text: 'No se encuentra, por lo cual te solicitamos intentarlo mas tarde'
        })
    }
}
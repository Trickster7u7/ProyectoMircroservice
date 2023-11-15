const estCourseButton = document.getElementById('IrStunts');
const CallApi2 = (url) => {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            // Limpiar el contenido previo de la tabla
            apiData.innerHTML = '';

            // Verificar si hay una propiedad studentDTOList en data y si es un array
            if (Array.isArray(data.studentDTOList)) {
                // Iterar sobre los datos y crear filas para la tabla
                data.studentDTOList.forEach(student => {
                    const row = apiData.insertRow();
                    const cell1 = row.insertCell(0);
                    const cell2 = row.insertCell(1);
                    const cell3 = row.insertCell(2);
                    const cell4 = row.insertCell(3);

                    cell1.innerText = student.name;
                    cell2.innerText = student.lastName;
                    cell3.innerText = student.email;
                    cell4.innerText = student.courseId;
                });
            } else {
                // Si no es una matriz, asumir que es un solo objeto y mostrar ese objeto en una fila
                const row = apiData.insertRow();
                const cell1 = row.insertCell(0);
                const cell2 = row.insertCell(1);
                const cell3 = row.insertCell(2);
                const cell4 = row.insertCell(3);

                cell1.innerText = data.name;
                cell2.innerText = data.lastName;
                cell3.innerText = data.email;
                cell4.innerText = data.courseId;
            }
        })
        .catch(e => console.error(new Error(e)));
}

const handleSearch2 = () => {
    const courseId = searchInput.value;
    const searchUrl = `http://localhost:8080/api/course/search-student/${courseId}`;

    // Llamar a la API con la URL de búsqueda
    CallApi2(searchUrl);
}

searchButton.addEventListener('click', handleSearch2);

estCourseButton.addEventListener('click', function () {
    // Cambiar la ubicación a la URL del otro HTML
    window.location.href = './Estudnts.html';
});


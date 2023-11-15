const ApiButton = document.getElementById('ApiButton');
const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');
const apiData = document.getElementById('apiData');
const estCourseButton = document.getElementById('EstCourse');


const CallApi = (url) => {
  fetch(url)
    .then(res => res.json())
    .then(data => {
      // Limpiar el contenido previo de la tabla
      apiData.innerHTML = '';

      // Verificar si data es una matriz antes de iterar sobre ella
      if (Array.isArray(data)) {
        // Iterar sobre los datos y crear filas para la tabla
        data.forEach(course => {
          const row = apiData.insertRow();
          const cell1 = row.insertCell(0);
          const cell2 = row.insertCell(1);
          const cell3 = row.insertCell(2);

          cell1.innerText = course.id;
          cell2.innerText = course.name;
          cell3.innerText = course.teacher;
        });
      } else {
        // Si no es una matriz, asumir que es un solo objeto y mostrar ese objeto en una fila
        const row = apiData.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);

        cell1.innerText = data.id;
        cell2.innerText = data.name;
        cell3.innerText = data.teacher;
      }
    })
    .catch(e => console.error(new Error(e)));
}
const handleSearch = () => {
  const courseId = searchInput.value;
  const searchUrl = `http://localhost:8080/api/course/search/${courseId}`;

  // Llamar a la API con la URL de búsqueda
  CallApi(searchUrl);
}

ApiButton.addEventListener('click', () => CallApi('http://localhost:8080/api/course/all'));
searchButton.addEventListener('click', handleSearch);


estCourseButton.addEventListener('click', function () {
    // Cambiar la ubicación a la URL del otro HTML
    window.location.href = './Course_Est.html';
});

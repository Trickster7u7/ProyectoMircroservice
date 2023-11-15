const ApiButton = document.getElementById('ApiButton');
const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');
const apiData = document.getElementById('apiData');
const estCourseButton = document.getElementById('EstCourse');

const CallApi3 = (url) => {
  fetch(url)
    .then(res => res.json())
    .then(data => {
      apiData.innerHTML = '';

      if (Array.isArray(data)) {
        data.forEach(student => {
          const row = apiData.insertRow();
          const cell1 = row.insertCell(0);
          const cell2 = row.insertCell(1);
          const cell3 = row.insertCell(2);
          const cell4 = row.insertCell(3);
          const cell5 = row.insertCell(4); // Use 4 for the fifth cell

          cell1.innerText = student.id;
          cell2.innerText = student.name;
          cell3.innerText = student.lastName;
          cell4.innerText = student.email;
          cell5.innerText = student.courseId;
        });
      } else {
        const row = apiData.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);
        const cell5 = row.insertCell(4);

        cell1.innerText = data.id;
        cell2.innerText = data.name;
        cell3.innerText = data.lastName;
        cell4.innerText = data.email;
        cell5.innerText = data.courseId;
      }
    })
    .catch(e => console.error(new Error(e)));
}

const handleSearch = () => {
  const courseId = searchInput.value;
  const searchUrl = `http://localhost:8080/api/student/search/${courseId}`;
  CallApi3(searchUrl);
}

const handleSearch2 = () => {
  const courseId = searchInput.value;
  const searchUrl = `http://localhost:8080/api/student/search-by-course/${courseId}`;
  CallApi3(searchUrl);
}

ApiButton.addEventListener('click', () => CallApi3('http://localhost:8080/api/student/all'));
searchButton.addEventListener('click', handleSearch);
estCourseButton.addEventListener('click', handleSearch2);



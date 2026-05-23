let data = {};

fetch("data.json")
  .then(res => res.json())
  .then(json => {
    data = json;
    loadSubjects();
  });

function loadSubjects() {
  const subjectSelect = document.getElementById("subject");

  Object.keys(data).forEach(subject => {
    let option = document.createElement("option");
    option.value = subject;
    option.textContent = subject;
    subjectSelect.appendChild(option);
  });

  loadYears();
}

function loadYears() {
  const subject = document.getElementById("subject").value;
  const yearSelect = document.getElementById("year");

  yearSelect.innerHTML = "";

  Object.keys(data[subject]).forEach(year => {
    let option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    yearSelect.appendChild(option);
  });
}

document.getElementById("subject").addEventListener("change", loadYears);

function showPapers() {
  const subject = document.getElementById("subject").value;
  const year = document.getElementById("year").value;

  const papers = data[subject][year];

  let output = "<h2>Available Papers</h2>";

  papers.forEach(file => {
    let path = `papers/${subject.toLowerCase()}/${year}/${file}`;
    output += `<p><a href="${path}" target="_blank">📄 ${file}</a></p>`;
  });

  document.getElementById("results").innerHTML = output;
}

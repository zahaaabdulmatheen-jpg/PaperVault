function scrollToPapers() {
  document.getElementById("papers").scrollIntoView({ behavior: "smooth" });
}

function showPapers() {
  const subject = document.getElementById("subject").value;
  const year = document.getElementById("year").value;

  document.getElementById("results").innerHTML = `
    <h3>${subject} - ${year}</h3>
    <p>📄 Paper 1 (example link)</p>
  `;
}

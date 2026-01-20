const analyzeBtn = document.getElementById("analyzeBtn");

analyzeBtn.addEventListener("click", function () {
  const resumeText = document.getElementById("resume").value;
  const jdText = document.getElementById("jd").value;

  if (!resumeText || !jdText) {
    alert("Please paste both Resume and Job Description.");
    return;
  }

  alert("Resume and Job Description received successfully!");
});

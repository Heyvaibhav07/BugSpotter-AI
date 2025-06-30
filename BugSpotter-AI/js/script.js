function analyzeCode() {
  const code = document.getElementById("codeInput").value;
  const feedback = document.getElementById("feedback");
  let results = [];

  if (code.includes("console.log(")) {
    results.push("Notice: Avoid using console.log in production code.");
  }
  if (code.includes("<div>") && !code.includes("</div>")) {
    results.push("Error: Unclosed <div> tag detected.");
  }
  if (code.includes("var ")) {
    results.push("Suggestion: Use let or const instead of var for block scoping.");
  }
  if (results.length === 0) {
    feedback.innerHTML = "<p>No obvious bugs found. Your code looks good!</p>";
  } else {
    feedback.innerHTML = "<ul>" + results.map(r => `<li>${r}</li>`).join("") + "</ul>";
  }
}
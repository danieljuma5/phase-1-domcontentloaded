// Adding DOMContentLoaded event and changing p tag text
document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM is Ready");
  document.getElementById('text').innerHTML = "This is really cool!";
});
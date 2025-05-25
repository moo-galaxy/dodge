document.addEventListener("DOMContentLoaded", function () {
    fetch("nav_home.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("navbar-container").innerHTML = data;
      })
      .catch(error => console.error("Error loading navbar:", error));
  });
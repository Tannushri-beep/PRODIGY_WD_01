window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");

  if (window.scrollY > 50) {
    navbar.style.backgroundColor = "#0056b3"; // Darker blue
  } else {
    navbar.style.backgroundColor = "#007bff"; // Original color
  }
});

function hamburgerMenu() {
  const hamburger = document.querySelector("#hamburger")
  const navLinks = document.querySelector("#nav-links")

  hamburger.addEventListener("click", function() {
    navLinks.classList.toggle("open")
    
    if (navLinks.classList.contains("open")) {
      hamburger.textContent = "✕"
    } else {
      hamburger.textContent = "☰"
    }
  })
}

hamburgerMenu()
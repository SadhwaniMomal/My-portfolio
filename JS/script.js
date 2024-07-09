// Navbar active code
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");

  // Function to handle click on nav links
  function handleNavClick(event) {
    event.preventDefault();
    const clickedLink = this;

    // Remove 'active' class from all links
    navLinks.forEach((link) => link.classList.remove("active"));

    // Add 'active' class to the clicked link
    clickedLink.classList.add("active");

    // Optional: Scroll to the section corresponding to the clicked link
    const targetId = clickedLink.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  // Attach click event listeners to nav links
  navLinks.forEach((link) => {
    link.addEventListener("click", handleNavClick);
  });
});



// Function to show contact form modal
function showContactForm() {
  $("#contactModal").modal("show");
}

// Function to send email (replace with your actual email sending logic)
function sendEmail() {
  // Here you can implement your email sending logic using Ajax or a server-side script
  // Example: alert('Email sent!'); // Replace with actual logic
  alert("Email sent!");
  $("#contactModal").modal("hide");
}

// Typed
document.addEventListener("DOMContentLoaded", function () {
  var typingEffect = new Typed(".typedText", {
    strings: ["Frontend Developer.", "Web Designer."],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
  });
});

// Function to open WhatsApp with your number
function openWhatsApp() {
  var phoneNumber = "+923052782064"; // Replace with your phone number
  var url =
    "https://wa.me/" +
    phoneNumber +
    "?text=I'm%20interested%20in%20your%20services";
  window.open(url, "_blank");
}

// Project show more function
document.addEventListener("DOMContentLoaded", function () {
  let currentRow = 1;
  const showMoreBtn = document.getElementById("showMoreBtn");

  function showNextRow() {
    const nextRow = document.getElementById(`row${currentRow}`);
    if (nextRow) {
      nextRow.style.display = "flex";
      currentRow++;
      if (!document.getElementById(`row${currentRow}`)) {
        showMoreBtn.style.display = "none";
      }
    }
  }

  showNextRow(); // Show the first row initially

  showMoreBtn.addEventListener("click", showNextRow);
});

// Function to open Gmail
function openGmail() {
  var emailAddress = "mahmoud292949@gmail.com";
  var gmailLink = "https://mail.google.com/mail/?view=cm&to=" + encodeURIComponent(emailAddress);

  // Open Gmail in a new tab
  window.open(gmailLink, "_blank");
}

// Event listener for the "Contact Me" button to open Gmail
const gmailBtn = document.getElementById("gmailBtn");
gmailBtn.addEventListener("click", openGmail);







// Click events for buttons
const portfolio = document.getElementById("portfolio");
const portfolioBtn = document.getElementById("portfolio-btn");
const skills = document.getElementById("skills");
const skillsBtn = document.getElementById("skills-btn");

portfolioBtn.addEventListener("click", (event) => {
  skills.style.display = "none";
  portfolio.style.display = "flex";
  skillsBtn.classList.remove("active-btn");
  portfolioBtn.classList.add("active-btn");
});

skillsBtn.addEventListener("click", (event) => {
  skills.style.display = "flex";
  portfolio.style.display = "none";
  portfolioBtn.classList.remove("active-btn");
  skillsBtn.classList.add("active-btn");
});

// Light & Dark Theme
document.addEventListener("DOMContentLoaded", () => {
  const toggleThemeButton = document.getElementById("toggleTheme");
  const themeIcon = document.querySelector('img[alt="theme icon"]');
  const githubLogo = document.querySelector('img[alt="github logo"]');
  const linkedinLogo = document.querySelector('img[alt="linkedin logo"]');
  const emailLogo = document.querySelector('img[alt="email logo"]');

  const lightLogos = {
      github: "assets/github_light.png",
      linkedin: "assets/linkedin_light.png",
      email: "assets/email_light.png",
      theme: "assets/theme_light.png",
  };

  const darkLogos = {
      github: "assets/github_dark.png",
      linkedin: "assets/linkedin_dark.png",
      email: "assets/email_dark.png",
      theme: "assets/theme_dark.png",
  };

  function setTheme(isDark) {
      githubLogo.src = isDark ? darkLogos.github : lightLogos.github;
      linkedinLogo.src = isDark ? darkLogos.linkedin : lightLogos.linkedin;
      emailLogo.src = isDark ? darkLogos.email : lightLogos.email;
      themeIcon.src = isDark ? darkLogos.theme : lightLogos.theme;
  }

  toggleThemeButton.addEventListener("click", () => {
      const isDark = document.body.classList.toggle("dark-theme");
      localStorage.setItem("isDark", isDark);

      setTheme(isDark);
  });

  const loadTheme = () => {
      const isDark = localStorage.getItem("isDark") === "true";
      document.body.classList.toggle("dark-theme", isDark);

      setTheme(isDark);
  };

  // Load saved theme from local storage or default to light theme
  loadTheme();
});


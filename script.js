const toggleBtn = document.getElementById("themeToggle");
const sound = document.getElementById("toggleSound");

// Load saved theme
const savedTheme = localStorage.getItem("theme") || "light";
document.body.className = savedTheme;

toggleBtn.addEventListener("click", () => {
  // Play sound
  sound.currentTime = 0;
  sound.play();

// Toggle theme
  if (document.body.classList.contains("light")) {
    document.body.className = "dark";
    localStorage.setItem("theme", "dark");
  } else {
    document.body.className = "light";
    localStorage.setItem("theme", "light");
  }
});

// ===== SKILL BAR ANIMATION =====
document.addEventListener("DOMContentLoaded",()=>{
document.querySelectorAll('.progress-bar').forEach(bar=>{
bar.style.width = bar.dataset.level + '%';
});
});

// ===== SCROLL REVEAL ANIMATION =====
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 120;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

// ===== SCROLL BASED SECTION ANIMATION =====
const sections = document.querySelectorAll('.scroll-animate');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  },
  {
    threshold: 0.2
  }
);

sections.forEach(section => {
  observer.observe(section);
});

// ===== PROJECT CARD CLICK EFFECT =====
document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => {
    card.classList.add("active");

    setTimeout(() => {
      card.classList.remove("active");
    }, 300);
  });
});

// ===== PROJECT MODAL LOGIC =====
const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalImage = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close-btn");

document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => {
    modalTitle.textContent = card.dataset.title;
    modalDescription.textContent = card.dataset.description;
    modalImage.src = card.dataset.image;
    modal.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

(function () {
emailjs.init(7-GiTY0o6nWrBBj65); // replace
})();


form.addEventListener("submit", function (e) {
e.preventDefault();


emailjs
.sendForm(
service_ot2x3l6,
template_4fahtwp,
this
)
.then(() => {
status.innerText = "Message sent successfully!";
status.style.color = "green";
form.reset();
})
.catch(() => {
status.innerText ="Failed to send message. Try again.";
status.style.color = "red";
});
});

const form = document.getElementById('contactForm');
const sendBtn = document.getElementById('sendBtn');
const spinner = sendBtn.querySelector('.spinner');
const btnText = sendBtn.querySelector('.btn-text');


form.addEventListener('submit', function(e) {
e.preventDefault();


sendBtn.disabled = true;
btnText.textContent = 'Sending...';
spinner.style.display = 'block';


emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', this)
.then(() => {
btnText.textContent = 'Sent ✔';
spinner.style.display = 'none';
form.reset();

setTimeout(() => {
btnText.textContent = 'Send Message';
sendBtn.disabled = false;
}, 3000);
})
.catch(() => {
btnText.textContent = 'Failed ❌';
spinner.style.display = 'none';
sendBtn.disabled = false;
});
});

const texts = [
  "Samanu Abhinay Sai Kumar Reddy",
  "Aspiring Data Engineer",
  "AI & Data Science Graduate"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";
let isDeleting = false;

function typeEffect() {
  currentText = texts[count];

  if (!isDeleting) {
    letter = currentText.slice(0, ++index);
  } else {
    letter = currentText.slice(0, --index);
  }

  document.getElementById("typingText").textContent = letter;

  let speed = isDeleting ? 60 : 100;

  if (!isDeleting && index === currentText.length) {
    speed = 1500; // pause after typing
    isDeleting = true;
  } else if (isDeleting && index === 0) {
    isDeleting = false;
    count = (count + 1) % texts.length;
    speed = 400;
  }

  setTimeout(typeEffect, speed);
}

document.addEventListener("DOMContentLoaded", typeEffect);

const skillCards = document.querySelectorAll('.skill-card');

const skillObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target.querySelector('.progress-bar');
        const percent = entry.target.querySelector('.skill-percent');
        const target = bar.dataset.level;

        // Progress bar fill
        bar.style.width = target + '%';

        // Percentage counter animation
        let count = 0;
        const interval = setInterval(() => {
          if (count >= target) {
            clearInterval(interval);
          } else {
            count++;
            percent.textContent = count + '%';
          }
        }, 15);

        skillObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

skillCards.forEach(card => skillObserver.observe(card));

const circularSkills = document.querySelectorAll('.circular-skill');

const circleObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const progressCircle = entry.target.querySelector('.progress');
        const percentText = entry.target.querySelector('.percent');
        const target = progressCircle.dataset.percent;
        const circumference = 2 * Math.PI * 45;

        const offset = circumference - (target / 100) * circumference;
        progressCircle.style.strokeDashoffset = offset;

        // Counter animation
        let count = 0;
        const interval = setInterval(() => {
          if (count >= target) {
            clearInterval(interval);
          } else {
            count++;
            percentText.textContent = count + '%';
          }
        }, 18);

        circleObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.6 }
);

circularSkills.forEach(skill => circleObserver.observe(skill));

document.getElementById("settingsPanel").classList.toggle("open")

document.addEventListener("DOMContentLoaded", () => {
  const settingsBtn = document.getElementById("settingsBtn");
  const settingsPanel = document.getElementById("settingsPanel");

  settingsBtn.addEventListener("click", () => {
    settingsPanel.classList.toggle("open");
  });
});

document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
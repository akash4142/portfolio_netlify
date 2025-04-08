const filterButtons = document.querySelectorAll(".filter-btn");
const workItems = document.querySelectorAll(".work");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");

    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    workItems.forEach(item => {
      const category = item.getAttribute("data-category");
      if (filter === "all" || category === filter) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});
   
   
   
   
   var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }




    const sidemenu = document.getElementById("sidemenu");
    function openmenu() {
      sidemenu.classList.add("show");
      document.getElementById("navOverlay").classList.add("show");
    }
    
    function closemenu() {
      sidemenu.classList.remove("show");
      document.getElementById("navOverlay").classList.remove("show");
    }
    



    document.addEventListener("DOMContentLoaded", () => {
      const seeMoreButton = document.getElementById("see-more-button");
      const projects = document.querySelectorAll(".work");
    
      const numInitiallyVisibleProjects = 4;
    
      // Show only the first 4 projects on load
      projects.forEach((project, index) => {
        if (index < numInitiallyVisibleProjects) {
          project.style.display = "block";
        } else {
          project.style.display = "none";
        }
      });
    
      // When "See More" is clicked, reveal all
      seeMoreButton.addEventListener("click", () => {
        projects.forEach(project => {
          project.style.display = "block";
        });
        seeMoreButton.style.display = "none";
      });
    });
    



// Scroll active link highlight
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
});

const typed = new Typed("#typed-role", {
    strings: [
      "Full Stack Developer",
      "Problem Solver",
      "Web Developer",
      "Passionate Coder",
      "Fast Learner",
    ],
    typeSpeed: 60,
    backSpeed: 30,
    backDelay: 1500,
    loop: true,
  });
  
  let currentTestimonial = 0;
  const testimonials = document.querySelectorAll(".testimonial-card");
  const track = document.querySelector(".testimonial-track");
  
  function moveTestimonials() {
    testimonials.forEach((card, index) => {
      card.classList.remove("active");
    });
  
    testimonials[currentTestimonial].classList.add("active");
    const offset = currentTestimonial * -100;
    track.style.transform = `translateX(${offset}%)`;
  
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  }
  
  setInterval(moveTestimonials, 4000); // change every 4 seconds
  


  (function () {
    emailjs.init("MGs-o5KrzLGGg1Lie"); // Replace with your public key
  })();
  
  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    emailjs.sendForm("service_6szdv3j", "template_7i0vox8", this)
      .then(() => {
        document.getElementById("form-status").innerText = "✅ Message sent successfully!";
        this.reset();
      }, (error) => {
        document.getElementById("form-status").innerText = "❌ Failed to send message.";
        console.error("EmailJS error:", error);
      });
  });
  
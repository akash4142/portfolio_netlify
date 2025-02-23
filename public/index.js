const skills=[
    {languages:"C",proficiency:85},
    {languages:"C++",proficiency:90},
    {languages:"Python",proficiency:80},
    {languages:"Javascript",proficiency:85},
    {languages:"Html/Html5",proficiency:90},
    {languages:"CSS",proficiency:80},
    {languages:"Node.js",proficiency:90},
    {languages:"SQL",proficiency:80},
    {languages:"MongoDB",proficiency:85},
    {languages:"Postgrad",proficiency:85},
    {languages:"UNIX/LINUX",proficiency:75},
    {languages:"Excel",proficiency:90},
    {languages:"Microsoft 365",proficiency:85},
    {languages:"Git",proficiency:80},
]

const skillList = document.getElementById("skill-list");

skills.forEach(skill => {
    const skillItem = document.createElement('li');
    const progressBar = document.createElement('div');
    progressBar.classList.add("progress-bar")

   let color;
    if (skill.proficiency < 50) {
        color = 'red';
    } else {
        color = 'lightgreen';
    }


 progressBar.style.backgroundImage = `linear-gradient(to right, ${color} ${skill.proficiency}%, transparent ${skill.proficiency}%, transparent 100%)`;
    progressBar.style.width = '100%';
    
const proficiencyValue = document.createElement('span');
    proficiencyValue.classList.add('proficiency-value');
    proficiencyValue.textContent = skill.proficiency;
    progressBar.appendChild(proficiencyValue);


    skillItem.innerHTML = `${skill.languages} <div class="progress">${progressBar.outerHTML}</div>`;
    skillList.appendChild(skillItem);
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




    var sidemenu = document.getElementById("sidemenu");

    function  openmenu(){
        sidemenu.style.right="0";
    }
    function closemenu(){
        sidemenu.style.right="-200px";
    }



    const scriptURL = "https://script.google.com/macros/s/AKfycbwJkqV6y5wkvWlVwKiS2h7R-4kIdMijr_9xRqCwnRMJX8XJhTlnSb7DthinfxUDg-HTgw/exec"
    const form = document.forms['submit-to-google-sheet']
  const msg= document.getElementById("msg");

    form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  fetch(scriptURL, {
    method: "POST",
    body: formData,
  })
    .then((response) => response.text())
    .then((data) => {
      msg.innerHTML = "Message sent successfully!";
      setTimeout(() => (msg.innerHTML = ""), 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
  
    const seeMoreButton = document.getElementById("see-more-button");
    const projects = document.querySelectorAll(".work");

    const numInitiallyVisibleProjects = 4;
    let numVisibleProjects = numInitiallyVisibleProjects;

    projects.forEach((project, index) => {
        if (index < numInitiallyVisibleProjects) {
            project.style.display = "block";
        } else {
            project.style.display = "none";
        }
    });

    seeMoreButton.addEventListener("click", () => {
        numVisibleProjects = projects.length;

        projects.forEach((project) => {
            project.style.display = "block";
        });

        seeMoreButton.style.display = "none";
    });






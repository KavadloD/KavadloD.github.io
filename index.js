document.addEventListener("DOMContentLoaded", function () {
  const projects = [
      { title: "Game Project 1", image: "images/game1.jpg", link: "project1.html" },
      { title: "Game Project 2", image: "images/game2.jpg", link: "project2.html" },
      { title: "Game Project 3", image: "images/game3.jpg", link: "project3.html" },
      { title: "Software Tool", image: "images/tool.jpg", link: "project4.html" },
      { title: "QA Automation", image: "images/qa.jpg", link: "project5.html" },
      { title: "AI Experiment", image: "images/ai.jpg", link: "project6.html" }
  ];

  const projectContainer = document.getElementById("projects-container");

  projects.forEach((project) => {
      const projectCard = document.createElement("div");
      projectCard.classList.add("project-card");

      projectCard.innerHTML = `
          <a href="${project.link}">
              <img src="${project.image}" alt="${project.title}">
              <div class="project-title">${project.title}</div>
          </a>
      `;

      projectContainer.appendChild(projectCard);
  });
});

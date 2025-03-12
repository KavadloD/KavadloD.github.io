document.addEventListener("DOMContentLoaded", function () {
  // Sample project data
  const projects = [
    {
      title: "Game Engine Prototype",
      description: "A custom-built 2D game engine using C# and Unity.",
      link: "https://github.com/KavadloD/game-engine"
    },
    {
      title: "AI Chatbot",
      description: "A chatbot built with Python and NLP techniques.",
      link: "https://github.com/KavadloD/ai-chatbot"
    },
    {
      title: "E-Commerce Dashboard",
      description: "A full-stack e-commerce analytics tool using React and SQL.",
      link: "https://github.com/KavadloD/ecommerce-dashboard"
    }
  ];

  // Load projects dynamically
  const projectsContainer = document.getElementById("projects");
  projects.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");
    projectCard.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <a href="${project.link}" target="_blank">View Project</a>
    `;
    projectsContainer.appendChild(projectCard);
  });

  // Sample experience data
  const experience = [
    {
      title: "Systems Administrator",
      company: "Karpel Solutions",
      duration: "Sep 2024 - Present",
      details: [
        "Provide technical support for case management software.",
        "Manage SQL databases and write queries to troubleshoot issues."
      ]
    },
    {
      title: "IT Analyst Intern",
      company: "FeatherShark",
      duration: "Jun 2023 - Jan 2024",
      details: [
        "Managed user accounts through Microsoft 365.",
        "Resolved IT support tickets and configured devices."
      ]
    }
  ];

  // Load experience dynamically
  const experienceContainer = document.getElementById("experience");
  experience.forEach((job) => {
    const jobItem = document.createElement("div");
    jobItem.classList.add("experience-item");
    jobItem.innerHTML = `
      <h3>${job.title} - ${job.company}</h3>
      <p><strong>${job.duration}</strong></p>
      <ul>
        ${job.details.map((detail) => `<li>${detail}</li>`).join("")}
      </ul>
    `;
    experienceContainer.appendChild(jobItem);
  });
});

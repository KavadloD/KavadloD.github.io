document.addEventListener("DOMContentLoaded", () => {
  loadProjects();
  loadBlogPosts();
});

function loadProjects() {
  const projects = [
      { title: "Game Project", description: "An indie game I developed.", link: "#" },
      { title: "Portfolio Site", description: "This portfolio site.", link: "#" },
      { title: "Music Player", description: "A music player web app.", link: "#" }
  ];
  
  const container = document.getElementById("projects-container");
  projects.forEach(proj => {
      const div = document.createElement("div");
      div.className = "project";
      div.innerHTML = `<h3>${proj.title}</h3><p>${proj.description}</p><a href="${proj.link}" target="_blank">View</a>`;
      container.appendChild(div);
  });
}

function loadBlogPosts() {
  const blogPosts = [
      { title: "My Journey in Game Dev", content: "Sharing my experiences...", link: "#" },
      { title: "Why QA Matters", content: "A deep dive into software testing...", link: "#" }
  ];
  
  const container = document.getElementById("blog-posts");
  blogPosts.forEach(post => {
      const div = document.createElement("div");
      div.className = "project";
      div.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p><a href="${post.link}" target="_blank">Read More</a>`;
      container.appendChild(div);
  });
}

import {
  bio,
  skills,
  education,
  experience,
  footer,
} from "./user-data/data.js";

import { URLs } from "./user-data/urls.js";

const { gitRepo } = URLs;

// ✅ Function to fetch repositories from GitHub API
async function fetchReposFromGit(url) {
  try {
    const response = await fetch(url);
    const items = await response.json();
    populateRepo(items, "repos");
  } catch (error) {
    console.error(`Error fetching repositories: ${error}`);
  }
}

// ✅ Updating Page Title with Your Name
function mapBasicResponse() {
  document.title = "Dorian Kavadlo - Portfolio";
}

// ✅ Populating Bio Section
function populateBio(items, id) {
  const bioTag = document.getElementById(id);
  items.forEach((bioItem) => {
    const p = document.createElement("p");
    p.innerHTML = bioItem;
    bioTag.appendChild(p);
  });
}

// ✅ Populating Skills Section
function populateSkills(items, id) {
  const skillsTag = document.getElementById(id);
  items.forEach((item) => {
    const skillItem = document.createElement("li");
    skillItem.innerHTML = item;
    skillsTag.appendChild(skillItem);
  });
}

// ✅ Populating GitHub Repositories
function populateRepo(items, id) {
  const repoContainer = document.getElementById(id);
  const count = 4; // Display up to 4 repositories

  for (let i = 0; i < Math.min(items.length, count); i++) {
    const repoCard = document.createElement("div");
    repoCard.className = "repo-card";
    repoCard.style = `
      border-radius: 12px;
      padding: 16px;
      background: #303030;
      color: white;
      margin-bottom: 16px;
      transition: transform 0.2s ease-in-out;
    `;

    const repoLink = document.createElement("a");
    repoLink.href = `https://github.com/${items[i].owner.login}/${items[i].name}`;
    repoLink.target = "_blank";
    repoLink.style = "color: #f9bf3f; text-decoration: none;";

    const repoTitle = document.createElement("h3");
    repoTitle.innerHTML = items[i].name;
    repoLink.appendChild(repoTitle);

    const repoDescription = document.createElement("p");
    repoDescription.innerHTML = items[i].description || "No description available.";

    repoCard.appendChild(repoLink);
    repoCard.appendChild(repoDescription);
    repoContainer.appendChild(repoCard);
  }
}

// ✅ Populating Work Experience & Education
function populateExp_Edu(items, id) {
  let mainContainer = document.getElementById(id);
  for (let i = 0; i < items.length; i++) {
    let entry = document.createElement("div");
    entry.className = "timeline-entry";
    entry.innerHTML = `
      <h3>${items[i].title} (${items[i].duration})</h3>
      <p>${items[i].subtitle}</p>
      <ul>
        ${items[i].details.map((detail) => `<li>${detail}</li>`).join("")}
      </ul>
    `;
    mainContainer.appendChild(entry);
  }
}

// ✅ Populating Footer Links
function populateLinks(items, id) {
  let footer = document.getElementById(id);
  items.forEach((item) => {
    let linkElement = document.createElement("a");
    linkElement.href = item.link;
    linkElement.target = "_blank";
    linkElement.innerText = item.text;
    footer.appendChild(linkElement);
  });
}

// ✅ Execute Functions to Populate Content
mapBasicResponse();
populateBio(bio, "bio");
populateSkills(skills, "skills");
fetchReposFromGit(gitRepo);
populateExp_Edu(experience, "experience");
populateExp_Edu(education, "education");
populateLinks(footer, "footer");
console.log("Experience Data:", experience);

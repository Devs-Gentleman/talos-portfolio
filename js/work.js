import { projects } from "./projects.js";

const projectGrid = document.querySelector("#project-grid");
const projectCount = document.querySelector(".project-count");
const filterGroup = document.querySelector(".project-filters");
let activeCategory = "all";

function createProjectCard(project) {
  const card = document.createElement("article");
  card.className = "project-card";

  const visual = document.createElement("div");
  visual.className = "project-card__visual";
  visual.setAttribute("aria-hidden", "true");

  const body = document.createElement("div");
  body.className = "project-card__body";

  const label = document.createElement("p");
  label.className = "label";
  label.textContent = project.label;

  const title = document.createElement("h2");
  if (project.caseStudyUrl) {
    const link = document.createElement("a");
    link.href = project.caseStudyUrl;
    link.textContent = project.title;
    title.append(link);
  } else {
    title.textContent = project.title;
  }

  const description = document.createElement("p");
  description.textContent = project.description;

  body.append(label, title, description);
  card.append(visual, body);
  return card;
}

function renderProjects() {
  const visibleProjects = projects.filter((project) => {
    return activeCategory === "all" || project.category === activeCategory;
  });

  projectGrid.replaceChildren(...visibleProjects.map(createProjectCard));
  projectCount.textContent = `${visibleProjects.length} projects`;
}

filterGroup.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-category]");
  if (!button || !filterGroup.contains(button)) return;

  activeCategory = button.dataset.category;
  filterGroup.querySelectorAll("button[data-category]").forEach((filterButton) => {
    filterButton.setAttribute("aria-pressed", String(filterButton === button));
  });
  renderProjects();
});

renderProjects();

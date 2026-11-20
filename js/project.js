import { projects } from "./projects.js";

const content = document.querySelector("#case-study-content");
const parameters = new URLSearchParams(window.location.search);
const projectId = parameters.get("id");
const project = projects.find((item) => item.id === projectId);

function createContentSection(label, heading, text) {
  const section = document.createElement("section");
  section.className = "content-section";

  const sectionLabel = document.createElement("p");
  sectionLabel.className = "label";
  sectionLabel.textContent = label;

  const sectionHeading = document.createElement("h2");
  sectionHeading.textContent = heading;

  const sectionText = document.createElement("p");
  sectionText.textContent = text;

  section.append(sectionLabel, sectionHeading, sectionText);
  return section;
}

function renderProject(projectToRender) {
  document.title = `${projectToRender.title} Case Study | My Portfolio`;

  const intro = document.createElement("header");
  intro.className = "page-intro";

  const label = document.createElement("p");
  label.className = "label";
  label.textContent = `${projectToRender.label} // CASE STUDY`;

  const heading = document.createElement("h1");
  heading.textContent = projectToRender.title;

  const summary = document.createElement("p");
  summary.textContent = projectToRender.description;
  intro.append(label, heading, summary);

  const caseStudy = document.createElement("section");
  caseStudy.className = "case-study";
  caseStudy.setAttribute("aria-label", `${projectToRender.title} project details`);

  const visual = document.createElement("div");
  visual.className = "case-study__visual";
  visual.setAttribute("aria-hidden", "true");

  const layout = document.createElement("div");
  layout.className = "case-study__layout";

  const sections = document.createElement("div");
  sections.className = "case-study__content";
  sections.append(
    createContentSection("[ OVERVIEW ]", "Project summary", projectToRender.description),
    createContentSection("[ APPROACH ]", "The design direction", "Placeholder: describe the strategy and creative approach."),
    createContentSection("[ OUTCOME // LEARNINGS ]", "What changed", "Placeholder: add results, challenges, and lessons.")
  );

  const details = document.createElement("aside");
  details.className = "project-details";
  details.setAttribute("aria-label", "Project facts");

  const detailsHeading = document.createElement("h2");
  detailsHeading.textContent = "Project details";

  const factList = document.createElement("dl");
  for (const fact of [
    ["Type", projectToRender.category === "software" ? "Software project" : "Brand design project"],
    ["Category", projectToRender.category],
    ["Status", "Placeholder"]
  ]) {
    const row = document.createElement("div");
    const term = document.createElement("dt");
    const description = document.createElement("dd");
    term.textContent = fact[0];
    description.textContent = fact[1];
    row.append(term, description);
    factList.append(row);
  }

  details.append(detailsHeading, factList);
  layout.append(sections, details);
  caseStudy.append(visual, layout);

  const backLinkParagraph = document.createElement("p");
  backLinkParagraph.className = "back-link";
  const backLink = document.createElement("a");
  backLink.href = "work.html";
  backLink.textContent = "Back to all work";
  backLinkParagraph.append(backLink);

  content.replaceChildren(intro, caseStudy, backLinkParagraph);
}

function renderNotFound() {
  document.title = "Project Not Found | My Portfolio";

  const intro = document.createElement("header");
  intro.className = "page-intro";

  const label = document.createElement("p");
  label.className = "label";
  label.textContent = "[ PROJECT // NOT FOUND ]";

  const heading = document.createElement("h1");
  heading.textContent = "This project could not be found.";

  const description = document.createElement("p");
  description.textContent = "The project ID is missing or does not match a project in the portfolio.";

  const backLinkParagraph = document.createElement("p");
  backLinkParagraph.className = "back-link";
  const backLink = document.createElement("a");
  backLink.href = "work.html";
  backLink.textContent = "Back to all work";
  backLinkParagraph.append(backLink);

  intro.append(label, heading, description, backLinkParagraph);
  content.replaceChildren(intro);
}

if (project) {
  renderProject(project);
} else {
  renderNotFound();
}

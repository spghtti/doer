import { LibraryTemplatePlugin } from "webpack";
import { projects } from "./index.js";

function updateProjects(newProject) {
  projects.push(newProject);

  const projectList = document.getElementById("projects");

  const div = document.createElement("div");
  const input = document.createElement("input");
  const label = document.createElement("label");
  const button = document.createElement("button");

  div.className = "inline-project";

  input.type = "checkbox";
  input.className = "project";
  input.id = `project-${newProject}`;

  label.htmlFor = `project-${newProject}`;
  label.type = "textarea";

  button.className = "project-button";
  button.innerHTML = `${newProject}`;

  projectList.appendChild(div);
  div.appendChild(input);
  div.appendChild(label);
  label.appendChild(button);
}

function getProject(event) {
  event.preventDefault();
  const newProject = document.getElementsByName("project")[0].value;

  updateProjects(newProject);
  console.log(newProject);
  console.log(projects);
}

export { getProject };

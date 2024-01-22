import { ProjectList } from "./App/ProjectList.js";
import { moveElement } from "./Util/DOMHelper.js";

export class App {
    constructor() {
        throw new Error("App class cannot be instantiated.");
    }

    static init() {
        this.activeProjectList = new ProjectList("active");
        this.finishedProjectList = new ProjectList("finished");
    }

    static switchProject(project, switchBtn) {
        const type = this.activeProjectList.projects.find(
            (p) => p.id === project.id
        )
            ? "active"
            : "finished";

        if (type === "active") {
            this.activeProjectList.projects =
                this.activeProjectList.projects.filter(
                    (p) => p.id !== project.id
                );
            this.finishedProjectList.projects.push(project);

            switchBtn.textContent = "Activate";
            moveElement(project.id, `#finished-projects ul`);
        } else {
            this.finishedProjectList.projects =
                this.finishedProjectList.projects.filter(
                    (p) => p.id !== project.id
                );
            this.activeProjectList.projects.push(project);

            switchBtn.textContent = "Finish";
            moveElement(project.id, `#active-projects ul`);
        }
    }
}

App.init();

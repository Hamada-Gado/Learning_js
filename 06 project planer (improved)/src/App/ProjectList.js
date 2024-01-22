import { ProjectItem } from "./ProjectItem.js";

export class ProjectList {
    constructor(type) {
        this.type = type;
        this.projects = [];
        const prjItems = document.querySelectorAll(`#${type}-projects li`);
        for (const prjItem of prjItems) {
            this.projects.push(new ProjectItem(prjItem.id));
        }

        this.connectDroppable();
    }

    connectDroppable() {
        const list = document.querySelector(`#${this.type}-projects ul`);

        list.addEventListener("dragenter", (event) => {
            if (event.dataTransfer.types[0] === "text/plain") {
                event.preventDefault();
                list.parentElement.classList.add("droppable");
            }
        });

        list.addEventListener("dragover", (event) => {
            if (event.dataTransfer.types[0] === "text/plain") {
                event.preventDefault();
            }
        });

        list.addEventListener("dragleave", (event) => {
            if (
                event.relatedTarget.closest(`#${this.type}-projects ul`) !==
                list
            )
                list.parentElement.classList.remove("droppable");
        });

        list.addEventListener("drop", (event) => {
            const prjId = event.dataTransfer.getData("text/plain");
            if (this.projects.find((p) => p.id === prjId)) {
                list.parentElement.classList.remove("droppable");
                return;
            }

            document
                .getElementById(prjId)
                .querySelector("button:last-of-type")
                .click();

            list.parentElement.classList.remove("droppable");
        });
    }
}

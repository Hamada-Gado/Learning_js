class DOMHelper {
    static clearEventListeners(element) {
        const clonedEl = element.cloneNode(true);
        element.replaceWith(clonedEl);
        return clonedEl;
    }
    static moveElement(elId, newDestSelector) {
        const element = document.getElementById(elId);
        const destinationEl = document.querySelector(newDestSelector);
        destinationEl.append(element);
        element.scrollIntoView({ behavior: "smooth" });
    }
}

class Component {
    constructor(hostElementId, insertBefore = false) {
        if (hostElementId)
            this.hostElement = document.getElementById(hostElementId);
        else this.hostElement = document.body;

        this.insertBefore = insertBefore;
    }

    detach() {
        if (this.element) this.element.remove();
    }

    attach() {
        this.hostElement.insertAdjacentElement(
            this.insertBefore ? "afterbegin" : "beforeend",
            this.element
        );
    }
}

class Tooltip extends Component {
    constructor(closeNotifierFn, text, hostElementId) {
        super(hostElementId);
        this.closeNotifier = closeNotifierFn;
        this.text = text;
        this.create();
    }

    closeTooltip() {
        this.detach();
        this.closeNotifier();
    }

    create() {
        const tooltipEl = document.createElement("div");
        tooltipEl.className = "card";
        const tooltipTemplate = document.getElementById("tooltip");
        const tooltipBody = document.importNode(tooltipTemplate.content, true);
        tooltipBody.querySelector("p").textContent = this.text;
        tooltipEl.append(tooltipBody);

        const hostElPosLeft = this.hostElement.offsetLeft;
        const hostElPosTop = this.hostElement.offsetTop;
        const hostElHeight = this.hostElement.clientHeight;
        const parentElementScrolling = this.hostElement.parentElement.scrollTop;

        const x = hostElPosLeft + 20;
        const y = hostElPosTop + hostElHeight - parentElementScrolling - 10;

        tooltipEl.style.position = "absolute";
        tooltipEl.style.left = x + "px";
        tooltipEl.style.top = y + "px";

        tooltipEl.addEventListener("click", this.closeTooltip.bind(this));
        this.element = tooltipEl;
    }
}

class ProjectItem {
    hasActiveTooltip = false;

    constructor(id) {
        this.id = id;
        this.connectMoreInfoButton();
        this.connectSwitchButton();
        this.connectDrag();
    }

    showMoreInfoHandler() {
        if (this.hasActiveTooltip) return;

        const projectElement = document.getElementById(this.id);
        const tooltipText = projectElement.dataset.extraInfo;

        const tooltip = new Tooltip(
            () => (this.hasActiveTooltip = false),
            tooltipText,
            this.id
        );
        tooltip.attach();
        this.hasActiveTooltip = true;
    }

    connectMoreInfoButton() {
        const projectItemEl = document.getElementById(this.id);
        const moreInfoBtn = projectItemEl.querySelector("button:first-of-type");
        moreInfoBtn.addEventListener(
            "click",
            this.showMoreInfoHandler.bind(this)
        );
    }

    connectSwitchButton() {
        const projectItemEl = document.getElementById(this.id);
        const switchBtn = projectItemEl.querySelector("button:last-of-type");
        switchBtn.addEventListener(
            "click",
            App.switchProject.bind(App, this, switchBtn)
        );
    }

    connectDrag() {
        document
            .getElementById(this.id)
            .addEventListener("dragstart", (event) => {
                event.dataTransfer.setData("text/plain", this.id);
                event.dataTransfer.effectAllowed = "move";
            });
    }
}

class ProjectList {
    projects = [];

    constructor(type) {
        this.type = type;
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

class App {
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
            DOMHelper.moveElement(project.id, `#finished-projects ul`);
        } else {
            this.finishedProjectList.projects =
                this.finishedProjectList.projects.filter(
                    (p) => p.id !== project.id
                );
            this.activeProjectList.projects.push(project);

            switchBtn.textContent = "Finish";
            DOMHelper.moveElement(project.id, `#active-projects ul`);
        }
    }
}

App.init();

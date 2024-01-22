import { App } from "../App.js";

export class ProjectItem {
    constructor(id) {
        this.id = id;
        this.hasActiveTooltip = false;
        this.connectMoreInfoButton();
        this.connectSwitchButton();
        this.connectDrag();
    }

    showMoreInfoHandler() {
        if (this.hasActiveTooltip) return;

        const projectElement = document.getElementById(this.id);
        const tooltipText = projectElement.dataset.extraInfo;

        import("./Tooltip.js").then((module) => {
            const tooltip = new module.Tooltip(
                () => (this.hasActiveTooltip = false),
                tooltipText,
                this.id
            );
            tooltip.attach();
            this.hasActiveTooltip = true;
        });
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

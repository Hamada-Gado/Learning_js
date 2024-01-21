import { Component } from "./Component.js";

export class Tooltip extends Component {
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

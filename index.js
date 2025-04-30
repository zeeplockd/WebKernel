const shellPrefix = "> ";

class WebKernel {
    constructor(consoleId) {
        this.consoleElement = document.getElementById(consoleId);
    }

    setLineText(line, stringToPut) {
        let lineID = `wk-line-${line}`;
        let existingElement = document.getElementById(lineID);

        if (existingElement) {
            existingElement.innerText = stringToPut;
        } else {
            let text = document.createElement("span");
            text.setAttribute("id", lineID);
            text.innerText = stringToPut;
            this.consoleElement.appendChild(text);
        }
    }

    startShell() {
        this.setLineText(1, shellPrefix);
    }

    init() {
        this.setLineText(0, "Welcome to WebKernel!\n");
        this.startShell();

        document.addEventListener("keydown", this.handleKeyPress.bind(this));
    }

    handleKeyPress(event) {
        console.log(`Key pressed: ${event.key}`);
    }
}

const kernel = new WebKernel("wk-console");
kernel.init();

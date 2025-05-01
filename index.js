class WebKernel {
    constructor(consoleId, shellPrefix) {
        this.consoleElement = document.getElementById(consoleId);
        this.shellPrefix = shellPrefix;
    }

    setLineText(line, stringToPut) {
        let lineId = `wk-line-${line}`;
        let existingElement = document.getElementById(lineId);

        if (existingElement) {
            existingElement.innerText = stringToPut;
        } else {
            let text = document.createElement("span");
            text.setAttribute("id", lineId);
            text.innerText = stringToPut;
            this.consoleElement.appendChild(text);
        }
    }

    shell() {
        this.setLineText(this.shellLine, this.shellPrefix);
    }

    init() {
        this.currentInput = "";
        this.shellLine = 1;

        this.setLineText(0, "Welcome to WebKernel!\n");
        this.shell();

        document.addEventListener("keydown", this.handleKeyPress.bind(this));
    }

    handleKeyPress(event) {
        if (!event.repeat && event.key.length === 1) {
            this.currentInput += event.key;
            this.setLineText(this.shellLine, this.shellPrefix + this.currentInput);
        } else if (event.key === "Backspace") {
            this.currentInput = this.currentInput.slice(0, -1);
            this.setLineText(this.shellLine, this.shellPrefix + this.currentInput);
        } else if (event.key === "Enter") {
            this.shellLine++;
            this.shell();
        }
    }
}

const kernel = new WebKernel("wk-console", "> ");
kernel.init();

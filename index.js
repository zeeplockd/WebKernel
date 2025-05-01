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

    startShell() {
        this.setLineText(1, this.shellPrefix);
    }

    init() {
        this.currentInput = "";
        
        this.setLineText(0, "Welcome to WebKernel!\n");
        this.startShell();

        document.addEventListener("keydown", this.handleKeyPress.bind(this));
    }

    handleKeyPress(event) {
        if (!event.repeat && event.key.length === 1) {
            this.currentInput += event.key;
            this.setLineText(1, this.shellPrefix + this.currentInput);
        } else if (event.key === "Backspace") { // Handle backspace
            this.currentInput = this.currentInput.slice(0, -1);
            this.setLineText(1, this.shellPrefix + this.currentInput);
        }
    }
}

const kernel = new WebKernel("wk-console", "> ");
kernel.init();

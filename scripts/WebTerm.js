export class WebTerm {
    constructor(consoleId, shellPrefix) {
        this.consoleElement = document.getElementById(consoleId);
        this.shellPrefix = shellPrefix;
    }

    setLineText(line, stringToPut) {
        let lineId = `wt-line-${line}`;
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
        this.shellLine = 0;

        this.setLineText(-1, "Welcome to WebTerm!\n");
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
            this.setLineText(this.shellLine, this.shellPrefix + this.currentInput + "\n");
            this.shellLine++;
            this.currentInput = "";
            this.shell();
        }
    }
}

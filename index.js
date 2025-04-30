var shellPrefix = "> ";

class WebKernel {
    static setLineText(line, stringToPut) {
        var wkConsole = document.getElementById("wk-console");
        var lineID = `wk-line-${line}`;

        var text = document.createElement("span");
        text.setAttribute("id", lineID);
        
        text.innerText = stringToPut;

        var lineElementIfExists = document.getElementById(lineID);
        if (lineElementIfExists == null) {
            wkConsole.appendChild(text);
        } else {
            lineElementIfExists.remove();
            wkConsole.appendChild(text);
        };
    };
};

addEventListener("keydown", (event) => {
    // handle key presses
});

function startShell() {
    WebKernel.setLineText(1, shellPrefix);
};

function main() {
    WebKernel.setLineText(0, "Welcome to WebKernel!\n");
    startShell()
};

main();
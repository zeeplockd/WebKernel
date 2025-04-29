var strNumber = 0;
const colorMap = {
    "&0": "#000000",
    "&1": "#0000aa",
    "&2": "#00aa00",
    "&3": "#00aaaa",
    "&4": "#aa0000",
    "&5": "#aa00aa",
    "&6": "#ffaa00",
    "&7": "#aaaaaa",
    "&8": "#555555",
    "&9": "#5555ff",
    "&a": "#55ff55",
    "&b": "#55ffff",
    "&c": "#ff5555",
    "&d": "#ff55ff",
    "&e": "#ffff55",
    "&f": "#ffffff"
};

class WebKernel {
    static stringOut(stringToPut) {
        var wkConsole = document.getElementById("wk-console");
        var lineID = `wk-line-${strNumber}`;
        strNumber++;

        var formattedText = document.createElement("span");
        formattedText.setAttribute("id", lineID);

        stringToPut = stringToPut.replace(/\&([0-9a-f])/g, "_ESCAPED_$1"); // Mark them uniquely

        stringToPut = stringToPut.replace(/\\/g, "\\"); // Replace "\\" with "\"
        
        var parts = stringToPut.split(/(&[0-9a-f])/g);
        var currentColor = "#ffffff"; // Default text color

        parts.forEach(part => {
            if (colorMap[part]) {
                currentColor = colorMap[part]; // Apply color if valid
            } else {
                let span = document.createElement("span");

                span.innerText = part.replace(/_ESCAPED_([0-9a-f])/g, "&$1");
                span.style.color = currentColor;
                formattedText.appendChild(span);
            }
        });

        wkConsole.appendChild(formattedText);
        wkConsole.appendChild(document.createElement("br"));
    }
}


WebKernel.stringOut("Hello WebKernel!");
WebKernel.stringOut("&cThis &6is a &etest &afor &9Minecraft-like &dcolors.");
WebKernel.stringOut("\\\\ backslash!");
WebKernel.stringOut("\\&cred text (frfr)");
WebKernel.stringOut("\\\\&cred text");

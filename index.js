var strNumber = 0;

class WebKernel {
    static stringOut(stringToPut) {
        var wkConsole = document.getElementById("wk-console");
        var lineID = `wk-line-${strNumber}`;
        strNumber++;

        var text = document.createElement("span");
        text.setAttribute("id", lineID);
        
        var currentColor = "#ffffff";
        text.style.color = currentColor;
        text.innerText = stringToPut;

        wkConsole.appendChild(text);
        wkConsole.appendChild(document.createElement("br"));
    }
}

WebKernel.stringOut("Hello WebKernel!");
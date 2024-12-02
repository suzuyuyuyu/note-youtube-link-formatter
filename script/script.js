let textareaIn = "";
let textareaOut = "";

// window.onload = function() {
//     processText();
// };

// remove (?|&)si= from URL
function removeAfterSi(input) {
    return input.replace(/(\?|&)si=.*/g, '');
}

function processText() {
    let textIn = document.getElementById("inputText").value;

    // console.log("processText: " + textIn);
    let textOut = "";
    let text_temp = "";
    let is_live = false;

    // delete (?|&)si=
    if (textIn.includes("?si=") || textIn.includes("&si=")) {
        textIn = removeAfterSi(textIn);
    }

    if (textIn.includes("/live/")) {
        is_live = true;
    }
    console.log("is_live: " + is_live);

    if (is_live) {
        if (textIn.startsWith("https://")) {
            text_temp = textIn.substring(8);
            if (text_temp.startsWith("www.youtube.com") && is_live ) {
                text_temp = text_temp.split("/live/")[1];
            }else if (text_temp.startsWith("www.youtube.com") && text_temp.includes("watch?v=")) {
                text_temp = text_temp.split("watch?v=")[1];
            }else if (text_temp.startsWith("youtu.be") && text_temp.includes("youtu.be/")) {
                text_temp = text_temp.split("youtu.be/")[1];
            }
            console.log("text_temp: " + text_temp);
            textOut = "https://m.youtube.com/watch?v=" + text_temp;
        }else{
            textOut = "Invalid URL:  " + textIn;
        }
    }else{
        textOut = "Does not include live stream URL:\n  " + textIn;
    }
    document.getElementById("outputText").value = textOut;
}

function copyToClipboard() {
    let copyTarget = document.getElementById("outputText");

    copyTarget.select();
    document.execCommand("Copy");

    changeAlertColor();
}

function changeAlertColor() {
    const copiedAlert = document.getElementById("copiedLabel");
    copiedAlert.style.color = "#000";
    copiedAlert.style.transition = "all 0.3s";
    setTimeout(function() {
        copiedAlert.style.color = "transparent";
    }, 2000);
    console.log("changed")
}

function deleteText() {
    let reset_target_in = document.getElementById("inputText");
    let reset_target_out = document.getElementById("outputText");


    reset_target_in.value = '';
    reset_target_out.value = '';
    // 15px * 8rows
    reset_target_in.style.height = "120px";
    reset_target_out.style.height = "120px";
}

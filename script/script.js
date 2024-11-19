let textareaIn = "";
let textareaOut = "";

// window.onload = function() {
//     processText();
// };

function processText() {
    let textIn = document.getElementById("inputText").value;
    //
    // console.log("processText: " + textIn);
    let textOut = "";
    let text_temp = "";
    let is_live = false;
    //
    if (textIn.includes("/live")) {
        is_live = true;
    }
    console.log("is_live: " + is_live);
    //
    if (textIn.startsWith("https://")) {
        text_temp = textIn.substring(8);
        if (text_temp.startsWith("www.youtube.com") && text_temp.includes("watch?v=")) {
            text_temp = text_temp.split("watch?v=")[1];
        }else if (text_temp.startsWith("youtu.be") && text_temp.includes("youtu.be/")) {
            text_temp = text_temp.split("youtu.be/")[1];
        }
        console.log("text_temp: " + text_temp);
        textOut = "https://m.youtube.com/watch?v=" + text_temp;
    }else{
        textOut = "Invalid URL";
    }
    document.getElementById("outputText").value = textOut;
}

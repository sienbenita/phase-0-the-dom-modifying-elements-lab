document.querySelector("#main").remove();

const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.innerHTML = "is the champion"
document.body.append(newHeader);
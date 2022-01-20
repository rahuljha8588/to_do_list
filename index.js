let btn = document.querySelector(".fas");
btn.addEventListener("click", function () {
  let doc = document.querySelector("input");
  let newli = document.createElement("li");
  if (doc.value != "") {
    newli.innerHTML = doc.value;
    let parentelement = document.querySelector("ul");
    parentelement.appendChild(newli);
    doc.value = "";

    newli.addEventListener("click", function () {
      newli.style.textDecoration = "line-through";
      newli.style.backgroundColor = "red";
    });
    newli.addEventListener("dblclick", function () {
        parentelement.removeChild(newli);
    });
  }
});

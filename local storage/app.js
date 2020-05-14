const radioBtns = document.getElementsByName('language');

for (let i = 0; i < radioBtns.length; i++) {

  if (typeof(Storage) !== "undefined") {
    let language = localStorage.getItem("language");

    if (radioBtns[i].value === language) radioBtns[i].checked = "checked";

    radioBtns[i].addEventListener('click', (event) => {
      localStorage.setItem("language", event.target.value);
    })
  }
}
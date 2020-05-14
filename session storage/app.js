const radioBtns = document.getElementsByName('language');

for (let i = 0; i < radioBtns.length; i++) {

  if (typeof(Storage) !== "undefined") {
    let language = sessionStorage.getItem("language");

    if (radioBtns[i].value === language) radioBtns[i].checked = "checked";

    radioBtns[i].addEventListener('click', (event) => {
      sessionStorage.setItem("language", event.target.value);
    })
  }
}
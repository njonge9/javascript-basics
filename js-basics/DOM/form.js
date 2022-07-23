function validateForm() {
  let click = document.forms["myForm"]["fname"].value;
  if (click == "") {
    alert("Name must be filled!");
    return false;
  }
}

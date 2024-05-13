const addData = document.querySelector(".add");
const search = document.querySelector(".in_data .Search");
const listAdd = document.querySelector(".todos");
const btn = document.querySelector(".delete");

const generat_data = (todo) => {
  const html = `<li><span>${todo}</span><i class="far fa-trash-alt delete"></i>`;
  listAdd.innerHTML += html;
  console.log(html);
};
addData.addEventListener("submit", (e) => {
  e.preventDefault();

  const addtodo = addData.add.value.trim();
  if (addData.length) {
    generat_data(addtodo);
  }
  addData.reset();
});
// Removing Elements
listAdd.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

const filter_items = (tem) => {
  Array.from(listAdd.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(tem))
    .forEach((todo) => todo.classList.add("filtered"));

  Array.from(listAdd.children)
    .filter((todo) => todo.textContent.includes(tem))
    .forEach((todo) => todo.classList.remove("filtered"));
};

search.addEventListener("keyup", (e) => {
  const keyUp_data = search.value.trim().toLowerCase();
  filter_items(keyUp_data);
  console.log(e);
});

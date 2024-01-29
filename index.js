const list = document.getElementById("list");
const todoInput = document.getElementById('todoInput');

function onFormSubmit(e) {
  e.preventDefault();
  const inputValue = e.target.children[0].value;
  if (!inputValue) {
    alert("Please enter a value."); // Validasi jika input kosong
    return;
  };
  todoInput.value = '';
  list.appendChild(createListItem(inputValue));
};

function createListItem(inputValue) {
  const item = document.createElement("div");
  item.innerHTML = `
    <div class='listItemDetail'>
        <input type='checkbox'/>
         <span>${inputValue}</span>
    </div>
    <button onclick='editItem(this)' class='tombol1'>Edit</button/>
    <button onclick='deleteItem(event)' class='tombol'>X</button>
    `;
  return item;
}

function validateInput(input) {
  const regex = /^[^0-9]+$/;
  const value = input.value;
  if (!regex.test(value)) {
    input.value = value.replace(/[0-9]/g, "");
  }
};

function deleteItem(e) {
    const confirmDelete = confirm("Are you sure you want to delete this item?");
    if(confirmDelete) {
      const parent = e.target.parentElement;
      list.removeChild(parent);
    }
};

function editItem(button) {
  const listItem = button.parentElement;
  const span = listItem.querySelector("span");
  const newText = prompt("Edit item:", span.innerText);
  if (newText !== null) {
    span.innerText = newText;
  }
};

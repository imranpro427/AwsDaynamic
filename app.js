// Select the form and the list
const itemForm = document.getElementById("itemForm");
const itemList = document.getElementById("itemList");

// Add event listener to the form
itemForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent page reload

  // Get the value from the input
  const itemInput = document.getElementById("itemInput");
  const newItem = itemInput.value;

  if (newItem.trim() !== "") {
    // Create a new list item
    const listItem = document.createElement("li");
    listItem.textContent = newItem;

    // Add the new item to the list
    itemList.appendChild(listItem);

    // Clear the input field
    itemInput.value = "";
  }
});

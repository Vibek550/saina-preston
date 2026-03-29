// Example: menu array
const menu = [
  { name: "Butter Chicken", price: 19.8, desc: "Tandoori roasted chicken tikka with sauce" },
  { name: "Saffron Rice", price: 5.5, desc: "" },
  // Add all other 50+ items here
];

// Display menu on the page
const menuContainer = document.getElementById("menu-container");
menu.forEach(item => {
  const div = document.createElement("div");
  div.classList.add("menu-item");
  div.innerHTML = `
    <h3>${item.name} - $${item.price}</h3>
    <p>${item.desc}</p>
    <button onclick="alert('Pay at counter for ${item.name}')">Pay at Counter</button>
  `;
  menuContainer.appendChild(div);
});
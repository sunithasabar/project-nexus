document.addEventListener('DOMContentLoaded', () => {
    const menuForm = document.getElementById('menuForm');
    const menuList = document.getElementById('menuList');

    menuForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const itemName = document.getElementById('itemName').value;
        const itemPrice = parseFloat(document.getElementById('itemPrice').value);

        if (itemName && !isNaN(itemPrice)) {
            addMenuItem(itemName, itemPrice);
            menuForm.reset();
        }
    });

    function addMenuItem(name, price) {
        const li = document.createElement('li');
        li.className = 'menu-item';
        li.innerHTML = `
            <span>${name} - $${price.toFixed(2)}</span>
            <button onclick="removeMenuItem(this)">Delete</button>
        `;
        menuList.appendChild(li);
    }

    window.removeMenuItem = function(button) {
        button.parentElement.remove();
    };
});
let user = JSON.parse(localStorage.getItem('loggedInUser'));

const pizzaTypes = [
    { name: 'Margherita Pizza', base: 1800, image: 'https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Pepperoni Pizza', base: 2200, image: 'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'BBQ Chicken Pizza', base: 2500, image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Veggie Pizza', base: 2000, image: 'https://images.pexels.com/photos/1435907/pexels-photo-1435907.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Hawaiian Pizza', base: 2300, image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Cheese Burst Pizza', base: 2700, image: 'https://images.pexels.com/photos/1435907/pexels-photo-1435907.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Tandoori Pizza', base: 2500, image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Four Cheese Pizza', base: 2600, image: 'https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Fajita Pizza', base: 2400, image: 'https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Chicken Tikka Pizza', base: 2300, image: 'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Mushroom Pizza', base: 2100, image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Spicy Italian Pizza', base: 2600, image: 'https://images.pexels.com/photos/1435907/pexels-photo-1435907.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Meat Lovers Pizza', base: 2800, image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Mexican Pizza', base: 2400, image: 'https://images.pexels.com/photos/1435907/pexels-photo-1435907.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Paneer Tikka Pizza', base: 2200, image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Garlic Chicken Pizza', base: 2350, image: 'https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'White Sauce Pizza', base: 2500, image: 'https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Sausage Pizza', base: 2250, image: 'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Buffalo Chicken Pizza', base: 2550, image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Pesto Chicken Pizza', base: 2650, image: 'https://images.pexels.com/photos/1435907/pexels-photo-1435907.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Roasted Veggie Pizza', base: 2150, image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Spinach & Feta Pizza', base: 2350, image: 'https://images.pexels.com/photos/1435907/pexels-photo-1435907.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Mac & Cheese Pizza', base: 2450, image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Truffle Mushroom Pizza', base: 2900, image: 'https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Jalapeno Popper Pizza', base: 2200, image: 'https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Bacon Ranch Pizza', base: 2600, image: 'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=400' }
];

const sizes = [
    { label: 'Small', extra: 0 },
    { label: 'Medium', extra: 400 },
    { label: 'Large', extra: 800 },
    { label: 'Extra Large', extra: 1200 }
];

const burgerTypes = [
    { name: 'Cheese Burger', base: 1600 },
    { name: 'Chicken Burger', base: 1800 },
    { name: 'Beef Burger', base: 2000 },
    { name: 'Zinger Burger', base: 1900 },
    { name: 'Double Cheese Burger', base: 2200 },
    { name: 'BBQ Burger', base: 2050 },
    { name: 'Spicy Burger', base: 1850 },
    { name: 'Classic Burger', base: 1700 },
    { name: 'Mushroom Burger', base: 2100 },
    { name: 'Bacon Burger', base: 2300 },
    { name: 'Fish Burger', base: 1950 },
    { name: 'Veggie Burger', base: 1500 },
    { name: 'Jalapeno Burger', base: 1900 },
    { name: 'Tower Burger', base: 2500 },
    { name: 'Crunchy Burger', base: 1800 },
    { name: 'Grilled Chicken Burger', base: 2100 },
    { name: 'Smash Burger', base: 2400 },
    { name: 'Turkey Burger', base: 2000 },
    { name: 'Black Bean Burger', base: 1600 },
    { name: 'Swiss Cheese Burger', base: 2150 },
    { name: 'Texas Burger', base: 2350 },
    { name: 'Ranch Burger', base: 1950 },
    { name: 'Teriyaki Burger', base: 2200 },
    { name: 'Hawaiian Burger', base: 2100 },
    { name: 'Breakfast Burger', base: 2050 },
    { name: 'Monster Burger', base: 2800 },
    { name: 'Steak Burger', base: 2600 },
    { name: 'Gourmet Burger', base: 2700 }
];

const shawarmaTypes = [
    { name: 'Chicken Shawarma', base: 1500 },
    { name: 'Beef Shawarma', base: 1600 },
    { name: 'Zinger Shawarma', base: 1700 },
    { name: 'Spicy Shawarma', base: 1550 },
    { name: 'Classic Shawarma', base: 1500 },
    { name: 'Cheese Shawarma', base: 1650 },
    { name: 'Mix Grill Shawarma', base: 1800 },
    { name: 'Mayo Shawarma', base: 1600 },
    { name: 'Garlic Shawarma', base: 1650 },
    { name: 'Peri Peri Shawarma', base: 1700 },
    { name: 'Arabic Shawarma', base: 1850 },
    { name: 'Mexican Shawarma', base: 1750 },
    { name: 'Tikka Shawarma', base: 1600 },
    { name: 'Fajita Shawarma', base: 1650 },
    { name: 'Mutton Shawarma', base: 2000 },
    { name: 'Special Shawarma', base: 1900 },
    { name: 'Jumbo Shawarma', base: 2100 },
    { name: 'Diet Shawarma', base: 1400 },
    { name: 'Turkish Shawarma', base: 1800 },
    { name: 'Lebanese Shawarma', base: 1900 }
];

const drinkTypes = [
    { name: 'Pepsi Cold Drink', price: 560, requires: 'pizza' },
    { name: '7Up Cold Drink', price: 560, requires: 'pizza' },
    { name: 'Mirinda Cold Drink', price: 560, requires: 'pizza' },
    { name: 'Sting Cold Drink', price: 560, requires: 'pizza' },
    { name: 'Slice Cold Drink', price: 560, requires: 'pizza' },
    { name: 'Mountain Dew Cold Drink', price: 560, requires: 'pizza' },
    { name: 'Sprite Cold Drink', price: 560, requires: 'pizza' },
    { name: 'Miranda Cold Drink', price: 560, requires: 'pizza' },
    { name: 'Orange Cold Drink', price: 560, requires: 'pizza' },
    { name: 'Lemon Cold Drink', price: 560, requires: 'pizza' },
    { name: 'Coca Cola', price: 560, requires: null },
    { name: 'Fanta', price: 560, requires: null },
    { name: 'Diet Coke', price: 600, requires: null },
    { name: 'Coke Zero', price: 600, requires: null },
    { name: 'Sprite Zero', price: 600, requires: null },
    { name: 'Red Bull', price: 900, requires: null },
    { name: 'Monster Energy', price: 850, requires: null },
    { name: 'Water Bottle', price: 150, requires: null },
    { name: 'Fresh Lime', price: 300, requires: null },
    { name: 'Pina Colada', price: 800, requires: null },
    { name: 'Mint Margarita', price: 700, requires: null },
    { name: 'Mango Shake', price: 650, requires: null },
    { name: 'Chocolate Shake', price: 750, requires: null },
    { name: 'Strawberry Shake', price: 750, requires: null },
    { name: 'Oreo Shake', price: 850, requires: null }
];

const friesTypes = [
    { name: 'Plain Fries', base: 500 },
    { name: 'Masala Fries', base: 600 },
    { name: 'Garlic Mayo Fries', base: 700 },
    { name: 'Cheese Fries', base: 800 },
    { name: 'Loaded Fries', base: 1200 },
    { name: 'BBQ Fries', base: 750 },
    { name: 'Spicy Fries', base: 650 },
    { name: 'Peri Peri Fries', base: 700 },
    { name: 'Jalapeno Cheese Fries', base: 900 },
    { name: 'Pizza Fries', base: 1300 },
    { name: 'Chicken Loaded Fries', base: 1400 },
    { name: 'Beef Loaded Fries', base: 1500 },
    { name: 'Curly Fries', base: 800 },
    { name: 'Waffle Fries', base: 850 },
    { name: 'Sweet Potato Fries', base: 900 },
    { name: 'Tornado Fries', base: 600 },
    { name: 'Animal Style Fries', base: 1100 },
    { name: 'Truffle Fries', base: 1000 },
    { name: 'Bacon Cheese Fries', base: 1250 },
    { name: 'Zinger Fries', base: 1150 }
];

const menuItems = [];

pizzaTypes.forEach(pizza => {
    sizes.forEach(size => {
        menuItems.push({
            name: `${pizza.name} (${size.label})`,
            category: 'pizza',
            price: pizza.base + size.extra,
            image: pizza.image,
            requires: null,
            size: size.label
        });
    });
});

burgerTypes.forEach(burger => {
    ['Small', 'Medium', 'Large'].forEach(size => {
        menuItems.push({
            name: `${burger.name} (${size})`,
            category: 'burger',
            price: burger.base + (size === 'Medium' ? 200 : size === 'Large' ? 400 : 0),
            image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=400',
            requires: null,
            size
        });
    });
});

shawarmaTypes.forEach(shawarma => {
    ['Regular', 'Large'].forEach(size => {
        const mappedSize = size === 'Regular' ? 'Small' : size;
        menuItems.push({
            name: `${shawarma.name} (${size})`,
            category: 'shawarma',
            price: shawarma.base + (size === 'Large' ? 250 : 0),
            image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=400',
            requires: null,
            size: mappedSize
        });
    });
});

drinkTypes.forEach(drink => {
    menuItems.push({
        name: drink.name,
        category: 'drink',
        price: drink.price,
        image: 'https://images.pexels.com/photos/2775860/pexels-photo-2775860.jpeg?auto=compress&cs=tinysrgb&w=400',
        requires: drink.requires,
        size: 'Small'
    });
});

friesTypes.forEach(fries => {
    ['Regular', 'Large'].forEach(size => {
        const mappedSize = size === 'Regular' ? 'Small' : size;
        menuItems.push({
            name: `${fries.name} (${size})`,
            category: 'fries',
            price: fries.base + (size === 'Large' ? 300 : 0),
            image: 'https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg?auto=compress&cs=tinysrgb&w=400',
            requires: null,
            size: mappedSize
        });
    });
});

let selectedSize = 'All';
const sizeOptions = ['All', 'Small', 'Medium', 'Large', 'Extra Large'];

function renderSizeFilters() {
    const filters = document.getElementById('size-filters');
    if (!filters) return;
    filters.innerHTML = '';
    sizeOptions.forEach(size => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'size-filter-btn';
        if (selectedSize === size) btn.classList.add('active');
        btn.textContent = size;
        btn.addEventListener('click', () => {
            selectedSize = size;
            renderSizeFilters();
            renderMenuItems();
        });
        filters.appendChild(btn);
    });
}

function renderMenuItems() {
    const grid = document.querySelector('.menu-grid');
    grid.innerHTML = '';
    const filteredItems = menuItems.filter(item => {
        return selectedSize === 'All' || item.size === selectedSize;
    });
    filteredItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'menu-item';
        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>PKR ${item.price}</p>
            ${item.requires === 'pizza' ? '<p>Only available with pizza.</p>' : ''}
            <button class="order-btn" data-item="${item.name}" data-price="${item.price}" data-category="${item.category}" ${item.requires ? `data-requires="${item.requires}"` : ''}>Order Now</button>
        `;
        grid.appendChild(card);
    });
    attachOrderButtons();
}

function attachOrderButtons() {
    document.querySelectorAll('.order-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const itemName = this.dataset.item;
            const itemPrice = parseInt(this.dataset.price, 10);
            const itemCategory = this.dataset.category;
            const itemRequires = this.dataset.requires || null;

            // Allowing orders without login

            if (itemRequires === 'pizza' && !confirm('This item requires a pizza order. Continue?')) {
                return;
            }

            openOrderModal(itemName, itemPrice, itemCategory);
        });
    });
}

function buildMenu() {
    renderSizeFilters();
    renderMenuItems();
}

function setUserView() {
        document.getElementById('menu').style.display = 'block';
    if (user) {
        document.getElementById('menu').style.display = 'block';
        document.getElementById('logout').style.display = 'inline';
        document.getElementById('my-orders').style.display = 'inline';
        const loginLink = document.querySelector('nav a[href="login.html"]');
        const signupLink = document.querySelector('nav a[href="signup.html"]');
        if (loginLink) loginLink.style.display = 'none';
        if (signupLink) signupLink.style.display = 'none';
    }
}

function openOrderModal(itemName, itemPrice, category) {
    const modal = document.getElementById('order-modal');
    const itemDisplay = document.getElementById('order-item-display');
    const unitPriceSpan = document.getElementById('unit-price');
    const quantityInput = document.getElementById('modal-quantity');
    const displayQty = document.getElementById('display-quantity');
    const totalBill = document.getElementById('total-bill');
    
    itemDisplay.innerHTML = `<p><strong>Item:</strong> ${itemName}</p>`;
    unitPriceSpan.textContent = itemPrice;
    quantityInput.value = 1;
    displayQty.textContent = 1;
    totalBill.innerHTML = `<strong>Total Bill: PKR ${itemPrice}</strong>`;
    
    // Store for later use
    modal.dataset.itemName = itemName;
    modal.dataset.itemPrice = itemPrice;
    modal.dataset.category = category;
    
    modal.style.display = 'block';
    
    // Update total when quantity changes
    quantityInput.addEventListener('change', function() {
        const qty = parseInt(this.value) || 1;
        const total = itemPrice * qty;
        displayQty.textContent = qty;
        totalBill.innerHTML = `<strong>Total Bill: PKR ${total}</strong>`;
    });
}

function closeOrderModal() {
    document.getElementById('order-modal').style.display = 'none';
    document.getElementById('modal-name').value = '';
    document.getElementById('modal-phone').value = '';
    document.getElementById('modal-address').value = '';
    document.getElementById('modal-quantity').value = '1';
}

function openOrdersModal() {
    const modal = document.getElementById('orders-modal');
    const ordersList = document.getElementById('orders-list');
    ordersList.innerHTML = '';
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    const userOrders = orders.filter(order => order.user === user.email);
    if (userOrders.length === 0) {
        ordersList.innerHTML = '<p>No orders yet.</p>';
    } else {
        userOrders.forEach(order => {
            const orderDiv = document.createElement('div');
            orderDiv.className = 'order-item';
            let itemsHtml = '';
            order.items.forEach(item => {
                const menuItem = menuItems.find(m => m.name === item.item);
                const image = menuItem ? menuItem.image : '';
                itemsHtml += `<div style="display:flex; align-items:center; margin:0.5rem 0;"><img src="${image}" alt="${item.item}"><span>${item.item} x${item.quantity}</span></div>`;
            });
            orderDiv.innerHTML = `
                <p><strong>Date:</strong> ${new Date(order.date).toLocaleString()}</p>
                <p><strong>Items:</strong></p>
                ${itemsHtml}
                <p><strong>Total:</strong> PKR ${order.total}</p>
                <p><strong>Customer:</strong> ${order.customer.name}, ${order.customer.phone}, ${order.customer.address}</p>
            `;
            ordersList.appendChild(orderDiv);
        });
    }
    modal.style.display = 'block';
}

function displayOrders() {
    const ordersList = document.getElementById('orders-list');
    if (!ordersList) return;
    ordersList.innerHTML = '';
    if (!user) {
        ordersList.innerHTML = '<p>Please login to view your orders.</p>';
        return;
    }
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    const userOrders = orders.filter(order => order.user === user.email);
    if (userOrders.length === 0) {
        ordersList.innerHTML = '<p>No orders yet.</p>';
    } else {
        userOrders.forEach(order => {
            const orderDiv = document.createElement('div');
            orderDiv.className = 'order-item';
            const statusColor = order.status === 'completed' ? '#27ae60' : order.status === 'delivered' ? '#3498db' : '#ff9d2e';
            const statusText = order.status ? order.status.toUpperCase() : 'PENDING';
            let itemsHtml = '';
            order.items.forEach(item => {
                const menuItem = menuItems.find(m => m.name === item.item);
                const image = menuItem ? menuItem.image : '';
                itemsHtml += `<div style="display:flex; align-items:center; margin:0.5rem 0;"><img src="${image}" alt="${item.item}"><span>${item.item} x${item.quantity}</span></div>`;
            });
            orderDiv.innerHTML = `
                <p><strong>Date:</strong> ${new Date(order.date).toLocaleString()}</p>
                <p><strong>Status:</strong> <span style="background: ${statusColor}; color: white; padding: 0.25rem 0.75rem; border-radius: 8px; font-weight: bold;">${statusText}</span></p>
                <p><strong>Items:</strong></p>
                ${itemsHtml}
                <p><strong>Total:</strong> PKR ${order.total}</p>
                <p><strong>Customer:</strong> ${order.customer.name}, ${order.customer.phone}, ${order.customer.address}</p>
            `;
            ordersList.appendChild(orderDiv);
        });
    }
}

window.onload = function() {
    buildMenu();
    setUserView();
    const toggleBtn = document.getElementById('toggle-menu');
    const navMenu = document.getElementById('nav');
    if (toggleBtn && navMenu) {
        toggleBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
            });
        });
    }

    const sizeToggleBtn = document.getElementById('size-toggle');
    const sizeFilters = document.getElementById('size-filters');
    if (sizeToggleBtn && sizeFilters) {
        sizeToggleBtn.addEventListener('click', function() {
            sizeFilters.classList.toggle('visible');
        });
    }

    // Theme toggle
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', function() {
            document.body.classList.toggle('dark-theme');
            const isDarkTheme = document.body.classList.contains('dark-theme');
            localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
        });
        // Load saved theme on page load
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-theme');
        }
    }

    document.getElementById('logout').addEventListener('click', function() {
        localStorage.removeItem('loggedInUser');
        location.reload();
    });

    document.getElementById('my-orders').addEventListener('click', openOrdersModal);
    
    // Modal handlers
    const modal = document.getElementById('order-modal');
    const closeBtn = document.querySelector('.close');
    const placeOrderBtn = document.getElementById('place-order');
    
    closeBtn.addEventListener('click', closeOrderModal);
    
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeOrderModal();
        }
    });
    
    const ordersModal = document.getElementById('orders-modal');
    document.getElementById('close-orders').addEventListener('click', function() {
        ordersModal.style.display = 'none';
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === ordersModal) {
            ordersModal.style.display = 'none';
        }
    });
    
    placeOrderBtn.addEventListener('click', function() {
        const name = document.getElementById('modal-name').value.trim();
        const phone = document.getElementById('modal-phone').value.trim();
        const address = document.getElementById('modal-address').value.trim();
        const quantity = parseInt(document.getElementById('modal-quantity').value) || 1;
        
        if (!name || !phone || !address) {
            alert('Please fill in all fields!');
            return;
        }
        
        if (phone.length < 10) {
            alert('Please enter a valid phone number!');
            return;
        }
        
        const itemName = modal.dataset.itemName;
        const itemPrice = parseInt(modal.dataset.itemPrice);
        const category = modal.dataset.category;
        const total = itemPrice * quantity;
        
        // Create order
        const order = {
            user: user.email,
            customer: { name, phone, address },
            items: [
                { item: itemName, price: itemPrice, category, quantity }
            ],
            total: total,
            date: new Date().toISOString(),
            status: 'pending',
            orderId: Date.now()
        };
        
        // Save order
        const orders = JSON.parse(localStorage.getItem('orders') || '[]');
        orders.push(order);
        localStorage.setItem('orders', JSON.stringify(orders));
        
        alert('Order placed successfully! Total: PKR ' + total);
        closeOrderModal();
    });

    // Problem form handler
    const problemForm = document.getElementById('problem-form');
    if (problemForm) {
        problemForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('problem-name').value.trim();
            const number = document.getElementById('problem-number').value.trim();
            const problem = document.getElementById('problem-description').value.trim();
            if (!name || !number || !problem) {
                alert('Please fill all fields!');
                return;
            }
            const problems = JSON.parse(localStorage.getItem('problems') || '[]');
            problems.push({ name, number, problem, date: new Date().toISOString() });
            localStorage.setItem('problems', JSON.stringify(problems));
            alert('Problem submitted successfully!');
            window.location.href = 'admin.html';
        });
    }
};
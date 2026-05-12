const ADMIN_PASSCODE = 'admin123';

function formatOrderItems(items) {
    return items.map(item => `
        <div class="admin-order-item">
            <span>${item.item} x${item.quantity}</span>
            <span>PKR ${item.price}</span>
        </div>
    `).join('');
}

function getStatusBadge(status) {
    const statusColors = {
        'pending': '#ff9d2e',
        'completed': '#27ae60',
        'delivered': '#3498db'
    };
    return `<span class="status-badge" style="background: ${statusColors[status] || '#ff9d2e'}">${status.toUpperCase()}</span>`;
}

function markOrderComplete(orderId) {
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    const orderIndex = orders.findIndex(o => o.orderId === orderId);
    
    if (orderIndex !== -1) {
        orders[orderIndex].status = 'completed';
        localStorage.setItem('orders', JSON.stringify(orders));
        alert('Order marked as completed!');
        renderAdminOrders();
    }
}

function renderAdminOrders() {
    const ordersContainer = document.getElementById('admin-orders');
    if (!ordersContainer) return;

    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    if (orders.length === 0) {
        ordersContainer.innerHTML = '<p>No orders have been placed yet.</p>';
        return;
    }

    ordersContainer.innerHTML = orders.map((order, index) => `
        <div class="admin-order-card">
            <div class="admin-order-header">
                <div>
                    <strong>Order #${index + 1}</strong>
                    ${getStatusBadge(order.status || 'pending')}
                </div>
                <div>${new Date(order.date).toLocaleString()}</div>
            </div>
            <div class="admin-order-details">
                <p><strong>Placed By:</strong> ${order.user || 'Guest'}</p>
                <p><strong>Customer Name:</strong> ${order.customer.name}</p>
                <p><strong>Phone:</strong> ${order.customer.phone}</p>
                <p><strong>Address:</strong> ${order.customer.address}</p>
                <p><strong>Total:</strong> PKR ${order.total}</p>
            </div>
            <div class="admin-order-items">
                <h3>Items</h3>
                ${formatOrderItems(order.items)}
            </div>
            <div class="admin-order-actions">
                ${order.status !== 'completed' ? `<button class="submit-order-btn" onclick="markOrderComplete(${order.orderId})">Mark as Completed</button>` : '<p style="color: #27ae60; font-weight: bold;">✓ Order Completed</p>'}
            </div>
        </div>
    `).join('');
}

function renderAdminProblems() {
    const problemsContainer = document.getElementById('admin-problems');
    if (!problemsContainer) return;

    const problems = JSON.parse(localStorage.getItem('problems') || '[]');
    if (problems.length === 0) {
        problemsContainer.innerHTML = '<p>No problems have been reported yet.</p>';
        return;
    }

    problemsContainer.innerHTML = problems.map((problem, index) => `
        <div class="admin-problem-card">
            <div class="admin-problem-header">
                <strong>Problem #${index + 1}</strong>
                <div>${new Date(problem.date).toLocaleString()}</div>
            </div>
            <div class="admin-problem-details">
                <p><strong>Name:</strong> ${problem.name}</p>
                <p><strong>Phone:</strong> ${problem.number}</p>
                <p><strong>Problem:</strong> ${problem.problem}</p>
            </div>
        </div>
    `).join('');
}

function showAdminPanel() {
    document.getElementById('admin-auth').style.display = 'none';
    document.getElementById('admin-actions').style.display = 'block';
    renderAdminOrders();
    renderAdminProblems();
}

function hideAdminPanel() {
    document.getElementById('admin-auth').style.display = 'block';
    document.getElementById('admin-actions').style.display = 'none';
    document.getElementById('admin-orders').innerHTML = '';
    document.getElementById('admin-problems').innerHTML = '';
    localStorage.removeItem('adminLoggedIn');
}

window.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('admin-login');
    const logoutButton = document.getElementById('admin-logout');
    const passcodeInput = document.getElementById('admin-passcode');

    if (localStorage.getItem('adminLoggedIn') === 'true') {
        showAdminPanel();
    }

    loginButton.addEventListener('click', function() {
        const passcode = passcodeInput.value.trim();
        if (passcode === ADMIN_PASSCODE) {
            localStorage.setItem('adminLoggedIn', 'true');
            showAdminPanel();
        } else {
            alert('Invalid admin passcode.');
        }
    });

    logoutButton.addEventListener('click', hideAdminPanel);

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
});

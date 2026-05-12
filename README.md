<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin — Pizzi Shop</title>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet">
    <style>
        :root{--orange:#e63946;--orange-dark:#d62828;--dark:#1d3557;--green:#2E7D32;--blue:#1565C0;--border:#eee;--bg:#fcfcfc;--card:#fff;}
        *{margin:0;padding:0;box-sizing:border-box;}
        body{font-family:'Nunito',sans-serif;background:var(--bg);color:var(--dark);min-height:100vh;}
        header{background:var(--dark);padding:1rem 2rem;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:100;box-shadow:0 4px 20px rgba(0,0,0,0.3);}
        .logo-text{font-family:'Nunito',sans-serif;font-size:1.4rem;font-weight:800;color:#fff;}
        .logo-text span{color:var(--orange);}
        nav a{color:#ddd;text-decoration:none;margin-left:1.25rem;font-weight:700;font-size:0.9rem;}
        nav a:hover{color:#fff;}
        main{max-width:1100px;margin:0 auto;padding:2.5rem 1.5rem;}
        h1{font-family:'Playfair Display',serif;font-size:2rem;font-weight:900;color:var(--dark);margin-bottom:0.25rem;}
        .page-sub{color:#8D6E63;margin-bottom:2rem;}

        /* Auth box */
        .auth-box{background:var(--card);border-radius:18px;padding:2rem;max-width:420px;box-shadow:0 8px 32px rgba(255,87,34,0.12);border:1px solid var(--border);margin-bottom:2rem;}
        .auth-box label{display:block;font-weight:700;font-size:0.88rem;color:#5D4037;margin-bottom:0.4rem;}
        .auth-box input{width:100%;padding:0.85rem 1rem;border:1.5px solid var(--border);border-radius:10px;font-size:1rem;font-family:'Nunito',sans-serif;color:var(--dark);background:#FFFDF9;margin-bottom:1rem;transition:border 0.2s;}
        .auth-box input:focus{outline:none;border-color:var(--orange);}
        .btn-unlock{padding:0.85rem 2rem;background:var(--orange);color:#fff;border:none;border-radius:10px;font-weight:800;font-size:1rem;cursor:pointer;transition:background 0.2s;}
        .btn-unlock:hover{background:var(--orange-dark);}
        .btn-logout{padding:0.6rem 1.5rem;background:#fff;color:var(--orange);border:2px solid var(--orange);border-radius:10px;font-weight:800;font-size:0.9rem;cursor:pointer;transition:all 0.2s;}
        .btn-logout:hover{background:var(--orange);color:#fff;}

        /* Tabs */
        .tabs{display:flex;gap:0.75rem;margin-bottom:2rem;flex-wrap:wrap;}
        .tab-btn{padding:0.65rem 1.5rem;border-radius:30px;border:2px solid var(--border);background:#fff;color:#8D6E63;font-weight:800;font-size:0.9rem;cursor:pointer;transition:all 0.2s;}
        .tab-btn.active,.tab-btn:hover{background:var(--orange);color:#fff;border-color:var(--orange);}

        /* Stats */
        .stats-row{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:1rem;margin-bottom:2rem;}
        .stat-card{background:var(--card);border-radius:14px;padding:1.25rem;border:1px solid var(--border);box-shadow:0 4px 16px rgba(255,87,34,0.08);text-align:center;}
        .stat-card .stat-icon{font-size:2rem;margin-bottom:0.5rem;}
        .stat-card .stat-num{font-size:2rem;font-weight:900;color:var(--orange);}
        .stat-card .stat-label{font-size:0.82rem;color:#8D6E63;font-weight:700;margin-top:0.25rem;}

        /* Order cards */
        .orders-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:1.5rem;}
        .order-card{background:var(--card);border-radius:16px;padding:1.5rem;border:1px solid var(--border);box-shadow:0 4px 16px rgba(0,0,0,0.07);}
        .order-card-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem;padding-bottom:0.75rem;border-bottom:1px solid #FFE0B2;}
        .order-num{font-weight:900;font-size:1.05rem;color:var(--dark);}
        .order-date{font-size:0.8rem;color:#8D6E63;}
        .status-pill{display:inline-block;padding:0.28rem 0.8rem;border-radius:30px;font-size:0.75rem;font-weight:800;text-transform:uppercase;letter-spacing:0.5px;}
        .status-pending{background:#FFF3E0;color:#E65100;}
        .status-completed{background:#E8F5E9;color:#2E7D32;}
        .status-delivered{background:#E3F2FD;color:#1565C0;}
        .order-detail-row{display:flex;justify-content:space-between;font-size:0.88rem;margin:0.3rem 0;color:#5D4037;}
        .order-detail-row strong{color:var(--dark);}
        .items-list{margin:0.75rem 0;padding:0.75rem;background:#FFF8F0;border-radius:10px;border:1px solid #FFE0B2;}
        .item-row{display:flex;justify-content:space-between;font-size:0.85rem;padding:0.2rem 0;}
        .total-row{font-weight:900;color:var(--orange);font-size:1rem;margin-top:0.5rem;}
        .btn-complete{width:100%;margin-top:1rem;padding:0.7rem;background:var(--green);color:#fff;border:none;border-radius:10px;font-weight:800;font-size:0.9rem;cursor:pointer;transition:background 0.2s;}
        .btn-complete:hover{background:#1B5E20;}
        .completed-text{text-align:center;color:var(--green);font-weight:800;margin-top:0.75rem;}

        /* Problem cards */
        .problems-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:1.5rem;}
        .problem-card{background:var(--card);border-radius:16px;padding:1.5rem;border:1px solid #FFE0B2;box-shadow:0 4px 16px rgba(0,0,0,0.07);border-left:4px solid #FF5722;}

        /* Empty */
        .empty-state{text-align:center;padding:4rem 2rem;color:#8D6E63;}
        .empty-state .icon{font-size:4rem;margin-bottom:1rem;}

        @media(max-width:600px){.orders-grid,.problems-grid{grid-template-columns:1fr;}}
        @media(max-width:480px){
            header { padding: 1rem; flex-direction: column; gap: 0.5rem; text-align: center; }
            nav a { margin: 0 0.5rem; }
            .stat-card { padding: 1rem; }
            .auth-box { padding: 1.5rem; }
            .tab-btn { padding: 0.5rem 1rem; font-size: 0.8rem; }
            .btn-unlock, .btn-logout { width: 100%; margin-top: 0.5rem; }
            .stats-row { grid-template-columns: 1fr 1fr; }
        }
    </style>
</head>
<body>
<header>
    <div class="logo-text">🍕 Pizzi<span>Shop</span> Admin</div>
    <nav>
        <a href="pizzi_shop.html">← Back to Home</a>
    </nav>
</header>
<main>
    <h1>Admin Dashboard</h1>
    <p class="page-sub">All orders and complaints in one place.</p>

    <div id="auth-section">
        <div class="auth-box">
            <label>Admin Passcode</label>
            <input type="password" id="admin-passcode" placeholder="Enter passcode">
            <button class="btn-unlock" id="unlock-btn">🔓 Unlock</button>
        </div>
    </div>

    <div id="panel" style="display:none;">
        <div style="margin-bottom:1.5rem;">
            <button class="btn-logout" id="logout-admin-btn">🔒 Logout</button>
        </div>

        <!-- Stats -->
        <div class="stats-row" id="stats-row"></div>

        <!-- Tabs -->
        <div class="tabs">
            <button class="tab-btn active" data-tab="orders">📋 Orders</button>
            <button class="tab-btn" data-tab="problems">⚠️ Complaints</button>
        </div>

        <div id="tab-orders"></div>
        <div id="tab-problems" style="display:none;"></div>
    </div>
</main>

<script>
const PASSCODE = 'admin123';

function getStatusClass(s){ return 'status-'+(s||'pending'); }
function getStatusText(s){ return (s||'pending').toUpperCase(); }

function renderStats(){
    const orders=JSON.parse(localStorage.getItem('orders')||'[]');
    const problems=JSON.parse(localStorage.getItem('problems')||'[]');
    const pending=orders.filter(o=>!o.status||o.status==='pending').length;
    const completed=orders.filter(o=>o.status==='completed').length;
    const revenue=orders.filter(o=>o.status==='completed').reduce((s,o)=>s+o.total,0);
    document.getElementById('stats-row').innerHTML=`
        <div class="stat-card"><div class="stat-icon">📋</div><div class="stat-num">${orders.length}</div><div class="stat-label">Total Orders</div></div>
        <div class="stat-card"><div class="stat-icon">⏳</div><div class="stat-num">${pending}</div><div class="stat-label">Pending</div></div>
        <div class="stat-card"><div class="stat-icon">✅</div><div class="stat-num">${completed}</div><div class="stat-label">Completed</div></div>
        <div class="stat-card"><div class="stat-icon">💰</div><div class="stat-num">${revenue.toLocaleString()}</div><div class="stat-label">Revenue (PKR)</div></div>
        <div class="stat-card"><div class="stat-icon">⚠️</div><div class="stat-num">${problems.length}</div><div class="stat-label">Complaints</div></div>
    `;
}

function renderOrders(){
    const orders=JSON.parse(localStorage.getItem('orders')||'[]');
    const container=document.getElementById('tab-orders');
    if(!orders.length){
        container.innerHTML='<div class="empty-state"><div class="icon">📭</div><p>No orders received yet.</p></div>';
        return;
    }
    container.innerHTML='<div class="orders-grid">'+
    [...orders].reverse().map((o,ri)=>{
        const i=orders.length-ri;
        const items=o.items.map(it=>`<div class="item-row"><span>${it.item} ×${it.quantity}</span><span>PKR ${it.price.toLocaleString()}</span></div>`).join('');
        return `
        <div class="order-card">
            <div class="order-card-header">
                <div>
                    <div class="order-num">Order #${i}</div>
                    <div class="order-date">${new Date(o.date).toLocaleString('ur-PK')}</div>
                </div>
                <span class="status-pill ${getStatusClass(o.status)}">${getStatusText(o.status)}</span>
            </div>
            <div class="order-detail-row"><span>👤 Customer:</span><strong>${o.customer.name}</strong></div>
            <div class="order-detail-row"><span>📞 Phone:</span><strong>${o.customer.phone}</strong></div>
            <div class="order-detail-row"><span>📍 Address:</span><strong>${o.customer.address}</strong></div>
            <div class="order-detail-row"><span>📧 User:</span><strong>${o.user||'Guest'}</strong></div>
            <div class="items-list">${items}<div class="total-row">Total: PKR ${o.total.toLocaleString()}</div></div>
            ${o.status!=='completed'
                ?`<button class="btn-complete" onclick="markComplete(${o.orderId})">✅ Mark as Complete</button>`
                :'<div class="completed-text">✅ Order Completed</div>'}
        </div>`;
    }).join('')+'</div>';
}

function renderProblems(){
    const problems=JSON.parse(localStorage.getItem('problems')||'[]');
    const container=document.getElementById('tab-problems');
    if(!problems.length){
        container.innerHTML='<div class="empty-state"><div class="icon">🎉</div><p>No complaints — everyone is happy!</p></div>';
        return;
    }
    container.innerHTML='<div class="problems-grid">'+
    [...problems].reverse().map((p,i)=>`
        <div class="problem-card">
            <div style="font-weight:800;color:#1A0A00;margin-bottom:0.5rem;">Complaint #${problems.length-i}</div>
            <div style="font-size:0.8rem;color:#8D6E63;margin-bottom:0.75rem;">${new Date(p.date).toLocaleString('ur-PK')}</div>
            <p style="margin-bottom:0.3rem;font-size:0.9rem;"><strong>Name:</strong> ${p.name}</p>
            <p style="margin-bottom:0.3rem;font-size:0.9rem;"><strong>Phone:</strong> ${p.number}</p>
            <p style="margin-top:0.75rem;font-size:0.9rem;line-height:1.6;color:#5D4037;">${p.problem}</p>
        </div>
    `).join('')+'</div>';
}

window.markComplete = function(orderId){
    const orders=JSON.parse(localStorage.getItem('orders')||'[]');
    const idx=orders.findIndex(o=>o.orderId===orderId);
    if(idx!==-1){ orders[idx].status='completed'; localStorage.setItem('orders',JSON.stringify(orders)); renderStats(); renderOrders(); }
};

function showPanel(){
    document.getElementById('auth-section').style.display='none';
    document.getElementById('panel').style.display='block';
    renderStats(); renderOrders(); renderProblems();
}
function hidePanel(){
    document.getElementById('auth-section').style.display='block';
    document.getElementById('panel').style.display='none';
    localStorage.removeItem('adminLoggedIn');
}

// Tabs
document.querySelectorAll('.tab-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
        document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById('tab-orders').style.display=btn.dataset.tab==='orders'?'block':'none';
        document.getElementById('tab-problems').style.display=btn.dataset.tab==='problems'?'block':'none';
    });
});

document.getElementById('unlock-btn').addEventListener('click',()=>{
    if(document.getElementById('admin-passcode').value===PASSCODE){
        localStorage.setItem('adminLoggedIn','true'); showPanel();
    } else { alert('❌ Incorrect passcode!'); }
});
document.getElementById('logout-admin-btn').addEventListener('click', hidePanel);
document.getElementById('admin-passcode').addEventListener('keydown',e=>{ if(e.key==='Enter') document.getElementById('unlock-btn').click(); });

if(localStorage.getItem('adminLoggedIn')==='true') showPanel();
</script>
</body>
</html>

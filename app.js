let state = {
  role:null, screen:'welcome', lang:'en', activeCat:null, orderTab:'new', cart:[], buyerOrders:[],
  vendors:[
    {id:1,name:"Green Farm Fresh",cat:'fruits',rating:4.6,reviews:125,verified:true,dist:'1.2 km',em:'🍅',
      products:[{name:"Apples",price:120,unit:'kg',em:'🍎'},{name:"Tomatoes",price:40,unit:'kg',em:'🍅'},{name:"Bananas",em:'🍌',price:50,unit:'kg'}]},
    {id:2,name:"Raju Fruits Stall",cat:'fruits',rating:4.4,reviews:80,verified:true,dist:'1.5 km',em:'🍌',
      products:[{name:"Banana",price:50,unit:'kg',em:'🍌'},{name:"Oranges",price:80,unit:'kg',em:'🍊'}]},
    {id:3,name:"Local Veggies",cat:'vegetables',rating:4.3,reviews:58,verified:true,dist:'2.0 km',em:'🥬',
      products:[{name:"Tomatoes",price:40,unit:'kg',em:'🍅'},{name:"Spinach",price:15,unit:'bunch',em:'🥬'}]}
  ],
  sellerProducts:[{id:101,name:"Tomatoes",price:40,qty:10,unit:'kg',active:true,em:'🍅'},{id:102,name:"Onions",price:28,qty:60,unit:'kg',active:true,em:'🧅'},{id:103,name:"Spinach",price:15,qty:0,unit:'bunch',active:false,em:'🥬'}],
  sellerOrders:[{id:'#1024',item:"2 kg Vegetables",price:180,stage:'new',em:'🥬'},{id:'#1023',item:"1 kg Apples",price:120,stage:'accepted',em:'🍎'},{id:'#1022',item:"1 Cake",price:250,stage:'preparing',em:'🎂'}],
  deliveryAvailable:[{id:'#1024',dist:'1.2 km',items:'2 items',fee:8,pickup:"Green Farm Fresh",drop:"Customer Location · 2.3 km"},{id:'#1025',dist:'3.5 km',items:'1 item',fee:7,pickup:"Raju Fruits Stall",drop:"Ward 4"},{id:'#1026',dist:'4.1 km',items:'3 items',fee:9,pickup:"Local Veggies",drop:"Ward 2"}],
  deliveryTrack:{id:'#1024',steps:[{k:'accepted',t:'10:15 AM'},{k:'collected',t:'10:25 AM'},{k:'delivering',t:'10:45 AM'},{k:'confirm',t:'11:00 AM'}],done:2},
  approvals:{pending:[{id:1,name:"Suresh General Store",detail:"Shop Location",em:'🏪'},{id:2,name:"Raju Fruits Stall",detail:"Shop Location",em:'🍌'},{id:3,name:"Lakshmi Cakes",detail:"Shop Location",em:'🎂'}],approved:[],rejected:[]},
  approvalTab:'pending'
};
const T = {
  en:{welcomeTag:"Local Products · Local People · Stronger Community",choose:"Choose Your Role",buyer:"Buyer",seller:"Seller",delivery:"Delivery Partner",admin:"Admin",
    home:"RCP_E-Mart",search:"Search for products or vendors...",nearby:"Nearby Village Market",freshTitle:"Fresh Fruits & Vegetables",freshSub:"Up to 20% Off",shopNow:"Shop Now",
    exclusive:"Exclusive Items",budget:"Budget Friendly",newstock:"New Stock",categories:"Categories",seeAll:"See All",
    fruits:"Fruits",vegetables:"Vegetables",groceries:"Groceries",cakes:"Cakes",accessories:"Accessories",local:"Local Products",others:"Others",
    homeNav:"Home",catNav:"Categories",ordersNav:"Orders",profileNav:"Profile",settingsNav:"Settings",mapNav:"Map",earningsNav:"Earnings",productsNav:"Products",moreNav:"More",
    searchTitle:"Search Products",compare:"Compare",vendorProfile:"Vendor Profile",call:"Call",message:"Message",products:"Products",about:"About Vendor",
    myCart:"My Cart",itemTotal:"Item Total",deliveryFee:"Delivery Fee",platformFee:"Platform Fee",total:"Total",checkout:"Proceed to Checkout",
    addProduct:"Add Product",myProducts:"My Products",promotions:"Promotions",earnings:"Earnings",help:"Help",todaySummary:"Today's Summary",newOrders:"New Orders",
    takePhoto:"Take Photo / Upload",productName:"Product Name",price:"Price (₹)",qty:"Available Quantity",submit:"Submit",
    orders:"Orders",new:"New",accepted:"Accepted",preparing:"Preparing",accept:"Accept",
    deliveryHome:"Delivery Partner",online:"Online",todayEarnings:"Today's Earnings",completed:"Completed Orders",available:"Available Orders",
    order:"Order",navigate:"Navigate",confirmDelivery:"Confirm Delivery",
    vendorApprovals:"Vendor Approvals",pending:"Pending",approvedTab:"Approved",rejectedTab:"Rejected",shopLoc:"Shop Location",view:"View",
    switchRole:"Switch Role",myProfile:"My Profile",myOrders:"My Orders",myAddresses:"My Addresses",wallet:"Wallet & Credits",language:"Language",helpSupport:"Help & Support",settings:"Settings",editProfile:"Edit Profile"},
  te:{welcomeTag:"స్థానిక ఉత్పత్తులు · స్థానిక ప్రజలు · బలమైన సమాజం",choose:"మీ పాత్రను ఎంచుకోండి",buyer:"కొనుగోలుదారు",seller:"విక్రేత",delivery:"డెలివరీ భాగస్వామి",admin:"అడ్మిన్",
    home:"RCP_E-Mart",search:"ఉత్పత్తులు లేదా విక్రేతలను వెతకండి...",nearby:"సమీప విలేజ్ మార్కెట్",freshTitle:"తాజా పండ్లు & కూరగాయలు",freshSub:"20% వరకు తగ్గింపు",shopNow:"కొనండి",
    exclusive:"ప్రత్యేక వస్తువులు",budget:"పొదుపు ధరలు",newstock:"కొత్త స్టాక్",categories:"వర్గాలు",seeAll:"అన్నీ చూడండి",
    fruits:"పండ్లు",vegetables:"కూరగాయలు",groceries:"కిరాణా",cakes:"కేకులు",accessories:"యాక్సెసరీస్",local:"స్థానిక ఉత్పత్తులు",others:"ఇతరాలు",
    homeNav:"హోమ్",catNav:"వర్గాలు",ordersNav:"ఆర్డర్లు",profileNav:"ప్రొఫైల్",settingsNav:"సెట్టింగ్స్",mapNav:"మ్యాప్",earningsNav:"ఆదాయం",productsNav:"ఉత్పత్తులు",moreNav:"మరిన్ని",
    searchTitle:"ఉత్పత్తులు వెతకండి",compare:"పోల్చండి",vendorProfile:"విక్రేత ప్రొఫైల్",call:"కాల్",message:"సందేశం",products:"ఉత్పత్తులు",about:"విక్రేత గురించి",
    myCart:"నా కార్ట్",itemTotal:"వస్తువుల మొత్తం",deliveryFee:"డెలివరీ ఫీజు",platformFee:"ప్లాట్‌ఫారమ్ ఫీజు",total:"మొత్తం",checkout:"చెక్అవుట్‌కు వెళ్ళండి",
    addProduct:"ఉత్పత్తిని జోడించండి",myProducts:"నా ఉత్పత్తులు",promotions:"ప్రమోషన్లు",earnings:"ఆదాయం",help:"సహాయం",todaySummary:"నేటి సారాంశం",newOrders:"కొత్త ఆర్డర్లు",
    takePhoto:"ఫోటో తీయండి / అప్‌లోడ్ చేయండి",productName:"ఉత్పత్తి పేరు",price:"ధర (₹)",qty:"లభ్యమైన పరిమాణం",submit:"సమర్పించండి",
    orders:"ఆర్డర్లు",new:"కొత్తవి",accepted:"అంగీకరించబడింది",preparing:"సిద్ధమవుతోంది",accept:"అంగీకరించండి",
    deliveryHome:"డెలివరీ భాగస్వామి",online:"ఆన్‌లైన్",todayEarnings:"నేటి ఆదాయం",completed:"పూర్తయిన ఆర్డర్లు",available:"అందుబాటులో ఉన్న ఆర్డర్లు",
    order:"ఆర్డర్",navigate:"నావిగేట్ చేయండి",confirmDelivery:"డెలివరీని నిర్ధారించండి",
    vendorApprovals:"విక్రేత ఆమోదాలు",pending:"పెండింగ్",approvedTab:"ఆమోదించబడింది",rejectedTab:"తిరస్కరించబడింది",shopLoc:"షాప్ లొకేషన్",view:"చూడండి",
    switchRole:"పాత్రను మార్చండి",myProfile:"నా ప్రొఫైల్",myOrders:"నా ఆర్డర్లు",myAddresses:"నా చిరునామాలు",wallet:"వాలెట్ & క్రెడిట్స్",language:"భాష",helpSupport:"సహాయం & మద్దతు",settings:"సెట్టింగ్స్",editProfile:"ప్రొఫైల్‌ను సవరించండి"}
};
const t = k => T[state.lang][k] || k;
const app = document.getElementById('app');

function go(screen, extra){ if(extra) Object.assign(state, extra); state.screen = screen; render(); app.scrollTop = 0; }
function selectRole(r){ state.role=r; state.screen = r==='buyer'?'home': r==='seller'?'sellerHome': r==='delivery'?'deliveryHome':'adminHome'; render(); }
function setLang(l){ state.lang=l; render(); }
function addToCart(v,p){ state.cart.push({...p, vendor:v.name}); render(); }
function placeOrder(){ state.cart=[]; go('home'); alert('Order placed!'); }
function toggleActive(id){ const p=state.sellerProducts.find(x=>x.id===id); p.active=!p.active; render(); }
function addProduct(){ const n=document.getElementById('pname').value.trim(); const p=+document.getElementById('pprice').value; const q=+document.getElementById('pqty').value;
  if(!n||!p) return; state.sellerProducts.unshift({id:Date.now(),name:n,price:p,qty:q||0,unit:'kg',active:true,em:'🛒'}); go('myProducts'); }
function acceptOrder(id){ const o=state.sellerOrders.find(o=>o.id===id); o.stage='accepted'; render(); }
function acceptDelivery(id){ state.deliveryTrack={id, steps:state.deliveryTrack.steps, done:0}; state.deliveryAvailable=state.deliveryAvailable.filter(o=>o.id!==id); go('deliveryTrack'); }
function advanceTrack(){ if(state.deliveryTrack.done<3) state.deliveryTrack.done++; render(); }
function decide(id,ok){ const list=state.approvals.pending; const item=list.find(x=>x.id===id); state.approvals.pending=list.filter(x=>x.id!==id); state.approvals[ok?'approved':'rejected'].push(item); render(); }

function header(title,{back,icon,onIcon,badge}={}){
  return `<div class="header">${back?`<button class="back" onclick="${back}">←</button>`:''}<h1>${title}</h1>
  ${icon?`<span class="icon ${badge?'badge':''}" ${badge?`data-n="${badge}"`:''} onclick="${onIcon||''}">${icon}</span>`:''}</div>`;
}
function bottomNav(items,active){
  return `<div class="bottomnav">${items.map(([key,em,label,fn])=>`<div class="bnitem ${active===key?'active':''}" onclick="${fn}"><span class="em">${em}</span>${label}</div>`).join('')}</div>`;
}

function welcomeScreen(){
  const roles=[['buyer','🧑\u200d🌾',t('buyer'),'var(--red)'],['seller','🏪',t('seller'),'var(--orange)'],['delivery','🛵',t('delivery'),'var(--amber)'],['admin','⚙️',t('admin'),'var(--yellow)']];
  return `<div class="welcome"><div class="hero">🛍️</div><h1>RCP_E-Mart</h1><div class="tag">${t('welcomeTag')}</div>
  <div class="choose">${t('choose')}</div>
  ${roles.map(([r,em,label,color])=>`<button class="rolebtn" style="background:${color};${r==='admin'?'color:#5C4712':''}" onclick="selectRole('${r}')"><span class="em">${em}</span>${label}</button>`).join('')}
  <div class="langrow"><span class="${state.lang==='en'?'active':''}" onclick="setLang('en')">English</span><span class="${state.lang==='te'?'active':''}" onclick="setLang('te')">తెలుగు</span></div>
  </div>`;
}

function buyerHome(){
  const cats=[['fruits','🍎'],['vegetables','🥕'],['groceries','🛒'],['cakes','🎂'],['accessories','👜'],['local',' 🧺'],['others','✨']];
  return header(t('home'),{icon:'🔔'}) + `<div class="content">
    <div class="search">🔍 ${t('search')}</div>
    <div class="sectitle" style="margin-bottom:6px">📍 ${t('nearby')}</div>
    <div class="banner"><div class="tag">${t('freshSub')}</div><h3>${t('freshTitle')}</h3><button onclick="go('search')">${t('shopNow')}</button></div>
    <div class="grid2" style="margin-bottom:16px;">
      <div class="bignav" onclick="go('search')"><span class="em">⭐</span>${t('exclusive')}</div>
      <div class="bignav" onclick="go('search')"><span class="em">💰</span>${t('budget')}</div>
    </div>
    <div class="row"><div class="sectitle">${t('categories')}</div><div class="sectitle" style="cursor:pointer" onclick="go('search')">${t('seeAll')}</div></div>
    <div class="catgrid">${cats.slice(0,4).map(([k,em])=>`<div class="c" onclick="go('search',{activeCat:'${k}'})"><span class="em">${em}</span>${t(k)}</div>`).join('')}</div>
    </div>` + bottomNav([['home','🏠',t('homeNav'),"go('home')"],['cat','▤',t('catNav'),"go('search')"],['orders','🧾',t('ordersNav'),"go('cart')"],['profile','👤',t('profileNav'),"go('profile')"],['settings','⚙️',t('settingsNav'),"go('profile')"]],'home');
}

function searchScreen(){
  const cats=['fruits','vegetables','groceries'];
  const list = state.vendors.flatMap(v=>v.products.map(p=>({...p,vendor:v})).filter(p=>!state.activeCat||p.vendor.cat===state.activeCat||true));
  return header(t('searchTitle'),{back:"go('home')"}) + `<div class="content">
    <div class="search">🔍 ${t('search')}</div>
    <div class="pillrow"><div class="pill ${!state.activeCat?'active':''}" onclick="go('search',{activeCat:null})">All</div>${cats.map(c=>`<div class="pill ${state.activeCat===c?'active':''}" onclick="go('search',{activeCat:'${c}'})">${t(c)}</div>`).join('')}</div>
    ${list.map(p=>`<div class="card" onclick="go('vendor',{activeVendor:${p.vendor.id}})">
      <div class="thumb" style="background:#FCEFD2">${p.em}</div>
      <div class="body"><div class="name">${p.name}</div><div class="meta">₹${p.price}/${p.unit} · ${p.vendor.name}</div><div class="meta">📍 ${p.vendor.dist}</div></div>
      <button class="btn sm outline" onclick="event.stopPropagation();go('vendor',{activeVendor:${p.vendor.id}})">${t('compare')}</button>
      <span class="verified">${p.vendor.verified?'✔':''}</span></div>`).join('')}
    </div>` + bottomNav([['home','🏠',t('homeNav'),"go('home')"],['cat','▤',t('catNav'),"go('search')"],['orders','🧾',t('ordersNav'),"go('cart')"],['profile','👤',t('profileNav'),"go('profile')"],['settings','⚙️',t('settingsNav'),"go('profile')"]],'cat');
}

function vendorScreen(){
  const v=state.vendors.find(v=>v.id===state.activeVendor);
  return header(t('vendorProfile'),{back:"go('search')",icon:'⤴'}) + `<div class="content">
    <div class="banner" style="text-align:center;font-size:40px;">${v.em}</div>
    <div class="name" style="font-size:18px;">${v.name}</div><div class="meta">${t(v.cat)}</div>
    <div class="meta">📍 ${v.dist} &nbsp; ${v.verified?`<span class="verified">✔ Verified</span>`:''}</div>
    <div class="meta">⭐ ${v.rating} (${v.reviews} reviews)</div>
    <div class="row" style="gap:10px;margin:12px 0 16px;"><button class="btn" style="flex:1" onclick="alert('Calling...')">📞 ${t('call')}</button><button class="btn outline" style="flex:1" onclick="alert('Opening chat...')">💬 ${t('message')}</button></div>
    <div class="row"><div class="sectitle">${t('products')}</div><div class="sectitle">${t('seeAll')}</div></div>
    ${v.products.map(p=>`<div class="card"><div class="thumb" style="background:#FCEFD2">${p.em}</div><div class="body"><div class="name">${p.name}</div><div class="meta">₹${p.price}/${p.unit}</div></div>
      <button class="btn sm" onclick="addToCart(state.vendors.find(x=>x.id===${v.id}),${JSON.stringify(p).replace(/"/g,'&quot;')})">+</button></div>`).join('')}
    <div class="sectitle">${t('about')}</div><div class="meta">Fresh and local produce. Quality guaranteed.</div>
    </div>`;
}

function cartScreen(){
  const itemTotal = state.cart.reduce((a,c)=>a+c.price,0);
  const dfee=5, pfee=3;
  return header(t('myCart'),{back:"go('home')",icon:'🗑'}) + `<div class="content">
    ${state.cart.length? state.cart.map((c,i)=>`<div class="card"><div class="thumb" style="background:#FCEFD2">${c.em}</div>
      <div class="body"><div class="name">${c.name}</div><div class="meta">1 ${c.unit}</div></div><div class="price">₹${c.price}</div></div>`).join('')
      : `<div class="empty">${t('myCart')}: 0 items</div>`}
    ${state.cart.length?`<div class="totalrow"><span>${t('itemTotal')}</span><span>₹${itemTotal}</span></div>
    <div class="totalrow"><span>${t('deliveryFee')}</span><span>₹${dfee}</span></div>
    <div class="totalrow"><span>${t('platformFee')}</span><span>₹${pfee}</span></div>
    <div class="totalrow grand"><span>${t('total')}</span><span>₹${itemTotal+dfee+pfee}</span></div>
    <button class="btn block" style="margin-top:14px" onclick="placeOrder()">${t('checkout')}</button>`:''}
    </div>` + bottomNav([['home','🏠',t('homeNav'),"go('home')"],['cat','▤',t('catNav'),"go('search')"],['orders','🧾',t('ordersNav'),"go('cart')"],['profile','👤',t('profileNav'),"go('profile')"],['settings','⚙️',t('settingsNav'),"go('profile')"]],'orders');
}

function sellerHome(){
  const counts={new:state.sellerOrders.filter(o=>o.stage==='new').length, prod:state.sellerProducts.length, earn:1250};
  return header('Market Center Prasad',{icon:'🔔'}) + `<div class="content">
    <div class="grid2">
      <div class="bignav" onclick="go('addProduct')"><span class="em">➕</span>${t('addProduct')}</div>
      <div class="bignav" onclick="go('myProducts')"><span class="em">📦</span>${t('myProducts')}</div>
      <div class="bignav" onclick="go('sellerOrders')"><span class="em">🧾</span>${t('orders')}</div>
      <div class="bignav" onclick="alert('${t('promotions')}')"><span class="em">📣</span>${t('promotions')}</div>
      <div class="bignav" onclick="go('sellerEarnings')"><span class="em">💰</span>${t('earnings')}</div>
      <div class="bignav" onclick="go('profile')"><span class="em">❓</span>${t('help')}</div>
    </div>
    <div class="sectitle">${t('todaySummary')}</div>
    <div class="statbox"><div class="s"><b>${counts.new}</b><small>${t('newOrders')}</small></div><div class="s"><b>₹${counts.earn}</b><small>${t('earnings')}</small></div><div class="s"><b>${counts.prod}</b><small>${t('products')}</small></div></div>
    </div>` + bottomNav([['home','🏠',t('homeNav'),"go('sellerHome')"],['prod','📦',t('productsNav'),"go('myProducts')"],['orders','🧾',t('ordersNav'),"go('sellerOrders')"],['earn','💰',t('earningsNav'),"go('sellerEarnings')"],['more','⋯',t('moreNav'),"go('profile')"]],'home');
}
function addProductScreen(){
  return header(t('addProduct'),{back:"go('sellerHome')"}) + `<div class="content">
    <div class="uploadbox">📷 ${t('takePhoto')}</div>
    <label>${t('productName')}</label><input id="pname" placeholder="Tomatoes">
    <label>${t('price')}</label><input id="pprice" type="number" placeholder="40">
    <label>${t('qty')}</label><input id="pqty" type="number" placeholder="10">
    <button class="btn block" style="margin-top:18px" onclick="addProduct()">${t('submit')}</button>
    </div>`;
}
function myProductsScreen(){
  return header(t('myProducts'),{back:"go('sellerHome')"}) + `<div class="content">
    ${state.sellerProducts.map(p=>`<div class="card"><div class="thumb" style="background:#FCEFD2">${p.em}</div>
      <div class="body"><div class="name">${p.name}</div><div class="meta">₹${p.price}/${p.unit} · ${p.qty} in stock</div></div>
      <button class="btn sm ${p.active?'':'outline'}" onclick="toggleActive(${p.id})">${p.active?'Active':'Inactive'}</button></div>`).join('')}
    </div>` + bottomNav([['home','🏠',t('homeNav'),"go('sellerHome')"],['prod','📦',t('productsNav'),"go('myProducts')"],['orders','🧾',t('ordersNav'),"go('sellerOrders')"],['earn','💰',t('earningsNav'),"go('sellerEarnings')"],['more','⋯',t('moreNav'),"go('profile')"]],'prod');
}
function sellerOrdersScreen(){
  const tabs=[['new',t('new')],['accepted',t('accepted')],['preparing',t('preparing')]];
  const list = state.sellerOrders.filter(o=>o.stage===state.orderTab);
  return header(t('orders')) + `<div class="content">
    <div class="pillrow">${tabs.map(([k,l])=>`<div class="pill ${state.orderTab===k?'active':''}" onclick="go('sellerOrders',{orderTab:'${k}'})">${l} (${state.sellerOrders.filter(o=>o.stage===k).length})</div>`).join('')}</div>
    ${list.length?list.map(o=>`<div class="card"><div class="thumb" style="background:#FCEFD2">${o.em}</div><div class="body"><div class="name">${o.id}</div><div class="meta">${o.item} · ₹${o.price}</div></div>
      ${o.stage==='new'?`<button class="btn sm" onclick="acceptOrder('${o.id}')">${t('accept')}</button>`:''}</div>`).join(''):`<div class="empty">—</div>`}
    </div>` + bottomNav([['home','🏠',t('homeNav'),"go('sellerHome')"],['prod','📦',t('productsNav'),"go('myProducts')"],['orders','🧾',t('ordersNav'),"go('sellerOrders')"],['earn','💰',t('earningsNav'),"go('sellerEarnings')"],['more','⋯',t('moreNav'),"go('profile')"]],'orders');
}
function sellerEarningsScreen(){
  return header(t('earnings'),{back:"go('sellerHome')"}) + `<div class="content">
    <div class="statbox"><div class="s"><b>₹1,250</b><small>Today</small></div><div class="s"><b>₹8,400</b><small>This week</small></div></div>
    <div class="note">Payout and coin conversion rules are still being finalized for the pilot.</div>
    </div>`;
}

function deliveryHome(){
  return header(t('deliveryHome'),{icon:'🟢 '+t('online')}) + `<div class="content">
    <div class="banner"><div class="tag">${t('todayEarnings')}</div><h3>₹320</h3><div style="font-size:12px">5 ${t('completed')}</div></div>
    <div class="row"><div class="sectitle">${t('available')}</div><div class="sectitle">${t('seeAll')}</div></div>
    ${state.deliveryAvailable.map(o=>`<div class="card"><div class="thumb" style="background:#FCEFD2">🧾</div>
      <div class="body"><div class="name">${o.id} · ${o.dist}</div><div class="meta">${o.items} · ₹${o.fee}</div></div>
      <button class="btn sm" onclick="acceptDelivery('${o.id}')">${t('accept')}</button></div>`).join('')}
    </div>` + bottomNav([['home','🏠',t('homeNav'),"go('deliveryHome')"],['orders','🧾',t('ordersNav'),"go('deliveryHome')"],['map','📍',t('mapNav'),"alert('Map coming soon')"],['earn','💰',t('earningsNav'),"go('deliveryHome')"],['profile','👤',t('profileNav'),"go('profile')"]],'home');
}
function deliveryTrackScreen(){
  const d=state.deliveryTrack;
  const labels=['Accepted','Collect Packed Order','Deliver to Customer','Confirm Delivery'];
  return header(`${t('order')} ${d.id}`,{back:"go('deliveryHome')"}) + `<div class="content">
    <div class="timeline">${labels.map((l,i)=>`<div class="tstep ${i<d.done?'done':i===d.done?'now':''}"><div class="tdot">${i<d.done?'✔':i+1}</div><div><div class="ttitle">${l}</div><div class="ttime">${d.steps[i].t}</div></div></div>`).join('')}</div>
    <div class="card" style="margin-top:6px"><div class="thumb" style="background:#FCEFD2">📍</div><div class="body"><div class="name">Customer Location</div><div class="meta">2.3 km</div></div></div>
    <button class="btn block" style="margin-top:10px" onclick="${d.done<3?'advanceTrack()':\"go('deliveryHome')\"}">${d.done<3?t('navigate'):t('confirmDelivery')}</button>
    </div>`;
}

function adminHome(){
  const tabs=[['pending',t('pending')],['approved',t('approvedTab')],['rejected',t('rejectedTab')]];
  const list = state.approvals[state.approvalTab];
  return header(t('vendorApprovals')) + `<div class="content">
    <div class="pillrow">${tabs.map(([k,l])=>`<div class="pill ${state.approvalTab===k?'active':''}" onclick="go('adminHome',{approvalTab:'${k}'})">${l} (${state.approvals[k].length})</div>`).join('')}</div>
    ${list.length?list.map(a=>`<div class="card"><div class="thumb" style="background:#FCEFD2">${a.em}</div>
      <div class="body"><div class="name">${a.name}</div><div class="meta">${t('shopLoc')}</div><div class="meta" style="text-decoration:underline">${t('view')}</div></div>
      ${state.approvalTab==='pending'?`<div style="display:flex;flex-direction:column;gap:6px"><button class="btn sm" onclick="decide(${a.id},true)">✔</button><button class="btn sm outline" onclick="decide(${a.id},false)">✕</button></div>`:''}</div>`).join(''):`<div class="empty">—</div>`}
    <div style="text-align:center;margin-top:16px"><button class="btn ghost" onclick="go('welcome')">${t('switchRole')}</button></div>
    </div>`;
}

function profileScreen(){
  const items=[[t('myOrders'),'🧾'],[t('myAddresses'),'📍'],[t('wallet'),'💳'],[t('language'),'🌐'],[t('helpSupport'),'❓'],[t('settings'),'⚙️']];
  return header(t('myProfile'),{back: state.role==='buyer'?"go('home')": state.role==='seller'?"go('sellerHome')": state.role==='delivery'?"go('deliveryHome')":"go('adminHome')"}) + `<div class="content">
    <div class="row" style="gap:12px;margin-bottom:16px;"><div class="avatar">R</div><div><div class="name">Ramesh Kumar</div><div class="meta">${t(state.role)}</div></div></div>
    <ul class="plist">${items.map(([l,em])=>`<li>${em} &nbsp;${l} <span>›</span></li>`).join('')}</ul>
    <button class="btn block outline" style="margin-top:14px" onclick="go('welcome')">${t('switchRole')}</button>
    </div>` + (state.role==='buyer'?bottomNav([['home','🏠',t('homeNav'),"go('home')"],['cat','▤',t('catNav'),"go('search')"],['orders','🧾',t('ordersNav'),"go('cart')"],['profile','👤',t('profileNav'),"go('profile')"],['settings','⚙️',t('settingsNav'),"go('profile')"]],'profile'):'');
}

function render(){
  const map = {welcome:welcomeScreen, home:buyerHome, search:searchScreen, vendor:vendorScreen, cart:cartScreen, profile:profileScreen,
    sellerHome:sellerHome, addProduct:addProductScreen, myProducts:myProductsScreen, sellerOrders:sellerOrdersScreen, sellerEarnings:sellerEarningsScreen,
    deliveryHome:deliveryHome, deliveryTrack:deliveryTrackScreen, adminHome:adminHome};
  app.innerHTML = (map[state.screen]||welcomeScreen)();
}
render();

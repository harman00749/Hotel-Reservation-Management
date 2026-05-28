const currentYear = new Date().getFullYear();
const roomTypeImages = {
  single: [
    'https://images.unsplash.com/photo-1772476361154-e894ba10d757?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000',
    'https://images.unsplash.com/photo-1760573776062-7d2a7baeb49d?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000'
  ],
  double: [
    'https://images.unsplash.com/photo-1648383228240-6ed939727ad6?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000',
    'https://images.unsplash.com/photo-1739590269025-07766e4ab657?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000'
  ],
  deluxe: [
    'https://images.unsplash.com/photo-1733829994889-4a224e674c7b?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000',
    'https://images.unsplash.com/photo-1761039265583-9489b4246454?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000'
  ],
  suite: [
    'https://images.unsplash.com/photo-1759223198981-661cadbbff36?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000',
    'https://images.unsplash.com/photo-1740324351912-b9189685ab1a?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000'
  ],
  family: [
    'https://images.unsplash.com/photo-1739590269025-07766e4ab657?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000',
    'https://images.unsplash.com/photo-1740324351912-b9189685ab1a?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000'
  ]
};

const rooms = [
  {id:1,no:'101',type:'single',name:'Cozy Single Room',floor:'Ground Floor',price:800,maxGuests:1,status:'available',facilities:['AC','WiFi','TV','Geyser'],emoji:'🛏',desc:'Budget-friendly single room with Doon Valley view. Perfect for solo travelers.',image:roomTypeImages.single[0]},
  {id:2,no:'102',type:'single',name:'Standard Single',floor:'Ground Floor',price:900,maxGuests:1,status:'available',facilities:['AC','WiFi','TV','Geyser','Study Table'],emoji:'🛏',desc:'Clean and comfortable room with work desk, ideal for business travelers.',image:roomTypeImages.single[1]},
  {id:3,no:'201',type:'double',name:'Classic Double Room',floor:'1st Floor',price:1500,maxGuests:2,status:'available',facilities:['AC','WiFi','TV','Mini Fridge','Geyser'],emoji:'🛌',desc:'Spacious double room with king-size bed and beautiful valley view.',image:roomTypeImages.double[0]},
  {id:4,no:'202',type:'double',name:'Garden View Double',floor:'1st Floor',price:1800,maxGuests:2,status:'occupied',facilities:['AC','WiFi','TV','Balcony','Geyser','Safe'],emoji:'🌿',desc:'Double room with private balcony overlooking our lush garden.',image:roomTypeImages.double[1]},
  {id:5,no:'301',type:'deluxe',name:'Deluxe Mountain View',floor:'2nd Floor',price:2500,maxGuests:3,status:'available',facilities:['AC','WiFi','Smart TV','Balcony','Mini Bar','Bathtub','Safe'],emoji:'⛰️',desc:'Premium deluxe room with panoramic Himalayan view and luxury amenities.',image:roomTypeImages.deluxe[0]},
  {id:6,no:'302',type:'deluxe',name:'Deluxe Heritage Room',floor:'2nd Floor',price:3000,maxGuests:3,status:'available',facilities:['AC','WiFi','Smart TV','Balcony','Mini Bar','Jacuzzi','Heritage Decor'],emoji:'🏰',desc:'Beautifully designed heritage room with antique furnishings and modern comforts.',image:roomTypeImages.deluxe[1]},
  {id:7,no:'401',type:'suite',name:'Royal Suite',floor:'3rd Floor',price:5000,maxGuests:4,status:'available',facilities:['AC','WiFi','Smart TV','Private Balcony','Mini Bar','Jacuzzi','Living Room','Dining Area'],emoji:'👑',desc:'Our luxurious suite with separate living area and 180° mountain panorama.',image:roomTypeImages.suite[0]},
  {id:8,no:'402',type:'suite',name:'Presidential Suite',floor:'3rd Floor',price:8000,maxGuests:4,status:'available',facilities:['AC','WiFi','Smart TV','Private Terrace','Full Bar','Jacuzzi','Butler','Kitchen','2 Bathrooms'],emoji:'🌟',desc:'The finest suite in hotel with butler service, private terrace and all premium amenities.',image:roomTypeImages.suite[1]},
  {id:9,no:'203',type:'family',name:'Family Comfort Room',floor:'1st Floor',price:3500,maxGuests:6,status:'available',facilities:['AC','WiFi','TV','Bunk Beds','Mini Fridge','Balcony','Kids Corner'],emoji:'👨‍👩‍👧‍👦',desc:'Spacious family room with extra beds, games corner and all family amenities.',image:roomTypeImages.family[0]},
  {id:10,no:'204',type:'family',name:'Family Deluxe Suite',floor:'1st Floor',price:4500,maxGuests:6,status:'occupied',facilities:['AC','WiFi','Smart TV','2 Bathrooms','Kitchenette','Living Room','Balcony'],emoji:'🏡',desc:'Our largest family suite with two bathrooms, kitchenette and separate sleeping areas.',image:roomTypeImages.family[1]}
];

const myBookingsList = [
  {id:`BK-${currentYear}-001`,guest:'Rahul Sharma',mobile:'+91-98765-11111',room:'Deluxe Mountain View',checkin:`${currentYear}-05-12`,checkout:`${currentYear}-05-15`,guests:2,amount:7500,status:'confirmed'},
  {id:`BK-${currentYear}-002`,guest:'Priya Singh',mobile:'+91-98765-22222',room:'Royal Suite',checkin:`${currentYear}-05-18`,checkout:`${currentYear}-05-20`,guests:3,amount:10000,status:'checkedin'},
  {id:`BK-${currentYear}-003`,guest:'Amit Kumar',mobile:'+91-98765-33333',room:'Classic Double Room',checkin:`${currentYear}-05-24`,checkout:`${currentYear}-05-26`,guests:2,amount:3000,status:'pending'}
];

const customers = [
  {id:'C001',name:'Rahul Sharma',mobile:'+91-98765-11111',email:'rahul@email.com',bookings:3,spent:18500,status:'Active'},
  {id:'C002',name:'Priya Singh',mobile:'+91-98765-22222',email:'priya@email.com',bookings:1,spent:10000,status:'Active'},
  {id:'C003',name:'Amit Kumar',mobile:'+91-98765-33333',email:'amit@email.com',bookings:2,spent:6500,status:'Active'},
  {id:'C004',name:'Sunita Devi',mobile:'+91-98765-44444',email:'sunita@email.com',bookings:4,spent:22000,status:'Active'}
];

const payments = [
  {id:'PAY-001',bookingId:`BK-${currentYear}-001`,guest:'Rahul Sharma',amount:7500,method:'UPI',date:`${currentYear}-05-12`,status:'Success'},
  {id:'PAY-002',bookingId:`BK-${currentYear}-002`,guest:'Priya Singh',amount:10000,method:'Card',date:`${currentYear}-05-18`,status:'Success'},
  {id:'PAY-003',bookingId:`BK-${currentYear}-003`,guest:'Amit Kumar',amount:3000,method:'Cash',date:`${currentYear}-05-24`,status:'Pending'}
];

const staffList = [
  {id:'ST001',name:'Ramesh Thakur',role:'Manager',dept:'Administration',mobile:'+91-99001-11111',shift:'Morning (6AM-2PM)',status:'Active',salary:35000},
  {id:'ST002',name:'Sunita Rawat',role:'Receptionist',dept:'Front Desk',mobile:'+91-99002-22222',shift:'Evening (2PM-10PM)',status:'Active',salary:18000},
  {id:'ST003',name:'Mohan Lal',role:'Chef',dept:'Kitchen',mobile:'+91-99003-33333',shift:'Morning (6AM-2PM)',status:'Active',salary:25000},
  {id:'ST004',name:'Kavya Bisht',role:'Housekeeping',dept:'Rooms',mobile:'+91-99004-44444',shift:'Night (10PM-6AM)',status:'Active',salary:15000},
  {id:'ST005',name:'Deepak Singh',role:'Security Guard',dept:'Security',mobile:'+91-99005-55555',shift:'Night (10PM-6AM)',status:'Active',salary:14000}
];

const reviews = [
  {name:'Deepak Verma',rating:5,text:'Bahut hi sundar jagah hai! Room bahut acha tha aur service top class thi. Zaroor wapas aayenge!'},
  {name:'Neha Gupta',rating:4,text:'Khana bahut tasty tha aur location ekdum perfect. Staff ne bahut help ki. Highly recommended!'},
  {name:'Rajesh Mishra',rating:5,text:'Presidential Suite mein ruke - ek unforgettable experience raha. View outstanding tha!'},
  {name:'Anjali Tiwari',rating:4,text:'Family room bahut spacious tha. Bacchon ko bhi bahut pasand aaya. Next trip pe phir aayenge.'}
];

let currentUser = null;
let adminLoggedIn = false;
let bookingData = {};
let ratingValues = {1:0,2:0,3:0,4:0,5:0};
let activeRoomFilter = 'all';

function setNavActive(button){
  if(!button) return;
  document.querySelectorAll('.nav-links .nav-btn').forEach(btn => btn.classList.remove('active'));
  if(button.id !== 'nav-auth-btn' || !button.classList.contains('primary')) button.classList.add('active');
}

function showPage(page, button = null, roomFilter = activeRoomFilter){
  document.querySelectorAll('.page').forEach(el => el.classList.remove('active'));
  document.getElementById(`page-${page}`).classList.add('active');
  setNavActive(button);

  if(page === 'rooms'){
    activeRoomFilter = roomFilter;
    renderRooms(roomFilter);
    activateRoomTab(roomFilter);
  }
  if(page === 'mybookings') renderMyBookings();
  if(page === 'feedback') renderReviews();
  if(page === 'admin' && adminLoggedIn){
    renderAdminRooms();
    renderAdminBookings();
    renderAdminCustomers();
    renderAdminPayments();
    renderAdminStaff();
  }

  const today = new Date().toISOString().split('T')[0];
  const tomorrowDate = new Date();
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);
  const tomorrow = tomorrowDate.toISOString().split('T')[0];
  ['b-checkin','h-checkin'].forEach(id => {
    const el = document.getElementById(id);
    if(el && !el.value) el.value = today;
  });
  ['b-checkout','h-checkout'].forEach(id => {
    const el = document.getElementById(id);
    if(el && !el.value) el.value = tomorrow;
  });
}

function activateRoomTab(filter){
  document.querySelectorAll('#room-tabs .tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.filter === filter);
  });
}

function renderRooms(filter){
  const grid = document.getElementById('rooms-grid');
  if(!grid) return;
  const filtered = filter === 'all' ? rooms : rooms.filter(room => room.type === filter);
  grid.innerHTML = filtered.map(room => `
    <div class="room-card">
      <div class="room-media">
        <img class="room-image" src="${room.image}" alt="${room.name}">
        <div class="room-overlay"></div>
        <div class="room-roomno">${room.emoji} ROOM ${room.no}</div>
      </div>
      <div class="room-info">
        <div class="room-type">${room.type.toUpperCase()}</div>
        <div class="room-name">${room.name}</div>
        <div style="font-size:.8rem;color:var(--text-muted);margin-bottom:.4rem">
          📍 ${room.floor} | 👥 Max ${room.maxGuests} guest${room.maxGuests > 1 ? 's' : ''}
        </div>
        <div style="font-size:.82rem;color:var(--text-muted);margin-bottom:.6rem;line-height:1.45">${room.desc}</div>
        <div class="room-features">
          ${room.facilities.slice(0,4).map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
          ${room.facilities.length > 4 ? `<span class="feature-tag">+${room.facilities.length - 4} more</span>` : ''}
        </div>
        <div style="display:flex;align-items:center;justify-content:space-between;margin-top:.8rem">
          <div class="room-price">₹${room.price.toLocaleString()}<span>/night</span></div>
          <span class="availability-badge ${room.status === 'available' ? 'avail-yes' : room.status === 'occupied' ? 'avail-no' : 'avail-few'}">
            ${room.status === 'available' ? '✅ Available' : room.status === 'occupied' ? '❌ Occupied' : '⚠️ Maintenance'}
          </span>
        </div>
        <div class="btn-row" style="margin-top:.8rem">
          ${room.status === 'available'
            ? `<button class="btn btn-gold btn-sm" style="width:100%" onclick="quickBook('${room.name}', ${room.price})">Book Now →</button>`
            : `<button class="btn btn-sm" style="width:100%;background:#e5e7eb;color:var(--text-muted);cursor:not-allowed;border:none" disabled>Currently Unavailable</button>`
          }
        </div>
      </div>
    </div>
  `).join('') || '<div style="text-align:center;padding:2rem;color:var(--text-muted)">Is type ka koi room available nahi hai.</div>';
}

function filterRooms(filter, el){
  activeRoomFilter = filter;
  activateRoomTab(filter);
  if(el) el.classList.add('active');
  renderRooms(filter);
}

function quickBook(name, price){
  showPage('booking');
  setTimeout(() => {
    const select = document.getElementById('b-room');
    for(const option of select.options){
      if(option.value.includes(`|${price}`)){
        select.value = option.value;
        break;
      }
    }
    updatePrice();
  }, 100);
}

function updatePrice(){
  const roomValue = document.getElementById('b-room').value;
  const checkin = document.getElementById('b-checkin').value;
  const checkout = document.getElementById('b-checkout').value;
  if(!roomValue || !checkin || !checkout) return;

  const price = parseInt(roomValue.split('|')[1], 10) || 0;
  const date1 = new Date(checkin);
  const date2 = new Date(checkout);
  const nights = Math.max(1, Math.round((date2 - date1) / 86400000));
  const subtotal = price * nights;
  const tax = Math.round(subtotal * 0.12);
  const total = subtotal + tax;

  bookingData.price = price;
  bookingData.nights = nights;
  bookingData.subtotal = subtotal;
  bookingData.tax = tax;
  bookingData.total = total;

  document.getElementById('price-summary').style.display = 'block';
  document.getElementById('price-detail').innerHTML =
    `💰 ${nights} raat × ₹${price.toLocaleString()} = ₹${subtotal.toLocaleString()} + GST(12%) ₹${tax.toLocaleString()} = <span style="color:var(--gold);font-size:1.1rem;font-weight:700">Total: ₹${total.toLocaleString()}</span>`;
}

function goToStep2(){
  const name = document.getElementById('b-name').value.trim();
  const mobile = document.getElementById('b-mobile').value.trim();
  const roomValue = document.getElementById('b-room').value;
  const checkin = document.getElementById('b-checkin').value;
  const checkout = document.getElementById('b-checkout').value;

  if(!name){ alert('⚠️ Guest ka naam bharein!'); return; }
  if(!mobile){ alert('⚠️ Mobile number bharein!'); return; }
  if(!roomValue){ alert('⚠️ Room type select karein!'); return; }
  if(!checkin || !checkout){ alert('⚠️ Check-in aur check-out date select karein!'); return; }
  if(new Date(checkout) <= new Date(checkin)){ alert('⚠️ Check-out date, check-in se baad honi chahiye!'); return; }

  const select = document.getElementById('b-room');
  const roomText = select.options[select.selectedIndex].text;
  const roomShortName = roomText.split('—')[0].trim();
  bookingData = {
    ...bookingData,
    name,
    mobile,
    email: document.getElementById('b-email').value.trim(),
    idProof: document.getElementById('b-id').value,
    room: roomValue.split('|')[0],
    roomName: roomShortName,
    checkin,
    checkout,
    guests: document.getElementById('b-guests').value,
    special: document.getElementById('b-special').value.trim()
  };
  updatePrice();

  document.getElementById('booking-summary').innerHTML = `
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:.6rem;font-size:.88rem;background:var(--cream);padding:1rem;border-radius:8px">
      <div><b>👤 Guest:</b> ${name}</div>
      <div><b>📞 Mobile:</b> ${mobile}</div>
      <div><b>🛏 Room:</b> ${roomShortName}</div>
      <div><b>👥 Guests:</b> ${bookingData.guests}</div>
      <div><b>📅 Check-in:</b> ${checkin} <small style="color:var(--text-muted)">(12:00 PM)</small></div>
      <div><b>📅 Check-out:</b> ${checkout} <small style="color:var(--text-muted)">(11:00 AM)</small></div>
      <div><b>🌙 Nights:</b> ${bookingData.nights || 1}</div>
      <div><b>🪪 ID Proof:</b> ${bookingData.idProof}</div>
      ${bookingData.special ? `<div style="grid-column:1/-1"><b>📝 Special:</b> ${bookingData.special}</div>` : ''}
      <div style="grid-column:1/-1;border-top:1px solid var(--cream-dark);padding-top:.6rem;color:var(--gold);font-weight:700;font-size:1rem">
        💰 Total: ₹${(bookingData.total || 0).toLocaleString()} (incl. GST)
      </div>
    </div>`;

  document.getElementById('booking-step1').style.display = 'none';
  document.getElementById('booking-step2').style.display = 'block';
  setStep(2);
}

function backToStep1(){
  document.getElementById('booking-step1').style.display = 'block';
  document.getElementById('booking-step2').style.display = 'none';
  setStep(1);
}

function goToStep3(){
  document.getElementById('booking-step2').style.display = 'none';
  document.getElementById('booking-step3').style.display = 'block';
  setStep(3);
  document.getElementById('qr-amount').textContent = `₹${(bookingData.total || 0).toLocaleString()}`;
  document.getElementById('cash-amount').textContent = `₹${(bookingData.total || 0).toLocaleString()}`;
  document.getElementById('final-summary').innerHTML = `
    <div>🛏 ${bookingData.roomName || bookingData.room}</div>
    <div>📅 Check-in: ${bookingData.checkin} (12PM)</div>
    <div>📅 Check-out: ${bookingData.checkout} (11AM)</div>
    <div>🌙 ${bookingData.nights || 1} Raat</div>
    <div>👥 ${bookingData.guests} Guest(s)</div>
    <div>🪪 ${bookingData.idProof}</div>
    <hr style="border:none;border-top:1px solid #e5e7eb;margin:.4rem 0">
    <div style="font-size:.85rem;color:var(--text-muted)">Subtotal: ₹${(bookingData.subtotal || 0).toLocaleString()}</div>
    <div style="font-size:.85rem;color:var(--text-muted)">GST (12%): ₹${(bookingData.tax || 0).toLocaleString()}</div>
    <div style="font-size:1.2rem;font-weight:700;color:var(--gold);margin-top:.3rem">Total: ₹${(bookingData.total || 0).toLocaleString()}</div>`;
}

function backToStep2(){
  document.getElementById('booking-step2').style.display = 'block';
  document.getElementById('booking-step3').style.display = 'none';
  setStep(2);
}

function setStep(stepNo){
  [1,2,3].forEach(index => {
    const step = document.getElementById(`bs${index}`);
    const line = document.getElementById(`sl${index}`);
    if(index < stepNo){
      step.className = 'step done';
      if(line) line.className = 'step-line done';
    }else if(index === stepNo){
      step.className = 'step active';
      if(line) line.className = 'step-line';
    }else{
      step.className = 'step pending';
      if(line) line.className = 'step-line';
    }
  });
}

function togglePayMethod(){
  const value = document.getElementById('pay-method').value;
  document.getElementById('pay-upi').style.display = value === 'upi' ? 'block' : 'none';
  document.getElementById('pay-card').style.display = value === 'card' ? 'block' : 'none';
  document.getElementById('pay-cash').style.display = value === 'cash' ? 'block' : 'none';
}

function confirmBooking(){
  const bookingYear = new Date().getFullYear();
  const bookingId = `BK-${bookingYear}-${String(200 + Math.floor(Math.random() * 800)).padStart(3, '0')}`;
  const method = document.getElementById('pay-method').options[document.getElementById('pay-method').selectedIndex].text;
  const newBooking = {
    id: bookingId,
    guest: bookingData.name,
    mobile: bookingData.mobile,
    room: bookingData.roomName || bookingData.room,
    checkin: bookingData.checkin,
    checkout: bookingData.checkout,
    guests: bookingData.guests,
    amount: bookingData.total || 0,
    status:'confirmed'
  };

  myBookingsList.unshift(newBooking);
  payments.unshift({
    id:`PAY-${String(payments.length + 1).padStart(3, '0')}`,
    bookingId,
    guest: bookingData.name,
    amount: bookingData.total || 0,
    method,
    date: new Date().toISOString().split('T')[0],
    status:'Success'
  });

  document.getElementById('success-details').innerHTML =
    `Guest: <b>${bookingData.name}</b><br>Room: <b>${newBooking.room}</b><br>${bookingData.checkin} → ${bookingData.checkout}`;
  document.getElementById('success-id').innerHTML =
    `✅ Booking ID: <b>${bookingId}</b> | Amount: <b>₹${(bookingData.total || 0).toLocaleString()}</b>`;
  document.getElementById('modal-success').classList.add('open');
  resetBookingFlow();
}

function resetBookingFlow(){
  document.getElementById('booking-step1').style.display = 'block';
  document.getElementById('booking-step2').style.display = 'none';
  document.getElementById('booking-step3').style.display = 'none';
  setStep(1);
  bookingData = {};
  ['b-name','b-mobile','b-email','b-special'].forEach(id => document.getElementById(id).value = '');
  document.getElementById('b-room').value = '';
  document.getElementById('b-guests').value = '1';
  document.getElementById('b-id').value = 'Aadhar Card';
  document.getElementById('price-summary').style.display = 'none';
  document.getElementById('pay-method').value = 'upi';
  togglePayMethod();
}

function renderMyBookings(){
  const tbody = document.getElementById('bookings-tbody');
  if(!tbody) return;
  tbody.innerHTML = myBookingsList.map(booking => `
    <tr>
      <td><b style="color:var(--navy)">${booking.id}</b></td>
      <td>${booking.room}</td>
      <td>${booking.checkin}<br><small style="color:var(--text-muted)">12:00 PM</small></td>
      <td>${booking.checkout}<br><small style="color:var(--text-muted)">11:00 AM</small></td>
      <td>${booking.guests || '—'}</td>
      <td><b>₹${(booking.amount || 0).toLocaleString()}</b></td>
      <td><span class="status-badge s-${booking.status.replace(/\s+/g,'').toLowerCase()}">${statusLabel(booking.status)}</span></td>
      <td>
        ${(booking.status === 'confirmed' || booking.status === 'pending')
          ? `<button class="btn btn-danger btn-sm" onclick="cancelBooking('${booking.id}')">Cancel</button>`
          : '—'
        }
      </td>
    </tr>
  `).join('');
}

function statusLabel(status){
  const labels = {
    confirmed:'✅ Confirmed',
    pending:'⏳ Pending',
    cancelled:'❌ Cancelled',
    checkedin:'🔑 Checked In'
  };
  return labels[status] || status;
}

function cancelBooking(id){
  if(!confirm(`Kya aap sach mein booking ${id} cancel karna chahte hain?\n\nNote: 1 raat ka cancellation charge lag sakta hai.`)) return;
  const booking = myBookingsList.find(item => item.id === id);
  if(booking){
    booking.status = 'cancelled';
    renderMyBookings();
    if(adminLoggedIn) renderAdminBookings();
    alert(`✅ Booking ${id} cancel ho gayi hai. Refund 5-7 working days mein aayega.`);
  }
}

function searchRooms(){
  const type = document.getElementById('h-type').value;
  const map = {
    'All Rooms':'all',
    'Single Room':'single',
    'Double Room':'double',
    'Deluxe Room':'deluxe',
    'Suite':'suite',
    'Family Room':'family'
  };
  const filter = map[type] || 'all';
  showPage('rooms', document.querySelector('.nav-links .nav-btn:nth-child(2)'), filter);
}

function handleAuthNav(button){
  if(currentUser){
    currentUser = null;
    button.textContent = '🔐 Login';
    showPage('home', document.querySelector('.nav-links .nav-btn:first-child'));
  }else{
    showPage('login', button);
  }
}

function doLogin(){
  const email = document.getElementById('l-email').value.trim();
  const password = document.getElementById('l-pass').value;
  if((email === 'guest@hotel.com' || email === 'guest') && password === '1234'){
    currentUser = {name:'Rahul Guest',email};
    const navAuthBtn = document.getElementById('nav-auth-btn');
    navAuthBtn.textContent = '👤 Logout';
    document.getElementById('login-msg').innerHTML = '<div class="alert alert-success">✅ Login successful! Welcome back, Rahul!</div>';
    setTimeout(() => {
      document.getElementById('login-msg').innerHTML = '';
      showPage('home', document.querySelector('.nav-links .nav-btn:first-child'));
    }, 1200);
  }else{
    document.getElementById('login-msg').innerHTML = '<div class="alert alert-danger">❌ Galat email ya password!<br>Demo: guest@hotel.com / 1234</div>';
  }
}

function doRegister(){
  const name = document.getElementById('r-name').value.trim();
  const email = document.getElementById('r-email').value.trim();
  const mobile = document.getElementById('r-mobile').value.trim();
  const password = document.getElementById('r-pass').value;
  const confirmPassword = document.getElementById('r-pass2').value;

  if(!name || !email || !mobile || !password){
    document.getElementById('reg-msg').innerHTML = '<div class="alert alert-danger">⚠️ Sab starred fields bharein!</div>';
    return;
  }
  if(password !== confirmPassword){
    document.getElementById('reg-msg').innerHTML = '<div class="alert alert-danger">⚠️ Dono passwords match nahi karte!</div>';
    return;
  }
  document.getElementById('reg-msg').innerHTML = `<div class="alert alert-success">✅ Registration successful, ${name}! Ab login karein.</div>`;
  setTimeout(() => switchAuthTab('login'), 1800);
}

function switchAuthTab(tab){
  document.getElementById('tab-login').classList.toggle('active', tab === 'login');
  document.getElementById('tab-register').classList.toggle('active', tab === 'register');
  document.getElementById('auth-login').style.display = tab === 'login' ? 'block' : 'none';
  document.getElementById('auth-register').style.display = tab === 'register' ? 'block' : 'none';
}

function adminLogin(){
  const adminId = document.getElementById('a-id').value.trim();
  const password = document.getElementById('a-pass').value;
  if(adminId === 'admin' && password === 'admin123'){
    adminLoggedIn = true;
    document.getElementById('admin-login-form').style.display = 'none';
    document.getElementById('admin-panel').style.display = 'block';
    renderAdminRooms();
    renderAdminBookings();
    renderAdminCustomers();
    renderAdminPayments();
    renderAdminStaff();
  }else{
    document.getElementById('admin-login-msg').innerHTML = '<div class="alert alert-danger">❌ Galat credentials! Demo: admin / admin123</div>';
  }
}

function adminLogout(){
  adminLoggedIn = false;
  document.getElementById('admin-login-form').style.display = 'block';
  document.getElementById('admin-panel').style.display = 'none';
  document.getElementById('a-id').value = '';
  document.getElementById('a-pass').value = '';
  document.getElementById('admin-login-msg').innerHTML = '';
}

function adminTab(tab, el){
  document.querySelectorAll('#admin-panel .tab').forEach(item => item.classList.remove('active'));
  el.classList.add('active');
  ['rooms-mgmt','bookings-mgmt','customers-mgmt','payments-mgmt','staff-mgmt','reports-mgmt'].forEach(section => {
    const div = document.getElementById(`admin-${section}`);
    if(div) div.style.display = section === tab ? 'block' : 'none';
  });
}

function renderAdminRooms(){
  const tbody = document.getElementById('admin-rooms-tbody');
  if(!tbody) return;
  tbody.innerHTML = rooms.map(room => `
    <tr>
      <td><b>${room.no}</b></td>
      <td>${room.type.charAt(0).toUpperCase() + room.type.slice(1)}</td>
      <td>${room.floor}</td>
      <td>₹${room.price.toLocaleString()}</td>
      <td>${room.maxGuests}</td>
      <td><span class="status-badge ${room.status === 'available' ? 's-confirmed' : room.status === 'occupied' ? 's-checkedin' : 's-maintenance'}">${room.status}</span></td>
      <td style="font-size:.76rem">${room.facilities.slice(0,3).join(', ')}${room.facilities.length > 3 ? '...' : ''}</td>
      <td>
        <button class="btn btn-sm btn-outline" onclick="toggleRoomStatus(${room.id})" title="Status toggle">🔄</button>
        <button class="btn btn-sm btn-danger" style="margin-left:.3rem" onclick="deleteRoom(${room.id})" title="Delete">🗑️</button>
      </td>
    </tr>
  `).join('');
}

function renderAdminBookings(){
  const tbody = document.getElementById('admin-bookings-tbody');
  if(!tbody) return;
  tbody.innerHTML = myBookingsList.map(booking => `
    <tr>
      <td><b>${booking.id}</b></td>
      <td>${booking.guest}</td>
      <td>${booking.room}</td>
      <td>${booking.checkin}</td>
      <td>${booking.checkout}</td>
      <td>₹${(booking.amount || 0).toLocaleString()}</td>
      <td><span class="status-badge s-${booking.status.replace(/\s+/g,'').toLowerCase()}">${statusLabel(booking.status)}</span></td>
      <td>
        <select onchange="updateBookingStatus('${booking.id}',this.value);this.value=''" style="font-size:.78rem;padding:.25rem .4rem;border:1px solid #e5e7eb;border-radius:4px;cursor:pointer">
          <option value="">Update</option>
          <option value="confirmed">✅ Confirm</option>
          <option value="checkedin">🔑 Check-in</option>
          <option value="cancelled">❌ Cancel</option>
        </select>
      </td>
    </tr>
  `).join('');
}

function renderAdminCustomers(){
  const tbody = document.getElementById('admin-customers-tbody');
  if(!tbody) return;
  tbody.innerHTML = customers.map(customer => `
    <tr>
      <td>${customer.id}</td>
      <td><b>${customer.name}</b></td>
      <td>${customer.mobile}</td>
      <td>${customer.email}</td>
      <td style="text-align:center">${customer.bookings}</td>
      <td>₹${customer.spent.toLocaleString()}</td>
      <td><span class="status-badge s-active">${customer.status}</span></td>
    </tr>
  `).join('');
}

function renderAdminPayments(){
  const tbody = document.getElementById('admin-payments-tbody');
  if(!tbody) return;
  tbody.innerHTML = payments.map(payment => `
    <tr>
      <td>${payment.id}</td>
      <td>${payment.bookingId}</td>
      <td>${payment.guest}</td>
      <td><b>₹${payment.amount.toLocaleString()}</b></td>
      <td>${payment.method}</td>
      <td>${payment.date}</td>
      <td><span class="status-badge ${payment.status === 'Success' ? 's-success' : 's-pending'}">${payment.status}</span></td>
    </tr>
  `).join('');
}

function renderAdminStaff(){
  const tbody = document.getElementById('admin-staff-tbody');
  if(!tbody) return;
  tbody.innerHTML = staffList.map(staff => `
    <tr>
      <td>${staff.id}</td>
      <td><b>${staff.name}</b></td>
      <td>${staff.role}</td>
      <td>${staff.dept}</td>
      <td>${staff.mobile}</td>
      <td style="font-size:.8rem">${staff.shift}</td>
      <td><span class="status-badge s-active">${staff.status}</span></td>
      <td><button class="btn btn-sm btn-danger" onclick="deleteStaff('${staff.id}')">🗑️</button></td>
    </tr>
  `).join('');
}

function updateBookingStatus(id, status){
  if(!status) return;
  const booking = myBookingsList.find(item => item.id === id);
  if(booking){
    booking.status = status;
    renderAdminBookings();
    renderMyBookings();
  }
}

function toggleRoomStatus(id){
  const room = rooms.find(item => item.id === id);
  if(!room) return;
  const states = ['available','occupied','maintenance'];
  room.status = states[(states.indexOf(room.status) + 1) % states.length];
  renderAdminRooms();
  if(document.getElementById('page-rooms').classList.contains('active')) renderRooms(activeRoomFilter);
}

function deleteRoom(id){
  if(!confirm(`Room ${id} delete karna chahte hain?`)) return;
  const index = rooms.findIndex(room => room.id === id);
  if(index > -1){
    rooms.splice(index, 1);
    renderAdminRooms();
    if(document.getElementById('page-rooms').classList.contains('active')) renderRooms(activeRoomFilter);
  }
}

function deleteStaff(id){
  if(!confirm(`Staff ${id} ko remove karna chahte hain?`)) return;
  const index = staffList.findIndex(staff => staff.id === id);
  if(index > -1){
    staffList.splice(index, 1);
    renderAdminStaff();
  }
}

function addRoom(){
  const roomNo = document.getElementById('m-roomno').value.trim();
  const price = parseInt(document.getElementById('m-price').value, 10) || 0;
  if(!roomNo || !price){
    document.getElementById('room-add-msg').innerHTML = '<div class="alert alert-danger">⚠️ Room number aur price zaroori hain!</div>';
    return;
  }
  const typeFull = document.getElementById('m-type').value;
  const typeKey = typeFull.toLowerCase().split(' ')[0];
  const images = roomTypeImages[typeKey] || roomTypeImages.single;
  rooms.push({
    id: rooms.length ? Math.max(...rooms.map(room => room.id)) + 1 : 1,
    no: roomNo,
    type: typeKey,
    name: typeFull,
    floor: document.getElementById('m-floor').value,
    price,
    maxGuests: parseInt(document.getElementById('m-maxguests').value, 10) || 2,
    status: document.getElementById('m-status').value,
    facilities: document.getElementById('m-facilities').value.split(',').map(item => item.trim()).filter(Boolean),
    emoji:'🛏',
    desc: document.getElementById('m-desc').value.trim() || 'New room added by admin.',
    image: images[rooms.length % images.length]
  });
  document.getElementById('room-add-msg').innerHTML = `<div class="alert alert-success">✅ Room ${roomNo} successfully add ho gaya!</div>`;
  setTimeout(() => {
    closeModal('modal-room');
    renderAdminRooms();
    document.getElementById('room-add-msg').innerHTML = '';
    ['m-roomno','m-price','m-facilities','m-desc'].forEach(id => document.getElementById(id).value = '');
  }, 1200);
}

function addStaff(){
  const name = document.getElementById('s-name').value.trim();
  const mobile = document.getElementById('s-mobile').value.trim();
  if(!name){
    document.getElementById('staff-add-msg').innerHTML = '<div class="alert alert-danger">⚠️ Staff ka naam bharein!</div>';
    return;
  }
  const newId = `ST${String(staffList.length + 1).padStart(3,'0')}`;
  staffList.push({
    id:newId,
    name,
    role:document.getElementById('s-role').value,
    dept:document.getElementById('s-dept').value,
    mobile,
    shift:document.getElementById('s-shift').value,
    salary:parseInt(document.getElementById('s-salary').value, 10) || 0,
    status:'Active'
  });
  document.getElementById('staff-add-msg').innerHTML = `<div class="alert alert-success">✅ ${name} staff mein add ho gaye!</div>`;
  setTimeout(() => {
    closeModal('modal-staff');
    renderAdminStaff();
    document.getElementById('staff-add-msg').innerHTML = '';
    ['s-name','s-mobile','s-salary'].forEach(id => document.getElementById(id).value = '');
  }, 1200);
}

function closeModal(id){
  document.getElementById(id).classList.remove('open');
}

function setRating(category, event){
  const star = event.target.closest('.star');
  if(!star) return;
  const value = parseInt(star.getAttribute('data-v'), 10);
  ratingValues[category] = value;
  const stars = document.getElementById(`stars-${category}`).querySelectorAll('.star');
  stars.forEach((item, index) => item.classList.toggle('active', index < value));
}

function submitFeedback(){
  const text = document.getElementById('review-text').value.trim();
  const name = document.getElementById('reviewer-name').value.trim();
  if(!text){
    alert('⚠️ Apni review likhein!');
    return;
  }
  const values = Object.values(ratingValues).filter(value => value > 0);
  const rating = values.length ? Math.round(values.reduce((sum, value) => sum + value, 0) / values.length) : 5;
  reviews.unshift({name: name || (currentUser && currentUser.name) || 'Anonymous Guest', rating, text});
  document.getElementById('review-text').value = '';
  document.getElementById('reviewer-name').value = '';
  document.querySelectorAll('.stars .star').forEach(star => star.classList.remove('active'));
  ratingValues = {1:0,2:0,3:0,4:0,5:0};
  const message = document.getElementById('feedback-msg');
  message.style.display = 'block';
  message.innerHTML = '<div class="alert alert-success">✅ Feedback submit ho gaya! Aapka shukriya, aapki raay hamare liye bahut mayne rakhti hai. 🙏</div>';
  renderReviews();
  setTimeout(() => { message.style.display = 'none'; }, 4000);
}

function renderReviews(){
  const list = document.getElementById('reviews-list');
  if(!list) return;
  list.innerHTML = reviews.slice(0, 6).map(review => `
    <div style="padding:.8rem 0;border-bottom:1px solid #f3f4f6">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:.3rem;gap:.6rem">
        <div style="font-weight:600;font-size:.88rem;color:var(--navy)">${review.name}</div>
        <div style="color:#f59e0b;font-size:1rem;white-space:nowrap">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</div>
      </div>
      <div style="font-size:.83rem;color:var(--text-muted);line-height:1.5">${review.text}</div>
    </div>
  `).join('');
}

window.addEventListener('click', event => {
  if(event.target.classList.contains('modal-backdrop')) event.target.classList.remove('open');
});

togglePayMethod();
renderReviews();
showPage('home', document.querySelector('.nav-links .nav-btn:first-child'));
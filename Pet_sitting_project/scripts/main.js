// scripts/main.js
import { services, getAvailableServices, serviceSummary, avgPrice } from './data.js';

    const SERVICES_CONTAINER_ID = 'services-grid';

// Populate services section dynamically (DOM interaction + array methods)
    function renderServices(){
    const container = document.getElementById(SERVICES_CONTAINER_ID);
    if(!container) return;

  // clear
    container.innerHTML = '';

  // show all services (use forEach — required)
    services.forEach(s => {
    const card = document.createElement('article');
    card.className = 'service-card';
    card.setAttribute('aria-labelledby', `service-${s.id}-title`);

    const h3 = document.createElement('h3');
    h3.id = `service-${s.id}-title`;
    h3.textContent = s.name;

    const p = document.createElement('p');
    p.textContent = s.short;

    const meta = document.createElement('p');
    meta.style.color = '#6b7280';
    meta.textContent = `Price: $${s.price} • ${s.available ? 'Available' : 'Currently unavailable'}`;

    // conditional branching: show booking button only if available
    if(s.available){
    const btn = document.createElement('button');
    btn.className = 'btn primary';
    btn.textContent = 'Book';
    btn.addEventListener('click', () => alert(`Booking request for: ${s.name}`));
    card.append(h3, p, meta, btn);
    } else {
    card.append(h3, p, meta);
    }

    container.appendChild(card);
    });
}

// Greeting example (time-based)
    export function showGreeting(){
    const hour = new Date().getHours();
    let greeting = "Hello!";
    if(hour < 12) greeting = "Good morning!";
    else if(hour < 18) greeting = "Good afternoon!";
    else greeting = "Good evening!";
    alert(`${greeting} Thanks for visiting Loving Paws.`);
}

// Form handling with validation (sitter page)
    function initContactForm(){
    const form = document.getElementById('contact-form');
    if(!form) return;

    const msgEl = document.getElementById('form-msg');

    form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get('name').trim();
    const email = data.get('email').trim();
    const message = data.get('message').trim();

    // simple validation (conditional branching)
    if(!name || !email || !message){
    msgEl.textContent = 'Please complete all fields before submitting.';
    msgEl.style.color = 'crimson';
    return;
    }

    // fake "send" — in a real site you'd POST to a server
    msgEl.textContent = 'Thank you! Your message has been sent.';
    msgEl.style.color = 'green';
    form.reset();
    });
}

// DOMContentLoaded boot
    document.addEventListener('DOMContentLoaded', () => {
    renderServices();
    initContactForm();

  // small dynamic insertion: show average price in console (map/reduce demo)
    console.info('Service summaries:', serviceSummary());
    console.info('Average price: $' + avgPrice());

  // attach greeting to available buttons and hero "Check Availability"
    const bookBtn = document.getElementById('book-btn');
    if(bookBtn){
    bookBtn.addEventListener('click', () => {
      // show available services using filter/map to build a short message
    const available = getAvailableServices().map(s => s.name).join(', ');
    alert(`Currently available: ${available}`);
    });
    }

  // Attach global handlers for "Learn More" or CTA buttons (delegation)
    document.body.addEventListener('click', (ev) => {
    if(ev.target.matches('.btn.primary') && ev.target.textContent.includes('Meet')){
      // example: navigate to sitter page
    window.location.href = 'sitter.html';
    }
    });
});

// Export default greeting for HTML inline calls if needed
export default showGreeting;

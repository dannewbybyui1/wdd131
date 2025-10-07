// --- Image Part ---
const img = document.createElement('img');
img.setAttribute('src', 'https://picsum.photos/200');
img.setAttribute('alt', 'Random image from picsum.photos');
document.body.appendChild(img);

// --- DOM Basics Section Part ---
const newSection = document.createElement('section');
newSection.innerHTML = `
  <h2>DOM Basics</h2>
  <p>This was added through Javascript</p>
`;
document.body.appendChild(newSection);


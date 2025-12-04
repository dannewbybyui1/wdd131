// scripts/data.js
// Exports arrays, objects and utility functions (ES Module)

    export const services = [
    { id: 1, name: "Dog Walking", short: "30-60 minute walks", price: 15, available: true, tags: ["outdoor","exercise"] },
    { id: 2, name: "Pet Sitting", short: "Daily feeding + play", price: 35, available: true, tags: ["feeding","overnight"] },
    { id: 3, name: "Play & Socialization", short: "Supervised group play", price: 20, available: false, tags: ["social","play"] }
];

// Example: derived values with array methods
    export function getAvailableServices(){
    return services.filter(s => s.available);
}

    export function serviceSummary(){
  // map to strings
    return services.map(s => `${s.name} — ${s.short}`);
}

    export function avgPrice(){
    const total = services.reduce((acc, s) => acc + s.price, 0);
    return (total / services.length).toFixed(2);
}

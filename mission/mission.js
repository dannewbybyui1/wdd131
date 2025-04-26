
document.addEventListener("DOMContentLoaded", () => {
    
    
    const button = document.getElementById("messageButton");
    const message = document.getElementById("message");
    
    
    button.addEventListener("click", () => {
    
    message.textContent = "Thank you for reading the Mission Statement!";
    });
});

// Add JavaScript functionality, like showing alerts or dynamic messages
document.addEventListener("DOMContentLoaded", () => {
    // Show a welcome message when the page loads
    alert("Welcome to Tansva! Sign up now to get 30% off for a lifetime!");

    // Add dynamic behavior to the 'Join Waiting List' button
    const ctaButton = document.querySelector(".cta button");
    ctaButton.addEventListener("click", () => {
        alert("Thank you for joining the waiting list! We will contact you shortly.");
    });
});
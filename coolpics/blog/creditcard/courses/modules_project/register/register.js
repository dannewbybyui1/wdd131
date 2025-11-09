let participantCount = 1;

const addBtn = document.getElementById("addParticipantButton");
const form = document.getElementById("registrationForm");
const summary = document.getElementById("summary");

// Function to generate participant HTML
function participantTemplate(count) {
    return `
    <section class="participant${count}">
        <label for="name${count}">Participant ${count} Name:</label>
        <input type="text" id="name${count}" name="name${count}" required>

        <label for="fee${count}">Fee:</label>
        <input type="number" id="fee${count}" name="fee${count}" value="0" required>
    </section>
    `;
}

// Add Participant button functionality
addBtn.addEventListener("click", () => {
    participantCount++;
    addBtn.insertAdjacentHTML("beforebegin", participantTemplate(participantCount));
});

// Form submission
form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();

    const adultName = document.getElementById("adultName").value;
    const total = totalFees();

    // Hide form and show summary
    form.style.display = "none";
    summary.innerHTML = successTemplate({
        adultName: adultName,
        participants: participantCount,
        totalFee: total
    });
    summary.style.display = "block";
}

// Calculate total fees
function totalFees() {
    let feeElements = document.querySelectorAll("[id^=fee]");
    feeElements = [...feeElements]; // convert NodeList to Array
    return feeElements.reduce((sum, el) => sum + Number(el.value), 0);
}

// Template for success message
function successTemplate(info) {
    return `Thank you ${info.adultName} for registering. You have registered ${info.participants} participant(s) and owe $${info.totalFee} in fees.`;
}

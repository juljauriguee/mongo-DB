const destination = document.getElementById("destination");
const notes = document.getElementById("notes");
const exploreBtn = document.getElementById("exploreBtn");
const form = document.getElementById("bookingForm");
const travelerName = document.getElementById("travelerName");
const card = document.getElementById("destinationCard");
const output = document.getElementById("output");

// Click Event
exploreBtn.addEventListener("click", () => {
    if (destination.value === "") {
        output.textContent = "Please select a destination first!";
    } else {
        output.textContent = "Exploring " + destination.value + " ✈️";
    }
});

// Input Event
notes.addEventListener("input", () => {
    output.textContent = "Travel Notes: " + notes.value;
});

// Change Event
destination.addEventListener("change", () => {
    output.textContent = "Destination selected: " + destination.value;
});

// Submit Event
form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (travelerName.value === "") {
        output.textContent = "Please enter your name!";
        return;
    }

    output.textContent =
        travelerName.value +
        " booked a trip to " +
        destination.value +
        " 🎉";
});

// Keyup Event
notes.addEventListener("keyup", (e) => {
    console.log("Last key pressed:", e.key);
});

// Mouseover & Mouseout
card.addEventListener("mouseover", () => {
    card.style.background = "#ffe0b2";
    card.textContent = "🌍 Discover amazing places!";
});

card.addEventListener("mouseout", () => {
    card.style.background = "#eee";
    card.textContent = "🌴 Hover to preview destination";
});

// Focus & Blur
notes.addEventListener("focus", () => {
    notes.style.background = "#fff3e0";
});

notes.addEventListener("blur", () => {
    notes.style.background = "white";
});
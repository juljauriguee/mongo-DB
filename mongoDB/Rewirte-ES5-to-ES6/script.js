
const name = "Jiji";
let age = 21;

const greet = () => {
  return  `Hello ${name}`;
};

const message =`${greet()}. You are ${age} years old. Cheers to more Adventures!`;

//console.log(message);

const trip = {
    destination: "Europe",
    duration: "2 weeks",
    budget: "95000"
};

const { destination, duration, budget } = trip;

const week1 = ["Paris Tour", "Eiffel Tower Visit", "Seine River Cruise"];
const week2 = ["Amsterdam Canals", "Museum Visit", "City Cycling"];
const [firstPlan, secondPlan, thirdPlan] = week1;
const fullItinerary = [...week1, ...week2];

const displayOutput = () => `
    ${message}
    <br>
    Destination: ${destination}
    <br>
    Duration: ${duration}
    <br>
    Budget: €${budget.toLocaleString()}
    <br><br>
    Week 1 Highlights:
    ${firstPlan}, ${secondPlan}, ${thirdPlan}
    <br><br>
    Full Itinerary:
    ${fullItinerary.join(", ")}
`;

const output = document.getElementById("output");

if (output) {
    output.innerHTML = displayOutput();
}
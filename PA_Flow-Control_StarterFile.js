/*
    Author: Leah Pittman
    Date: 10/1/2026
    Purpose: Display trail information and handle form submission
*/

/* =========================================
   GREENWAY PARK TRAIL DATA
========================================= */

const trails = [
    { name: "River Walk", difficulty: "low", time: 20 },
    { name: "Forest Loop", difficulty: "medium", time: 45 },
    { name: "Hill Summit Trail", difficulty: "high", time: 90 },
    { name: "Lake Side Path", difficulty: "low", time: 30 },
    { name: "Rock Ridge Trail", difficulty: "high", time: 75 },
    { name: "Meadow Path", difficulty: "low", time: 25 },
    { name: "Pine Grove Trail", difficulty: "medium", time: 50 },
    { name: "leapit6717 Scenic Trail", difficulty: "high", time: 100 }
];

const trailContainer = document.getElementById("trailContainer");

// Loop through the array and display every trail card.
for (const trail of trails) {
    const card = document.createElement("article");

    card.className = "card";

    card.innerHTML = `
        <h3>${trail.name}</h3>
        <p>Difficulty: ${trail.difficulty}</p>
        <p>Average Time: ${trail.time} minutes</p>
    `;

    trailContainer.appendChild(card);
}

// Determine which trail matches the visitor's selections.
function recommendTrail(pets, experience) {
    if (pets === "yes" && experience === "low") {
        return "River Walk";
    } else if (
        pets === "yes" &&
        (experience === "medium" || experience === "high")
    ) {
        return "Forest Loop";
    } else if (pets === "no" && experience === "low") {
        return "Lake Side Path";
    } else if (pets === "no" && experience === "medium") {
        return "Forest Loop";
    } else if (pets === "no" && experience === "high") {
        return "Rock Ridge Trail";
    } else {
        return "River Walk";
    }
}

// Handle the form submission and display the recommendation.
document.getElementById("trailForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const pets = document.querySelector(
        'input[name="pets"]:checked'
    ).value;

    const experience = document.getElementById("experience").value;

    const trailName = recommendTrail(pets, experience);

    document.getElementById("result").textContent =
        `Recommended Trail: ${trailName}`;
});

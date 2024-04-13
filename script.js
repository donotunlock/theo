// JavaScript to populate the health tips dynamically
const healthTips = [
    "Drink plenty of water every day.",
    "Eat a balanced diet rich in fruits and vegetables.",
    "Get at least 30 minutes of exercise daily.",
    "Get 7-9 hours of sleep per night.",
    "Manage stress through relaxation techniques.",
];

const healthTipsList = document.getElementById("healthTips");

healthTips.forEach((tip) => {
    const li = document.createElement("li");
    li.textContent = tip;
    healthTipsList.appendChild(li);
});

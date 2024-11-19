// Mock data for calorie calculation
const calorieData = {
    "Chicken Breast": 165,
    "Rice": 130,
    "Butter": 717,
    "Milk": 42
};

let totalCalories = 0;

// Function to calculate calories
function calculateCalories() {
    const ingredient = document.getElementById("ingredient").value;
    const amount = parseFloat(document.getElementById("amount").value);

    if (calorieData[ingredient] && amount > 0) {
        const calories = (calorieData[ingredient] / 100) * amount;
        totalCalories += calories;
        document.getElementById("total-calories").innerText = Math.round(totalCalories);
    } else {
        alert("Invalid ingredient or amount! Please try again.");
    }

    document.getElementById("ingredient").value = "";
    document.getElementById("amount").value = "";
}

// Function to share recipe
function shareRecipe() {
    alert("Sharing recipe... This feature can be expanded with social media integration!");
}

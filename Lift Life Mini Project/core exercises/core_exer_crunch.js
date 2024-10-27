document.addEventListener("DOMContentLoaded", () => {
    const timeMinInput = document.getElementById("time-min");
    const timeSecInput = document.getElementById("time-sec");
    const setsInput = document.getElementById("sets-done");
    const caloriesOutput = document.getElementById("calories-burnt");

    // Base calorie burn rate per minute
    const calorieBurnRatePerMinute = 5;

    // Function to calculate calories burnt
    function calculateCalories() {
        const minutes = parseFloat(timeMinInput.value) || 0;
        const seconds = parseFloat(timeSecInput.value) || 0;
        const sets = parseFloat(setsInput.value) || 0;

        // Total time in minutes
        const totalTime = (minutes + seconds / 60) * sets;

        // Total calories burned
        const caloriesBurned = totalTime * calorieBurnRatePerMinute;
        
        // Update the output field
        caloriesOutput.value = caloriesBurned.toFixed(2);
    }

    // Event listeners to trigger calorie calculation on input change
    timeMinInput.addEventListener("input", calculateCalories);
    timeSecInput.addEventListener("input", calculateCalories);
    setsInput.addEventListener("input", calculateCalories);
});

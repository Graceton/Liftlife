document.addEventListener("DOMContentLoaded", () => {
    const plankInput = document.getElementById("planks-minutes");
    const crunchesInput = document.getElementById("crunches-sets");
    const legLiftsInput = document.getElementById("leg-lifts-sets");

    plankInput.addEventListener("input", () => {
        console.log("Minutes done for Planks:", plankInput.value);
    });

    crunchesInput.addEventListener("input", () => {
        console.log("Sets done for Crunches:", crunchesInput.value);
    });

    legLiftsInput.addEventListener("input", () => {
        console.log("Sets done for Leg Lifts:", legLiftsInput.value);
    });
});

const result = document.getElementById("result");
const input = document.getElementById("input");
const button = document.getElementById("button");
function ageCalculator() {
    const currentYear = new Date().getFullYear();
    const birthYear = input.value;
    console.log(currentYear, birthYear);
    const age = currentYear - birthYear;
    result.innerText = `You are ${age} years old.`
}


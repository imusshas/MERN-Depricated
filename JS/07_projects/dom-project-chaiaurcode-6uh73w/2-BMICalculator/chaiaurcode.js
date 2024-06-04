const form = document.querySelector("form");

// This usecase gives empty value
// const height = parseInt(document.querySelector("#height").value);

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector("#results");
    if (height === " " || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`
    } else if (weight === " " || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`
    } else {
        const bmi = (weight / (height * height / 10000)).toFixed(2);
        let condition;
        if (bmi < 18.6) {
            condition = "Under Weight";
        } else if (bmi > 24.9) {
            condition = "Over Weight";
        } else {
            condition = "Normal Weight";
        }
        results.innerHTML = `<span>${bmi}</span><br>${condition}`;
    }
});
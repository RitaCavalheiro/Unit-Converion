let input = document.getElementById("darkmode-toggle");
let containers = document.querySelectorAll(".container");
let btn = document.getElementById("convert");
let number = document.getElementById("number");
let length = document.getElementById("length");
let volume = document.getElementById("volume");
let mass = document.getElementById("mass");



input.addEventListener('change', function() {
if(this.checked) {
document.body.classList.add('dark-mode');
containers.forEach(container => container.classList.add('dark-mode'));
} else {
document.body.classList.remove('dark-mode');
containers.forEach(container => container.classList.remove('dark-mode'));
}
});

btn.addEventListener('click', function() {
    const conversionMF = number.value * 3.28084;
    const conversionFM = number.value * 0.304;
    const conversionLG = number.value * 0.264172;
    const conversionGL = number.value * 0.785411784;
    const conversionKP = number.value * 2.2;
    const conversionPK = number.value * 0.45359237;
    
    if(number != null) {
        length.textContent = `${number.value} meters = ${conversionMF} feet || ${number.value} feet = ${conversionFM} meters`;
        volume.textContent =  `${number.value} liters = ${conversionLG} gallons || ${number.value} gallons = ${conversionGL} liters`;
        mass.textContent = `${number.value} kilograms = ${conversionKP} pounds || ${number.value} pounds = ${conversionPK} kilograms`;
    }
})


// Conversion formulas
// from meters to feet: n*3.28084
//reverse: n*0.304
// from liters to gallons: n*0.264172 
//reverse: n*0.785411784
// from kilograms to pounds: n*2.2
//reverse: n*0.45359237


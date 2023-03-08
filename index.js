let input = document.getElementById("darkmode-toggle")
let containers = document.querySelectorAll(".container")

input.addEventListener('change', function() {
if(this.checked) {
document.body.classList.add('dark-mode');
containers.forEach(container => container.classList.add('dark-mode'));
} else {
document.body.classList.remove('dark-mode');
containers.forEach(container => container.classList.remove('dark-mode'));
}
});
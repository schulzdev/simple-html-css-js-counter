const counter = document.getElementById("counter");
const inc = document.getElementById("inc");
const dec = document.getElementById("dec");
const reset = document.getElementById("reset");

inc.addEventListener("click", () => {
	let curr = counter.innerHTML;
	counter.innerHTML = parseInt(curr) + 1;
	curr = counter.innerHTML;
	changeColor(counter, curr);
});

dec.addEventListener("click", () => {
	let curr = counter.innerHTML;
	counter.innerHTML = parseInt(curr) - 1;
	curr = counter.innerHTML;
	changeColor(counter, curr);
});

reset.addEventListener("click", () => {
	counter.innerHTML = 0;
	let curr = counter.innerHTML;
	changeColor(counter, curr);
});

const changeColor = (elem, int) => {
	if (int > 0) {
		elem.style.color = "green";
	} else if (int < 0) {
		elem.style.color = "red";
	} else {
		elem.style.color = "yellow";
	}
};

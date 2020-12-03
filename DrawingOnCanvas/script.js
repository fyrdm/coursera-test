document.addEventListener("DOMContentLoaded", (event) => {
	var tuval = document.getElementById("mycanvas");
	var cizim = tuval.getContext("2d");
	
	tuval.height = window.innerHeight;
	tuval.width = window.innerWidth;

	let painting = false;

	tuval.addEventListener('mousedown', (e) => {
		painting = true;
	});

	tuval.addEventListener('mouseup', (e) => {
		painting = false;
	});

	tuval.addEventListener('mousemove', (e) => {
		if (!painting) { return;}
		cizim.beginPath();
		cizim.arc(e.offsetX,e.offsetY,25,-Math.PI/6,2*Math.PI);
		cizim.stroke();
	});
});
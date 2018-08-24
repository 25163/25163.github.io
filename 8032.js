const pressed = [];
const secretCode = 'night';
const p = document.querySelector('p');
const confetti = document.querySelector('.confetti-time');

window.addEventListener('keyup', (e) => {
	console.log(e.key);
	pressed.push(e.key);
	pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
	if(pressed.join('').includes(secretCode)) {
    console.log('Correct!');
    window.location.href = "7160.html";
	}
	console.log(pressed);
});

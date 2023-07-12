var raindropSounds = {
	3: 'Pling',
	5: 'Plang',
	7: 'Plong',
}

function createRaindropSound(number) {
	let raindrops = '';
	Object.entries(raindropSounds).forEach(entry => {
		if (number % entry[0] == 0) {
			raindrops += entry[1];
		};
	})
	return raindrops;
}

export function convert(number) {
	let raindropSound = createRaindropSound(number);
	if (raindropSound === '') {
		return number.toString();
	} else {
		return raindropSound;
	}
}
// Vue.createApp({
// 	data() {
// 		return {
// 			sequence: [],
// 			copy: [],
// 			round: 0,
// 			active: false,
// 			activateSimonBoard: false,
// 			light: 0,
// 			sound: 0,
// 			speed: 1500
// 		}
// 	},
// 	methods: {
// 		changeMode(e) {
// 			switch (e.target.value) {
// 				case "easy":
// 					this.speed = 1500;
// 					break;
// 				case "middle":
// 					this.speed = 1000;
// 					break;
// 				case "hard":
// 					this.speed = 400;
// 					break;
// 			}
// 		},
// 		start() {
// 			this.sequence = [];
// 			this.copy = [];
// 			this.round = 0;
// 			this.active = true;
// 			this.activateSimonBoard = false;
// 			this.light = false;
// 			this.newRound();
// 		},
// 		newRound() {
// 			this.round++;
// 			this.sequence.push(this.randomNumber());
// 			this.copy = this.sequence.slice(0);
// 			this.animate(this.sequence);
// 		},
// 		animate(sequence) {
// 			let i = 0;
// 			let interval = setInterval(() => {
// 				this.playSound(sequence[i]);
// 				this.lightUp(sequence[i]);
// 				i++;
// 				if (i >= sequence.length) {
// 					clearInterval(interval);
// 					this.activateSimonBoard = true;
// 				}
// 			}, this.speed)
// 		},
// 		registerClick(e) {
// 			if (this.activateSimonBoard) {
// 				let desiredResponse = this.copy.shift();
// 				let actualResponse = +e.target.dataset.tile;
// 				this.lightUp(+e.target.dataset.tile);
// 				this.playSound(+e.target.dataset.tile);
// 				this.active = (desiredResponse === actualResponse);
// 				this.checkLose();
// 			}
// 		},
// 		checkLose() {
// 			if (this.copy.length === 0 && this.active) {
// 				this.activateSimonBoard = false;
// 				setTimeout(this.newRound, 500);
// 			} else if (!this.active) {
// 				this.activateSimonBoard = false;
// 			}
// 		},
// 		lightUp(tile) {
// 			this.light = tile;
// 			setTimeout(() => {
// 				this.light = 0;
// 			}, 350);
// 		},
// 		playSound(tile) {
// 			this.sound = tile;
// 			setTimeout(() => {
// 				this.sound = 0;
// 			}, 350);
// 		},
// 		randomNumber() {
// 			return Math.floor((Math.random() * 4) + 1);
// 		}
// 	}
// }).mount('#app');


const app = new Vue({
	el: '#app',
	data() {
		return {
			sequence: [],
			copy: [],
			round: 0,
			active: false,
			activateSimonBoard: false,
			light: 0,
			sound: 0,
			speed: 1500
		}
	},
	methods: {
		changeMode(e) {
			switch (e.target.value) {
				case "easy":
					this.speed = 1500;
					break;
				case "middle":
					this.speed = 1000;
					break;
				case "hard":
					this.speed = 400;
					break;
			}
		},
		start() {
			this.sequence = [];
			this.copy = [];
			this.round = 0;
			this.active = true;
			this.activateSimonBoard = false;
			this.light = false;
			this.newRound();
		},
		newRound() {
			this.round++;
			this.sequence.push(this.randomNumber());
			this.copy = this.sequence.slice(0);
			this.animate(this.sequence);
		},
		animate(sequence) {
			let i = 0;
			let interval = setInterval(() => {
				this.playSound(sequence[i]);
				this.lightUp(sequence[i]);
				i++;
				if (i >= sequence.length) {
					clearInterval(interval);
					this.activateSimonBoard = true;
				}
			}, this.speed)
		},
		registerClick(e) {
			if (this.activateSimonBoard) {
				let desiredResponse = this.copy.shift();
				let actualResponse = +e.target.dataset.tile;
				this.lightUp(+e.target.dataset.tile);
				this.playSound(+e.target.dataset.tile);
				this.active = (desiredResponse === actualResponse);
				this.checkLose();
			}
		},
		checkLose() {
			if (this.copy.length === 0 && this.active) {
				this.activateSimonBoard = false;
				setTimeout(this.newRound, 500);
			} else if (!this.active) {
				this.activateSimonBoard = false;
			}
		},
		lightUp(tile) {
			this.light = tile;
			setTimeout(() => {
				this.light = 0;
			}, 350);
		},
		playSound(tile) {
			this.sound = tile;
			setTimeout(() => {
				this.sound = 0;
			}, 350);
		},
		randomNumber() {
			return Math.floor((Math.random() * 4) + 1);
		}
	}
})

Vue.config.devtools = true;
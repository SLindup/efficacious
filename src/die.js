var dieState = {
	create: function() {
		var dieLabel = game.add.text(80, 80, 'Wasted - Click to respawn', {font: '50px Andale Mono', fill:'#00FF00'});

	},

	update: function() {
		if(this.game.input.activePointer.isDown){
			shield = 100;
			health = 50;
			this.game.state.start('play');
		}
	}
};
var menuState = {
	create: function() {

		var nameLabel = game.add.text( 80, 80, 'LCS Efficacious', {font: '25px Andale Mono', fill:'#fff'});

		var startLabel = game.add.text(80, game.world.height-80, 'Click to start', {font: '25px Andale Mono', fill:'#fff'});

	},

	update: function() {
		if(this.game.input.activePointer.isDown){
			this.start();
		}
	},

	start: function() {
		game.state.start('play');
	}
};
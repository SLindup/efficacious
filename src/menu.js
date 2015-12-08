var menuState = {
	create: function() {

		var logo = game.add.sprite(50, 0, 'logo');
		logo.alpha = 0.7;
		var nameLabel = game.add.text( 80, 80, 'LCS Efficacious', {font: '25px Andale Mono', fill:'#fff'});
		instructions = game.add.sprite(450, 220, 'instructions');
		var startLabel = game.add.text(80, game.world.height-80, 'Click to start', {font: '25px Andale Mono', fill:'#fff'});

	},

	update: function() {
		if(this.game.input.activePointer.isDown){
			this.start();
		}
	},

	start: function() {
		game.state.start('opening');
	}
};
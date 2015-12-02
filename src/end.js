var endState = {
	create: function() {
		var endLabel = game.add.text(80, 80, 'Congratulations!\nYou have finished the game.', {font: '50px Andale Mono', fill:'#FFF'});
		var contLabel = game.add.text(80, 300, 'Click to return, you can move between systems freely', {font: '20px Andale Mono', fill:'#FFF'})
	},

	update: function() {
		if(this.game.input.activePointer.isDown){
			this.game.state.start('play');
		}
	}
};
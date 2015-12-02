var openState = {
	create: function() {

		var nameLabel = game.add.text(50, 80, '', {font: '25px Andale Mono', fill:'#fff', align: 'center'});
		// nameLabel.text = opener;
		var opener = "A few weeks ago your ship, the LCS Efficacious,\nwas assigned to clear out a growing rebel\npresence in a nearby system. Your ship was\noutnumbered and suffered heavy damage. As a\nresult of this damage your hyperspace jump\ncapabilities are limited, stranding you on the\nedge of colonised space. Luckily, you were\nable to jump to the nearby colony of Bohemia\nin the Silesia system where you were able to\nenact repairs.";
		nameLabel.text = opener;

		var startLabel = game.add.text(80, game.world.height-80, 'Click to continue', {font: '25px Andale Mono', fill:'#fff'});
	},

	update: function() {
		if(this.game.input.activePointer.isDown){
			this.start();
		}

		//game.time.events.add(Phaser.Timer.SECOND * 20, this.start, this);
	},

	start: function() {
		game.state.start('play');
	}
};
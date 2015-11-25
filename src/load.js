var loadState = {
    preload: function() {
      var loadingLabel = game.add.text(80, 150, 'Loading...', {font: '30px Andale Mono', fill: '#fff'});

    game.load.image('background','assets/deep-space.jpg');
    game.load.image('player','assets/hex.png');
    game.load.image('planet', 'assets/reach.png');
    game.load.image('planet2', 'assets/planeta.png')
    game.load.image('sun', 'assets/reddwarf2.png');
    game.load.spritesheet('shield', 'assets/shieldbar2.png', 400, 25, 2);
    game.load.image('armour', 'assets/armour.png');
    game.load.image('shieldback', 'assets/shieldback.png');
    game.load.image('statusback', 'assets/status.png');
    game.load.image('map', 'assets/map.png');
    game.load.image('here', 'assets/here.png');



    },

    create: function() {
      game.state.start('menu');
    }
};
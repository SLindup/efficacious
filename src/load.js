var loadState = {
    preload: function() {
    var loadingLabel = game.add.text(80, 150, 'Loading...', {font: '30px Andale Mono', fill: '#fff'});

    game.load.image('logo', 'assets/LClogo.jpg');
    game.load.spritesheet('player', 'assets/spritesheet3.png', 100, 100, 10);
    game.load.spritesheet('shield', 'assets/shieldbar2.png', 400, 25, 2);
    game.load.image('armour', 'assets/armour.png');
    game.load.image('shieldback', 'assets/shieldback.png');
    game.load.image('statusback', 'assets/status.png');
    game.load.image('here', 'assets/here.png');
    game.load.image('galaxyMap', 'assets/galaxymap.png');
    game.load.image('hyperspace', 'assets/hyperspace.png');
    game.load.image('button', 'assets/button.png');
    game.load.image('instructions', 'assets/instructions.png');
    game.load.image('ai', 'assets/aiback.png');

    game.load.image('bullet', 'assets/bullets2.png');
    game.load.image('ebullet', 'assets/bullets.png');
    game.load.image('enemy', 'assets/enemy.png');
    game.load.spritesheet('explosion', 'assets/explosion.png', 64, 64, 24);

    //Silesia
    game.load.image('background','assets/Silesia/deep-space.jpg');
    game.load.image('planet', 'assets/Silesia/bohemia.png');
    game.load.image('planet2', 'assets/Silesia/moravia.png')
    game.load.image('sun', 'assets/Silesia/Silesia.png');
    game.load.image('map', 'assets/Silesia/SilesiaMap.png');

    //Azizos
    game.load.image('AAbg', 'assets/AA/space2.jpg');
    game.load.image('Arsu', 'assets/AA/Arsu.png');   
    game.load.image('Azizos', 'assets/AA/Azizos.png');
    game.load.image('Moloch', 'assets/AA/Moloch.png');
    game.load.image('Qos', 'assets/AA/Qos.png');
    game.load.image('Martu', 'assets/AA/Martu.png');
    game.load.image('Ashratu', 'assets/AA/Ashratu.png');
    game.load.image('AAmap', 'assets/AA/AAmap.png');

    //Vichama
    game.load.image('Vbg', 'assets/Vichama/space2.jpg');
    game.load.image('vichama', 'assets/Vichama/vichama.png');
    game.load.image('Kon', 'assets/Vichama/Kon.png');
    game.load.image('Supay', 'assets/Vichama/Supay.png');
    game.load.image('Vmap', 'assets/Vichama/map.png');
    },

    create: function() {
      game.state.start('menu');
    }
};

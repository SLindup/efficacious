function createHealthBars() {
	//shield and armour background
        shieldback = game.add.sprite(9, 9, 'shieldback');
        shieldback.fixedToCamera = true;
        shieldback.alpha = 0.5;

        //armour squares
        armour = game.add.sprite(18+8, 18, 'armour');
        armour.fixedToCamera = true;
        armour.alpha = 0.7;

        armour2 = game.add.sprite((18+46+8), 18, 'armour');
        armour2.fixedToCamera = true;
        armour2.alpha = 0.7;

        armour3 = game.add.sprite((18+8 + 46*2), 18, 'armour');
        armour3.fixedToCamera = true;
        armour3.alpha = 0.7;

        armour4 = game.add.sprite((18+8 + 46*3), 18, 'armour');
        armour4.fixedToCamera = true;
        armour4.alpha = 0.7;

        armour5 = game.add.sprite((18+8 + 46*4), 18, 'armour');
        armour5.fixedToCamera = true;
        armour5.alpha = 0.7;
	//shield bar
        shieldbar = game.add.sprite(10, 10, 'shield');
        shieldbar.frame = 0;
        shieldbar.alpha = 0.7;
        shieldbar.scale.setTo(1, 1);
        shieldbar.fixedToCamera = true;
        shieldbar.animations.add('low', [0,1], 3, true);
}

function createWalls() {
	walls = game.add.group();
    walls.enableBody = true;

    wall = walls.create(game.camera.x, game.camera.y);
    wall.scale.x = 800;
    wall.scale.y = 1;
    game.physics.enable(wall, Phaser.Physics.ARCADE);
    wall.body.immovable = true;

    wall2 = walls.create(game.camera.x, (game.camera.y+700));
    wall2.scale.x = 800;
    wall2.scale.y = 1;
    // wall.anchor.setTo(0.5, 0.5);
    // wall2.angle = 270;
    game.physics.enable(wall2, Phaser.Physics.ARCADE);
    wall2.body.immovable = true;

    wall3 = walls.create(game.camera.x, game.camera.y);
    wall3.scale.x = 1;
    wall3.scale.y = 700;
    wall3.anchor.setTo(0.5, 0.5);
    wall3.angle = 270;
    game.physics.enable(wall3, Phaser.Physics.ARCADE);
    wall3.body.immovable = true;

    wall4 = walls.create(game.camera.x+game.camera.width, game.camera.y);
    wall4.scale.x = 1;
    wall4.scale.y = 700;
    wall4.anchor.setTo(0.5, 0.5);
    wall4.angle = 270;
    game.physics.enable(wall4, Phaser.Physics.ARCADE);
    wall4.body.immovable = true;
}

function createObjective() {
	arrow = game.add.sprite(770, 700, 'planet'); // change coords to near player
    arrow.scale.setTo(0.01, 0.01);
    game.physics.enable(arrow, Phaser.Physics.ARCADE);
}

function createStatus() {
	//HUD elements
        statusback = game.add.sprite(0, 545, 'statusback');
        statusback.fixedToCamera = true;
        statusback.alpha = 0.5;
        statusback.scale.setTo(1.45, 1);

        statusText = game.add.text(5, 555, '', {font: 'Andale mono', fontSize: '15px', fill:'#fff'});
        statusText.fixedToCamera = true;
}

function createGalaxyMap() {
	GMG = game.add.group();

	hyperspace = game.add.sprite(0, 0, 'hyperspace');
	hyperspace.fixedToCamera = true;
	GMG.add(hyperspace);

	gMap = game.add.sprite(60, 70, 'galaxyMap');
	gMap.alpha = 0.9;
	gMap.fixedToCamera = true;
	GMG.add(gMap);

	SButton = game.add.sprite(300, 461, 'button');
	SButton.fixedToCamera = true;
	SButton.inputEnabled = true;
	SButton.input.useHandCursor = true;
	SButton.events.onInputDown.add(jumpSilesia, this);
	GMG.add(SButton);

	AButton = game.add.sprite(275, 480, 'button');
	AButton.fixedToCamera = true;
	AButton.inputEnabled = true;
	AButton.input.useHandCursor = true;
	AButton.events.onInputDown.add(jumpAzizos, this);
	GMG.add(AButton);

	VButton = game.add.sprite(375, 472, 'button');
	VButton.fixedToCamera = true;
	VButton.inputEnabled = true;
	VButton.input.useHandCursor = true;
	VButton.events.onInputDown.add(jumpVichama, this);
	GMG.add(VButton);

	GMG.visible = false;
}

function showGalaxyMap() {
	AA.visible = false;
	silesia.visible = false;
	vichama.visible = false;
	sprite.visible = false;
	GMG.visible = true;
}

// function moveShip() {
// 	sprite.rotation = game.Physics.ARCADE.moveToXY(sprite, 0, 0, 300);
// }

function jumpSilesia() {
	GMG.visible = false;
	system = "Silesia";
	loadWorld();
	//moveShip();
	sprite.visible = true;
	sprite.frame = 0;
	arrow.x = sprite.body.x;
	arrow.y = sprite.body.y;
}

function jumpAzizos() {
	GMG.visible = false;
	system = "Azizos";
	loadWorld();
	sprite.visible = true;
	sprite.frame = 0;
}

function jumpVichama() {
	GMG.visible = false;
	system = "Vichama";
	loadWorld();
	sprite.visible = true;
	sprite.frame = 0;
}

function updateStatus() {
	//HUD text element
	    statusText.text = '>LCS Efficacious Status\n>>Shield..'+parseInt((shield/shieldTotal)*100)+'%\n>>Armour..'+health*2+'%\n>>Engines..'+parseInt(sprite.body.speed/6)+'%\n>>Location..'+parseInt(sprite.body.x)+','+parseInt(sprite.body.y)+'\n>C:'+enemiesAlive+'V:'+VicEnemies+SilEnemies+AAEnemies+QosB;
}

function updateObjective() {
	 //keep the objective arrow contained within the screen
	    wall.body.x = game.camera.x;
	    wall.body.y = game.camera.y-31;
	    wall2.body.x = game.camera.x;
	    wall2.body.y = game.camera.y+700;
	    wall3.body.x = game.camera.x-31;
	    wall3.body.y = game.camera.y;
	    wall4.body.x = game.camera.x+800;
	    wall4.body.y = game.camera.y;
	    game.physics.arcade.collide(arrow, walls);

	    if(arrow.body.x != objx && arrow.body.y != objy)
	    {
	        game.physics.arcade.moveToXY(arrow, objx, objy, 600); 
	    }
	    //end of objective arrow code
}


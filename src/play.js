var playState = {
	

	create: function() {
		tilesprite = game.add.tileSprite(1800, 2000, 800, 700, 'background');
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

        sun = game.add.sprite(-255, -255, 'sun');
        sun.scale.setTo(.5, .5);

        arrow = game.add.sprite(770, 700, 'planet'); // change coords to near player
        arrow.scale.setTo(0.01, 0.01);
        game.physics.enable(arrow, Phaser.Physics.ARCADE);

        planet = game.add.sprite(3875, 925, 'planet');
        planet.scale.setTo(.09, .09);
        
        sprite = game.add.sprite(875, 925, 'player'); // change arrow coords to nearby
        //sprite = game.add.sprite(game.world.centerX, game.world.centerY, 'player');
        sprite.anchor.set(0.5);

        game.physics.enable(sprite, Phaser.Physics.ARCADE);
        //sprite.body.collideWorldBounds = true;
        sprite.body.maxVelocity.set(600);

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

        discharge = game.time.create(false);
        discharge.loop(500, this.drain, this, 1);
        discharge.start();
        discharge.pause();

        retimer = game.time.create(false);
        retimer.loop(2000, this.recharge, this);
        retimer.start();
        retimer.pause();

        //Map key
        mkey = game.input.keyboard.addKey(Phaser.Keyboard.M);
		map = game.add.sprite(300, 300, 'armour');
	    map.fixedToCamera = true;
	   	map.visible = false;
	   	mkey.onDown.add(function (mkey) {
	   		map.visible = !map.visible;
	   	}, this);

        //creating cursor keys
        cursors = game.input.keyboard.createCursorKeys();

        //Setting camera to follow sprite
        game.camera.follow(sprite);
        //setting up deadzone, background doesn't move until player hits edge of this
        game.camera.deadzone = new Phaser.Rectangle(100, 100, 600, 400);

        //HUD elements
        statusback = game.add.sprite(0, 545, 'statusback');
        statusback.fixedToCamera = true;
        statusback.alpha = 0.5;
        statusback.scale.setTo(1.2, 1);

        statusText = game.add.text(5, 555, '', {font: 'Andale mono', fontSize: '15px', fill:'#fff'});
        statusText.fixedToCamera = true;
	},

	update: function() {
		//Position and size the world
    	this.game.world.setBounds(Phaser.Camera.width + sprite.position.x, Phaser.Camera.width + sprite.position.y, Phaser.Camera.width*2, Phaser.Camera.height*2);

    	tilesprite.x = game.camera.x;
    	tilesprite.y = game.camera.y;

    	tilesprite.tilePosition.x = -game.camera.x;
    	tilesprite.tilePosition.y = -game.camera.y;

    	//Player movement
    	if (cursors.up.isDown)
	    {
	        point = game.physics.arcade.accelerationFromRotation(sprite.rotation, 60, sprite.body.acceleration);
	    }
	    else if(cursors.down.isDown)
	    {
	        if(sprite.body.speed !== 0)
	        {
	            sprite.body.drag.set(100);
	        }
	    }
	    else
	    {
	        sprite.body.acceleration.set(0);
	        sprite.body.drag.set(0);
	    }

	    //Player rotation
	    if (cursors.left.isDown)
	    {
	        sprite.body.angularVelocity = -70;
	    }
	    else if (cursors.right.isDown)
	    {
	        sprite.body.angularVelocity = 70;
	    }
	    else
	    {
	        sprite.body.angularVelocity = 0;
	    }

	    // if(mkey.isDown)
	    // {
	    // 	map.visible = !map.visible;
	    // }

	    //being too close to the sun
	    if(game.physics.arcade.distanceToXY(sprite, 0, 0) < 300)
	    {
	        retimer.pause();
	        discharge.resume();
	    }
	    else if(game.physics.arcade.distanceToXY(sprite, 0, 0) > 300 && shield < 100)
	    {
	        discharge.pause();
	        retimer.resume();
	    }
	    //end of sun hit code

	    //HUD text element
	    statusText.text = '>LCS Efficacious Status\n>>Shield..'+shield+'%\n>>Armour..'+health*2+'%\n>>Engines..'+parseInt(sprite.body.speed/6)+'%\n>>Location..'+parseInt(sprite.body.x)+','+parseInt(sprite.body.y)+'\n>';

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
	},

	drain: function(dp)
	{
	    if(shield > 0)
	    {
	        shield -= dp;
	        
	    }
	    if(shield == 0 && health > 0)
	    {
	        health -= dp;
	    }
	    if(health == 0)
	    {
	        this.die();
	    }
	    shieldbar.scale.setTo((shield/100), 1);
	    this.armourDrain();
	    shieldbar.animations.play('low');
	},

	recharge: function()
	{
	    if(shield < 100)
	    {
	        shield += 1;
	    }
	    shieldbar.scale.setTo((shield/100), 1);
	    shieldbar.animations.stop();
	    shieldbar.frame = 0;
	},

	armourDrain: function()
	{
	    if(health >= 40)
	    {
	        armour5.scale.setTo((health-40)/10, 1);
	    }
	    if(health >= 30 && health < 40)
	    {
	        armour4.scale.setTo((health-30)/10, 1);
	    }
	    if(health >= 20 && health <30)
	    {
	        armour3.scale.setTo((health - 20)/10, 1);
	    }
	    if(health >=10 && health < 20)
	    {
	        armour2.scale.setTo((health - 10)/ 10, 1);
	    }
	    if(health >=0 && health < 10)
	    {
	        armour.scale.setTo((health)/ 10, 1); 
	    }
	},

	die: function() {
		game.state.start('die');
	}

};
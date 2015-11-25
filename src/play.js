var playState = {
	

	create: function() {
		tilesprite = game.add.tileSprite(1800, 2000, 800, 700, 'background');

        sun = game.add.sprite(-255, -255, 'sun');
        sun.scale.setTo(.5, .5);

        planet2 = game.add.sprite(-1050, -2235, 'planet2');
        planet2.scale.setTo(.04, .04);

        createObjective();

        planet = game.add.sprite(3875, 925, 'planet');
        planet.scale.setTo(.09, .09);
        
        sprite = game.add.sprite(playerX, playerY, 'player'); // change arrow coords to nearby
        //sprite = game.add.sprite(game.world.centerX, game.world.centerY, 'player');
        sprite.anchor.set(0.5);

        game.physics.enable(sprite, Phaser.Physics.ARCADE);
        //sprite.body.collideWorldBounds = true;
        sprite.body.maxVelocity.set(600);

        createHealthBars();

        discharge = game.time.create(false);
        discharge.loop(500, this.drain, this, 1);
        discharge.start();
        discharge.pause();

        retimer = game.time.create(false);
        retimer.loop(rechargeTime, this.recharge, this);
        retimer.start();
        retimer.pause();

        //Map key
        mkey = game.input.keyboard.addKey(Phaser.Keyboard.M);
		map = game.add.sprite(60, 70, 'map');
		map.alpha = 0.9;
	    map.fixedToCamera = true;
	   	map.visible = false;

	   	mkey.onDown.add(function (mkey) {
	   		map.visible = !map.visible;
	   		game.paused = !game.paused;
	   	}, this);

	   	pausedText = game.add.text(340, 300, 'PAUSED', {font: 'Andale mono', fontSize: '35px', fill:'#fff'});
	   	pausedText.fixedToCamera = true;
	   	pausedText.visible = false;
	   	pText2 = game.add.text(325, 340, 'Press P to resume', {font: 'Andale mono', fontSize: '15px', fill:'#fff'});
	   	pText2.fixedToCamera = true;
	   	pText2.visible = false;
	   	pkey = game.input.keyboard.addKey(Phaser.Keyboard.P);
	   	pkey.onDown.add(function (pkey) {
	   		pausedText.visible = !pausedText.visible;
	   		pText2.visible = !pText2.visible;
	   		game.paused = !game.paused;
	   	}, this);

        //creating cursor keys
        cursors = game.input.keyboard.createCursorKeys();

        //Setting camera to follow sprite
        game.camera.follow(sprite);
        //setting up deadzone, background doesn't move until player hits edge of this
        game.camera.deadzone = new Phaser.Rectangle(100, 100, 600, 400);

        createStatus();
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

	    //being too close to the sun
	    if(game.physics.arcade.distanceToXY(sprite, 0, 0) < 300)
	    {
	        retimer.pause();
	        discharge.resume();
	    }
	    else if(game.physics.arcade.distanceToXY(sprite, 0, 0) > 300 && shield < shieldTotal)
	    {
	        discharge.pause();
	        retimer.resume();
	    }
	    //end of sun hit code

	    updateStatus();

	    updateObjective();
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
	    shieldbar.scale.setTo(shield/shieldTotal, 1);
	    this.armourDrain();
	    shieldbar.animations.play('low');
	},

	recharge: function()
	{
	    if(shield < shieldTotal)
	    {
	        shield += 1;
	    }
	    shieldbar.scale.setTo(shield/shieldTotal, 1);
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
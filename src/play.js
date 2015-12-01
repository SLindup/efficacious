var playState = {
	

	create: function() {
        createSilesia();
        createAA();
        createVichama();
        createPlayer();
        createBullets();
        //loadWorld();

        //createBullets();
        //createPlayer();
        sprite.bringToTop();

        createExplosions();
        createEnemyBullets();
        
        loadWorld();
        
     //    if(system == "Silesia")
     //    {
     //    	createEnemies(SilEnemies, Objx, Objy);
     //    }
     //    else if(system == "Azizos")
     //    {
     //    	createEnemies(AAEnemies, Aobjx, Aobjy);
     //    }
     //    else if(system == "Vichama")
     //    {
	    //     //createEnemies(VicEnemies, Vobjx, Vobjy);
	    // }

        createHealthBars();
        createStatus();

        createWalls();

        discharge = game.time.create(false);
        discharge.loop(500, drain, this, 1);
        discharge.start();
        discharge.pause();

        retimer = game.time.create(false);
        retimer.loop(rechargeTime, this.recharge, this);
        retimer.start();
        retimer.pause();

        wdrain = game.time.create(false);
        wdrain.loop(500, this.drain, this, wdp);
        wdrain.start();
        wdrain.pause();

        wcharge = game.time.create(false);
        wcharge.loop(rechargeTime, this.recharge, this);
        wcharge.start();
        wcharge.pause();

        //Map key
        mkey = game.input.keyboard.addKey(Phaser.Keyboard.M);

        createSilesiaMap();
        createAAMap();
        createVichamaMap();

        here = game.add.sprite(10, 10,'here');
        here.fixedToCamera = true;
        here.alpha = 0.9;
        here.visible = false;

	   	createGalaxyMap();

	   	mkey.onDown.add(function (mkey) {
	   		showMap();
	   		game.paused = !game.paused;
	   	}, this);
	   	//end of map code

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

	   	jkey = game.input.keyboard.addKey(Phaser.Keyboard.J);
	   	jkey.onDown.add(function (jkey) {
	   		saveEnemies();
	   		sprite.animations.play('jump');
	   		game.time.events.add(Phaser.Timer.SECOND * .6, showGalaxyMap, this);
	   	})

	   	game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);

        //creating cursor keys
        cursors = game.input.keyboard.createCursorKeys();

        //Setting camera to follow sprite
        game.camera.follow(sprite);
        //setting up deadzone, background doesn't move until player hits edge of this
        game.camera.deadzone = new Phaser.Rectangle(100, 100, 600, 400);
	},

	update: function() {
		//Position and size the world
    	this.game.world.setBounds(Phaser.Camera.width + sprite.position.x, Phaser.Camera.width + sprite.position.y, Phaser.Camera.width*2, Phaser.Camera.height*2);

    	tilesprite.x = game.camera.x;
    	tilesprite.y = game.camera.y;

    	tilesprite.tilePosition.x = -game.camera.x;
    	tilesprite.tilePosition.y = -game.camera.y;

    	AAtilesprite.x = game.camera.x;
    	AAtilesprite.y = game.camera.y;

    	AAtilesprite.tilePosition.x = -game.camera.x;
    	AAtilesprite.tilePosition.y = -game.camera.y;

    	Vtilesprite.x = game.camera.x;
    	Vtilesprite.y = game.camera.y;

    	Vtilesprite.tilePosition.x = -game.camera.x;
    	Vtilesprite.tilePosition.y = -game.camera.y;

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
	        sprite.body.angularVelocity = -80;
	    }
	    else if (cursors.right.isDown)
	    {
	        sprite.body.angularVelocity = 80;
	    }
	    else
	    {
	        sprite.body.angularVelocity = 0;
	    }

	    //firing weapon
	    if(game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR))
	    {
	    	fireBullet();
	    }

	    //being too close to the sun
	    if(game.physics.arcade.distanceToXY(sprite, 0, 0) < 300 && system == "Silesia")
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

	    checkHit();
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
	}

};
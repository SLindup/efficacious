function createPlayer() {
	sprite = game.add.sprite(playerX, playerY, 'player'); // change arrow coords to nearby
    sprite.frame = 0;
    sprite.anchor.set(0.5);
    sprite.animations.add('jump', [0,1,2,3,4,5,6,7,8,9,0], 15, false);

    game.physics.enable(sprite, Phaser.Physics.ARCADE);
    sprite.body.maxVelocity.set(600);
}

function createBullets() {
	bullets = game.add.group();
	bullets.enableBody = true;
	bullets.physicsBodyType = Phaser.Physics.ARCADE;

	bullets.createMultiple(40, 'bullet');
	bullets.setAll('anchor.x', 0.5);
	bullets.setAll('anchor.y', 0.5);
}

function fireBullet() {
	if(game.time.now > bulletTime)
	{
		bullet = bullets.getFirstExists(false);

		if(bullet)
		{
			bullet.reset(sprite.body.x + 49, sprite.body.y + 49);
			bullet.lifespan = 2000;
			bullet.rotation = sprite.rotation;
			game.physics.arcade.velocityFromRotation(sprite.rotation, (sprite.body.speed+300), bullet.body.velocity);
			bulletTime = game.time.now + 200;
		}
	}
}
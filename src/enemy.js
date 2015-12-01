function createEnemyBullets() {
	enemyBullets = game.add.group();
	enemyBullets.enableBody = true;
	enemyBullets.physicsBodyType = Phaser.Physics.ARCADE;
	enemyBullets.createMultiple(100, 'ebullet');

	enemyBullets.setAll('anchor.x', 0.5);
	enemyBullets.setAll('anchor.y', 0.5);
	enemyBullets.setAll('outOfBoundsKill', true);
}

function createExplosions() {
	explosions = game.add.group();

	for(var i = 0; i < 10; i++)
	{
		var explosionAnimation = explosions.create(0, 0, 'explosion', [0], false);
		explosionAnimation.anchor.setTo(0.5, 0.5);
		explosionAnimation.animations.add('explosion');
	}
}

function createEnemies(num, x, y) {
	enemies = [];

	enemiesTotal = num;
	enemiesAlive = num;
	enemyg = game.add.group();

	for(var i = 0; i < enemiesTotal; i++)
	{
		enemies.push(new EnemyShip(i, game, sprite, enemyBullets, x, y));
	}
}

EnemyShip = function (index, game, player, bullets, x, y) {
	var x = x + Math.floor(Math.random()*599) - 299;//game.world.randomX;
	var y = y + Math.floor(Math.random()*599) - 299;//game.world.randomY; //near the planet

	this.game = game;
	this.health = 25;
	this.player = player;
	this.bullets = bullets;
	this.fireRate = 500;
	this.nextFire = 0;
	this.alive = true;


	this.ship = game.add.sprite(x, y, 'enemy');
	this.ship.anchor.set(0.5);
enemyg.add(this.ship);
	this.ship.name = index.toString();
	game.physics.enable(this.ship, Phaser.Physics.ARCADE);
	//this.ship.angle = game.rnd.angle();

	game.physics.arcade.velocityFromRotation(this.ship.rotation, 00, this.ship.body.velocity);
}

EnemyShip.prototype.damage = function() {
	this.health -= wdp;

	if(this.health <= 0)
	{
		this.alive = false;

		this.ship.kill();

		return true;
	}

	return false;
}

EnemyShip.prototype.update = function() {
	this.ship.rotation = this.game.physics.arcade.angleBetween(this.ship, sprite);

	if(this.game.physics.arcade.distanceBetween(this.ship, sprite) < 300)
	{
		this.ship.body.velocity.setTo(0, 0);
		if(this.game.time.now > this.nextFire && this.bullets.countDead() > 0)
		{
			this.nextFire = this.game.time.now + this.fireRate;

			var bullet = this.bullets.getFirstDead();

			bullet.reset(this.ship.x, this.ship.y);

			bullet.rotation = this.game.physics.arcade.moveToObject(bullet, this.player, 500);
		}
	} 
	else if(this.game.physics.arcade.distanceBetween(this.ship, sprite) < 1000)
	{	
		this.game.physics.arcade.moveToObject(this.ship, sprite);
	}
}

function checkHit() {
	game.physics.arcade.overlap(enemyBullets, sprite, bulletHitPlayer, null, this);
	game.physics.arcade.collide(enemyg);

	enemiesAlive = 0;

	for(var i = 0; i < enemies.length; i++)
	{
		if(enemies[i].alive)
		{
			enemiesAlive++;
			game.physics.arcade.overlap(bullets, enemies[i].ship, bulletHitEnemy, null, this);
			enemies[i].update();
		}
	}
}

function bulletHitPlayer(ship, bullet) {
	bullet.kill();
	//sprite = drain.call(wdp);
	drain(wdp/2);
}

function bulletHitEnemy(ship, bullet) {
	bullet.kill();

	var destroyed = enemies[ship.name].damage();

	if(destroyed)
	{
		var explosionAnimation = explosions.getFirstExists(false);
		explosionAnimation.reset(ship.x, ship.y);
		explosionAnimation.play('explosion', 30, false, true);
	}
}

function saveEnemies() {
	if(system == "Silesia")
	{
		SilEnemies = enemiesAlive;
	}
	else if(system == "Azizos")
	{
		AAEnemies = enemiesAlive;
		if(enemiesAlive == 0)
		{
			QosB = true;
		}
	}
	else if(system == "Vichama")
	{
		VicEnemies = enemiesAlive;
	}

	for(var i = 0; i < enemies.length; i++)
	{
		enemies[i].health = 0;
		enemies[i].damage();
	}
}

function createSilesia()
{
	silesia = game.add.group();
	tilesprite = game.add.tileSprite(1800, 2000, 800, 700, 'background');
	silesia.add(tilesprite);

    sun = game.add.sprite(-255, -255, 'sun');
    sun.scale.setTo(.5, .5);
    silesia.add(sun);

    planet2 = game.add.sprite(-1050, -2235, 'planet2');
    planet2.scale.setTo(.04, .04);
    silesia.add(planet2);

    createObjective();
	silesia.add(arrow);

    planet = game.add.sprite(3875, 925, 'planet');
    planet.scale.setTo(.09, .09);
    silesia.add(planet);

    silesia.visible = false;
}

function createAA()
{
	AA = game.add.group();
	AAtilesprite = game.add.tileSprite(1800, 2000, 800, 800, 'AAbg');
	AA.add(AAtilesprite);

	arsu = game.add.sprite(70, -200, 'Arsu');
	arsu.scale.setTo(.3, .3);
	AA.add(arsu);

	azizos = game.add.sprite(-350, -100, 'Azizos');
	azizos.scale.setTo(.4, .4);
	AA.add(azizos);

	qos = game.add.sprite(-2620, 375, 'Qos');
	qos.scale.setTo(.25, .25);
	AA.add(qos);

	moloch = game.add.sprite(3942, -4212, 'Moloch');
	moloch.scale.setTo(.42, .42);
	AA.add(moloch);

	martu = game.add.sprite(3842, -3950, 'Martu');
	martu.scale.setTo(.1, .1);
	AA.add(martu);

	ashratu = game.add.sprite(4212, -4000, 'Ashratu');
	ashratu.scale.setTo(.07, .07);
	AA.add(ashratu);

	AA.visible = false;
}

function loadWorld() {
	if(system == "Silesia")
	{
		silesia.visible = true;
	}
	else if(system == "Azizos")
	{
		AA.visible = true;
	}
	else
	{
		silesia.visible = true;
	}
}

function showMap() {
	if(system == "Silesia")
	{
		SilesiaMap.visible = !SilesiaMap.visible;
	}
	else if(system == "Azizos")
	{
		AAmG.visible = !AAmG.visible;
	}
}

function createSilesiaMap() {
	map = game.add.sprite(60, 70, 'map');
	map.alpha = 0.9;
    map.fixedToCamera = true;
   	SilesiaMap.add(map);

   	mText = game.add.text(130, 75, 'System: Silesia', {font: 'Andale mono', fontSize: '15px', fill:'#fff'});
   	mText.fixedToCamera = true;
   	mText.alpha = 0.9;
	SilesiaMap.add(mText);

   	mDesc = game.add.text(600, 350, 'Bohemia,\nPopulation: 146M', {font: 'Andale mono', fontSize: '12px', fill: '#fff'});
   	mDesc.fixedToCamera = true;
   	mDesc.alpha = 0.9;
	SilesiaMap.add(mDesc);

   	mDesc2 = game.add.text(300, 205, 'Moravia,\nUninhabited', {font: 'Andale mono', fontSize: '12px', fill: '#fff'});
   	mDesc2.fixedToCamera = true;
   	mDesc2.alpha = 0.9;
	SilesiaMap.add(mDesc2);

   	mDescS = game.add.text(380, 310, 'Silesia\nClass M4.0', {font: 'Andale mono', fontSize: '12px', fill: '#fff'});
   	mDescS.fixedToCamera = true;
   	mDescS.alpha = 0.9;
   	SilesiaMap.add(mDescS);
   	SilesiaMap.visible = false;
}

function createAAMap() {
	AAmG = game.add.group();

	AAmap = game.add.sprite(60, 70, 'AAmap');
	AAmap.alpha = 0.9;
	AAmap.fixedToCamera = true;
	AAmG.add(AAmap);

	AAmG.visible = false;
}
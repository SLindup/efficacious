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

function createVichama() {
	vichama = game.add.group();

	Vtilesprite = game.add.tileSprite(1800, 2000, 800, 700, 'Vbg');
	vichama.add(Vtilesprite);

	vSun = game.add.sprite(-300, -300,'vichama');
	vSun.scale.setTo(.7, .7);
	vichama.add(vSun);

	kon = game.add.sprite(-2030, - 2030,'Kon');
	kon.scale.setTo(.4, .4);
	 vichama.add(kon);

	supay = game.add.sprite(-2200, -1950,'Supay');
	supay.scale.setTo(.2, .2);
	vichama.add(supay);

	vichama.visible = false;
}

function loadWorld() {
	shield = shieldTotal;
	if(system == "Silesia")
	{
		silesia.visible = true;
		if(QosB = true)
		{
			createEnemies(SilEnemies, objx, objy);
		}
	}
	else if(system == "Azizos")
	{
		AA.visible = true;
		createEnemies(AAEnemies, Aobjx, Aobjy);
	}
	else if(system == "Vichama")
	{
		vichama.visible = true;
		createEnemies(VicEnemies, Vobjx, Vobjy);
	}
	else
	{
		silesia.visible = true;
		createEnemies(SilEnemies, objx, objy);
	}
}

function showMap() {
	// here.visible = !here.visible;
	// here.x = (sprite.body.x);
	// here.x = here.x/14.7;
	// here.x = here.x + 400;
	// here.y = (sprite.body.y);
	// //here.y = Math.abs(here.y);
	// here.y = here.y/22.2;
	// //Math.abs(here.y);
	// here.y = here.y + 225;
	// //alert(here.x+','+here.y);
	if(system == "Silesia")
	{
		SilesiaMap.visible = !SilesiaMap.visible;
	}
	else if(system == "Azizos")
	{
		AAmG.visible = !AAmG.visible;
	}
	else if(system == "Vichama")
	{
		VmG.visible = !VmG.visible;
	}
}

function createSilesiaMap() {
	SilesiaMap = game.add.group();

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

	AAmD = game.add.text(130, 75, 'System: Azizos', {font: 'Andale mono', fontSize: '15px', fill:'#fff'});
	AAmD.fixedToCamera = true;
   	AAmD.alpha = 0.9;
	AAmG.add(AAmD);

	ArsuM = game.add.text(423, 270, 'Arsu\nClass M4.0', {font: 'Andale mono', fontSize: '12px', fill: '#fff'});
	ArsuM.fixedToCamera = true;
	ArsuM.alpha = 0.9;
	AAmG.add(ArsuM);

	AzizosM = game.add.text(370, 313, 'Azizos\nClass M4.0', {font: 'Andale mono', fontSize: '12px', fill: '#fff'});
	AzizosM.fixedToCamera = true;
	AzizosM.alpha = 0.9;
	AAmG.add(AzizosM);

	QosM = game.add.text(215, 325, 'Qos, \nPop. 87M', {font: 'Andale mono', fontSize: '12px', fill: '#fff'});
	QosM.fixedToCamera = true;
	QosM.alpha = 0.9;
	AAmG.add(QosM);

	MolochM = game.add.text(650, 80, 'Moloch', {font: 'Andale mono', fontSize: '12px', fill: '#fff'});
	MolochM.fixedToCamera = true;
	MolochM.alpha = 0.9;
	AAmG.add(MolochM);

	MartuM = game.add.text(630, 123, 'Martu', {font: 'Andale mono', fontSize: '12px', fill: '#fff'});
	MartuM.fixedToCamera = true;
	MartuM.alpha = 0.9;
	AAmG.add(MartuM);

	AshratuM = game.add.text(670, 117, 'Ashratu', {font: 'Andale mono', fontSize: '12px', fill: '#fff'});
	AshratuM.fixedToCamera = true;
	AshratuM.alhpa = 0.9;
	AAmG.add(AshratuM);

	AAmG.visible = false;
}

function createVichamaMap() {
	VmG = game.add.group();

	vMap = game.add.sprite(60, 70,'Vmap');
	vMap.fixedToCamera = true;
	vMap.alpha = 0.9;
	VmG.add(vMap);

	VmD = game.add.text(130, 75, 'System: Vichama', {font: 'Andale mono', fontSize: '15px', fill: '#fff'});
	VmD.fixedToCamera = true;
	VmD.alpha = 0.9;
	VmG.add(VmD);

	VmKon = game.add.text(280, 200, 'Kon', {font: 'Andale mono', fontSize: '12px', fill: '#fff'});
	VmKon.fixedToCamera = true;
	VmKon.alpha = 0.9;
	VmG.add(VmKon);

	VmSupay = game.add.text(230, 220, 'Supay', {font: 'Andale mono', fontSize: '12px', fill: '#fff'});
	VmSupay.fixedToCamera = true;
	VmSupay.alpha = 0.9;
	VmG.add(VmSupay);

	VmVichana = game.add.text(380, 310, 'Vichama\nClass M4.0', {font: 'Andale mono', fontSize: '12px', fill: '#fff'});
	VmVichana.fixedToCamera = true;
	VmVichana.alpha = 0.9;
	VmG.add(VmVichana);


	VmG.visible = false;
}
// var opener = "A few weeks ago your ship, the LCS Efficacious, was assigned to clear out a growing rebel presence in a nearby system. Your ship was outnumbered and suffered heavy damage. As a result of this damage your hyperspace jump capabilities are limited, stranding you in this sector on the edge of colonised space. The nearby colony of Bohemia in the Silesia system allowed you to enact repairs.";
function createAI(){
	aiback = game.add.sprite(295, 545, 'ai');
	aiback.fixedToCamera = true;

	nametext = game.add.text(320, 555, 'Tristan:', {font: 'Andale Mono', fontSize: '15px', fill: '#fff'});
	nametext.fixedToCamera = true;

	aitext = game.add.text(320, 575, l1, {font: 'Andale Mono', fontSize: '15px', fill: '#fff'});
	aitext.fixedToCamera = true;
}


var l1 = "Greetings Captain, I'll be taking over as \nyour Second in Command while your XO is \nout of action.";

var l2 = "Today we're going to test the jump drive to see just \nhow far we can safely travel. We're also going to be \ntransporting some cargo to Qos in the Azizos system.\n\nPress J to bring up the galaxy map.";

//var l3 = "Press J to bring up the galaxy map.";

var l4 = "As you can see the range is very limited. Click on \nAzizos to initiate jump.";

var l5 = "Welcome to the Azizos-Arsu system, Captain. Qos \nis currently located at ("+Aobjx+', '+Aobjy+"), \nyou can press M to see a map of the system.";

var l6 = "Uh oh, detecting rebel ships in orbit around Qos. \nCaptain it looks like this drive test has just \nturned into a full combat test.";

var l7 = "\nPress space to fire, main cannon is offline for \nrepairs you'll have to rely on the railguns Captain.";
l6 += l7;
var l8 = "Congratulations Captain, full combat test was a \nsuccess! You made short work of them even without \nthe main cannon!";

var l9 = "Qos has sent a message to thank us. Oh, they're \nsending us a gift for helping them.";

var l10 = "It's a shield upgrade - it's being installed now. \nThis increases our shield strength by 200%!";

var l11 = "Qos is secure Captain, we should head back to the \nSilesia system so we can use their long range \ncommunications to tell command about the attack.";

var l12 = "\n\nPress J and select Silesia to jump back to Bohemia.";
l11 += l12;
var l13 = "Welcome back to Silesia, Bohemia is located at \n("+objx+', '+objy+"). \n\nMessage to command sent.";

var l14 = "Looks like the wicked don't rest, Captain. Rebel \nships incoming to Bohemia, defend the colony!";

var l15 = "That's the last rebel ship Captain, well done!";

var l16 = "Bohemia is hailing us Captain, they're sending up \nanother upgrade. This time it's for our railguns, \nit will double our firepower!";

var l17 = "What do you say we complete our original mission, \nCaptain? With all the new upgrades we should be \nable to finish off the rebel base!\nPress J and select to Vichama to jump to the rebel \nbase.";

var l18 = "\nPress J and select to Vichama to jump to the rebel \nbase.";

var l19 = "We're here, the rebel base is in orbit around Kon. \nCoordinates are ("+Vobjx+', '+Vobjy+"). I'm detecting \nfar fewer rebel ships than last time, we must've \ncleared them out protecting Qos and Bohemia.";

var l20 = "Enemies coming into firing range now Captain. \nGood luck!";

var l21 = "Well done Captain! Mission complete, command will \nbe pleased. Head back to the Silesia system when \nyou're ready, the replacement jump drive should \narrive there in a few days and we can head home.";


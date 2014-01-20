#pragma strict

var triggered:boolean=false;
var stage:int;
var obj:InteractiveObj;
var fire:ParticleEmitter;
var flame:GameObject;
var door:SecrectDoor;
var player:PlayerController;
function PlayAction()
{
	if (player.lighter)
	{
		if (!triggered)
		{
			this.audio.Play();
			triggered=true;
			door.candleCount++;
			fire.emit=true;
			flame.SetActiveRecursively(true);
		}
	}
	
}

function Start () {
	obj.actionFunc=PlayAction;
}

function Update () {

}
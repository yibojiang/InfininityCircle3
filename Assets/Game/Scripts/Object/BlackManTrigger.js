#pragma strict
var trigger:EventTrigger;

var man:GameObject;
var fLight:FlickerLight;

var player:PlayerController;

function PlayAction()
{
	player.Shock();
	man.SetActiveRecursively(false);
	fLight.on=false;
	this.gameObject.SetActiveRecursively(false);
}

function Start () {
	trigger.actionFunc=PlayAction;
}

function Update () {

}
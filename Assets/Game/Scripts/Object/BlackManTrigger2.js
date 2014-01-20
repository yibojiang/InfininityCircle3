#pragma strict
var trigger:EventTrigger;

var man:GameObject;
var fLight:FlickerLight;

var player:PlayerController;

var trigger3:GameObject;

function PlayAction()
{
	player.Shock();
	man.SetActiveRecursively(true);
	fLight.on=true;
	trigger3.SetActiveRecursively(true);
	this.gameObject.SetActiveRecursively(false);
}

function Start () {
	trigger.actionFunc=PlayAction;
}

function Update () {

}
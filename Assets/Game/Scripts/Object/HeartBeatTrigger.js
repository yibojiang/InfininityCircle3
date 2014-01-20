#pragma strict
var trigger:EventTrigger;
var player:PlayerController;

function PlayAction()
{
	player.HeartBeat();
	this.gameObject.SetActiveRecursively(false);

}

function Start () {
	trigger.actionFunc=PlayAction;
}

function Update () {

}
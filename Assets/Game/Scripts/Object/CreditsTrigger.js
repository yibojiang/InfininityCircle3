#pragma strict

var player:PlayerController;


var trigger:EventTrigger;

function PlayAction()
{
	player.ShowCredits();
	this.gameObject.SetActiveRecursively(false);

}

function Start () {
	trigger.actionFunc=PlayAction;
}

function Update () {

}
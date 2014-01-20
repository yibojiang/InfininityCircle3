#pragma strict

var obj:InteractiveObj;


var player:PlayerController;

function PlayAction()
{
	player.getBuble=true;
	player.GetItem();
	this.gameObject.SetActiveRecursively(false);
}

function Start () {
	obj.actionFunc=PlayAction;
}

function Update () {

}
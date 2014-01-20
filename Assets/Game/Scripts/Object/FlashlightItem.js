#pragma strict

var obj:InteractiveObj;


var flashlight:Flashlight;
var player:PlayerController;
function PlayAction()
{
	flashlight.alive=true;
	player.GetItem();
	this.gameObject.SetActiveRecursively(false);
}

function Start () {
	obj.actionFunc=PlayAction;
}

function Update () {

}
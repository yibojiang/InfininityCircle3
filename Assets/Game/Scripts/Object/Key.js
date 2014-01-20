#pragma strict
var obj:InteractiveObj;
var player:PlayerController;
var keyCode:int;
function PlayAction()
{
	player.keys[keyCode]=1;
	player.GetItem();
	this.gameObject.SetActiveRecursively(false);
	
}

function Start () {
	obj.actionFunc=PlayAction;
}

function Update () {

}
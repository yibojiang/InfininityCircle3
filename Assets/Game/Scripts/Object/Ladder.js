#pragma strict

var stage:int=0;
var flashlightr:Flashlight;
var player:PlayerController;
var obj:InteractiveObj;

var place:PlaceObj;

var ladder:GameObject;

function PlayAction()
{
	
	if (Mathf.Abs(player.transform.position.y-ladder.transform.position.y)<2)
	{
		place.Take();
	}
	
	//player.SetObj(ladder);
	//rigidbody.isKinematic=true;
}

function Start () {
	obj.actionFunc=PlayAction;
}

function Update () {
	//Debug.Log(player.transform.position.y-ladder.transform.position.y);
	
}
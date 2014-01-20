#pragma strict

var left:GameObject;
var right:GameObject;

var triggered:boolean;
var keyCode:int;
var player:PlayerController;
var obj:InteractiveObj;

var lockedClip:AudioClip;
var openClip:AudioClip;

function PlayAction()
{
	if (player.keys[keyCode]==1)
	{
		if (!triggered)
		{
			triggered=true;
			Open();
		}
	}
	else
	{
		if (this.audio.clip!=lockedClip)
		{
			this.audio.clip=lockedClip;
		}
		
		if (!this.audio.isPlaying)
		{
			this.audio.Play();
		}
	}
}

function Open()
{
	this.audio.clip=openClip;
	this.audio.Play();
	iTween.RotateTo(left,iTween.Hash("y",-135,"islocal",true,"time",15,"easetype",iTween.EaseType.linear));
	iTween.RotateTo(right,iTween.Hash("y",135,"islocal",true,"time",15,"easetype",iTween.EaseType.linear));
	
}

function Close()
{
	iTween.RotateTo(left,iTween.Hash("y",0,"time",8));
	iTween.RotateTo(right,iTween.Hash("y",0,"time",8));
}

function Start () {
	obj.actionFunc=PlayAction;
}

function Update () {

}
#pragma strict

var door:Transform;

var obj:InteractiveObj;


var triggered:boolean;
var stage:int;

var flashlight:Flashlight;


var startAngle:float;
var doorDir:int=1;

var handleStartAngle:float;
var player:PlayerController;

var lockedClip:AudioClip;
var openClip:AudioClip;

var keyCode:int;

function PlayAction()
{
	if (player.keys[keyCode]==1)
	{
		if (!triggered)
		{
			triggered=true;
			//Debug.Log("trigger");
			stage=1;
			flashlight.FreezePlayer();
			player.HeartBeat();
			Handle();
			
			
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



function ActionFinished()
{
	
	//Debug.Log("finished");
}

function Handle()
{
	this.audio.clip=openClip;
	this.audio.Play();
	iTween.RotateTo(this.gameObject,iTween.Hash("y",handleStartAngle+90,"islocal",true,"time",2,"easetype",iTween.EaseType.easeInQuad,"oncompletetarget",this.gameObject,"oncomplete","OpenDoor"));
}

function OpenDoor()
{
	flashlight.FreePlayer();
	door.audio.Play();
	iTween.RotateTo(door.gameObject,iTween.Hash("z",startAngle+90*doorDir,"islocal",true,"time",3,"easetype",iTween.EaseType.easeInQuad,"oncompletetarget",this.gameObject,"oncomplete","ActionFinished"));
	
	iTween.RotateTo(this.gameObject,iTween.Hash("y",handleStartAngle,"islocal",true,"time",2,"easetype",iTween.EaseType.easeInQuad,"oncompletetarget",this.gameObject));
}

function Start () {
	
	obj.actionFunc=PlayAction;
	startAngle=door.localRotation.eulerAngles.z;
	
	handleStartAngle=this.transform.localRotation.eulerAngles.y;
}

function Update () {

}
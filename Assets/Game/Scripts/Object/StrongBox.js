#pragma strict

var block:Transform;
var obj:InteractiveObj;
var triggered:boolean=false;
var lockedClip:AudioClip;
var openClip:AudioClip;

var keyCode:int;
var stage:int;
var startAngle:float;
var handleStartAngle:float;
var player:PlayerController;
var flashlight:Flashlight;
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


function Handle()
{
	block.audio.clip=openClip;
	this.audio.Play();
	iTween.RotateTo(this.gameObject,iTween.Hash("x",handleStartAngle+90,"islocal",true,"time",2,"easetype",iTween.EaseType.easeInQuad,"oncompletetarget",this.gameObject,"oncomplete","OpenDoor"));
}

function OpenDoor()
{
	flashlight.FreePlayer();
	block.audio.Play();
	iTween.RotateTo(block.gameObject,iTween.Hash("z",startAngle-90,"islocal",true,"time",3,"easetype",iTween.EaseType.easeInQuad,"oncompletetarget",this.gameObject,"oncomplete","ActionFinished"));
	
	iTween.RotateTo(this.gameObject,iTween.Hash("x",handleStartAngle,"islocal",true,"time",2,"easetype",iTween.EaseType.easeInQuad,"oncompletetarget",this.gameObject));
}



function Start () {
	obj.actionFunc=PlayAction;
	startAngle=block.localRotation.eulerAngles.z;
	handleStartAngle=this.transform.localRotation.eulerAngles.x;
}


function Update () {

}
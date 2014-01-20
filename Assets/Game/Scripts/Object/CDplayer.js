#pragma strict

var cd:Transform;
var handle:Transform;


var tipClips:AudioClip[];

var index:int;
var stage:int=0;
var player:Flashlight;
var obj:InteractiveObj;

var toggle:float=0;
var interval:float=60;

function PlayAction()
{
	if (stage==0)
	{
		stage=1;
	}
	
	
}

function AutoPlay()
{
	cd.audio.Play();
	stage=3;
}

function Start () {
	obj.actionFunc=PlayAction;
}

function Update () {
	
	
	
	if (stage==0)
	{
		if (cd.audio.isPlaying)
		{
			cd.audio.Pause();
		}
		
		if (toggle<interval)
		{
			toggle+=Time.deltaTime;
		}
		else
		{
			AutoPlay();
		}
		
	}
	else if (stage==1)
	{
		toggle=0;
		//handle.localRotation.eulerAngles.x+=200*Time.deltaTime;
		handle.Rotate(Vector3(200*Time.deltaTime,0,0));
		cd.localRotation.eulerAngles.y+=200*Time.deltaTime;
		
		
		if (!this.audio.isPlaying)
		{
			this.audio.Play();
		}
		
		if (!cd.audio.isPlaying)
		{
			cd.audio.Play();
		}
		
		stage=0;
	}
	else if (stage==3)
	{
		toggle=0;
		handle.Rotate(Vector3(200*Time.deltaTime,0,0));
		cd.localRotation.eulerAngles.y+=200*Time.deltaTime;
		
		
		if (!this.audio.isPlaying)
		{
			this.audio.Play();
			
		}
		
		if (!cd.audio.isPlaying)
		{
			
			stage=0;
		}
		
		
	}
}
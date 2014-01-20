#pragma strict

var dlight:Light;

var toggle:float;

var interval:float=2;

var stage:int=0;

var manShadow:GameObject;

function Start () {

}

function Thunder()
{
	dlight.enabled=false;
	this.audio.Play();
	
	interval=Random.Range(1.0,3.0);
}

function Update () {
	if (stage==0)
	{
		if (!this.audio.isPlaying)
		{
			//this.audio.Play();
			stage=1;
			
		}
	}
	else if (stage==1)
	{
		var random:int=Random.Range(0,5);
		if (random>2)
		{
			dlight.enabled=!dlight.enabled;
			
		}
		
		if (toggle<interval)
		{
			toggle+=Time.deltaTime;
		}
		else
		{
			toggle=0;
			Thunder();
			stage=0;
			
			
		}
	}
	manShadow.renderer.enabled=dlight.enabled;
}
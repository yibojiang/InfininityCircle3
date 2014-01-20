#pragma strict

enum FootStepEnum
{
	Wood,
	Grass

}

var woodFootStep:AudioClip;
var woodFootStepEnd:AudioClip;

var grassFootStep:AudioClip;

var scene:FootStepEnum;



function Start () {

}

function SwitchScene(_scene:FootStepEnum)
{
	scene=_scene;
	if (scene==FootStepEnum.Wood)
	{
		this.audio.clip=woodFootStep;
	}
	else if (scene==FootStepEnum.Grass)
	{
		this.audio.clip=grassFootStep;
		
	}
}

function Update () {
	
}
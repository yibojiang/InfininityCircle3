#pragma strict

var candleCount:int=0;
var candleNeed:int=2;

var open:boolean=false;
function Start () {

}

function Open()
{
	this.audio.Play();
	iTween.RotateTo(this.gameObject,iTween.Hash("y",180,"time",3));
}

function Close()
{
	this.audio.Play();
	iTween.RotateTo(this.gameObject,iTween.Hash("y",270,"time",3));
}

function Update () {
	if (candleCount==candleNeed)
	{
		if (!open)
		{
			Open();
			open=true;
		}
	}
	else
	{
		if (open)
		{
			Close();
			open=false;
		}
	}
}
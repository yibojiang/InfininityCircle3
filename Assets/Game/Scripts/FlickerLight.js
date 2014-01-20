#pragma strict
var slight:Light;
var plight:Light;

var on:boolean;
function Start () {

}

function Update () {
	if (on)
	{
		var random:int=Random.Range(0,5);
		if (random>3)
		{
			plight.enabled=!slight.enabled;
			slight.enabled=!slight.enabled;
			//Debug.Log(random+""+slight.active);
		}
	}
	else
	{
		plight.enabled=false;
		slight.enabled=false;
	}
	
	//Debug.Log(random);
}
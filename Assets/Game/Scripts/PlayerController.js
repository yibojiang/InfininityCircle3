#pragma strict

var flashlight:Flashlight;
var foot:FootStep;

var shockClip:AudioClip;
var getItemClip:AudioClip;

var heartClip:AudioClip;

var getBuble:boolean=false;


var ObjTransform:Transform;
var placeObj:PlaceObj;

var keys:int[];


var lighter:boolean=false;

var credits:GameObject;
var bgm:AudioSource;
var creditsBgm:AudioClip;


var bornPos:Vector3;
var debug:boolean;

function Start () {
	Screen.showCursor = false; 
	
	if (!debug)
	{
		transform.localPosition=bornPos;
		transform.eulerAngles.y=270;
	}

	bgm.Play();
}


function ShowCredits()
{
	credits.SetActiveRecursively(true);
	bgm.clip=creditsBgm;
	bgm.Play();
}


function SetObj(_obj:GameObject)
{
	_obj.transform.parent=ObjTransform;
	//Debug.Log(_obj.GetComponent(PlaceObj) as PlaceObj);
	placeObj=_obj.GetComponentInChildren(PlaceObj) as PlaceObj;
}

function Shock()
{
	this.audio.PlayOneShot(shockClip);
}

function GetItem()
{
	//Debug.Log("get");
	this.audio.PlayOneShot(getItemClip);
}

function HeartBeat()
{
	this.audio.PlayOneShot(heartClip);
}

function Place()
{
	
	placeObj.Place();
	placeObj=null;
}

function GetKeys()
{
	var i:int=0;
	for (i=0;i<keys.Length;i++)
	{
		keys[i]=1;
	}

}

function Update () {

	if (debug)
	{
		if (Input.GetKeyDown(KeyCode.T))
		{
			GetKeys();
		}
	}
	
	if (Input.GetKeyDown(KeyCode.F))
	{
		if (!flashlight.alive)
		{
			flashlight.enabled=false;
		}
		else
		{
			flashlight.audio.Play();
			flashlight.slight.enabled=!flashlight.slight.enabled;
		}
	}
	
	if (Input.GetMouseButtonDown(0))
	{
		if (placeObj!=null)
		{
			Place();
		}
	}
	
	
}

function OnTriggerEnter(other:Collider)
{
	if (other.tag=="FootStepTrigger")
	{
		foot.SwitchScene((other.GetComponent(FootStepTrigger) as FootStepTrigger).scene);
	}
	
	if (other.tag=="EventTrigger")
	{
		(other.GetComponent(EventTrigger) as EventTrigger).actionFunc();
	}
	
}


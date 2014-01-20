#pragma strict

var yPos:float;

var xEulerAngles:float;
var yEulerAngles:float;
var zEulerAngles:float;


var obj:GameObject;

var player:PlayerController;

var taking:boolean;

function Start () {
	yPos=obj.transform.position.y;
	xEulerAngles=obj.transform.eulerAngles.x;
	zEulerAngles=obj.transform.eulerAngles.z;
}


function Take()
{
	player.SetObj(obj);
	taking=true;
	DisableCollider();
}

function EnableCollider()
{
	var i:int;
	var boxComs:Component[]=obj.GetComponentsInChildren(BoxCollider);
	for (i=0;i<boxComs.Length;i++)
	{
		(boxComs[i] as  BoxCollider).enabled=true;
	}
	
}

function DisableCollider()
{
	var i:int;
	var boxComs:Component[]=obj.GetComponentsInChildren(BoxCollider);
	for (i=0;i<boxComs.Length;i++)
	{
		(boxComs[i] as  BoxCollider).enabled=false;
	}

}

function Place()
{
	obj.transform.parent=null;
	obj.transform.eulerAngles.x=xEulerAngles;
	obj.transform.eulerAngles.z=zEulerAngles;
	taking=false;
	
	EnableCollider();
	//transform.position.y=yPos;
}

function Update () {
	if (taking)
	{
		obj.transform.localPosition.x=0;
		obj.transform.localPosition.z=0;
	}
}
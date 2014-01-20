#pragma strict

var vrCamera:Transform;
var type:int;

function Start () {

}

function Update () {
	if (type==0){
		transform.rotation=vrCamera.rotation;
		
	}
	else if(type==1){
		transform.rotation=vrCamera.rotation;
	}
	
}
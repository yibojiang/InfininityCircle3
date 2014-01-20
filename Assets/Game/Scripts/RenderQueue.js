#pragma strict
var renderqueue:int;

function Start () {
	this.renderer.material.renderQueue=renderqueue;
}

function Update () {

}
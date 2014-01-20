#pragma strict

var style:GUIStyle;
var textToDisplay:String;
var width:int;
var height:int;
var position:Vector3;
var size:int;
var text:String;
var index:int;
var dialog:Dialog[];
var dialogIndex:int;
var dialogOver:boolean;
var dialogs:Dialog[];
//var continueBtn:CustomButton;
var toggle:float;
var interval:float=0.02;
var speed:float=1.0;
var cameraFade:CameraFade;
var fade:GUITexture;
var black:exSprite;
//var skipBtn:CustomButton;
var classDialog:Dialog[];
var soutDialog:Dialog[];



class Dialog
{
	var name:String;
	var face:int;
	var text:String;
	var speed:float=1.0;
	
	function Dialog(_dialog:Dialog)
	{
		
		name=_dialog.name;
		face=_dialog.face;
		text=_dialog.text;
		speed=_dialog.speed;
		
	}
	
	function Dialog()
	{
	
	}
}

function SetText(_text:String)
{
	black.renderer.enabled=true;
	textToDisplay="";
	text=_text;
	index=0;
}

function SetDialog(_dialog:Dialog[],_beginIndex:int,_endIndex:int)
{
	var dialogLength:int=_endIndex-_beginIndex+1;
	dialog=new Dialog[dialogLength];
	for (var i:int=_beginIndex;i<=_endIndex;i++)
	{
		//dialog[i-_beginIndex].character=_dialog[i].character;
		dialog[i-_beginIndex]=new Dialog();
		dialog[i-_beginIndex].text=_dialog[i].text;		
		dialog[i-_beginIndex].speed=_dialog[i].speed;		
	}
	
	
	dialogIndex=0;
	
	
	dialogOver=false;
	
	SetText(dialog[dialogIndex].text);
	speed=dialog[dialogIndex].speed;
}

function Clear()
{
	black.renderer.enabled=false;
	text="";
	textToDisplay="";
	index=0;
	dialogIndex=0;
}

function ContinueDialog()
{
	if (index<text.Length)
	{
		textToDisplay=text;
		index=text.Length;
	}
	else
	{
		dialogIndex++;
		if (dialogIndex<dialog.Length)
		{
			SetText(dialog[dialogIndex].text);
			speed=dialog[dialogIndex].speed;
			//Debug.Log(dialog[dialogIndex].speed); 
		}
		else
		{
			DialogOver();
			/*
			if (skipBtn.releaseFunc!=null)
			{
				skipBtn.releaseFunc();
				skipBtn.releaseFunc=null;
			}
			*/
		}
	}
}

function DialogOver()
{
	dialogOver=true;
	Clear();
}

function OnGUI()
{
	//style.normal.textColor.a=1-fade.color.a*2;
	
	//style.fontSize=Screen.width/40;
	//Screen.height
	//Screen.width
	GUI.Label(Rect (Screen.width*0.05, Screen.height*4/5, Screen.width*0.9, Screen.height/2), textToDisplay, style);
}

function Start () {
	//black.renderer.enabled=false;
	//continueBtn.tapFunc=ContinueDialog;
	fade=GameObject.Find("iTween Camera Fade").GetComponent(GUITexture) as GUITexture;
}

function Update () {

	if (Input.GetKeyDown(KeyCode.T))
	{
		SetDialog(dialogs,0,2);
	}
	
	if (Input.GetKeyDown(KeyCode.Space))
	{
		if (!dialogOver)
		{
			ContinueDialog();
		}
	}
	
	/*
	var ray:Ray;
	if (Input.GetMouseButtonDown(0))
	{
		//Debug.Log("hit");
		if (!dialogOver)
		{
			ray = Camera.main.ScreenPointToRay(Input.mousePosition);
			if (Physics.Raycast(ray,1000.0f))
			{
				ContinueDialog();
			}
		}
	}
	*/
	
	if (index<text.Length)
	{
		if (toggle<interval)
		{
			toggle+=Time.deltaTime*speed;
		}
		else
		{
			toggle=0;
			textToDisplay+=text[index].ToString();
			index++;
		}
		
	}
	/*
	if (Input.GetKeyDown(KeyCode.S))
	{
		ContinueDialog();
	}
	*/
}
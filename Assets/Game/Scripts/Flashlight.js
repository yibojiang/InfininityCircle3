#pragma strict

var alive:boolean;
var slight:Light;

var viewDiatance:float;

var target:Transform;

var controller:CharacterMotor;

var camX:MouseLook;
var camY:MouseLook;
var cam:Camera;

var lerpVal:float=0;

var freezing:boolean;
var aim:exSprite;

function Start () {
	
}

function FreezeCamera()
{
	freezing=true;
	camX.enabled=false;
	camY.enabled=false;
}

function FreeCamera()
{
	freezing=false;
	camX.enabled=true;
	camY.enabled=true;
}

function FreezePlayer()
{
	FreezeCamera();
	
}

function FreePlayer()
{
	FreeCamera();
}

function Update () {
	var hit : RaycastHit;
	var fwd = transform.TransformDirection (Vector3.forward)* viewDiatance;
	if (Physics.Raycast (transform.position, fwd, hit,viewDiatance)) 
	{
		Debug.DrawRay(transform.position, fwd,Color.green);
		if (hit.collider.tag=="Interactive")
		{
        	//Debug.Log(hit.collider.name);
        	//Debug.Log(hit.normal);
        	target=hit.collider.gameObject.transform;
        	aim.color=Color.red;
        }
        else
        {
        	target=null;
        	aim.color=Color.white;
        	//Debug.Log("empty");
        }
    }
    else
    {
    	
    	target=null;
    	aim.color=Color.white;
    }
    if (!freezing)
	{
	    if (target!=null)
	    {
		    if (Input.GetMouseButton(0))
		    {
		    	if (lerpVal<1)
	    		{
	    			lerpVal+=Time.deltaTime;
	    		}
	    		else
	    		{
	    			var interavtiveObj:InteractiveObj=target.GetComponent(InteractiveObj) as InteractiveObj;
	    			interavtiveObj.actionFunc();
	    		}
	    	}
	    	else
			{
				
				if (lerpVal>0)
				{
					lerpVal-=Time.deltaTime;
				}
			
			}
	    	
	    }
	    else
		{
			if (lerpVal>0)
			{
				lerpVal-=Time.deltaTime;
			}
		
		}
	    cam.fieldOfView=Mathf.Lerp(60,30,lerpVal);
	}
}
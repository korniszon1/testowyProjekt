var x = 0;
var y = 0;
var pixel = "";

window.onload = plansza;

function plansza()
{
	for(i=0;i<100;i++)
	{
		pixel = pixel + '<div class="pixel" id="pix'+y+'-'+x+'" style="float:left"></div>'
		document.getElementById("plansza").innerHTML = pixel; 
		x++
		if(x>9)
		{
			y++;
			x=0;
		}
	}
	y=0;
	x=0;
	refresh();
}
function refresh()
{
	var kordy = "";
	kordy = kordy+y;
	kordy = kordy+" "+x;
	document.getElementById("kordy").innerHTML = kordy;
	
	//pokazywanie kontroli
	var gora ='<input id="gora" type="submit" value="&#8593;" onclick="rusz(-1,0)">';
	var dol ='<input id="dol" type="submit" value="&#8595;" onclick="rusz(1,0)">';
	var lewo ='<input id="lewo" type="submit" value="&#8592;" onclick="rusz(0,-1)">';
	var prawo ='<input id="prawo" type="submit" value="&#8594;" onclick="rusz(0,1)">';
	//if(x=0)
	//{
	//	lewo = '';
	//}
	//if(x=9)
	//{
	//	prawo ='';
	//}
	//if(y=0)
	//{
	//	gora = '';
	//}
	//if(y=9)
	//{
	//	dol = '';
	//}
	document.getElementById("up").innerHTML = gora;
	document.getElementById("down").innerHTML = dol;
	document.getElementById("left").innerHTML = lewo;
	document.getElementById("right").innerHTML = prawo;
	//malowanie pixela
	var pixYX = "";
	pixYX = "pix"+y+"-"+x;
	document.getElementById(pixYX).style.background = "#C00000"
}
function rusz(goradol,lewoprawo)
{
	y = y+(goradol);
	x = x+(lewoprawo);
	if(x>9)
	{
		x=0;
		y++;
		refresh();
	}
	if(y>9)
	{
		y=0;
		x++;
		refresh();
	}
	if(x<0)
	{
		x=9;
		y++;
		refresh();
	}
	if(y<0)
	{
		y=9;
		x++;
		refresh();
	}

	refresh();
}

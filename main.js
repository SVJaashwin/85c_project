//Create a reference for canvas 
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
     

//Give specific height and width to the car image
greencar_width=100;

greencar_height=150;

greencar_x=15;

greencar_y=340;

greencar_img="car2.png";

background_image = "parkingLot.jpg";

greencar_image = "car2.png";

//Set initial position for a car image.

function add() {
	//upload car, and background images on the canvas.
	car_lot_bg_img=new Image()
	car_lot_bg_img.onload=uploadBackground;
	car_lot_bg_img.src=background_image;
 
	car_bg_img=new Image()
	car_bg_img.onload=uploadgreencar;
	car_bg_img.src=greencar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
    ctx.drawImage(car_lot_bg_img,0,0,canvas.width,canvas.height);
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(car_bg_img,greencar_x,greencar_y,greencar_width,greencar_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
	if (greencar_y>= 90){
		greencar_y = greencar_y - 5 ;
		console.log("greencarx= ",greencar_x, "greencary=",greencar_y);
		uploadBackground () ;
		uploadgreencar () ;
	}
}

function down()
{
	//Define function to move the car downward
	if (greencar_y<= 345){
		greencar_y = greencar_y + 5 ;
		console.log("greencarx= ",greencar_x, " greencary=",greencar_y);
		uploadBackground () ;
		uploadgreencar (); 
	  }
}

function left()
{
	//Define function to move the car left side
	if (greencar_x >= 0) {
		greencar_x = greencar_x - 5 ;
		console.log("greencarx= ",greencar_x, " greencar=",greencar_y);
		uploadBackground ();
		uploadgreencar ();
	   }
}

function right()
{
	//Define function to move the car right side
	if (greencar_x<= 890){
		greencar_x = greencar_x + 5 ;
		console.log("greencar= ",greencar_x, " greencar=",greencar_y);
		uploadBackground () ;
		uploadgreencar (); 
	  }
}

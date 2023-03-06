var slidder = document.getElementById("btn");
var isToggle = false;
// var b = document.getElementsByTagName("body")[0];
var circle=document.getElementsByClassName('circle');
var oval=document.getElementsByClassName('oval');
var body=document.getElementsByTagName('body');
var toggleCircle=document.getElementsByClassName('toggleCircle');
var toggleOval=document.getElementsByClassName('toggleOval');
var toggleBack=document.getElementsByTagName('toggleBack');
function toggle(){
	console.log("Clicked");
	if(isToggle){
		toggleWhite();
		isToggle = false;
	}else{
		toggleBlack();
		isToggle = true;
	}

};
function toggleBlack(){
    	
		circle[0].classList.add("toggleCircle");
		oval[0].classList.add("toggleOval");
	    body[0].classList.add("toggleBack");

};
function toggleWhite(){
   	circle[0].classList.remove("toggleCircle");
	oval[0].classList.remove("toggleOval");
	body[0].classList.remove("toggleBack");
};
slidder.addEventListener('click',toggle);
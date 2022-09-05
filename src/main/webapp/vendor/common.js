//Adjust height of page //common
var height = document.getElementsByTagName("body")[0].clientHeight - document.getElementsByClassName("header")[0].clientHeight;
if(document.getElementById("main-pane") != undefined)
	document.getElementById("main-pane").style.height = height + "px";
if(document.getElementById("left-pane") != undefined)
	document.getElementById("left-pane").style.height = height + "px";
if(document.getElementById("right-pane") != undefined)
	document.getElementById("right-pane").style.height = height + "px";

//Show or hide the menu by clicking btn-drop //common
document.getElementById("btn-drop").addEventListener('click',function(){
	var leftpane;
	if(document.getElementById("left-pane") == undefined){
		leftpane = document.getElementById("left-pane-responsive");
		leftpane.id = "left-pane";
	}else{
		leftpane = document.getElementById("left-pane");
		leftpane.id = "left-pane-responsive";
	}
})
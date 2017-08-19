


//found on stackoverflow
function pad (num, size){
	var s=num+""; //convert to string
	while (s.length <size) {
		s= "0"+s;
	}
	return s;
}


//creates a grid of buttons
function prepareButtons (divName) {

	var buttonList=[];
	var bootstrapColWidth="col-md-4 col-sm-4 col-xs-4"
	var gridOrder=[0,1,2,3,4,5,6,7,8];
	var btnClass="ticBtns";
	for (var i in gridOrder){
		var curButton='btn_'+gridOrder[i];
		$(divName).append('<div class="'+bootstrapColWidth+'"" text-center"><button type="button" id="'+curButton+'"class="'+btnClass+'" btn btn-primary btn-lg ">'+''+'</button></div>');
		buttonList.push(curButton);
	}
	return buttonList;

}



//main function
$(document).ready(function(){

	//alert ("Hi, I'm Tic Tac Toe!");
	var gameDiv="#gameArea";
	var buttonList=prepareButtons(gameDiv);
	console.log(buttonList);
	//$(gameDiv).append('<div class="row text-center"><div class="col-md-4 col-md-offset-4"><p>Hello');



});
//drag&drop related functions

		var DragVar="";
function showCoords(event) {
    var x = event.clientX;
    var y = event.clientY;
	y = y-25;
	x = x-25;
disp_prompt_Div(x,y);
}
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("info", ev.target.id);
	DragVar="info";
}
function drag2(ev) {
    ev.dataTransfer.setData("info2", ev.target.id);
	DragVar="info2";
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData(DragVar);
var nodeCopy = document.getElementById(data).cloneNode(true);
  nodeCopy.id = "newId";
  ev.target.appendChild(nodeCopy);	  
  switch(DragVar) {
    case "info":
    showCoords(ev);
	DragVar="";
        break;
    case "info2":
		toggle_visibility();
		DragVar="";
        break;
		
    default:
       alert('Default case');
	   } 
  
}//End of Drag&Drop
		var n=1;

function toggle_visibility() 
    {
        var e = document.getElementById("Frame");
		var c = document.getElementById("exclamation");
		
        if ( e.style.visibility == 'visible' ){
			e.style.visibility = 'hidden';
			c.style.display = 'block';
		}
        else{
            e.style.visibility = 'visible';
			c.style.display = 'none';

		}
	}
var area1;

function toggleArea1() {
	if(!area1) {
		area1 = new nicEditor({fullPanel : true}).panelInstance('EditBox',{hasPanel : true});
	} else {
		area1.removeInstance('EditBox');
		area1 = null;
	}
}


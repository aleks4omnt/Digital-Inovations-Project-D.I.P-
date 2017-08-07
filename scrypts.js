function pano_ID(){
	x=document.getElementById("pano_ID").getAttribute('value');;
	 // alert(x);
	return x;
}
//update  function
function moveContainer(event,id){

	var x = event.clientX;
    var y = event.clientY;
	y = y-25;
	x = x-25;
var parent = document.getElementById("bigImage");
var child = document.getElementById("Container"+id);
	child.style.top = y+'px';
	child.style.left = x+'px';
	MoveSpot(id,x,y);

}
function saveContent(New){
		area1[New].removeInstance('EditBox'+New); 
	var title= document.getElementById("Title"+New).value;
	var content= document.getElementById("EditBox"+New).textContent;
		area1[New] = new nicEditor({fullPanel : true}).panelInstance('EditBox'+New,{hasPanel : true}); 

Save(New,title,content); 
}
	

//update function

//delete functions
function deleteContainer(id){
var parent = document.getElementById("bigImage");
var child = document.getElementById("Container"+id);
parent.removeChild(child);
DeleteSpot(id);
}
function deleteDrop(ev) {
    ev.preventDefault();
		if(Edit){
  if(DragVar=="move"){
	  deleteContainer(moveVar);
		DragVar="";
		moveVar="";
  }
}
}
//delete function

//drag&drop related functions

		var DragVar="";
function CreateInfoSpot(event) {
    var x = event.clientX;
    var y = event.clientY;
	y = y-25;
	x = x-25;
CreateContainer(x,y);
}
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("info", ev.target.id);
	DragVar="info";
}
function move(ev,num) {
    ev.dataTransfer.setData("move", ev.target.id);
	DragVar="move";
	moveVar=num;
}

function drop(ev) {
    ev.preventDefault();
    //var data = ev.dataTransfer.getData(DragVar);
	//var nodeCopy = document.getElementById(data).cloneNode(true);
	//nodeCopy.id = "newId";
	//ev.target.appendChild(nodeCopy);	  
  switch(DragVar) {
    case "info":
    CreateInfoSpot(ev);
	DragVar="";
        break;
    case "move":
	
			if(Edit){
		moveContainer(ev,moveVar)
			}
	
		DragVar="";
		moveVar="";
        break;
		
    default:
       alert('Default case');
	   } 
  
}//End of Drag&Drop


//Create Functions

function CreateContainer(l,t){
	// CreateSpot(type,Title,content,x,y);
	if(Edit){
if ((t!=null && t!="")&&(l != null && l != ""))	
	{
			CreateSpot("text",'Some title','random',l,t,pano_ID());


			}									
				
	}	
	}
		
function CreateContainerDiv(Title,Content,t,l,n)
{
		var New=n;
		var div=document.createElement("div");
		div.id="Container"+New;
		div.draggable=true;
		div.ondragstart= function(event){move(event,New)};
	div.class="Container";
	div.width="50";
	div.height="50";
	div.style.position = "absolute";
	div.style.top = t+'px';
	div.style.left = l+'px';
	document.body.appendChild(div); 
    var foo = document.getElementById("bigImage");
    foo.appendChild(div);
	InfoSpotImage(New);
	CreateFrameDiv(Title,Content,New);
}

function InfoSpotImage(New)
{	
    //dynamically add an image and set its attribute
    var img=document.createElement("img");
	img.id="info"+New
	img.className="exclamation"
    img.src="exclamation.png"
	img.onmouseover = function() {  this.style.cursor = 'pointer';};
  	img.onclick = function() { toggle_visibility(New)};
	img.width="50"
	img.height="50"

    var foo = document.getElementById("Container"+New);
    foo.appendChild(img);
}
function CreateFrameDiv(Title,Content,New)
{
	var div=document.createElement("div");
	div.id="Frame"+New;
	div.className="Frame";
	div.style.position = "absolute";
	
	document.body.appendChild(div); 
    var foo = document.getElementById("Container"+New);
    foo.appendChild(div);
	ExitButton(New);
	CreateContentDiv(Title,Content,New);
	SaveButton(New);
}

function ExitButton(New)
{	
    var img=document.createElement("img");
	img.id="Exit"+New
	img.className="exitButton"
    img.src="X-button.png"
	img.onmouseover = function() {  this.style.cursor = 'pointer';};
  	img.onclick = function() { toggle_visibility(New)};
	

    var foo = document.getElementById("Frame"+New);
    foo.appendChild(img);
}
function SaveButton(New)
{	
    var img=document.createElement("img");
	img.id="Save"+New
	img.className="SaveButton"
    img.src="save-button.png"
	img.onmouseover = function() {  this.style.cursor = 'pointer';};
  	img.onclick = function() { saveContent(New)};
	img.style.width='100px';

    var foo = document.getElementById("Frame"+New);
    foo.appendChild(img);
}
function CreateContentDiv(title,Content,New)
{
		var Title=document.createElement("input");
		Title.id="Title"+New;
		Title.className="Title";
		Title.type="text";
		Title.value=title;
		document.body.appendChild(Title); 
		var foo = document.getElementById("Frame"+New);
		foo.appendChild(Title);
		//---------------------
		var TextBox=document.createElement("div");
		var text = document.createTextNode(Content);
		TextBox.id="EditBox"+New;
		TextBox.className="EditBox";
		document.body.appendChild(TextBox); 
		TextBox.appendChild(text);
		var foo = document.getElementById("Frame"+New);
		foo.appendChild(TextBox);
		
}
//End of Create Functions

//Toggles
function toggle_visibility(New) 
    {
        var e = document.getElementById("Frame"+New);
		var c = document.getElementById("info"+New);
        //if ( e.style.display == 'block' ){
        if ( e.style.visibility == 'visible' ){
			e.style.visibility = 'hidden';
			//e.style.display = 'none';
			//c.style.display = 'block';
			e.style.zIndex=0;
		}
        else{
            e.style.visibility = 'visible';
            //e.style.display = 'block';
			//c.style.display = 'none';				
			e.style.zIndex=3;
			toggleTextEditBox(New);
		}
	}
	

var Edit=false;

function EditSwitchCheck(){
if(document.getElementById('togBtn').checked) {
		Edit=false;
} else {
		Edit=true;
		toggleTextEditBox();

}
}

function toggleEdit() {
	if(!Edit) {
		Edit=true;
	} else {
		Edit=false;
}
		ToggleAllTextEditBoxes();
}

var area1=[];
function ToggleAllTextEditBoxes(){
	for(i=area1.length-1;i>=0;i--){
		if(typeof area1[i] != 'undefined'){
			toggleTextEditBox(i);
		
			
	}
}
}

function toggleTextEditBox(New) {

	if(Edit==true) {
		area1[New] = new nicEditor({fullPanel : true}).panelInstance('EditBox'+New,{hasPanel : true});
	} else {
		area1[New].removeInstance('EditBox'+New);

		
	}
}

//End of Toggles
